import styled from "styled-components";
import tiktokIcon from '../lib/icons/icons8-tiktok-48.png';
import instaIcon from '../lib/icons/icons8-instagram-48.png';
import twitterIcon from '../lib/icons/icons8-twitter-48.png'

const FooterStyles= styled.footer`
  color: white;
  background: rgba(2, 2, 2, 0.75);
  height: 100px;
  padding: 0 20px;
  z-index: 1;
  border-bottom: 10px solid var(--black, black);
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin: 0px 20px;
  }

  a {
    color: white;
    font-size: 2rem;
    text-decoration: underline;
    margin: 0px 10px;
    
  }

  button {
   height: 30px;
   margin-right: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;

// Footer component contains social links and additional section links
export default function Footer() {
  return (
    <FooterStyles>
        <div className="socials">
          <img alt="instaIcon" src={instaIcon} style={{height: "40px", width: "40px" }} />
          <img alt="twitterIcon" src={twitterIcon} style={{height: "40px", width: "40px" }} />
          <img alt="tiktokIcon" src={tiktokIcon} style={{height: "40px", width: "40px" }} />
        </div>
        <div>   
          <a href="/">About</a>
          <a href="/">Contact Us</a>
          <a href="/">Help</a>
          <a href="/">Terms and Conditions</a>
        </div>
    </FooterStyles>
  );
}
