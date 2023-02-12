import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import DisplayMath from '../DisplayMath'
import {
  SessionPageContainer,
  FormContainer,
  MathInputContainer,
  Label,
  QuestionInput,
  ButtonContainer,
  Button,
  Heading,
} from './styledComponents'

const MasterSessionPage = () => {
  const navigate = useNavigate()
  const [masterInput, setQuestionInput] = useState('')
  const [questions, setAllQuestions] = useState([])
  const [noUse, setNotUse] = useState([])

  const onChangeInput = event => {
    setQuestionInput(event.target.value)
  }

  //   function containsUppercase(str) {
  //     return /[A-Z]/.test(str)
  //   }
  //   const alphaCheck = containsUppercase('masterInput')

  //   if (alphaCheck) {
  //     alert('!Error:  All Letters Should Be lower Case ')
  //   }

  const onSubmitQuestion = event => {
    event.preventDefault()

    if (masterInput !== '') {
      const appCondition = masterInput.endsWith(')))')

      console.log(appCondition)

      if (appCondition === true) {
        const allQuestions = [...questions, masterInput]
        setAllQuestions(allQuestions)
      } else {
        const noPresence = [...noUse, masterInput]
        setNotUse(noPresence)
        //
      }
      setQuestionInput('')

      const get = JSON.parse(localStorage.getItem('get')) || []
      if (appCondition === true) {
        get.push({masterInput})
      } else {
        alert('Please Enter Valid Input like seven(times(five()))')
      }

      localStorage.setItem('get', JSON.stringify(get))
      const take = JSON.parse(localStorage.getItem('get'))
    }
  }

  return (
    <SessionPageContainer>
      <Heading>Master Dashboard</Heading>
      <Link to="/" style={{textDecoration: 'none'}}>
        <ButtonContainer>
          <Button logoutBtn type="submit">
            Logout
          </Button>
        </ButtonContainer>
      </Link>

      <FormContainer onSubmit={onSubmitQuestion}>
        <MathInputContainer>
          <Label htmlFor="Question">Question</Label>
          <QuestionInput
            value={masterInput}
            placeholder="Enter your Question like seven(times(five()))"
            id="Question"
            type="text"
            onChange={onChangeInput}
          />
        </MathInputContainer>
        <Button type="submit">ADD</Button>
      </FormContainer>
      <DisplayMath />
    </SessionPageContainer>
  )
}
export default MasterSessionPage
