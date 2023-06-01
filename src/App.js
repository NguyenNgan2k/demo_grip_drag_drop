import "./App.css";
import React, { useEffect, useState } from "react";
import useLongPress from "./useLongPress";

const Grid = {
  A: { rowStart: 1, colStart: 1, rowEnd: 2, colEnd: 2 },
  B: { rowStart: 1, colStart: 2, rowEnd: 2, colEnd: 3 },
};

function App(props) {
  const { item, handlers, action } = useLongPress();
  const [gridDrag, setGridDrag] = useState("");
  const [gridDrop, setGridDrop] = useState("");
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth / 4,
    height: window.innerHeight / 4,
  });

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth / 4,
        height: window.innerHeight / 4,
      });
      setGridDrag("");
      setGridDrop("");
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  console.log(gridDrag);

  useEffect(() => {
    setGridDrag("");
  }, [action]);

  useEffect(() => {
    if (item && action === "longpress") {
      console.log("check", item.clientX, item.clientY);
      for (let i = 0; i < 4; i++) {
        if (
          item?.clientX > dimensions?.width * i &&
          item?.clientX < dimensions?.width * (i + 1) &&
          item?.clientY > 0 &&
          item?.clientY < dimensions?.height
        ) {
          if (i === 0) setGridDrag("A");
          if (i === 1) setGridDrag("B");
          if (i === 2) setGridDrag("C");
          if (i === 3) setGridDrag("D");
        }
      }
      for (let i = 0; i < 4; i++) {
        if (
          item?.clientX > dimensions?.width * i &&
          item?.clientX < dimensions?.width * (i + 1) &&
          item?.clientY > dimensions?.height &&
          item?.clientY < dimensions?.height * 2
        ) {
          if (i === 0) setGridDrag("E");
          if (i === 1) setGridDrag("F");
          if (i === 2) setGridDrag("G");
          if (i === 3) setGridDrag("H");
        }
      }
      for (let i = 0; i < 4; i++) {
        if (
          item?.clientX > dimensions?.width * i &&
          item?.clientX < dimensions?.width * (i + 1) &&
          item?.clientY > dimensions?.height * 2 &&
          item?.clientY < dimensions?.height * 3
        ) {
          if (i === 0) setGridDrag("H");
          if (i === 1) setGridDrag("I");
          if (i === 2) setGridDrag("J");
          if (i === 3) setGridDrag("K");
        }
      }
      for (let i = 0; i < 4; i++) {
        if (
          item?.clientX > dimensions?.width * i &&
          item?.clientX < dimensions?.width * (i + 1) &&
          item?.clientY > dimensions?.height * 2 &&
          item?.clientY < dimensions?.height * 4
        ) {
          if (i === 0) setGridDrag("L");
          if (i === 1) setGridDrag("M");
          if (i === 2) setGridDrag("N");
          if (i === 3) setGridDrag("O");
        }
      }
    }
  }, [dimensions, item]);

  const handleMouseMove = (e) => {};

  return (
    <div className="App" {...handlers} onMouseMove={handleMouseMove}></div>
  );
}

export default App;
