import { CardInterface } from "./Card.interface";
import style from "./style.module.scss";
function Card(props: CardInterface) {
  return (
    <div className={style.cardContainer} onClick={() => props.onClick()}>
      {props.description ? (
        <div className={style.descriptionContainer}>
          <p>{props.description}</p>
        </div>
      ) : null}
      <img src={props.imageURL} alt={props.name} />
      <span>{props.name}</span>
    </div>
  );
}

export { Card };
