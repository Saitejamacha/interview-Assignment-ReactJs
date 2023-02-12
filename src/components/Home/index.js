import {Link} from 'react-router-dom'

import {
  AppContainer,
  StudentLoginCard,
  MasterLoginCard,
  LoginText,
} from './styledComponents'

const Home = () => (
  <AppContainer>
    <Link to="/Student-SignIn" style={{textDecoration: 'none'}}>
      <StudentLoginCard>
        <LoginText>Student Login</LoginText>
      </StudentLoginCard>
    </Link>

    <Link to="/Master-SignIn" style={{textDecoration: 'none'}}>
      <MasterLoginCard>
        <LoginText>Master Login</LoginText>
      </MasterLoginCard>
    </Link>
  </AppContainer>
)

export default Home
