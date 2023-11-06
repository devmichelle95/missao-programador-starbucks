import styled from 'styled-components'

export const Container = styled.div`
padding: 0;
margin: 0;
font-family: 'Open Sans', sans-serif;
background-color:#FFFAFA;
display: flex;
flex-direction: column;
gap: 10px;
`

export const Left = styled.div`
display:flex;
flex-direction: row;
justify-content:start;
align-items: center;
gap:20px;`

export const Head = styled.h1`
display:flex;
flex-direction: row;
justify-content: space-around;
img{
    width: 50px;
}
a{
    font-size: 20px;
    cursor: pointer;
    &:hover {
        color:#037f40;
    }
}
border-bottom: 0.5px solid #F0F8FF;
box-shadow: 1px;
`
export const Right = styled.div`
display:flex;
flex-direction: row;
justify-content: end;
align-items: center;
gap: 20px`

export const Div = styled.div`
.rec.rec-arrow {
    background: #bebebf;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0.2));
    border: none;
    color: #efefef;
  }
  .rec.rec-arrow:hover {
    cursor: pointer;
    border: 10px solid #efefef;
    background-color: #efefef;
  }
  .rec.rec-arrow:disabled {
    visibility: hidden;
}
    .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
}
`

export const ButtonLogin = styled.button`
width: 80px;
height: 30px;
background-color:#ffffff;
color:black;
border-radius:60px;
font-size: 15px;
font-weight:bold;
cursor: pointer;
&:hover{
    transform: scale(0.75);
    transition: all 0.5s;
}`

export const ButtonSignin = styled.button`
width: 90px;
height: 30px;
background-color: black;
color:#ffffff;
border-radius:60px;
font-size: 15px;
font-weight:bold;
cursor: pointer;
&:hover{
transform: scale(0.75);
transition: all 0.5s;
}`

export const Poem = styled.div`
width: 1420px;
padding: 10px;
margin-left: 15px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #d3e4dc;
font-style: italic;
font-weight: bold;

`

export const Information = styled.div`
display:grid;
grid-template-columns: 50% 50%;
grid-row-gap: 20px;
justify-content: center;
align-self: center;
margin-right: 22px;
img{
    width: 720px;
}

div{
display: flex;
justify-content: center;
align-items: center;
width: 720px;
background-color: #d3e4dc;}

p{
margin-left: 20px;
font-style: italic;
font-weight: bold;
}`
