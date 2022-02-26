import React from 'react';
import { GlobalStyles } from './styles/globalstyles'
import { Header } from './styles/styles'
import Button from './components/Button'

function App() {
  return (
    <>
      <GlobalStyles />

      <Header>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est suscipit asperiores et! Minus debitis quasi sint perspiciatis nemo animi eveniet quas cupiditate a similique exercitationem culpa, ipsa libero fugit placeat?
      </Header>

      <Button text="Inscreva-se agora" />

    </>
  );
}

export default App;
