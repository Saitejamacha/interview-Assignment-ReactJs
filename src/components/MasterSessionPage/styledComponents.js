import styled from 'styled-components'

export const SessionPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(#cdff87, #d9fffa);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`
export const ButtonContainer = styled.div`
  width: 100vw;
  height: 10vh;
  //   background-color: lightblue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin-top: -20px;
`
export const Heading = styled.h1`
  font-size: 35px;
  font-family: Roboto;
  color: #4f6e6a;
`
export const FormContainer = styled.form`
  width: 80vw;
  height: 35vh;
  background-color: #4f6e6a;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 25px;
  margin-top: 20px;
  padding-bottom: 10px;
  @media (min-width: 768px) {
    width: 40vw;
    height: 35vh;
  }
`
export const MathInputContainer = styled.div`
  width: 35vw;
  height: 12vh;
  //   background-color: lightblue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 30px;
`

export const QuestionInput = styled.input`
  width: 70vw;
  height: 40px;
  border-radius: 5px;
  background-color: white;
  border: 0px;
  font-size: 16px;
  outline: none;
  padding-left: 10px;
  color: black;
  @media (min-width: 768px) {
    width: 22vw;
    height: 40px;
  }
`

export const Button = styled.button`
  width: 20vw;
  height: 40px;
  background-color: ${props => (props.logoutBtn ? '#4f6e6a' : '#cdff87')};
  border: 0px;
  margin-top: 10px;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  align-self: ${props => (props.logoutBtn ? 'flex-end' : 'center')};
  margin-right: 20px;
  color: ${props => (props.logoutBtn ? '#ffffff' : 'black')};
  @media (min-width: 768px) {
    width: 8vw;
    height: 40px;
  }
`
export const Label = styled.label`
  font-size: 15px;
  font-family: roboto;
  color: white;
  align-self: flex-start;
  margin-left: 20px;
`
