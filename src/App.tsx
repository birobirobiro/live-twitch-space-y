import React from 'react';
import { GlobalStyles } from './styles/globalstyles'
import { Container, Header, Logo, Main, FirstTitle, SecondTitle, Subtitle, AstrounautIllustration, DivButton, DivIcons } from './styles/styles'

import Button from './components/Button'
import Icon from './components/Icon'

function App() {
  return (
    <Container>
      <>
        <GlobalStyles />

        <Header>
          <Logo />
        </Header>

        <Main>
          <FirstTitle>Finalmente é possível!</FirstTitle>

          <SecondTitle>Sua jornada para Marte começa aqui <span>.</span></SecondTitle>

          <Subtitle>A primeira viagem para Marte estará disponivél apartir do dia 12/03/2028. Inscreva-se em nossa lista de espera.
          </Subtitle>

          <AstrounautIllustration />

        </Main>

        <DivButton>
          <Button text="Inscreva-se agora" fullWidth />
        </DivButton>


        <DivIcons>
          <Icon src="/images/icon-rocket.svg" txt="Foguetes com a mais alta tecnologia e conforto." alt="Rocket" />

          <Icon src="/images/icon-flag.svg" txt="Mais de 100 missões consecutivas com sucesso." alt="Flag" />

          <Icon src="/images/icon-telescope.svg" txt="Experiencia única
e exclusiva." alt="Telescope" />
        </DivIcons>
      </>
    </Container>
  );
}

export default App;
