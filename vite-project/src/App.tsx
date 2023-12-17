import { useState } from "react"
import EditorJson from "./EditorJson";
import { getSchema } from "./getShema";

function App() {
  const [inputValue, setInputValue] = useState('');

  const handlerClick = () => {
    getSchema(inputValue);
    console.log('endpoint', inputValue)
  }
  return (
    <>
      <div>
        <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button onClick={handlerClick}>change api</button>
        </div>
        <div className='Editors'>
          <EditorJson  endpoint={inputValue}/>
        </div>
      </div>

    </>
  )
}

export default App
