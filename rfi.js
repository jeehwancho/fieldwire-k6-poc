import http from "k6/http";

export function getRfiOne(baseURL, projectId, rfiId, signInResponse) {
  const url = `${baseURL}/api/v3/projects/${projectId}/rfis/${rfiId}`;
  const params = {
    headers: {
      "Content-Type": "application/json",
      "Fieldwire-Version": "2024-04-23",
      "Authorization": `Bearer ${signInResponse.access_token}`,
    },
  };

  return http.get(url, params);
}
