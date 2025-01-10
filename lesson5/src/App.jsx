import axios from "axios";
import React, {useState, useEffect} from "react";

function App(){
	
	//fetch data from api:
	// fetch("URL")
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		console.log(data)
	// 	});

	const [catFact, setCatFact] = useState("")

	const fetchCatFact = () =>{
		//using axios:
		axios.get("https://catfact.ninja/fact").then((res) => {
			setCatFact(res.data.fact);
		});
	};

	// use useEffect to make it run once aviod loop with []
	useEffect(() => {
		fetchCatFact();
	},[]);
	
	return (
		<div>
			<button onClick={fetchCatFact}>Generate Cat Fact</button>
			<p>{catFact}</p>
		</div>
		);
}
export default App;