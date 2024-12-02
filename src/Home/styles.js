import styled from 'styled-components'
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded'
import PermPhoneMsgRoundedIcon from '@mui/icons-material/PermPhoneMsgRounded'
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded'

export const Container = styled.div`
width: 100vw;
font-family: "Roboto Flex", sans-serif;
background: linear-gradient(90deg, rgba(255,246,237,1) 0%, rgba(244,255,248,1) 56%, rgba(228,239,245,1) 100%);
display: flex;
flex-direction: column;
`
export const Head = styled.h1`
display:flex;
flex-direction: row;
justify-content: space-around;
border-bottom: 1px solid #cdf3fa;
box-shadow: 1px;
img{
  max-width:200px;
    max-height:150px;
    min-width: 80px;
    min-height: 30px;
    object-fit: scale-down;
    clip-path: circle(45%);
}
`
export const Left = styled.div`
display:flex;
flex-direction: column;
justify-content:start;
align-items: center;
gap:20px;
margin-top: 2%;
h1{
  font-size: clamp(0.3em, 5vw, 2rem);
  text-align: center;
  color:#01002a;

}
p{
  font-size: clamp(0.1em, 3vw, 1rem);
  text-align: center;
    color: #020046;
}
`

export const Right = styled.div`
margin-right: 2%;
display:flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`

export const Div = styled.div`
display: flex;
flex:100px 1 1;
margin-top: 2%;
.rec.rec-arrow {
  width: 1px;
  min-width: 0.1px;
  visibility: hidden;
}
.rec.rec-pagination{
  display: flex;
  flex-direction: row;
  min-width: 2px;
}
.rec.rec-dot {
min-width: 2%;
transition: all 0.3s #d2efd7;
&:hover{
 background-color:#cdf3fa;
    } 
&:active{
    
    background-color:#cdf3fa;
    }
}

`
export const ButtonAgenda = styled.button`
min-width: 5%;
    max-width: 113%;
    padding: 8%;
  background-color: #007da7;
  color: #f4f4f4;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  background: transparent;
  font-size: clamp(0.1em, 3vw, 1.1rem);
  border-radius: 50px;
  color: #305f75;
  border: 2px solid #4f94b4;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #4f94b4;
    color: white;
  }`

export const ButtonLocal = styled.button`
min-width: 5%;
    max-width: 113%;
    padding: 8%;
  background-color: #007da7;
  color: #f4f4f4;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  background: transparent;
  font-size: clamp(0.1em, 3vw, 1.1rem);
  border-radius: 50px;
  color: #305f75;
  border: 2px solid #4f94b4;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #4f94b4;
    color: white;
  }`
export const Poem = styled.div`
padding: 5%;
display: flex;
flex-direction: column;
align-items: center;
font-size: clamp(1em, 3vw, 2rem);
text-align: center;
font-style: italic;
`
export const Information = styled.div`
display:grid;
grid-template-columns: repeat(2, 50%);
margin-right: 0.5%;
row-gap:2% ;
justify-items: center;
padding: 2%;
img{
    width: 80%;
    clip-path: circle(50%);
    justify-self: center;
    align-self: center;

}

div{
display: flex;
justify-content: center;
align-items: center;
width:80%;
background: rgb(244,254,217);
background: radial-gradient(circle, rgba(244,254,217,1) 0%, rgba(210,244,255,1) 100%);
clip-path: circle(60%);}

p{
padding: 2%;
font-size: clamp(-0.5em, 2.3vw, 4rem);
text-align: center;
color:#01002a;
font-weight: 400;
}`
export const Bottom = styled.div`
  display: grid;
    grid-template-columns: repeat(2, 50%);
    margin-bottom: 5%;
    padding: 3%;
    column-gap: 5%;
    row-gap: 30%;
    font-size: clamp(0.7em, 2vw, 1em);
    justify-content: space-evenly;
    align-items: center;
  border-top: 1px solid #cdf3fa;
  box-shadow: 1px;

  p{
    font-size: clamp(0.7em, 2vw, 1em);
    &:hover{
      
  transition: 0.5s all ease-out;
    cursor: pointer;
    color: #000e81;
    text-decoration: underline;

  }
  }
  
`
export const Local = styled(FmdGoodRoundedIcon)`

&:hover{  
  transition: 0.5s all ease-out;
    cursor: pointer;
    color: #ca000f;
}
&:active{
    color: #d02e3a;
}
`
export const Calendar = styled(CalendarMonthRoundedIcon)`

&:hover{
  
  transition: 0.5s all ease-out;
  color: #9059ae;
}
`
export const Phone = styled(PermPhoneMsgRoundedIcon)`

&:hover{  
  transition: 0.5s all ease-out;
    cursor: pointer;
    color: #20cd40;
}
&:active{
    color: #71f489;
}`

export const Insta = styled.div`
display: flex;
flex-direction: column;
img{
  max-width: 24px;
  min-width: 5px;
  &:hover{
    
  transition: 0.5s all ease-out;
    cursor: pointer;
    color: #000e81;
    text-decoration: underline;
  }
}
a{
  font-size:clamp(0.70em, 2vw, 1em);
  &:hover{
    
  transition: 0.5s all ease-out;
    cursor: pointer;
    color: #000e81;
    text-decoration: underline;

  }
}
`
