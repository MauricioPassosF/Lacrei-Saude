import styled from 'styled-components';

export const Head = styled.header`
  max-width: 1440px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  background: linear-gradient(180deg, #F5FFFB 31.04%, #FFFFFF 100%);
  padding: 24px 162px 24px 162px;
  align-items: center;
  margin: 0 auto;
`;
export const Nav = styled.nav`
  width: 437px;
  height: 48px;
  display: flex;
  gap:16px

`;
export const Logo = styled.img`
  height: 24px;
  width: 202.69px;
`;
export const ButtonWhite = styled.button`
font-size: 100%;
color: rgba(1, 135, 98, 1);
display: flex;
font-family: Nunito;
font-size: 18px;
font-weight: 700;
line-height: 27px;
letter-spacing: 0em;
text-align: center;
height: 48px;
width: auto;
padding: 10px 32px 10px 32px;
border-radius: 8px;
gap: 8px;
justify-content: center;
align-items: center;
border:2px solid transparent ;
background: linear-gradient(180deg, #F5FFFB 31.04%, #FFFFFF 100%);
cursor: pointer;
transition: all 0.2s ease 0s;

&:hover {
    background: rgba(230,243,239,1);
}
`;

export const ButtonGreen = styled.button`
font-size: 100%;
justify-content: center;
align-items: center;
display: flex;
font-size: 18px;
line-height: 27px;
font-weight: 700;
color: rgba(255,255,255,1);
background-color: rgba(1,135,98,1);
padding: 10px 32px 10px 32px;
border-radius: 8px;
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
cursor: pointer;
height: 48px;
gap: 8px;
font-family: Nunito;
letter-spacing: 0em;
text-align: center;
border:2px solid transparent ;
transition: all 0.2s ease 0s;

&:hover {
    background-color: rgba(0,119,86,1);
    border: 2px solid rgba(0,119,86,1);
}
`;
