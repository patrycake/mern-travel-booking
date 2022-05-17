import React from "react";
import styled from "styled-components";
import travel from "../images/travel.png";
import bigben from "../images/big-ben.png";
import bus from "../images/bus.png";
import tokyo from "../images/tokyo-tower.png";
import location from "../images/location.svg";
import search from "../images/search.svg";
import calendar from "../images/calendar.svg";
import guest from "../images/guest.svg";

const Header = () => {
  return (
    <HeaderDiv>
      <Title>Discover. Explore. Find your Adventure</Title>
      <Search>
        <TabGroup>
          <SearchTab>Hotels</SearchTab>
          <SearchTab>Flights</SearchTab>
          <SearchTab>Attractions</SearchTab>
        </TabGroup>
        <hr />
        <ItemGroup>
          <SearchItem icon={location} title={"Location"} />
          <SearchItem icon={calendar} title={"Check in"} />
          <SearchItem icon={calendar} title={"Check out"} />
          <SearchItem icon={guest} title={"Guest"} />
          <SearchButton>
            <img src={search} alt="" />
          </SearchButton>
        </ItemGroup>
      </Search>
      <HeroImgGroup>
        <HeroImg src={travel} />
        <HeroImg src={bigben} />
        <HeroImg src={bus} />
        <HeroImg src={tokyo} />
      </HeroImgGroup>
    </HeaderDiv>
  );
};

export default Header;

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: calc(100vh - 50px);
  margin: 0px 150px;
`;
const Title = styled.h1`
  padding-top: 50px;
  font-size: 4em;
  letter-spacing: 10px;
  font-family: "Magista Regular";
  text-align: center;
  line-height: 100px;
  color: #231638;
`;

const Search = styled.div`
  box-shadow: 0 0 25px 5px rgba(0, 0, 0, 0.05);
  background-color: white;
  width: 100%;
  padding: 20px;
  border-radius: 4px;
  hr {
    margin: 10px 0;
  }
  div {
    display: flex;
    align-items: center;

    img {
      width: 15px;
      padding: 5px;
    }

    p {
      font-weight: 700;
      font-size: 0.9em;
    }
  }
`;
const TabGroup = styled.div`
  display: flex;
  align-items: center;
`;
const SearchTab = styled.p`
  font-size: 0.75em;
  font-weight: 500;
  color: #918d99;
  padding-right: 10px;
`;
const ItemGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SearchButton = styled.button`
  background-color: #e7a52f;
  border: none;
  border-radius: 4px;
  width: 40px;
  height: 40px;
`;
const HeroImgGroup = styled.div`
  display: flex;
  padding-top: 100px;
`;
const HeroImg = styled.img`
  width: 200px;
  object-fit: contain;
`;

function SearchItem({ icon, title, description }) {
  return (
    <div>
      <img src={icon} alt="" srcset="" />
      <p>{title}</p>
    </div>
  );
}
