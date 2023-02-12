import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: lightblue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(#ffe605, #6f18f2);
`
export const StudentLoginCard = styled.div`
  width: 45vw;
  height: 30vh;
  text-align: center;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  @media (min-width: 768px) {
    width: 20vw;
    height: 30vh;
  }
`

export const MasterLoginCard = styled.div`
  width: 45vw;
  height: 30vh;
  background-color: white;
  border-radius: 15px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  @media (min-width: 768px) {
    width: 20vw;
    height: 30vh;
  }
`

export const LoginText = styled.h1`
  font-size: 25px;
  font-family: Roboto;
`
