import { useRef, useState } from "react";
export default function useLongPress() {
  const [action, setAction] = useState();
  const [item, setItem] = useState(null);

  const timerRef = useRef();
  const isLongPress = useRef();

  function startPressTimer(e) {
    isLongPress.current = false;
    timerRef.current = setTimeout(() => {
      isLongPress.current = true;
      setAction("longpress");
      setItem(e);
    }, 500);
  }

  function handleOnClick() {
    if (isLongPress.current) {
      console.log("Is long press - not continuing.");
      setItem();
      return;
    }
    setAction("click");
  }

  function handleOnMouseDown(e) {
    startPressTimer(e);
  }

  function handleOnMouseUp() {
    clearTimeout(timerRef.current);
  }

  function handleOnTouchStart(e) {
    startPressTimer(e);
  }

  function handleOnTouchEnd() {
    if (action === "longpress") return;
    clearTimeout(timerRef.current);
  }

  return {
    action,
    item,
    handlers: {
      onClick: handleOnClick,
      onMouseDown: handleOnMouseDown,
      onMouseUp: handleOnMouseUp,
      onTouchStart: handleOnTouchStart,
      onTouchEnd: handleOnTouchEnd,
    },
  };
}
