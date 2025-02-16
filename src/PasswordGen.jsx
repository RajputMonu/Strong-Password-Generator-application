import { useState } from "react";
import { LC, NC, SC, UC } from "./data/PassChar";

function PasswordGen() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  //   const [checkbox, setCheckbox] = useState({
  //     uppercase: false,
  //     lowercase: false,
  //     number: false,
  //     symbols: false,
  //   });
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);

  let generatePassword = () => {
    let characters = "";
    if (uppercase) characters += UC;
    if (lowercase) characters += LC;
    if (symbols) characters += SC;
    if (number) characters += NC;

    if (!characters.length) {
      setPassword("Select at least one option!");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      newPassword += characters[Math.floor(Math.random() * characters.length)];
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="bg-green-500 w-96 text-center mx-auto mt-38 text-white rounded-xl hover:shadow-lg shadow-gray-500 p-3">
      <h1 className="font-medium text-2xl p-3 border-b border-white w-full h-fit">
        Password Generator
      </h1>
      <div className="flex gap-2 my-3">
        <input
          type="text"
          value={password}
          readOnly
          className="flex basis-[80%] border-2 rounded-lg outline-none focus:border-purple-600 px-2"
        />
        <button
          onClick={copyToClipboard}
          className="basis-[20%] bg-white text-black px-3 py-1.5 rounded-lg cursor-pointer"
        >
          Copy
        </button>
      </div>
      <div className="flex justify-between">
        <label htmlFor="passLength">Password length</label>
        <input
          type="number"
          max={20}
          min={4}
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
          className="w-16 border-2 rounded-lg outline-none focus:border-purple-600 px-1"
        />
      </div>
      <div className="flex justify-between mt-3">
        <label htmlFor="passLength">Include uppercase letters</label>
        <input
          type="checkbox"
          checked={uppercase}
          onChange={() => setUppercase(!uppercase)}
          className="w-16 border-2 outline-none focus:border-purple-600 px-1 cursor-pointer "
        />
      </div>
      <div className="flex justify-between mt-3">
        <label htmlFor="passLength">Include lowercase letters</label>
        <input
          type="checkbox"
          checked={lowercase}
          onChange={() => setLowercase(!lowercase)}
          className="w-16 border-2 outlinefocus:border-purple-600 px-1 cursor-pointer "
        />
      </div>
      <div className="flex justify-between mt-3">
        <label htmlFor="passLength">Include Number</label>
        <input
          type="checkbox"
          checked={number}
          onChange={() => setNumber(!number)}
          className="w-16 border-2 outline-none focus:border-purple-600 px-1 cursor-pointer "
        />
      </div>
      <div className="flex justify-between mt-3">
        <label htmlFor="passLength">Include Super Charcter</label>
        <input
          type="checkbox"
          checked={symbols}
          onChange={() => setSymbols(!symbols)}
          className="w-16 border-2 outline-none focus:border-purple-600 px-1 cursor-pointer "
        />
      </div>
      <button
        onClick={generatePassword}
        className="bg-white w-1/2 my-4 py-2 px-3 text-black text-xl font-medium rounded-xl cursor-pointer"
      >
        Generate
      </button>
    </div>
  );
}

export default PasswordGen;
