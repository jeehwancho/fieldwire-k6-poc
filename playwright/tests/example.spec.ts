import { test, expect } from "@playwright/test";
import { signIn } from "../clients/sign-in";
import { getRfiOne } from "../clients/rfi";

const projectId = "f95fa737-2844-4baa-90e6-71e888fe1dcc";
const rfiId = "29980f4d-f052-4521-873d-c7d5b7349c8d";

test("test123", async ({ request }) => {
  const signInRes = await signIn(request, "jp1@email.com", "fieldwire");

  expect(signInRes.ok()).toBeTruthy();
  const signInRespJson = await signInRes.json();

  const rfiGetOneResp = await getRfiOne(
    request,
    signInRespJson.access_token,
    projectId,
    rfiId
  );
  expect(rfiGetOneResp.ok()).toBeTruthy();
  const rfiGetOneRespJson = await rfiGetOneResp.json();
  expect(rfiGetOneRespJson.name).toEqual("test1");
});
