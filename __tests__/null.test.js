const { getNull } = require("../src/null.js");

test("expect to get value of null type", () => {
    const value = getNull();
    expect(value).toBeNull();
});
