import { useDispatch, useSelector } from "react-redux";
import { increment } from "redux/slices/counterSlice";
import TestChatWidget from "TestChatWidget";
import "./App.css";
import reactLogo from "./assets/react.svg";

function App() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <TestChatWidget />
      <div>
        {/* To see the deployment is changing or not */}
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
