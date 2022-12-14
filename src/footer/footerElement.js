import styled from 'styled-components';
// import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
background-color: #212426;
`
export const FooterWrap = styled.div`
padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`
export const FooterLinkContainer = styled.div`
display: flex;
  justify-content: center;
@media screen and (max-width:820px)
{
    padding-top: 25px;
}
`
export const FooterWrapper = styled.div
`
display: flex;
@media screen and (max-width:820px)
{
    flex-direction: column;
}
`
export const FooterLinkItems = styled.div
`
display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 12px;
  margin-left:20px;
  text-align: left;
  width: 90px;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width:820px)
  {
    margin: 0px;
    width: 100%;
    padding: 10px;
  }
`
export const FooterLinkTitle = styled.h1
`
font-size: 16px;
  margin-bottom: 16px;
  
`
export const FooterLink = styled.a
`
color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

&:hover{
    color: #01bf71;
  transition: 0.3s ease-out;
}
`
export const SocialMedia = styled.section
`
max-width: 1000px;
  width: 100%;
`
export const SocialWr = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;
@media screen and (max-width:820px)
  {
    flex-direction: column;
  }
`
export const SocialLogo = styled.a
`
color:rgb(229,9,20);
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 20px;
width: fit-content;
letter-spacing: 0.9px;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;
`
export const Website = styled.small`
color: #fff;
margin-bottom: 16px;
`
export const SocialIcons = styled.div
`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
` 
export const SocialIconLink = styled.a
`
color: #fff;
font-size: 24px;
` 