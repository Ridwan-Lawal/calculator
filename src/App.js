import keysData from "./keys.json";
import { useState } from "react";

export default function App() {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <div
      className={`font-spartan h-screen md:h-screen ${
        darkmode ? "bg-veryDarkDesaturatedBlue1" : "bg-lightGray"
      } flex items-center px-4 `}
    >
      <Container darkmode={darkmode} setDarkmode={setDarkmode} />
    </div>
  );
}

function Container({ darkmode, setDarkmode }) {
  //for the screen, displaying the the numbers when button clicked
  const [screen, setScreen] = useState("");

  return (
    <div className="containers   md:w-[500px] mx-auto">
      <Header darkmode={darkmode} setDarkmode={setDarkmode} />
      <Screen darkmode={darkmode} screen={screen} />
      <Buttons buttons={keysData} darkmode={darkmode} setScreen={setScreen} />
    </div>
  );
}

function Header({ darkmode, setDarkmode }) {
  function handleChecked() {
    setDarkmode((themeStatus) => !themeStatus);
  }

  return (
    <nav
      className={`flex items-center ${
        darkmode ? "text-white" : "text-veryDarkGrayishYello"
      } justify-between`}
    >
      {/* logo */}
      <h3 className="text-3xl">calc</h3>
      {/* theme section  */}
      <div className={`flex gap-7`}>
        <p className="self-end">Theme</p>

        {/* theme toggling section */}
        <aside className="flex flex-col items-center">
          {/* theme-type */}
          <section className="flex justify-between w-fit gap-6 ">
            <p className="text-xs">1</p>
            <p className="text-xs">2</p>
          </section>
          {/* toggle Button */}
          <section>
            <form
              onClick={handleChecked}
              className={`${
                darkmode ? "bg-veryDarkDesaturatedBlue2" : "bg-grayishRed"
              }  w-fit space-x-4 flex p-[3px] rounded-[11px] cursor-pointer`}
            >
              <RadioButton checked={!darkmode} darkmode={darkmode} />
              <RadioButton checked={darkmode} darkmode={darkmode} />
            </form>
          </section>
        </aside>
      </div>
    </nav>
  );
}

function RadioButton({ checked, darkmode }) {
  return (
    <input
      type="radio"
      className={`appearance-none   transition-all cursor-pointer  p-1.5 ${
        darkmode ? "checked:bg-desaturatedRed1" : "checked:bg-orange"
      } rounded-full`}
      name="theme"
      checked={checked}
    />
  );
}

function Screen({ darkmode, screen }) {
  return (
    <div className="mt-7 ">
      <section
        className={` ${
          darkmode
            ? "text-white bg-veryDarkDesaturatedBlue3"
            : "bg-veryLightGray text-veryDarkGrayishYello"
        }  text-4xl md:text-5xl py-5 md:py-6 h-[80px] rounded-xl text-right px-5`}
      >
        {screen}
      </section>
    </div>
  );
}

function Buttons({ buttons, darkmode, setScreen }) {
  return (
    <div
      className={`grid mt-7 grid-cols-4 gap-5 ${
        darkmode ? "bg-veryDarkDesaturatedBlue2" : "bg-grayishRed"
      }  px-5 pt-6 pb-7 rounded-xl`}
    >
      {buttons.map((button) => (
        <Button
          value={button.key}
          lightTheme={button.lightTheme}
          darkTheme={button.darkTheme}
          key={button.key}
          darkmode={darkmode}
          setScreen={setScreen}
        />
      ))}
    </div>
  );
}

function Button({ value, lightTheme, darkTheme, darkmode, setScreen }) {
  function handleClick(newValue) {
    // for evaluation when 'equals button' is clicked
    if (newValue === "=") setScreen((values) => String(eval(values)));

    // for the Deleting button
    if (newValue === "DEL") setScreen((values) => values.slice(0, -1));

    // for the Reset button
    if (newValue === "Reset") setScreen("");

    // if button clicked is Reset, equalto or Del, don't return any value
    if (newValue === "Reset" || newValue === "=" || newValue === "DEL") return;
    // for every other button update the screen
    setScreen((currentValue) => `${currentValue}${newValue}`);
  }

  return (
    <button
      onClick={() => handleClick(value)}
      className={` px-4   transition-colors py-3 rounded-md  ${
        darkmode ? darkTheme : lightTheme
      }  shadow-mdd `}
    >
      {value}
    </button>
  );
}

/*
-======= what to change
  font-size
  text colors
  bg colors
  shadow colors
  // padding x


*/
