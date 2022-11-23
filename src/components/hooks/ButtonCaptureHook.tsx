import {useEffect, useState} from "react";

export function useKeyPress(targetKey: string | number) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState<boolean>(false);
  // If pressed key is our target key then set to true
  function downHandler({ key, which }: any) {
    let pressed = typeof targetKey === 'number' ? which : key
    if (pressed === targetKey) {
      setKeyPressed(true);
    }
  }
  // If released key is our target key then set to false
  const upHandler = ({ key, which }: any) => {
    let pressed = typeof targetKey === 'number' ? which : key
    if (pressed === targetKey) {
      setKeyPressed(false);
    }
  };

  const focusHandler = () => {
    setKeyPressed(false)
  }
  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    window.addEventListener("focus", focusHandler)
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
      window.removeEventListener("focus", focusHandler)
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return keyPressed;
}