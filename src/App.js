import "./App.css";
import React, { useEffect, useState } from "react";
import useLongPress from "./useLongPress";
import avatar from "../src/img/images.jpg";

function App(props) {
  const { item, handlers, action } = useLongPress();
  const [gridDrag, setGridDrag] = useState(null);
  const [gridDrop, setGridDrop] = useState("");
  const [xy, setXY] = useState({});
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth / 4,
    height: window.innerHeight / 4,
  });

  useEffect(() => {
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

  useEffect(() => {
    setGridDrag(null);
  }, [action]);

  useEffect(() => {
    setGridDrag(item);
  }, [item]);

  const handleMouseMove = (e) => {
    for (let i = 0; i < 4; i++) {
      if (
        e?.clientX > dimensions?.width * i &&
        e?.clientX < dimensions?.width * (i + 1) &&
        e?.clientY > 0 &&
        e?.clientY < dimensions?.height
      ) {
        if (i === 0) setGridDrop("A");
        if (i === 1) setGridDrop("B");
        if (i === 2) setGridDrop("C");
        if (i === 3) setGridDrop("D");
      }
    }
    for (let i = 0; i < 4; i++) {
      if (
        e?.clientX > dimensions?.width * i &&
        e?.clientX < dimensions?.width * (i + 1) &&
        e?.clientY > dimensions?.height &&
        e?.clientY < dimensions?.height * 2
      ) {
        if (i === 0) setGridDrop("E");
        if (i === 1) setGridDrop("F");
        if (i === 2) setGridDrop("G");
        if (i === 3) setGridDrop("H");
      }
    }
    for (let i = 0; i < 4; i++) {
      if (
        e?.clientX > dimensions?.width * i &&
        e?.clientX < dimensions?.width * (i + 1) &&
        e?.clientY > dimensions?.height * 2 &&
        e?.clientY < dimensions?.height * 3
      ) {
        if (i === 0) setGridDrop("I");
        if (i === 1) setGridDrop("J");
        if (i === 2) setGridDrop("K");
        if (i === 3) setGridDrop("L");
      }
    }
    for (let i = 0; i < 4; i++) {
      if (
        e?.clientX > dimensions?.width * i &&
        e?.clientX < dimensions?.width * (i + 1) &&
        e?.clientY > dimensions?.height * 3 &&
        e?.clientY < dimensions?.height * 4
      ) {
        if (i === 0) setGridDrop("M");
        if (i === 1) setGridDrop("N");
        if (i === 2) setGridDrop("O");
        if (i === 3) setGridDrop("P");
      }
    }
  };

  const handleMouseUp = (e) => {
    if (!gridDrag) return;
    console.log(gridDrag);
    for (let i = 0; i < 4; i++) {
      if (
        e?.clientX > dimensions?.width * i &&
        e?.clientX < dimensions?.width * (i + 1) &&
        e?.clientY > 0 &&
        e?.clientY < dimensions?.height
      ) {
        setXY({ x: dimensions?.width * i, y: 0 });
      }
    }
    for (let i = 0; i < 4; i++) {
      if (
        e?.clientX > dimensions?.width * i &&
        e?.clientX < dimensions?.width * (i + 1) &&
        e?.clientY > dimensions?.height &&
        e?.clientY < dimensions?.height * 2
      ) {
        setXY({ x: dimensions?.width * i, y: dimensions?.height });
      }
    }
    for (let i = 0; i < 4; i++) {
      if (
        e?.clientX > dimensions?.width * i &&
        e?.clientX < dimensions?.width * (i + 1) &&
        e?.clientY > dimensions?.height * 2 &&
        e?.clientY < dimensions?.height * 3
      ) {
        setXY({ x: dimensions?.width * i, y: dimensions?.height * 2 });
      }
    }
    for (let i = 0; i < 4; i++) {
      if (
        e?.clientX > dimensions?.width * i &&
        e?.clientX < dimensions?.width * (i + 1) &&
        e?.clientY > dimensions?.height * 3 &&
        e?.clientY < dimensions?.height * 4
      ) {
        setXY({ x: dimensions?.width * i, y: dimensions?.height * 3 });
      }
    }
    setGridDrag("");
  };

  console.log("gridDrag", gridDrag);

  return (
    <div className="App">
      <div className="grip-1">
        <div
          className="item"
          {...handlers}
          style={{
            left: xy.x,
            top: xy.y,
            width: dimensions.width,
            height: dimensions.height,
          }}
        >
          <div className="avatar">
            <img src={avatar} />
          </div>
          <div className="content">Nguyễn Thị Ngân</div>
        </div>
      </div>
      {gridDrag && (
        <div className="grip-2" onMouseMove={handleMouseMove}>
          <div
            className={gridDrop === "A" ? " drop" : ""}
            onMouseUp={handleMouseUp}
          ></div>
          <div
            className={gridDrop === "B" ? "drop" : ""}
            onMouseUp={handleMouseUp}
          ></div>
          <div
            className={gridDrop === "C" ? "drop" : ""}
            onMouseUp={handleMouseUp}
          ></div>
          <div
            className={gridDrop === "D" ? "drop" : ""}
            onMouseUp={handleMouseUp}
          ></div>
          <div
            className={gridDrop === "E" ? "drop" : ""}
            onMouseUp={handleMouseUp}
          ></div>
          <div
            className={gridDrop === "F" ? "drop" : ""}
            onMouseUp={handleMouseUp}
          ></div>
          <div className={gridDrop === "G" ? "drop" : ""}></div>
          <div
            className={gridDrop === "H" ? "drop" : ""}
            onMouseUp={handleMouseUp}
          ></div>
          <div
            className={gridDrop === "I" ? "drop" : ""}
            onMouseUp={handleMouseUp}
          ></div>
          <div
            className={gridDrop === "J" ? "drop" : ""}
            onMouseUp={handleMouseUp}
          ></div>
          <div
            className={gridDrop === "K" ? "drop" : ""}
            onMouseUp={handleMouseUp}
          ></div>
          <div
            className={gridDrop === "L" ? "drop" : ""}
            onMouseUp={handleMouseUp}
          ></div>
          <div
            className={gridDrop === "M" ? "drop" : ""}
            onMouseUp={handleMouseUp}
          ></div>
          <div
            className={gridDrop === "N" ? "drop" : ""}
            onMouseUp={handleMouseUp}
          ></div>
          <div
            className={gridDrop === "O" ? "drop" : ""}
            onMouseUp={handleMouseUp}
          ></div>
          <div
            className={gridDrop === "P" ? "drop" : ""}
            onMouseUp={handleMouseUp}
          ></div>
        </div>
      )}
    </div>
  );
}

export default App;
