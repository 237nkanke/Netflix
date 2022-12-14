import React from "react";
  import "./footer.css";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialWr,
  SocialLogo,
  Website,
  SocialIcons,
} from "./footerElement";
const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterWrap>
          <FooterLinkContainer>
            <FooterWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Careers</FooterLink>
                <FooterLink to="/signin">Investors</FooterLink>
                <FooterLink to="/signin">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/signin">Contact</FooterLink>
                <FooterLink to="/signin">Support</FooterLink>
                <FooterLink to="/signin">Destination</FooterLink>
                <FooterLink to="/signin">sponsorship</FooterLink>
              </FooterLinkItems>
            </FooterWrapper>
            <FooterWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to="/signin">Submit video</FooterLink>
                <FooterLink to="/signin">Ambassadors</FooterLink>
                <FooterLink to="/signin">Agency</FooterLink>
                <FooterLink to="/signin">Terms of service</FooterLink>
                <FooterLink to="/signin">Creations</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social media</FooterLinkTitle>
                <FooterLink to="/signin">Instagram</FooterLink>
                <FooterLink to="/signin">linkedin</FooterLink>
                <FooterLink to="/signin">Facebook</FooterLink>
                <FooterLink to="/signin">Youtube</FooterLink>
                <FooterLink to="/signin">Twiter</FooterLink>
              </FooterLinkItems>
            </FooterWrapper>
          </FooterLinkContainer>
          <SocialMedia>
            <SocialWr>
              <SocialLogo to="/Dolla_react">FILMPIRE</SocialLogo>
              <Website>
              FILMPIRE {new Date().getDate() +'/'+new Date().getMonth()+'/'+ new Date().getFullYear()} All rights reserced.
              </Website>
              <SocialIcons>
                <ul className="icon-list">
                  <li className="icon-item">
                    <a href="https://www.facebook.com/ulrich.nkanke" className="icon-link">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="icon-item">
                    <a href="https://www.facebook.com/ulrich.nkanke" className="icon-link">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>

                  <div className="yu"></div>
                  <li className="icon-item">
                    <a href="https://www.youtube.com/@nkanke237" className="icon-link">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li className="icon-item">
                    <a href="https://www.linkedin.com/in/yan-ulrich-nkanke-b78251239" className="icon-link">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="icon-item">
                    <a href="nkanke/index.html" className="icon-link">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </SocialIcons>
            </SocialWr>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </div>
  );
};

export default Footer;
