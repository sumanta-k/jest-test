const getData = require("../src/getData.js");
test("get data in javascript object format", () => {
    const data = getData();
    expect(data).toEqual({
        name: "Sumanta Kumar Mohanta@ichigo",
        interest: "backend",
    });
});
