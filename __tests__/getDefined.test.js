const getDefined = require("../src/getDefined.js");

test("get a defined value", () => {
    const value = getDefined();
    console.log(value);
    expect(value).toBeDefined();
});
