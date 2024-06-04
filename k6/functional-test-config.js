export const functionalTestOptions = {
  thresholds: {
    // fail the test if any checks fail or any requests fail
    checks: ['rate == 1.00'],
    http_req_failed: ['rate == 0.00'],
  },
  vus: 1,
  iterations: 1,
};