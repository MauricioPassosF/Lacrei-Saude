/* eslint-disable react/no-array-index-key */
/* eslint-disable react/react-in-jsx-scope */
import {
  FooterButton,
  FooterDiv, FooterDivider, FooterInstText, FooterInstitucional, FooterLinkDiv,
  FooterLinkNav, FooterLinkText, FooterLinkTitle,
  FooterLinks, FooterLogo, FooterLogos, FooterRedeButton,
  FooterRedeLogo, FooterRedes, FooterSection,
} from './FooterStyles';
import logoFooter from '../assets/Logo_footer.svg';
import logoFacebook from '../assets/facebook - novo.svg';
import logoInstagram from '../assets/instagram - novo.png';
import logoLinkedin from '../assets/linkedin - novo.png';
import logoEmail from '../assets/email - novo.png';
import footerButton from '../assets/footer_button.svg';

interface ILink {title: string, nav: string[]}
const redeLogos: string[] = [logoFacebook, logoInstagram, logoLinkedin, logoEmail];
const links: ILink[] = [
  {
    title: 'Lacrei Saúde',
    nav: ['Quem Somos', 'Nosso Propósito', 'Missão, Visão e Valor', 'Acessibilidade'],
  },
  {
    title: 'Saúde',
    nav: ['Buscar atendimento', 'Buscar atendimento'],
  },
  {
    title: 'Segurança e Privacidade',
    nav: ['Política de Privacidade', 'Termo de Uso', 'Direitos de Titular'],
  },
];
export default function Footer() {
  return (
    <FooterDiv>
      <FooterDivider />
      <FooterSection>
        <FooterLogos>
          <FooterLogo src={logoFooter} />
          <FooterRedes>
            {redeLogos.map((logo, index) => (
              <FooterRedeButton>
                <FooterRedeLogo key={index} src={logo} />
              </FooterRedeButton>
            ))}
          </FooterRedes>
        </FooterLogos>
        <FooterLinks>
          {links.map((link) => (
            <FooterLinkDiv>
              <FooterLinkTitle>{link.title}</FooterLinkTitle>
              <FooterLinkNav>
                {link.nav.map((text) => (
                  <FooterLinkText>{text}</FooterLinkText>
                ))}
              </FooterLinkNav>
            </FooterLinkDiv>
          ))}
        </FooterLinks>
      </FooterSection>
      <FooterDivider />
      <FooterSection>
        <FooterInstitucional>
          <FooterInstText>
            A Lacrei não oferece tratamento médico emergencial.
            Em caso de emergência procure o hospital mais próximo.
          </FooterInstText>
          <FooterInstText>
            Em caso de problemas psicológicos, ligue para 188 (CVV)
            ou acesse o site www.cvv.org.br
          </FooterInstText>
          <FooterInstText>
            Copyright © 2021 Lacrei. Todos os direitos reservados. CNPJ: 51.265.351/0001-65
          </FooterInstText>
        </FooterInstitucional>
        <FooterButton src={footerButton} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      </FooterSection>
    </FooterDiv>
  );
}
