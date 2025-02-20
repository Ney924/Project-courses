import { render, screen } from "@testing-library/react";
import { withTranslation } from "react-i18next";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";

describe("Sidebar", () => {
  test("Sidebar text", () => {
    const SidebarReady = withTranslation()(Sidebar);
    render(<SidebarReady />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
});
