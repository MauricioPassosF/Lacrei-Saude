import styled from 'styled-components';

export const ContentDiv = styled.div`
display: flex;
flex-direction: row;
max-width: 1440px;
padding: 48px 162px 64px 162px;
background: rgba(255, 255, 255, 1);
`;

export const ContentImage = styled.img`
height: 491px;
border-radius: 8px;
object-fit: cover;
width: 400.13px;
`;

export const ContentNav = styled.nav`
display: flex;
flex-direction: row;
gap: 24px;
width: 488px
`;

export const ContentInfos = styled.div`
margin: 80px 226px 80px 0px; 
`;

export const ContentRectangle = styled.div`
  width: 160px;
  height: 2px;
  border-radius: 4px;
  background-color: rgba(1,135,98,1);
  margin: 8px 0px;
`;
export const ContentTitle = styled.div`
font-family: Nunito;
font-size: 48px;
font-weight: 700;
line-height: 58px;
letter-spacing: 0em;
text-align: left;
color: rgba(19, 19, 19, 1);
`;

export const ContentText = styled.div`
width: 488px;
height: 108px;
color: rgba(45, 45, 45, 1);
font-family: Nunito;
font-size: 24px;
font-weight: 400;
line-height: 36px;
letter-spacing: 0em;
text-align: left;
`;

export const GreenButton = styled.button`
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
width: Hug (117px);
height: 48px;
gap: 24px;
font-family: Nunito;
letter-spacing: 0em;
text-align: center;
border:2px solid transparent ;
cursor: pointer;
transition: all 0.2s ease 0s;

&:hover {
    background-color: rgba(0,119,86,1);
    border: 2px solid rgba(0,119,86,1);
}
`;

export const WhiteButton = styled.button`
font-size: 100%;
justify-content: center;
align-items: center;
display: flex;
font-size: 18px;
line-height: 27px;
font-weight: 700;
color: rgba(1,135,98,1);
background-color: rgba(255,255,255,1);
padding: 10px 32px 10px 32px;
border-radius: 8px;
box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
cursor: pointer;
width: Hug (117px);
height: 48px;
gap: 24px;
font-family: Nunito;
letter-spacing: 0em;
text-align: center;
border: 2px solid rgba(1, 135, 98, 1);
cursor: pointer;
transition: all 0.2s ease 0s;

&:hover {
    background-color: rgba(0,119,86,1);
    border: 2px solid rgba(0,119,86,1);
    color: rgba(255,255,255,1)
}
`;
