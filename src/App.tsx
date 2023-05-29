import { useState } from "react";

const App = () => {
  const [color, setColor] = useState<string>("");
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <div
          className={`w-[330px] h-[330px] border border-black flex justify-center`}
          style={{ backgroundColor: color }}
        >
          {color === "" ? "Empty" : color}
        </div>
        <input
          placeholder="Enter your a color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="border border-black"
        />
      </div>
    </>
  );
};
export default App;
