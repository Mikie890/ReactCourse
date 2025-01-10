import React, { useState } from "react";
import axios from "axios";

export const HomeWork = () => {
  const [generatedExcuse, setGeneratedExcuse] = useState("");

  const fetchData = (excuse) => {
    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`)
      .then((res) => {
        setGeneratedExcuse(res.data[0].excuse);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Generate An Excuser</h1>
      <div
        style={{
          width: "100px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <button onClick={() => fetchData("party")}>Party</button>
        <button onClick={() => fetchData("family")}>Family</button>
        <button onClick={() => fetchData("office")}>Office</button>
      </div>
      <p>{generatedExcuse}</p>
    </div>
  );
};
