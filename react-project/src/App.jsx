
import { useState } from "react"
import ArafatCombo from "./Components/ArafatCombo"
import HelloCompo from "./Components/HelloCompo"

function App() {
  const [num, setNum] = useState(0)


  const paraCss = {
    color: 'green',
    fontSize: '20px',
    fontWeight: 'normal',
    fontStyle: 'italic',
  }

  return (
    <>
      <div className="container mx-auto">
        <h1 style={{ color: 'blue', fontSize: '32px', fontWeight: 'bold' }}>Hello World!</h1>
        <p style={paraCss}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum sint, quibusdam magnam cum reiciendis aut enim, eveniet voluptate quis ratione quae dolor, alias quaerat. Culpa, maiores. Expedita sequi ea aut?
        </p>
        <HelloCompo />
        <ArafatCombo name="Apurba" university="Toto" />
        <ArafatCombo name="Sagar" university="Rajshahi" />

        <div className="flex items-center justify-center mt-4">
          <button className="bg-blue-500 text-white rounded px-4 py-2" onClick={() => setNum(num + 1)} >+</button>
          <span className="mx-2">{num}</span>
          <button className="bg-blue-500 text-white rounded px-4 py-2" onClick={() => num == 0 ?  0:setNum(num - 1)}>-</button>
        </div>
      </div>
    </>
  )
}

export default App
