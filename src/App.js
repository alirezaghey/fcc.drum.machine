import Keypad from "./components/keypad/Keypad";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("");
  return (
    <div>
      <div id="drum-machine" className=" w-80 m-auto flex">
        <div className="w-3/5 ">
          <Keypad className="one" setDisplay={setDisplay} />
        </div>
        <div id="display" className="w-1/4 m-auto p-2 text-center rounded-md">
          {display}
        </div>
      </div>
    </div>
  );
}

export default App;
