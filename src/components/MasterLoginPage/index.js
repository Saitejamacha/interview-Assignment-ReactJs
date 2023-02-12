import {useNavigate, Link} from 'react-router-dom'
import {useState} from 'react'

import {
  LoginContainer,
  LoginFormContainer,
  InputContainer,
  Label,
  UserName,
  Password,
  LoginButton,
  DirectionText,
} from './styledComponents'

const MasterLoginPage = () => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const onChangeUserName = event => setUserName(event.target.value)

  const onChangePassword = event => setPassword(event.target.value)

  const onClickSubmit = event => {
    event.preventDefault()

    const allMasters = JSON.parse(localStorage.getItem('masterEntry'))
    // console.log(allMasters)

    const activeMaster = allMasters.filter(
      eachMaster =>
        eachMaster.userName === userName && eachMaster.password === password,
    )
    console.log(activeMaster)
    if (activeMaster.length === 1) {
      console.log('ok')
      navigate('/Master-Session-Page')
    } else {
      alert('Please login')
    }
  }

  //   const onClear = () => {
  //     localStorage.clear()
  //   }

  return (
    <LoginContainer>
      <LoginFormContainer onSubmit={onClickSubmit}>
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

        <LoginButton type="submit">LogIn</LoginButton>

        <Link to="/Master-SignUp">
          {/* <LoginButton onClick={onClear} type="submit">
            Clear
          </LoginButton> */}
          <DirectionText>Create Account</DirectionText>
        </Link>
      </LoginFormContainer>
    </LoginContainer>
  )
}

export default MasterLoginPage
