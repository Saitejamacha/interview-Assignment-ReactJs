import styled from 'styled-components'

export const MathContainer = styled.div`
  width: 35vw;
  min-height: ${props => (props.student ? '40vh' : '11vh')};
  max-height: ${props => (props.student ? '60vh' : '22vh')};
  background-color: #4f6e6a;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  margin-bottom: 90px;
  overflow-y: scroll;
  & .mostly-customized-scrollbar::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: lightblue #aaa; /* or add it to the track */
  }
`

export const Heading = styled.label`
  font-size: ${props => (props.nothingText ? '20px' : '15px')};
  font-family: roboto;
  color: white;
  align-self: ${props => (props.masterText ? 'flex-start' : 'center')};
  margin-left: 20px;
  color: ${props => (props.masterText ? 'white' : 'white')};
`

export const List = styled.li`
  font-size: 15px
  font-family: roboto;
  color: ${props => (props.masterText ? 'white' : 'white')};
  list-style-type:none;

`
