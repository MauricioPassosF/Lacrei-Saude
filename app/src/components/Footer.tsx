/* eslint-disable react/no-array-index-key */
/* eslint-disable react/react-in-jsx-scope */
import {
  FooterDiv, FooterDivider, FooterLogo, FooterLogos, FooterRedelogo, FooterRedes, FooterSection,
} from './FooterStyles';
import logoFooter from '../assets/Logo_footer.svg';
import logoFacebook from '../assets/facebook - novo.svg';
import logoInstagram from '../assets/instagram - novo.png';
import logoLinkedin from '../assets/linkedin - novo.png';
import logoEmail from '../assets/email - novo.png';

const redeLogos: string[] = [logoFacebook, logoInstagram, logoLinkedin, logoEmail];

export default function Footer() {
  return (
    <FooterDiv>
      <FooterDivider />
      <FooterSection>
        <FooterLogos>
          <FooterLogo src={logoFooter} />
          <FooterRedes>
            {redeLogos.map((logo, index) => (
              <FooterRedelogo key={index} src={logo} />
            ))}
          </FooterRedes>
        </FooterLogos>
      </FooterSection>
    </FooterDiv>
  );
}
