import { useState } from "react";
import * as s from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwicher } from "widgets/LangSwicher";

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(s.root, { [s.collapsed]: collapsed }, [className])}
    >
      <div className={classNames(s.swichers, { [s.position]: collapsed }, [])}>
        <button onClick={toggle}>toggle</button>
        <ThemeSwitcher />
        <LangSwicher />
      </div>
    </div>
  );
};
