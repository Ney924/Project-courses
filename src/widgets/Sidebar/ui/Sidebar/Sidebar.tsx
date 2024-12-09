import { useState } from "react";
import * as s from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

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
      className={classNames(s.root, { [s.collapsed]: collapsed }, [className])}
    >
      <div className={s.swichers}>
        <button onClick={toggle}>toggle</button>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
