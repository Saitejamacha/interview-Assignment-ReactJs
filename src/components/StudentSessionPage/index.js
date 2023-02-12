import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import DisplayMath from '../DisplayMath'
import {
  SessionPageContainer,
  FormContainer,
  MathInputContainer,
  Label,
  QuestionInput,
  Button,
} from './styledComponents'

const MasterSessionPage = () => {
  const navigate = useNavigate()
  const onClickLogoutBtn = () => {
    navigate('/Student-SignIn')
  }

  return (
    <SessionPageContainer>
      <Button logoutBtn type="submit" onClick={onClickLogoutBtn}>
        Logout
      </Button>
      <DisplayMath />
    </SessionPageContainer>
  )
}
export default MasterSessionPage
