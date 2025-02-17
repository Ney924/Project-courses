import { Loader } from "shared/ui/Loader";
import * as s from "./PageLoader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface PageLoaderProps {
  className?: string;
}
export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(s.root, {}, [className])}>
      <Loader />
    </div>
  );
};
