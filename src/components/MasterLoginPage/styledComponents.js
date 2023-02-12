import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(#cdff87, #d9fffa);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const LoginFormContainer = styled.form`
  width: 90vw;
  height: 55vh;
  background-color: #4f6e6a;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 40vw;
    height: 55vh;
  }
`
export const InputContainer = styled.div`
  width: 72vw;
  height: 12vh;
  //   background-color: lightblue;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 30px;
  @media (min-width: 768px) {
    width: 22vw;
    height: 12vh;
  }
`

export const UserName = styled.input`
  width: 72vw;
  height: 40px;
  border-radius: 5px;
  background-color: white;
  border: 0px;
  font-size: 16px;
  outline: none;
  padding-left: 10px;
  @media (min-width: 768px) {
    width: 22vw;
    height: 40px;
  }
`
export const Password = styled.input`
  width: 72vw;
  height: 40px;
  border-radius: 5px;
  background-color: white;
  border: 0px;
  font-size: 16px;
  outline: none;
  padding-left: 10px;
  @media (min-width: 768px) {
    width: 22vw;
    height: 40px;
  }
`
export const LoginButton = styled.button`
  width: 20vw;
  height: 40px;
  background-color: #cdff87;
  border: 0px;
  margin-top: 10px;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  @media (min-width: 768px) {
    width: 8vw;
    height: 40px;
  }
`
export const Label = styled.label`
  font-size: 15px;
  font-family: roboto;
  color: white;
`
export const DirectionText = styled.p`
  font-size: 20px;
  font-family: roboto;
  color: lightblue;
  text-decoration: underline;
`
