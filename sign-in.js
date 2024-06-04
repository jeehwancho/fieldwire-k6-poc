import http from "k6/http";

export function signIn(baseURL, email, password) {
  const url = `${baseURL}/api/v3/sign_in`;
  const payload = JSON.stringify({
    user_login: {
      email: email,
      password: password
    }
  });
  const params = {
    headers: {
      "Content-Type": "application/json",
      "Fieldwire-Version": "2023-06-01",
    },
  };

  return http.post(url, payload, params);
}
