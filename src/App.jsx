import { useRecoilValue } from "recoil";
import { counterAtom } from "./store/atom/count";
import { useSetRecoilState } from "recoil";

function App() {
  return (
    <div>

        <Count />
     
    </div>
  )
}

function Count() {
  console.log("re-render");
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
const count = useRecoilValue(counterAtom)
  
  return <div>
    <b>
      {count}
    </b>

   
  </div>
}

function EvenNumber(){
const count = useRecoilValue(counterAtom)

  return(<>

    {count%2==0?<span>the number is Even</span>:<span>  </span>}
  </>
  )
}

function Buttons() {
 const setCount = useSetRecoilState(counterAtom)
  console.log("buttons re-rendererd");

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
<br />
<span>

<EvenNumber/>
   </span>
  </div>
}

export default App
