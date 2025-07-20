
import { useState } from "react"
import ArafatCombo from "./Components/ArafatCombo"
import HelloCompo from "./Components/HelloCompo"
import Maruf from "./Components/Maruf";
import Users from "./Components/Users";

function App() {
  const [num, setNum] = useState(0)
  const [text, setText] = useState("Hello World");
  const [stName, setStName] = useState("Arafat");
  const [maruf, setMaruf] = useState("Dhaka");

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
        <ArafatCombo stName={stName} setStName={setStName} university="Toto" />

        <div className="flex items-center justify-center mt-4">
          <button className="bg-blue-500 text-white rounded px-4 py-2" onClick={() => setNum(num + 1)} >+</button>
          <span className="mx-2">{num}</span>
          <button className="bg-blue-500 text-white rounded px-4 py-2" onClick={() => num == 0 ?  0:setNum(num - 1)}>-</button>
        </div>
        
        <div className="text-4xl mb-2">
          {text}
        </div>
        <button onClick={() => setText("Hello Universe")} className="border rounded px-4 py-2 mr-2">Hello Universe</button>
        <button onClick={() => setText("Hello World")} className="border rounded px-4 py-2">Hello World</button>
        <Maruf maruf={maruf} setMaruf={setMaruf} />
        
        <Users num={num} /> 
      </div>
    </>
  )
}

export default App
