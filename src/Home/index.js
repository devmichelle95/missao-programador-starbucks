import React from 'react'
import Carousel from 'react-elastic-carousel'

import {
  Container,
  Head,
  Left,
  ButtonAgenda,
  ButtonLocal,
  Right,
  Div,
  Poem,
  Information,
  Bottom,
  Local,
  Phone,
  Calendar,
  Insta
} from './styles'
import Coluna from '../Assets/Coluna.jpg'
import Logo from '../Assets/Logo.png'
import card1 from '../Assets/card1.png'
import card2 from '../Assets/card2.png'
import secondImg from '../Assets/thirdImg.jpg'
import InstagramIcon from '../Assets/InstagramIcon.svg'

function HomePage () {
  return (
        <Container> <Head >
            <img src={Logo} />
            <Left>

                <h1>Quiropraxia e Acupuntura a Laser</h1>
                <p>10 anos de experiência</p>
            </Left>
            <Right>
                <ButtonAgenda onClick={() => window.scrollTo(0, 2000)} >Agendar</ButtonAgenda>
                <ButtonLocal onClick={() => window.location.assign('https://www.google.com.br/maps/place/R.+Bar%C3%A3o+do+Rio+Branco,+62+-+Ch%C3%A1cara+Labronci,+Boituva+-+SP,+18550-000/@-23.2864214,-47.6788857,17z/data=!4m15!1m8!3m7!1s0x94c5e22d47f87761:0x1bf093d8ddc6af13!2sR.+Bar%C3%A3o+do+Rio+Branco,+62+-+Ch%C3%A1cara+Labronci,+Boituva+-+SP,+18550-000!3b1!8m2!3d-23.2864263!4d-47.6763108!16s%2Fg%2F11c2dlwmbr!3m5!1s0x94c5e22d47f87761:0x1bf093d8ddc6af13!8m2!3d-23.2864263!4d-47.6763108!16s%2Fg%2F11c2dlwmbr?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D')}>Localização</ButtonLocal>
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
                <p>“Tente mover o mundo – primeiro passo será mover a si mesmo.”</p>
                <p> Platão </p>
            </Poem>
            <Information>
                <img src={Coluna} />

                <div>
                    <p>A quiropraxia é uma abordagem terapêutica que
                        utiliza técnicas manuais para tratar e prevenir problemas do sistema
                        neuro-músculo-esquelético. O objetivo é realinhar a coluna vertebral
                        e outras articulações, o que pode ajudar a aliviar dores, melhorar a
                        mobilidade e promover o bem-estar geral.
                    </p>
                </div>
                <div><p> A acupuntura a laser, também conhecida
                    como laserpuntura, é uma técnica que utiliza laser de baixa
                    intensidade para estimular pontos do corpo, em vez de agulhas.
                    Combina a sabedoria da medicina chinesa com a tecnologia. A técnica
                    é baseada na estimulação de pontos específicos dos meridianos do
                    corpo, com o objetivo de liberar neurotransmissores e outras
                    substâncias para tratar problemas de saúde.</p></div>
                <img src={secondImg} />
            </Information>
            <Bottom>
                <div>
                    <Local onClick={() => window.location.assign('https://www.google.com.br/maps/place/R.+Bar%C3%A3o+do+Rio+Branco,+62+-+Ch%C3%A1cara+Labronci,+Boituva+-+SP,+18550-000/@-23.2864214,-47.6788857,17z/data=!4m15!1m8!3m7!1s0x94c5e22d47f87761:0x1bf093d8ddc6af13!2sR.+Bar%C3%A3o+do+Rio+Branco,+62+-+Ch%C3%A1cara+Labronci,+Boituva+-+SP,+18550-000!3b1!8m2!3d-23.2864263!4d-47.6763108!16s%2Fg%2F11c2dlwmbr!3m5!1s0x94c5e22d47f87761:0x1bf093d8ddc6af13!8m2!3d-23.2864263!4d-47.6763108!16s%2Fg%2F11c2dlwmbr?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D')} />
                    <p onClick={() => window.location.assign('https://www.google.com.br/maps/place/R.+Bar%C3%A3o+do+Rio+Branco,+62+-+Ch%C3%A1cara+Labronci,+Boituva+-+SP,+18550-000/@-23.2864214,-47.6788857,17z/data=!4m15!1m8!3m7!1s0x94c5e22d47f87761:0x1bf093d8ddc6af13!2sR.+Bar%C3%A3o+do+Rio+Branco,+62+-+Ch%C3%A1cara+Labronci,+Boituva+-+SP,+18550-000!3b1!8m2!3d-23.2864263!4d-47.6763108!16s%2Fg%2F11c2dlwmbr!3m5!1s0x94c5e22d47f87761:0x1bf093d8ddc6af13!8m2!3d-23.2864263!4d-47.6763108!16s%2Fg%2F11c2dlwmbr?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D')}>
                        R. Barão do Rio Branco, 62 - Centro - Boituva - SP - CEP: 18550-000
                    </p >
                </div>
                <div>
                    <Phone onClick={() => window.location.assign('https://api.whatsapp.com/')} />
                    <p onClick={() => window.location.assign('https://api.whatsapp.com/')} >  (15) 98130-9043
                    </p>
                </div>
                <div>
                    <Calendar onClick={() => window.location.assign('https://api.whatsapp.com/')}/>
                        <p onClick={() => window.location.assign('https://api.whatsapp.com/') }>
                            Terça - feira e Quarta-feira 08h às 13h | Sábado 13h às 18h
                </p>
            </div>
            <Insta>
                <img src={InstagramIcon} onClick={() => window.location.assign('https://www.instagram.com/salusterapias15/')} />

                <a onClick={() => window.location.assign('https://www.instagram.com/salusterapias15/')}>
                    Siga-nos no Instagram
                </a>
            </Insta>
        </Bottom>
        </Container >

  )
}
export default HomePage
