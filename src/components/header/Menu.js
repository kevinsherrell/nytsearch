import React, { Component } from "react";

import Form from "../main/Form";

import logo from "../../images/newyorktimes.svg";
import close from "../../images/close-icon.png";

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      toggleMenu: false
    };
  }

  render() {
    console.log(this.props);
    return (
      <div className="overlay">
        <header>
          <div className="menuHeaderContainer container">
            <div className="menuHeaderLeft" />
            <div className="menuHeaderCenter">
              <img className="logoMain" src={logo} alt="" />
            </div>
            <div className="menuHeaderRight">
              <img className="closeIcon" src={close} alt="" />
            </div>
          </div>
        </header>
        <div className="container">
          <Form searchForm={this.handleSearch} />
        </div>
        <nav className="overlayNav container">
          <section className="newsSection">
            <h4 className="navSectionTitle">News</h4>
            <div>
              <ul className="overlayNavGrid">
                <li>Home Page</li>
                <li>Science</li>
                <li>World</li>
                <li>Climate</li>
                <li>U.S.</li>
                <li>Sports</li>
                <li>Politics</li>
                <li>Obituaries</li>
                <li>New York</li>
                <li>The Upshot</li>
                <li>Business</li>
                <li>Today's Paper</li>
                <li>Tech</li>
                <li>Corrections</li>
              </ul>
            </div>
          </section>
          <section className="opinionSection">
            <h4 className="navSectionTitle">Opinion</h4>
            <ul className="overlayNavGrid">
              <li>Today's Opinion</li>
              <li>Letters</li>
              <li>Op-ed Columnists</li>
              <li>Sunday Review</li>
              <li>Editorials</li>
              <li>Video: Opinion</li>
              <li>Op-Ed Contributors</li>
            </ul>
          </section>
          <section className="artsSection">
            <h4 className="navSectionTitle">Arts</h4>
            <ul className="overlayNavGrid">
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
            </ul>
          </section>
          <section className="livingSection">
            <h4 className="navSectionTitle">Living</h4>
            <ul className="overlayNavGrid">
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
            </ul>
          </section>
          <section className="listingSection">
            <h4 className="navSectionTitle">Listings & More</h4>
            <ul className="overlayNavGrid">
              <li>Reader Center</li>
              <li>Multimedia</li>
              <li>Wirecutter</li>
              <li>Photography</li>
              <li>Live Events</li>
              <li>Video</li>
              <li>The Learning Network</li>
              <li>NYT Store</li>
              <li>Tools & Services</li>
              <li>Times Journeys</li>
              <li>N.Y.C. Events Guide</li>
              <li>Manage My Account</li>
            </ul>
          </section>
        </nav>
      </div>
    );
  }
}

export default Menu;
