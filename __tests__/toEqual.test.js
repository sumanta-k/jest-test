test("object assignment with new values", () => {
    const data = { fruit: "apple" };

    data["color"] = "green";
    expect(data).toEqual({ fruit: "apple", color: "green" });
});
