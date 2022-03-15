import React from 'react';
import { GlobalStyles } from './styles/globalstyles'
import {
  Container, Header, Logo, Main, FirstTitle, SecondTitle, Subtitle, AstrounautIllustration, DivButton, DivIcons, SectionAbout, ImageMars, DivAboutMars, SecondSubTitle, TextMars, GalleryContent, ContainerAbout, TextLogo, DivLogo, TextSubscribe, DivLogoSpaceY, SectionForm,
  DivForm, IconForm, TitleForm, SubtitleForm, RocketImage, DivInputCheckbox, InputCheckbox, TextCheckbox, DivRocketImage, SectionFooter, DivImageSmoke, DivFooterBottom, DivSocial, DivFooterMenu, ContainerForm


} from './styles/styles'

import { ArrowRight, ArrowLeft } from "./components/Gallery/styles"
import Gallery from './components/Gallery'

import Form from './components/Form'

import Button from './components/Button'
import Icon from './components/Icon'
import pixelToRem from './utils/pxToRem'

function App() {

  return (
    <>
      <Container flex='column' margin={pixelToRem(24, 112, 50)}>
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



      </Container>

      <SectionAbout flex='column' >
        <Container width='100%' >
          <ContainerAbout width="100%" alignItems='center' justifyContent='center'>
            <ImageMars />


            <DivAboutMars >
              <FirstTitle>Por que Marte?</FirstTitle>

              <SecondSubTitle>Sobre o planeta vermelho</SecondSubTitle>

              <TextMars>A uma distância média de 140 milhões de milhas, Marte é um dos vizinhos habitáveis ​​mais próximos da Terra. Marte está mais ou menos a metade da distância da Terra do Sol, então ainda tem luz solar decente. Está um pouco frio, mas podemos esquentar. Sua atmosfera é composta principalmente de CO2 com um pouco de nitrogênio e argônio e alguns outros oligoelementos, o que significa que podemos cultivar plantas em Marte apenas comprimindo a atmosfera.</TextMars>

              <TextMars>A gravidade em Marte é cerca de 38% da da Terra, então você seria capaz de levantar coisas pesadas e dar voltas. Além disso, o dia está notavelmente próximo ao da Terra.</TextMars>
            </DivAboutMars>

          </ContainerAbout>
        </Container>

        <GalleryContent>

          <DivLogo>
            <DivLogoSpaceY>
              <Logo />
            </DivLogoSpaceY>

            <TextLogo>O caminho para tornar a humanidade multiplanetária<span>.</span></TextLogo>

            <TextSubscribe>
              Inscreva-se agora
            </TextSubscribe>
          </DivLogo>

          <ArrowLeft />
          <Gallery />
          <ArrowRight />


        </GalleryContent>

      </SectionAbout>

      <SectionForm>
        <ContainerForm>
          <DivForm>
            <IconForm />

            <TitleForm>
              Garanta sua vaga para a primeira viagem
            </TitleForm>

            <SubtitleForm>
              Preencha os campos abaixo para entrar na lista de espera
            </SubtitleForm>

            <Form type="text" text='Seu nome' />
            <Form type="email" text='E-mail' />
            <Form type="number" text='Telefone' />

            <DivInputCheckbox>
              <InputCheckbox type="checkbox" />

              <TextCheckbox>Concordo em receber comunicações</TextCheckbox>
            </DivInputCheckbox>

            <Button text="Garantir minha vaga" fullWidth />

          </DivForm>

          <DivRocketImage>
            <RocketImage>
              <img src="/images/rocket.svg" alt="Rocket" />
            </RocketImage>
          </DivRocketImage>
        </ContainerForm>

        <SectionFooter>
          <DivImageSmoke>
            <img src="/images/smoke.svg" alt="" />
          </DivImageSmoke>


          <DivFooterBottom>
            <DivLogoSpaceY>
              <Logo />
            </DivLogoSpaceY>

            <DivSocial>
              <img src="/images/instagram.svg" alt="" />
              <img src="/images/linkedin.svg" alt="" />
              <img src="/images/facebook.svg" alt="" />
            </DivSocial>

            <DivFooterMenu>
              <ul>
                <li><a href="/">Início</a></li>
                <li><a href="/">Sobre nós</a></li>
                <li><a href="/">Missões</a></li>
                <li><a href="/">Contato</a></li>
              </ul>
            </DivFooterMenu>
          </DivFooterBottom>
        </SectionFooter>

      </SectionForm>


    </>

  );
}

export default App;
