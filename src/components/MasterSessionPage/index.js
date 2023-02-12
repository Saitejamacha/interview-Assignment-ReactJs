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
  const [masterInput, setQuestionInput] = useState('')
  const [questions, setAllQuestions] = useState([])
  const [noUse, setNotUse] = useState([])

  const onChangeInput = event => {
    setQuestionInput(event.target.value)
  }
  const onClickLogoutBtn = () => {
    navigate('/Master-SignIn')
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
      <Button logoutBtn type="submit" onClick={onClickLogoutBtn}>
        Logout
      </Button>
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
