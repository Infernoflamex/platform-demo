const test = require("node:test");
const assert = require("node:assert/strict");
const { server } = require("../src/app");

test("GET /version returns service name and version", async (t) => {
  await new Promise((resolve) => server.listen(0, resolve)); // random free port
  t.after(() => server.close());

  const { port } = server.address();
  const res = await fetch(`http://127.0.0.1:${port}/version`);

  assert.equal(res.status, 200);
  assert.match(res.headers.get("content-type"), /application\/json/);
  assert.deepEqual(await res.json(), { service: "platform-demo", version: "1.0.0" });
});