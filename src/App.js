// import './App.css'

// // Replace your code here
// const App = () => <h1>Hello World!</h1>

// import {Component} from 'react'
import {Route, Routes} from 'react-router-dom'
import {GlobalStyle} from './styledComponents'
import Home from './components/Home'
import MasterLoginPage from './components/MasterLoginPage'
import MasterSignUp from './components/MasterSignUp'
import MasterSessionPage from './components/MasterSessionPage'
import StudentSignUp from './components/StudentSignUp'
import StudentLoginPage from './components/StudentLoginPage'
import StudentSessionPage from './components/StudentSessionPage'
import './App.css'

// Replace your code here
const App = () => (
  <Routes>
    {/* <GlobalStyle /> */}
    <Route exact path="/" element={<Home />} />
    <Route exact path="/Master-SignUp" element={<MasterSignUp />} />
    <Route exact path="/Master-SignIn" element={<MasterLoginPage />} />
    <Route exact path="/Master-Session-Page" element={<MasterSessionPage />} />
    <Route exact path="/Student-SignUp" element={<StudentSignUp />} />
    <Route exact path="/Student-SignIn" element={<StudentLoginPage />} />
    <Route
      exact
      path="/Student-Session-Page"
      element={<StudentSessionPage />}
    />
  </Routes>
)

export default App
