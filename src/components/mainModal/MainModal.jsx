import React from "react";
import OuterCard from "../outerCard/OuterCard";
import "./style.scss";

const MainModal = () => {
  return (
    <div className="main__mainModal">
      {/* ======================================  */} {/* Navbar Section */}{" "}
      {/* ======================================  */}
      {/* Logo */}
      <div className="top__left__corner">
        {/* Insert the logo image here */}
        <div className="logo__img">
          Logo
          <span className="main__title">project m.</span>
        </div>

        <div className="double__arrow">{"\u00AB"}</div>
      </div>
      {/* Search Input Field */}
      <div className="search__input">
        {/* Insert the search icon here */}
        <div className="search__icon"></div>
        <input type="text" placeholder="Search for anything.." />
      </div>
      {/* Vertical and horizontal lines */}
      <div className="vertical__line"></div>
      <div className="horizontal__line"></div>
      {/* Notification Icons */}
      <div className="notification__icons">
        <div className="icon__1">1</div>
        <div className="icon__2">2</div>
        <div className="icon__3">3</div>
      </div>
      {/* Profile Section */}
      <div className="profile__section">
        <div className="profile__details">
          <span className="profile__name">Lorem Ipsum</span>
          <span className="profile__address">dolor, lorem</span>
        </div>
        <div className="profile__pic"></div>
        <div className="profile__expand">D</div>
      </div>
      {/* ======================================  */} {/* Left Section */}{" "}
      {/* ======================================  */}
      {/* Navigations */}
      <div className="main__navigation">
        <div className="cell">
          <div className="cell__icon">I1</div>
          <div className="cell__text">Home</div>
        </div>

        <div className="cell">
          <div className="cell__icon">I2</div>
          <div className="cell__text">Messages</div>
        </div>

        <div className="cell">
          <div className="cell__icon">I3</div>
          <div className="cell__text">Tasks</div>
        </div>

        <div className="cell">
          <div className="cell__icon">I4</div>
          <div className="cell__text">Settings</div>
        </div>
      </div>
      {/* Divider */}
      <div className="divider"></div>
      {/* My Projects */}
      <div className="main__projects">
        <div className="main__projects__top">
          <span>my projects</span>
          <div className="main__projects__top__icon">Icon</div>
        </div>
        <div className="main__projects__tuples">
          <div className="main__projects__tuple">
            <div className="tuple__bullet"></div>
            <div className="tuple__text">mobile app</div>
          </div>
          <div className="main__projects__tuple">
            <div className="tuple__bullet"></div>
            <div className="tuple__text">website redesign </div>
          </div>
          <div className="main__projects__tuple">
            <div className="tuple__bullet"></div>
            <div className="tuple__text">design system</div>
          </div>
          <div className="main__projects__tuple">
            <div className="tuple__bullet"></div>
            <div className="tuple__text">wireframes</div>
          </div>
        </div>
      </div>
      {/* Thoughts Time */}
      {/* Insert the bulb image here */}
      <div className="thought__cricle"></div>
      <div className="thought__main">
        <div className="thought__description">
          <div className="thought__description__title">thoughts time</div>
          <div className="thought__description__para">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
            velit!
          </div>
          <button className="thought__description__button">
            Write a message
          </button>
        </div>
      </div>
      {/* ======================================  */} {/* Right Section */}{" "}
      {/* ======================================  */}
      <div className="right__section__main">
        <div className="right__section__top">
          <div className="right__section__top__left">
            <span>mobile app</span>
            <div className="right__section__top__icon1"></div>
            <div className="right__section__top__icon2"></div>
          </div>

          <div className="right__section__top__right">
            <div className="right__section__top__right__icon1"></div>
            <span>invite</span>
            <div className="right__section__top__right__pics"></div>
          </div>
        </div>
        <div className="right__section__middle">
          <div className="right__section__middle__left">
            <div className="criteria__container">
              <div className="criteria__container__icon">I</div>
              <div className="criteria__container__text">filter</div>
              <div className="criteria__container__expand">D</div>
            </div>
            <div className="criteria__container">
              <div className="criteria__container__icon">I</div>
              <div className="criteria__container__text">today</div>
              <div className="criteria__container__expand">D</div>
            </div>
          </div>

          <div className="right__section__middle__right">
            <div className="share__container">
              <div className="share__container__icon">S</div>
              <div className="share__container__text">share</div>
            </div>
            <div className="separator"></div>
            <div className="view__type">
              <div className="view_type_1"></div>
              <div className="view_type_2"></div>
            </div>
          </div>
        </div>

        <div className="right__section__bottom">
          <div className="right__section__bottom__main">
            <OuterCard
              heading={"Todo"}
              color={"blue"}
              show={"true"}
              number={4}
              type={"todo"}
            />
            <OuterCard
              heading={"Progress"}
              color={"yellow"}
              number={3}
              type={"progress"}
            />
            <OuterCard
              heading={"Done"}
              color={"green"}
              number={2}
              type={"done"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainModal;
