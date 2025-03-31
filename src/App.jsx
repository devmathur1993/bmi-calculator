import { useState } from 'react'
import './App.css'

function App() {
	const [weight, setWeight] = useState("");
	const [height, setHeight] = useState("");
	const [bmi, setBMI] = useState("");
	const [category, setCategory] = useState("");
	const [error, setError] = useState("")

	const calculateBMI = (e) => {
		e.preventDefault();
		// setError("");

		console.log("weight : ", weight.length)
		if (weight === "" || (isNaN(weight))) {

			setError("Please enter valid value for weight");
			return;
		}
		if (height === "" || isNaN(height)) {
			console.log("height : ", isNaN(height))
			setError("Please enter valid value for height");
			return;
		}

		const bmiValue = (weight * 703) / height ** 2;
		if (bmiValue) {
			setBMI(bmiValue.toFixed(2));
		} else {
			return;
		}

		if (bmiValue < 18.5) {
			setCategory("Underweight");
		} else if (bmiValue >= 18.5 && bmiValue < 25) {
			setCategory("Normal");
		} else if (bmiValue >= 25 && bmiValue < 30) {
			setCategory("Over Weight");
		} else {
			setCategory("Obese");
		}

	}
	const reload = (e) => {
		e.preventDefault();
		setWeight("");
		setHeight("");
		setCategory("");
		setError("");
		setBMI("")

	}
	return (
		<div className='container'>
			<div >
				<h2>BMI Calculator</h2>
			</div>

			<form action="" onSubmit={calculateBMI}>
				<div className='inp-div flex-column'>
					<label className='inp-label' htmlFor="weight">Weight (lbs)</label>
					<input id="weight" className='inp-field' placeholder='Enter Weight' type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
				</div>
				<div className='inp-div flex-column'>
					<label className='inp-label' htmlFor="height">Height (inches)</label>
					<input id="height" className='inp-field' placeholder='Enter Height' type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
				</div>
				<div className='inp-div flex-row'>
					<button type="submit" className='btn btn-submit'>Submit</button>
					<button type="submit" className='btn btn-reload' onClick={reload}>Reload</button>
				</div>
				<div className="error">
					<h2>{error.length > 0 && error}</h2>
				</div>
				<div>
					{bmi && <h1>Your BMI is : {bmi}</h1>}
					<h2>{category.length > 0 && `You are ${category}`}</h2>
				</div>
			</form>
		</div>
	)
}

export default App
