import React from "react";
import styled from 'styled-components'

import Wrapper_S from '../../styled/Wrapper_S'
const MenuLinks = () => {
  return (
          <React.Fragment>
            <MenuLinkWrapper>
            <MenuLinkHeader>News</MenuLinkHeader>
              <LinkList>
                  <li>Home Page</li>
                  <li>Science</li>
                  <li>World</li>
                  <li>Climate</li>
                  <li>U.S.</li>
                  <li>Sports</li>
                  <li>Politics</li><MenuLinkWrapper></MenuLinkWrapper>
                  <li>Obituaries</li>
                  <li>New York</li>
                  <li>The Upshot</li>
                  <li>Business</li>
                  <li>Today's Paper</li>
                  <li>Tech</li>
                  <li>Corrections</li>
              </LinkList>
              <MenuLinkHeader className="navSectionTitle">Opinion</MenuLinkHeader>
              <LinkList className="overlayNavGrid">
                  <li>Today's Opinion</li>
                  <li>Letters</li>
                  <li>Op-ed Columnists</li>
                  <li>Sunday Review</li>
                  <li>Editorials</li>
                  <li>Video: Opinion</li>
                  <li>Op-Ed Contributors</li>
              </LinkList>
              <MenuLinkHeader className="navSectionTitle">Arts</MenuLinkHeader>
              <LinkList className="overlayNavGrid">
                  <li>Today's Arts</li>
                  <li>Pop Culture</li>
                  <li>Art & Design</li>
                  <li>Television</li>
                  <li>Books</li>
                  <li>Theater</li>
                  <li>Dance</li>
                  <li>Watching</li>
                  <li>Movies</li>
                  <li>Video: Arts</li>
                  <li>Music</li>
              </LinkList>
              <MenuLinkHeader className="navSectionTitle">Living</MenuLinkHeader>
              <LinkList className="overlayNavGrid">
                  <li>Automobiles</li>
                  <li>Jobs</li>
                  <li>Crossword</li>
                  <li>Magazine</li>
                  <li>Food</li>
                  <li>Real Estate</li>
                  <li>Cooking</li>
                  <li>T Magazine</li>
                  <li>Education</li>
                  <li>Travel</li>
                  <li>Style</li>
                  <li>Weddings</li>
                  <li>Health</li>
              </LinkList>
              <MenuLinkHeader className="navSectionTitle">Listings & More</MenuLinkHeader>
              <LinkList className="overlayNavGrid">
                  <li>Reader Center</li>
                  <li>Multimedia</li>
                  <li>Wirecutter</li>
                  <li>Photography</li>
                  <li>Live Events</li>
                  <li>Video</li>
                  <li>The Learning <br/> Network</li>
                  <li>NYT Store</li>
                  <li>Tools & Services</li>
                  <li>Times Journeys</li>
                  <li>N.Y.C. Events Guide</li>
                  <li>Manage My Account</li>
              </LinkList>
            </MenuLinkWrapper>
          </React.Fragment>
  );
};

const LinkList = styled.ul`
display: flex;
flex-wrap: wrap;
text-align: left;
border-bottom: 1px solid #ebebeb;
&:last-child{
    border: none;
}
li{
    width: 50%;
    padding-bottom: 20px;
    font-size: 14px;
    span{
        padding-top: 20px;
    }
}
`
const MenuLinkWrapper = styled(Wrapper_S)`
display: block;
background-color: white;
`
const MenuLinkHeader = styled.h4`
padding-top: 40px;
padding-bottom: 20px;

}
`
export default MenuLinks;
