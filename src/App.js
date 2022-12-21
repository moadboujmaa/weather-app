import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Aside from './components/Aside';
import DayWeather from './components/DayWeather';

function App() {
	if (!localStorage.getItem('city')) {
		localStorage.setItem("city", "Tetouan")
	}
	const [city, setCity] = useState(localStorage.getItem('city'))
	const [country, setCountry] = useState("mar")
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [forecast, setForecast] = useState([])

	const onChange = (e) => {
		const value = e.target.value
		setCity(value)
	}
	const onSubmit = (e) => {
		e.preventDefault()
		localStorage.setItem('city', city)
		setIsSubmitted(!isSubmitted)
	}
	useEffect(() => {
		const options = {
			method: 'GET',
			url: `https://aerisweather1.p.rapidapi.com/forecasts/${city},${country}`,
			headers: {
				'X-RapidAPI-Key': '0ffe823d8bmsh992bd06b1bdc0fbp1f781fjsn769cf835f2a7',
				'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
			}
		};

		axios.request(options).then(function (response) {
			setForecast(response.data)
		}).catch(function (error) {
			console.error(error);
		});
	}, [isSubmitted])
	return (
		<div className="App" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/imgs/night-sky.jpg'})`}}>
			<DayWeather isSubmitted={isSubmitted} />
			<Aside submit={onSubmit} change={onChange} weather={forecast} />
		</div>
	);
}

export default App;
