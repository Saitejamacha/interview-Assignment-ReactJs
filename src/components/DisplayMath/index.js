/*eslint-disable*/

import {MathContainer, Heading, List} from './styledComponents'

const DisplayMath = () => {
  const local = JSON.parse(localStorage.getItem('get'))
  console.log(local)

  //   for (let i of local){
  //        console.log(i, i.typeof)
  //   }

  const zero = operation => (!operation ? 0 : operation(0))
  const one = operation => (!operation ? 1 : operation(1))
  const two = operation => (!operation ? 2 : operation(2))
  const three = operation => (!operation ? 3 : operation(3))
  const four = operation => (!operation ? 4 : operation(4))
  const five = operation => (!operation ? 5 : operation(5))
  const six = operation => (!operation ? 6 : operation(6))
  const seven = operation => (!operation ? 7 : operation(7))
  const eight = operation => (!operation ? 8 : operation(8))
  const nine = operation => (!operation ? 9 : operation(9))
  const plus = number => otherNum => otherNum + number
  const minus = number => otherNum => otherNum - number
  const times = number => otherNum => otherNum * number
  const dividedBy = number => otherNum => otherNum / number

  //   const foo = Function(
  //     return foo
  //   )

  const renderMathTable = () =>
    local.map((item, index) => (
      <List masterText className="list" key={index}>
        {item.masterInput} : {eval(item.masterInput)}
      </List>
    ))

  return (
    <MathContainer student>
      <Heading  masterText>Master Activity List:</Heading>
      {local !== null ? (
        renderMathTable()
      ) : (
        <Heading nothingText>There is Nothing To Show</Heading>
      )}
    </MathContainer>
  )
}

export default DisplayMath
