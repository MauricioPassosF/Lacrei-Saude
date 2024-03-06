import {
  ButtonGreen, Head, Logo, Nav, ButtonWhite,
} from './HeaderStyles';

import logoHor from '../assets/logo_LS_HOR.svg';

/* eslint-disable react/react-in-jsx-scope */
export default function Header() {
  return (
    <Head data-testid="header">
      <Logo className="logo" src={logoHor} />
      <Nav className="options">
        <ButtonWhite>Quem somos</ButtonWhite>
        <ButtonWhite>Ajuda</ButtonWhite>
        <ButtonGreen>Entrar</ButtonGreen>
      </Nav>
    </Head>
  );
}
