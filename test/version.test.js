const test = require("node:test");
const assert = require("node:assert");
const server = require("../src/app");

test("GET /version returns service name and version", async (t) => {
  await new Promise((resolve) => server.listen(0, resolve));
  t.after(() => server.close());

  const { port } = server.address();
  const res = await fetch(`http://127.0.0.1:${port}/version`);

  assert.strictEqual(res.status, 200);
  assert.deepStrictEqual(await res.json(), {
    service: "platform-demo",
    version: "1.0.0",
  });
});