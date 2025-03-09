import { render, screen } from "@testing-library/react";
import { MyButton } from "shared/ui/Button/Button";

describe("Button", () => {
  test("Button text", () => {
    render(<MyButton>TEST</MyButton>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
});
