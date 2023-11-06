import React from 'react'
import Carousel from 'react-elastic-carousel'

import {
  Container,
  Head,
  Left,
  ButtonLogin,
  ButtonSignin,
  Right,
  Div,
  Poem,
  Information
} from './styles'
import Logo from '../Assets/Logo.svg'
import card1 from '../Assets/card1.jpg'
import card2 from '../Assets/card2.jpg'
import firstImg from '../Assets/firstImg.png'
import secondImg from '../Assets/secondImg.png'
import thirdImg from '../Assets/thirdImg.jpg'

function HomePage () {
  return (
        <Container> <Head >
            <Left>
                <img src={Logo} />
                <a>Menu</a>
                <a>Rewards</a>
                <a>Nosso Café</a>
            </Left>
            <Right>
                <a>Histórias Starbucks</a>
                <ButtonLogin>Entrar</ButtonLogin>
                <ButtonSignin>Participar</ButtonSignin>
            </Right>
        </Head>
        <Div>
            <Carousel
                itemsToShow={1}>
                <img src={card1} />
                <img src={card2} />
            </Carousel>
            </Div>
            <Poem>
                <p>“A cada xícara, a cada conversa, com cada comunidade – </p>
                <p>Nós nutrimos infinitas possibilidades de conexão humana.”</p>
            </Poem>
            <Information>
                <img src={firstImg} />

                <div>
                    <p>Sua pausa mais saborosa!
                        Você pode fazer seu pedido sem pegar filas, pedindo pelo aplicativo da Starbucks e retirando na sua loja preferida.
                    </p>
                </div>
                <div><p>Uma surpresa refrescante para você
                    Conheça nossa linha de Cold Brew e Refreshers™</p></div>
                <img src={secondImg} />
                <img src={thirdImg} />
                <div>
                    <p>Coisas boas estão acontecendo
                        Acreditamos que podemos e devemos gerar um impacto positivo nas comunidades em que atuamos.
                    </p>
                </div>
            </Information>
        </Container >

  )
}
export default HomePage
