import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Draggable from './Draggable.tsx'
import Droppable from './Droppable.tsx'
import ToDo from './ToDo.tsx';
import { useEffect} from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [turns, setTurns] = useState(0);
    console.log("before useeffect");
    useEffect(() => {
        //const divides = document.querySelectorAll('.Droppable');
        console.log("called");
        if (turns == 0) {
            const smells = document.querySelectorAll('.drag');
            //divides.forEach((divide) => { divide.addEventListener('mouseover', (event) => { event.preventDefault(); console.log(event.clientX); }) });
            smells.forEach((smell) => { smell.addEventListener('click', () => { console.log("Clicked"); }) });
            setTurns(1);
            console.log("Inside if statement" + turns);
        }
        console.log(turns);

    })
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className="subbuts" onClick={()=>setCount(count+1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
          </p>
    <ToDo/>
    <div className="jambo">
          <Draggable>the new item</Draggable>  
          <Droppable drags={["Aby", "Songa"]}></Droppable>
          <Droppable drags={['noone','comoestas'] }></Droppable>
          <Droppable drags={['lala']}></Droppable>
     </div>
    </>
  )
}
export default App
