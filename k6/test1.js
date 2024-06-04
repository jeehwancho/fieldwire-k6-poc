import { signIn } from "./sign-in.js";
import { getRfiOne } from "./rfi.js";
import chai, { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';
import { functionalTestOptions } from "./functional-test-config.js";

chai.config.logFailures = true;
export const options = functionalTestOptions;

const baseURL = "http://localhost:3000";
const projectId = "f95fa737-2844-4baa-90e6-71e888fe1dcc";
const rfiId = "29980f4d-f052-4521-873d-c7d5b7349c8d";

export function setup() {
  const res = signIn(baseURL, "jp1@email.com", "fieldwire");
  expect(res.status, 'signIn response status').to.equal(201);
  return res.json();
}

export function teardown(data) {
  console.log(`teardown placeholder: ${data.access_token}`);
}

export default function (data) {  
  describe('test123', () => {
    const res = getRfiOne(baseURL, projectId, rfiId, data);
    expect(res.status, 'getRfiOne response status').to.equal(200);
    const jsonBody = res.json();
    expect(jsonBody.name, 'rfi name').to.equal('test1');
  });
}
