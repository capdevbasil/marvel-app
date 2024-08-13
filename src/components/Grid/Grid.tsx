import { GridInterface } from "./Grid.interface";
import style from "./style.module.scss";

export function Grid(props: GridInterface) {
  let inlineStyle = {};
  if (props.numColumns) {
    inlineStyle = {
      gridTemplateColumns: `repeat(${props.numColumns}, 1fr)`,
    };
  }
  return (
    <div style={inlineStyle} className={style.gridContainer}>
      {props.children}
    </div>
  );
}
