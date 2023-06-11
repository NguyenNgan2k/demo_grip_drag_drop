import "./App.css";
import React, { useEffect, useState } from "react";
import useLongPress from "./useLongPress";
import avatar from "../src/img/images.jpg";

function App(props) {
  const { item, handlers, action } = useLongPress();
  const [gridDrag, setGridDrag] = useState("");
  const [gridDrop, setGridDrop] = useState("");
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth / 4,
    height: window.innerHeight / 4,
  });
  console.log(action);
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
          if (i === 0) setGridDrag("I");
          if (i === 1) setGridDrag("J");
          if (i === 2) setGridDrag("K");
          if (i === 3) setGridDrag("L");
        }
      }
      for (let i = 0; i < 4; i++) {
        if (
          item?.clientX > dimensions?.width * i &&
          item?.clientX < dimensions?.width * (i + 1) &&
          item?.clientY > dimensions?.height * 3 &&
          item?.clientY < dimensions?.height * 4
        ) {
          if (i === 0) setGridDrag("M");
          if (i === 1) setGridDrag("N");
          if (i === 2) setGridDrag("O");
          if (i === 3) setGridDrag("P");
        }
      }
    }
  }, [dimensions, item]);

  const handleMouseMove = (e) => {
    console.log(gridDrop);
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
  return (
    <div className="App">
      <div className="grip-1" {...handlers}>
        <div className="item w-100">
          <div className="avatar">
            <img src={avatar} />
          </div>
          <div className="content">Nguyễn Thị Ngân</div>
        </div>
      </div>
      {
        gridDrag && (
          <div className="grip-2" onMouseMove={handleMouseMove}>
            <div
              className={
                gridDrag === "A" ? "drag" : "" + gridDrop === "A" ? " drop" : ""
              }
            >
              A
            </div>
            <div
              className={gridDrag === "B" ? "drag" : gridDrop === "B" ? "drop" : ""}
            >
              B
            </div>
            <div
              className={gridDrag === "C" ? "drag" : gridDrop === "C" ? "drop" : ""}
            >
              C
            </div>
            <div
              className={gridDrag === "D" ? "drag" : gridDrop === "D" ? "drop" : ""}
            >
              D
            </div>
            <div
              className={gridDrag === "E" ? "drag" : gridDrop === "E" ? "drop" : ""}
            >
              E
            </div>
            <div
              className={gridDrag === "F" ? "drag" : gridDrop === "F" ? "drop" : ""}
            >
              F
            </div>
            <div
              className={gridDrag === "G" ? "drag" : gridDrop === "G" ? "drop" : ""}
            >
              G
            </div>
            <div
              className={gridDrag === "H" ? "drag" : gridDrop === "H" ? "drop" : ""}
            >
              H
            </div>
            <div
              className={gridDrag === "I" ? "drag" : gridDrop === "I" ? "drop" : ""}
            >
              I
            </div>
            <div
              className={gridDrag === "J" ? "drag" : gridDrop === "J" ? "drop" : ""}
            >
              J
            </div>
            <div
              className={gridDrag === "K" ? "drag" : gridDrop === "K" ? "drop" : ""}
            >
              K
            </div>
            <div
              className={gridDrag === "L" ? "drag" : gridDrop === "L" ? "drop" : ""}
            >
              L
            </div>
            <div
              className={gridDrag === "M" ? "drag" : gridDrop === "M" ? "drop" : ""}
            >
              M
            </div>
            <div
              className={gridDrag === "N" ? "drag" : gridDrop === "N" ? "drop" : ""}
            >
              N
            </div>
            <div
              className={gridDrag === "O" ? "drag" : gridDrop === "O" ? "drop" : ""}
            >
              O
            </div>
            <div
              className={gridDrag === "P" ? "drag" : gridDrop === "P" ? "drop" : ""}
            >
              P
            </div>
          </div>
        )

      }
    </div>
  );
}

export default App;
