import styled from 'styled-components';

interface IButtonProps {
  src: string;
}

export const FooterDiv = styled.footer`
  max-width: 1440px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  padding: 1px 162px 24px 162px;
  background: rgba(255, 255, 255, 1);

`;

export const FooterDivider = styled.div`
  border-radius: 4px;
  margin: 48px 0px;
  border: 1px solid rgba(178, 223, 208, 1);
  width: auto;
  &:nth-child(1) {
    margin-top: 0px;
  }
`;

export const FooterSection = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: start;
`;

export const FooterLogos = styled.div`
`;

export const FooterLogo = styled.img`
margin-bottom: 56px;
width: 169.17px;
height: 48px
`;

export const FooterRedes = styled.div`
display: flex;
flex-direction: row;
`;

export const FooterRedeButton = styled.button`
  background: rgba(255, 255, 255, 1);
  background-size: contain;
  margin: 0px 8px;
  border-radius: 8px;
  border: 2px solid transparent;
  cursor: pointer;
`;

export const FooterRedeLogo = styled.img`
  width: 100%;
  height: 100%;
`;

export const FooterLinks = styled.div`
display: flex;
flex-direction: row;
width: 736px;
justify-content: space-between;
`;

export const FooterLinkDiv = styled.div`
`;

export const FooterLinkTitle = styled.h2`
width: fit-content;
font-family: Nunito;
font-size: 18px;
font-weight: 700;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
color: rgba(19, 19, 19, 1);
margin: 0px 0px 24px 0px;
`;
export const FooterLinkNav = styled.nav`

`;
export const FooterLinkText = styled.h3`
font-family: Nunito;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
margin: 0px;
margin-top: 16px;
color: rgba(45, 45, 45, 1);
&:nth-child(1) {
    margin-top: 0px;
  }
`;
export const FooterInstitucional = styled.div`
`;

export const FooterButton = styled.button<IButtonProps>`
  background: rgba(255, 255, 255, 1) url(${(props) => props.src}) no-repeat center center;
  height: 48px;
  width: 24px;
  padding: 10px 12px 10px 12px;
  border-radius: 8px;
  gap: 16px;
  align-items: center;
  display: flex;
  border: 2px solid rgba(1, 135, 98, 1);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
export const FooterInstText = styled.p`
width: 1020px;
font-family: Nunito;
font-size: 14px;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
color: rgba(81, 81, 81, 1);
margin: 0px;
&:nth-child(1) {
    margin-top: 0px;
  }

&:nth-child(2) {
    margin-top: 8px;
  }

&:nth-child(3) {
    margin-top: 24px;
  }
`;
