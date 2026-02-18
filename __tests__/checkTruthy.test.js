const { getValue, dontGetValue } = require("../src/checkTruthy.js");

test("get truthy", () => {
    const value = getValue();
    expect(value).toBeTruthy();
});

test("get false", () => {
    const value = dontGetValue();
    expect(value).toBeFalsy();
});
