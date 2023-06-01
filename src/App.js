import "./App.css";
import React, { useEffect, useState } from "react";
import useLongPress from "./useLongPress";

const Grid = {
  A: { rowStart: 1, colStart: 1, rowEnd: 2, colEnd: 2 },
  B: { rowStart: 1, colStart: 2, rowEnd: 2, colEnd: 3 },
};

function App(props) {
  const { item, handlers } = useLongPress();
  const { gridDrag, setGridDrag } = useState();
  const { gridDrop, setGridDrop } = useState(null);
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth / 4,
    height: window.innerHeight / 4,
  });

  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth / 4,
        height: window.innerHeight / 4,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  console.log(item, gridDrag);
  console.log(dimensions);

  useEffect(() => {
    if (item) {
      console.log(item.clientX, item.clientY);

      if (
        item?.clientX > 0 &&
        item?.clientX < dimensions?.width &&
        item?.clientY > 0 &&
        item?.clientY < dimensions?.height
      )
        setGridDrag("A");
    }
  }, [dimensions, item]);

  const handleMouseMove = (e) => {};

  return (
    <div className="App" {...handlers} onMouseMove={handleMouseMove}></div>
  );
}

export default App;
