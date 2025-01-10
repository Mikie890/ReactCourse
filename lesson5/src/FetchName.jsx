import React, {useState, useEffect} from "react";
import axios from "axios";

const fetchName = () => {
    const [name, setName] = useState("");
    const [predictedAge, setPredictedAge] = useState(null);

  const fetchData = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
        setPredictedAge(res.data);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name..."
        onChange={(even) => {
          setName(even.target.value);
        }}
      />
      <button onClick={fetchData}>Predict Age</button>

    <h1>Predicted Name: {predictedAge?.name}</h1>
    <h1>Predicted Age: {predictedAge?.age}</h1>
    <h1>Predicted Count: {predictedAge?.count}</h1>
    </div>
  );
};

export default fetchName;