import ErrorExample from "./tutorial/1-useState/1-error-example/ErrorExample";
import UseStateBasic from "./tutorial/1-useState/2-useState-basic/UseStateBasic"
import UseStateArray from "./tutorial/1-useState/3-useState-array/UseStateArray";
import UseStateObject from "./tutorial/1-useState/4-useState-object/UseStateObject";
import UseStateCounter from "./tutorial/1-useState/5-useState-counter/UseStateCounter";
import UseEffectBasic from "./tutorial/2-useEffect/1-useEffect-basic/UseEffectBasic";
import UseEffectCleanUp from "./tutorial/2-useEffect/2-useEffect-cleanup/UseEffectCleanUp";
import UseEffectFetchData from "./tutorial/2-useEffect/3-useEffect-fetch-data/UseEffectFetchData";

function App() {
  return (
    <div>
      {/* <ErrorExample /> */}
      {/* <UseStateBasic /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <UseStateCounter /> */}
      {/* <UseEffectBasic /> */}
      {/* <UseEffectCleanUp /> */}
      <UseEffectFetchData />
    </div>
  );
}

export default App;
