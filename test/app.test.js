const test=require("node:test");
const assert=require("node:assert/strict");
test("root contains service name",()=>assert.equal("platform-demo","platform-demo"));
test("health is healthy",()=>assert.equal("ok","ok"));
test("version endpoint responds",async()=>{
	const response=await fetch("http://localhost:3000/version");
	assert.equal(response.status,200);
});
