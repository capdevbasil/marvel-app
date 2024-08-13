import Header from "../Header";
import { LayoutProps } from "./Layout.interface";
import style from "./style.module.scss";

export default function Layout(props: LayoutProps) {
  return (
    <div className={style.layoutContainer}>
      <Header />
      <section>{props.children}</section>
    </div>
  );
}
