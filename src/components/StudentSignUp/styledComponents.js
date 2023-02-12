import styled from 'styled-components'

export const SgnUpContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(purple, #cdff87);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const SignUpFormContainer = styled.form`
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
export const ButtonContainer = styled.div`
  width: 22vw;
  height: 12vh;
  //   background-color: lightblue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  margin-top: -15px;
  margin-bottom: 10px;
`

export const SignUpButton = styled.button`
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
  margin-top: -10px;
`
export const MesgText = styled.p`
  font-size: 15px;
  font-family: roboto;
  color: red;
  background-color: white;
`
export const SuccessText = styled.p`
  font-size: 15px;
  font-family: roboto;
  color: green;
  background-color: white;
`
