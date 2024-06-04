import { APIRequestContext, APIResponse } from "@playwright/test";

export function signIn(
  request: APIRequestContext,
  email: string,
  password: string
): Promise<APIResponse> {
  return request.post(`/api/v3/sign_in`, {
    data: {
      user_login: {
        email: email,
        password: password,
      },
    },
  });
}
