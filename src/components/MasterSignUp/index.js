import {useState} from 'react'
import {Link} from 'react-router-dom'

import {
  SgnUpContainer,
  SignUpFormContainer,
  InputContainer,
  Label,
  UserName,
  Password,
  ButtonContainer,
  SignUpButton,
  DirectionText,
  MesgText,
  SuccessText,
} from './styledComponents'

const MasterSignUp = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [statusText, setStatus] = useState('')
  const [successText, setSuccessStatus] = useState('')
  const [isUserSignUp, setLogInRoute] = useState(false)

  const onChangeUserName = event => setUserName(event.target.value)

  const onChangePassword = event => setPassword(event.target.value)

  const onClickSubmitSignUp = event => {
    event.preventDefault()

    if (!userName || !password) {
      setStatus('*Please Enter all Input Fields*')
    } else {
      const listOfMasters =
        JSON.parse(localStorage.getItem('masterEntry')) || []

      const masterDetails = listOfMasters.filter(
        eachMaster => eachMaster.userName === userName,
      )
      console.log(masterDetails.length)
      if (masterDetails.length === 1) {
        setStatus('Username already exists.Choose some other')
      } else {
        listOfMasters.push({userName, password})
        localStorage.setItem('masterEntry', JSON.stringify(listOfMasters))
        setLogInRoute(prevState => !prevState)
        setSuccessStatus('Account Created SuccessFully')
      }
    }
  }

  return (
    <SgnUpContainer>
      <SignUpFormContainer onSubmit={onClickSubmitSignUp}>
        <InputContainer>
          <Label htmlFor="userName">UserName</Label>
          <UserName
            onChange={onChangeUserName}
            value={userName}
            placeholder="Enter your Username"
            id="userName"
            type="text"
          />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="password">Password</Label>
          <Password
            onChange={onChangePassword}
            value={password}
            placeholder="Password"
            id="password"
            type="password"
          />
        </InputContainer>

        {isUserSignUp ? (
          <SuccessText isUserSignUp>{successText}</SuccessText>
        ) : (
          <MesgText>{statusText}</MesgText>
        )}
        <ButtonContainer>
          {isUserSignUp && (
            <Link to="/Master-SignIn">
              <SignUpButton type="submit">SignIn</SignUpButton>
            </Link>
          )}
          <SignUpButton type="submit">SignUp</SignUpButton>
        </ButtonContainer>
        {/* <MesgText >{statusText}</MesgText> */}
        <Link to="/Master-SignIn">
          <DirectionText>Already Have Account</DirectionText>
        </Link>
      </SignUpFormContainer>
    </SgnUpContainer>
  )
}

export default MasterSignUp
