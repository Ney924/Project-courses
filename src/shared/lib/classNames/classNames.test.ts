import { classNames } from "shared/lib/classNames/classNames";

describe("classNames", () => {
  test("classNames 1 arg", () => {
    expect(classNames("classStyle")).toBe("classStyle");
  });
  test("classNames 2 arg", () => {
    const expected = "classStyle classStyle2 classStyle3";
    expect(classNames("classStyle", {}, ["classStyle2", "classStyle3"])).toBe(
      expected
    );
  });
  test("classNames 3 arg", () => {
    const expected = "classStyle classStyle2 hovered";
    expect(
      classNames("classStyle", { hovered: true, scrolable: false }, [
        "classStyle2",
      ])
    ).toBe(expected);
  });
  test("classNames 3 arg width undefined", () => {
    const expected = "classStyle classStyle2 hovered";
    expect(
      classNames("classStyle", { hovered: true, scrolable: undefined }, [
        "classStyle2",
      ])
    ).toBe(expected);
  });
});
