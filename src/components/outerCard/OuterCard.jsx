import React from "react";
import Card from "../card/Card";
import "./style.scss";

const OuterCard = ({ heading, color, show, number, type }) => {
  return (
    <div className="right__section__T">
      <div className="right__section__T__top">
        <div
          className="right__section__T__top__bullet"
          style={{ backgroundColor: color }}
        ></div>
        <div className="right__section__T__top__heading">{heading}</div>
        <div className="right__section__T__top__num">{number}</div>
        {show && <div className="right__section__T__top__icon"></div>}
      </div>

      <div
        className="right__section__T__divider"
        style={{ backgroundColor: color }}
      ></div>

      <div className="right__section__T__cards">
        {type === "todo" ? (
          <Card width={"334px"} height={"157px"} type={"text"} />
        ) : (
          ""
        )}
        {type === "todo" ? (
          <Card
            width={"334px"}
            height={"157px"}
            type={"text"}
            rotate={"true"}
          />
        ) : (
          ""
        )}
        {type === "todo" ? (
          <Card width={"334px"} height={"157px"} type={"text"} />
        ) : (
          ""
        )}

        {type === "progress" ? (
          <Card
            width={"334px"}
            height={"228px"}
            type={"image"}
            widthI={"100%"}
            heightI={"100px"}
          />
        ) : (
          ""
        )}
        {type === "progress" ? (
          <Card
            width={"334px"}
            height={"227px"}
            type={"image"}
            widthI={"100%"}
            heightI={"100px"}
            split={"true"}
          />
        ) : (
          ""
        )}

        {type === "done" ? (
          <Card
            width={"334px"}
            height={"278px"}
            type={"image"}
            widthI={"100%"}
            heightI={"180px"}
          />
        ) : (
          ""
        )}
        {type === "done" ? (
          <Card width={"334px"} height={"140px"} type={"text"} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default OuterCard;
