import React from "react";
import "./style.scss";

const Card = ({ width, height, type, heightI, widthI, split, rotate }) => {
  return (
    <div
      className={`right__section__T__card ${rotate ? 'right__section__T__card__rotate' : ''}`}
      style={{ width: width, height: height }}
    >
      <div className="right__section__T__card__top">
        <div className="right__section__T__card__top__tag">Low</div>
        <div className="right__section__T__card__top__more">More</div>
      </div>
      <span className="right__section__T__card__heading">BrainStorming</span>
      {type === "text" ? (
        <span className="right__section__T__card__desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis,
          quisquam.
        </span>
      ) : split !== "true" ? (
        // Insert image here
        <div
          className="right__section__T__card__img"
          style={{ height: heightI, width: widthI }}
        ></div>
      ) : (
        <div className="right__section__T__card__img__split">
          <div className="img__split__one"></div>
          <div className="img__split__two"></div>
        </div>
      )}

      <div className="right__section__T__card__bottom">
        <div className="right__section__T__card__bottom__profile"></div>
        <div className="right__section__T__card__bottom__comments">
          <div className="right__section__T__card__bottom__comments__icon">
            I
          </div>
          <span>12 comments</span>
        </div>
        <div className="right__section__T__card__bottom__files">
          <div className="right__section__T__card__bottom__files__icon">F</div>
          <span>3 files</span>
        </div>
      </div>
      {rotate && <div className='right__section__T__card__rotate__border'></div>}
    </div>
  );
};

export default Card;
