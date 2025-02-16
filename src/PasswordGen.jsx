import { useState } from "react";
import { LC, NC, SC, UC } from "./data/PassChar";

function PasswordGen() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);

  // Generate password functions
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
    <div className="bg-[url(assets/bg.gif)] bg-no-repeat bg-center bg-cover mt-36 md:w-1/2 text-center mx-auto text-white rounded-xl hover:shadow-lg shadow-gray-500 md:px-12 px-5 py-3">
      {/* Header text */}
      <h1 className="font-mono md:text-3xl text-xl p-3 border-b border-white w-full h-fit my-">
        Password Generator
      </h1>
      {/* password section*/}
      <div className="flex gap-2 my-5">
        <input
          type="text"
          value={password}
          readOnly
          className="flex basis-[80%] border-2 rounded-lg outline-none focus:border-purple-600 px-2"
        />
        {/* copy button */}
        <button
          onClick={copyToClipboard}
          className="basis-[20%] bg-white text-black px-3 py-1.5 rounded-lg cursor-pointer"
        >
          Copy
        </button>
      </div>
      {/* Password length section */}
      <div className="flex justify-between my-5 md:text-lg font-mono">
        <label htmlFor="passLength">Password length</label>
        <input
          type="number"
          max={20}
          min={4}
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
          className="border-2 rounded-lg outline-none focus:border-purple-600 px-1 w-fit"
        />
      </div>
      {/* Options section */}
      {/* uppercase */}
      <div className="flex justify-between mt-3 md:text-lg font-mono">
        <label htmlFor="passLength">Include uppercase letters</label>
        <input
          type="checkbox"
          checked={uppercase}
          onChange={() => setUppercase(!uppercase)}
          className="w-16 border-2 outline-none focus:border-purple-600 px-1 cursor-pointer "
        />
      </div>
      {/* Lowercase */}
      <div className="flex justify-between mt-3 md:text-lg font-mono">
        <label htmlFor="passLength">Include lowercase letters</label>
        <input
          type="checkbox"
          checked={lowercase}
          onChange={() => setLowercase(!lowercase)}
          className="w-16 border-2 outlinefocus:border-purple-600 px-1 cursor-pointer "
        />
      </div>
      {/* Number */}
      <div className="flex justify-between mt-3 md:text-lg font-mono">
        <label htmlFor="passLength">Include Number</label>
        <input
          type="checkbox"
          checked={number}
          onChange={() => setNumber(!number)}
          className="w-16 border-2 outline-none focus:border-purple-600 px-1 cursor-pointer "
        />
      </div>
      {/* Symsbols */}
      <div className="flex justify-between mt-3 md:text-lg font-mono">
        <label htmlFor="passLength">Include Symbols</label>
        <input
          type="checkbox"
          checked={symbols}
          onChange={() => setSymbols(!symbols)}
          className="w-16 border-2 outline-none focus:border-purple-600 px-1 cursor-pointer "
        />
      </div>
      {/* Generate button */}
      <button
        onClick={generatePassword}
        className="bg-white w-1/2 my-4 py-2 px-3 text-black text-xl font-mono rounded-xl cursor-pointer"
      >
        Generate
      </button>
    </div>
  );
}

export default PasswordGen;
