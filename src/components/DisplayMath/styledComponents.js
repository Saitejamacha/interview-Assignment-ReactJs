import styled from 'styled-components'

export const MathContainer = styled.div`
  width: 80vw;
  height: ${props => (props.student ? '80vh' : '20vh')};
  margin-top: ${props => (props.student ? '20px' : '0px')};
  background-color: #4f6e6a;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 90px;
  overflow-y: scroll;
  & ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    width: 40vw;
    height: ${props => (props.student ? '80vh' : '20vh')};
  }
`

export const Heading = styled.label`
  font-size: ${props => (props.nothingText ? '30px' : '25px')};
  font-family: roboto;
  color: white;
  align-self: ${props => (props.masterText ? 'flex-start' : 'center')};
  margin-left: 20px;
  color: ${props => (props.masterText ? 'white' : 'white')};
  @media (min-width: 768px) {
    font-size: ${props => (props.nothingText ? '30px' : '25px')};
  }
`

export const List = styled.li`
  margin-top: 10px;
  font-size: ${props => (props.masterText ? '20px' : '20px')};
  font-family: roboto;
  color: ${props => (props.masterText ? 'white' : 'white')};
  list-style-type: none;
  @media (min-width: 768px) {
    font-size: ${props => (props.masterText ? '20px' : '20px')};
  }
`
