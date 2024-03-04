import {
  Button, Head, Logo, Nav, Text,
} from './HeaderStyles';

import logoHor from '../assets/logo_LS_HOR.svg';

/* eslint-disable react/react-in-jsx-scope */
export default function Header() {
  return (
    <Head>
      <Logo className="logo" src={logoHor} />
      <Nav className="options">
        <Text>Quem somos</Text>
        <Text>Ajuda</Text>
        <Button>Entrar</Button>
      </Nav>
    </Head>
  );
}
