import { defineConfig } from "@playwright/test";
export default defineConfig({
  use: {
    baseURL: "http://localhost:3000",
    extraHTTPHeaders: {
      "Content-Type": "application/json",
      "Fieldwire-Version": "2023-06-01",
    },
  },
});
