import { APIRequestContext, APIResponse } from "@playwright/test";

export function getRfiOne(
  request: APIRequestContext,
  accessToken: string,
  projectId: string,
  rfiId: string
): Promise<APIResponse> {
  return request.get(`/api/v3/projects/${projectId}/rfis/${rfiId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}
