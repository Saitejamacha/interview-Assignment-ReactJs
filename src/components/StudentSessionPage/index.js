import {useState} from 'react'
import {Link} from 'react-router-dom'
import DisplayMath from '../DisplayMath'
import {
  SessionPageContainer,
  FormContainer,
  MathInputContainer,
  Heading,
  Label,
  QuestionInput,
  Button,
  ButtonContainer,
} from './styledComponents'

const MasterSessionPage = () => (
  <SessionPageContainer>
    <Heading>Student Dashboard</Heading>
    <Link to="/" style={{textDecoration: 'none'}}>
      <ButtonContainer>
        <Button logoutBtn type="submit">
          Logout
        </Button>
      </ButtonContainer>
    </Link>

    <DisplayMath />
  </SessionPageContainer>
)

export default MasterSessionPage
