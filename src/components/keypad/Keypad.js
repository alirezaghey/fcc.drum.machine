import Key from "./Key";
import keyJSON from "../../fixtures/keypads.json";

export default function Keypad({ setDisplay }) {
  return (
    <div className="flex flex-wrap justify-evenly">
      {keyJSON.map((el) => (
        <Key
          key={el.name}
          name={el.name}
          audio={el.audio}
          code={el.code}
          setDisplay={setDisplay}
        />
      ))}
    </div>
  );
}
