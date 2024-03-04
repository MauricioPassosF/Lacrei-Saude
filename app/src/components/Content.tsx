/* eslint-disable react/react-in-jsx-scope */
import {
  ContentDiv, ContentImage,
  ContentInfos, ContentNav, ContentRectangle, ContentText, ContentTitle, GreenButton, WhiteButton,
} from './ContentStyles';

import contentImage from '../assets/Content_Image.jpeg';

export default function Content() {
  return (
    <ContentDiv>
      <ContentInfos>
        <ContentTitle>Junte-se à nossa comunidade</ContentTitle>
        <ContentRectangle />
        <ContentText>
          Encontre atendimento clínico de qualidade ou
          entre para o time de profissionais da Lacrei Saúde.
        </ContentText>
        <ContentNav>
          <GreenButton>Buscar atendimento</GreenButton>
          <WhiteButton>Oferecer atendimento</WhiteButton>
        </ContentNav>
      </ContentInfos>
      <ContentImage src={contentImage} />
    </ContentDiv>
  );
}
