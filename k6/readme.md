### what is this?

POC for running api integration test using k6

### setup

https://k6.io/docs/get-started/installation/

`brew install k6 # for MacOS`

### how to run

`k6 run test1.js`
`docker run --rm -i -v .:/app -w /app grafana/k6 run test1.js` # wouldn't work with requests to localhost, but it'd be useful for ci/cd env.

### notes

- it uses chai for making assertions
- individual module like `rfi.js` can be served as a document as well. i imagine `rfi.js` consists of full rfi CRUD plus transition, etc.
