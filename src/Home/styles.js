import styled from 'styled-components'
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded'
import PermPhoneMsgRoundedIcon from '@mui/icons-material/PermPhoneMsgRounded'
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded'

export const Container = styled.div`
height: 100%;
width: 100%;
box-sizing: border-box;
font-family: "Roboto Flex", sans-serif;
background: rgb(255,246,237);
background: linear-gradient(90deg, rgba(255,246,237,1) 0%, rgba(244,255,248,1) 56%, rgba(228,239,245,1) 100%);
display: flex;
flex-direction: column;
gap: 10px;
`
export const Left = styled.div`
display:flex;
flex-direction: column;
justify-content:start;
align-items: center;
gap:20px;
h1{
  margin-top: 40px;
    font-size: 30px;
    color:#01002a;

}
p{
    color: #020046;
}
`
export const Head = styled.h1`
display:flex;
flex-direction: row;
justify-content: space-around;
img{
    width: 170px;
    clip-path: circle(55%);
}
p{
    font-size: 20px;
}
border-bottom: 1px solid #cdf3fa;
box-shadow: 1px;
`
export const Right = styled.div`
display:flex;
flex-direction: row;
justify-content: end;
align-items: center;
gap: 30px`

export const Div = styled.div`
.rec.rec-arrow {
    margin-right: 40px;
    margin-left: 40px;
    background:#78a4a0;
    border: none;
    color: #cde2c6;
  }
.rec.rec-arrow:hover {
    cursor: pointer;
    border: 6px solid #cde2c6;
    background-color: #78a4a0;
  }
.rec-carousel-item:focus {
    outline: none;
    box-shadow:#78a4a0;
}
.rec-dot_active {
    background-color:#cde2c6;
    box-shadow:  #78a4a0;
}
.rec-dot_active:focus,
.rec-dot_active:hover {   
    background-color:#cde2c6;
    box-shadow:  #78a4a0;
}
`
export const ButtonAgenda = styled.button`
padding: 15px;
  height: 50px;
  background-color: #007da7;
  color: #f4f4f4;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 50px;
  color: #305f75;
  border: 2px solid #4f94b4;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #4f94b4;
    color: white;
  }`

export const ButtonLocal = styled.button`
padding: 15px;
  height: 50px;
  background-color: #007da7;
  color: #f4f4f4;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 50px;
  color: #305f75;
  border: 2px solid #4f94b4;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #4f94b4;
    color: white;
  }`
export const Poem = styled.div`
padding: 70px;
display: flex;
flex-direction: column;
align-items: center;
font-size: 25px;
font-style: italic;
`
export const Information = styled.div`
display:grid;
grid-template-columns: 50% 50%;
grid-row-gap: 20px;
justify-content: center;
align-self: center;
gap: 10px;
margin-right: 22px;  
img{
    width: 720px;
    clip-path: circle(50%);
}

div{
display: flex;
justify-content: center;
align-items: center;
width: 720px;
background: rgb(244,254,217);
background: radial-gradient(circle, rgba(244,254,217,1) 0%, rgba(210,244,255,1) 100%);
clip-path: circle(60%);}

p{
padding: 20px;
font-size:30px;
text-align: center;
color:#01002a;
font-weight: 400;
}`
export const Bottom = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding:50px;
  width: 100%;
  font-size: 15px;
  border-top: 1px solid #cdf3fa;
  box-shadow: 1px;

  p{
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
export const Phone = styled(PermPhoneMsgRoundedIcon)`
&:hover{  
  transition: 0.5s all ease-out;
    cursor: pointer;
    color: #20cd40;
}
&:active{
    color: #71f489;
}`

export const Calendar = styled(CalendarMonthRoundedIcon)`
&:hover{
  
  transition: 0.5s all ease-out;
  color: #9059ae;
}
`
export const Insta = styled.div`
display: flex;
flex-direction: column;
img{
  
  width: 30px;
  &:hover{
    
  transition: 0.5s all ease-out;
    cursor: pointer;
    color: #000e81;
    text-decoration: underline;
  }
}
a{
  &:hover{
    
  transition: 0.5s all ease-out;
    cursor: pointer;
    color: #000e81;
    text-decoration: underline;

  }
}
`
