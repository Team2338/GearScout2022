import "./App.css";
import React from "react";
import DataCollectionPage from "./data-collection-page/DataCollectionPage";
import LandingPage from "./landing-page/LandingPage";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: true,
			teamNumber: "",
			eventCode: "",
			secretCode: "",
			scouterName: "",
			language:"english",
		};
	}

	// landing page = true; data page = false
	changePage = (event, teamNumber, eventCode, secretCode, scouterName) => {
		this.setState({
			page: false,
			teamNumber: teamNumber,
			eventCode: eventCode,
			secretCode: secretCode,
			scouterName: scouterName
		});
	};

	changeLanguage = (event) => {
		console.log(event.target.value)
		this.setState({
			language: event.target.value,
		});
	};

	translate = (key)  => {
		return languages[this.state.language][key];

	}

	render() {
		let page;
		if (this.state.page) {
			page = <LandingPage
				parentCallback={this.changePage}
				changeLanguage={this.changeLanguage}
				language={this.state.language}
				translate={this.translate}
			/>;
		} else {
			page = <DataCollectionPage
				teamNumber={this.state.teamNumber}
				eventCode={this.state.eventCode}
				secretCode={this.state.secretCode}
				scouterName={this.state.scouterName}
				translate={this.translate}
				/>;
		}

		return (
			<React.Fragment>
				{page}
			</React.Fragment>
		);
	}
}

export default App;

const languages = {
	english:{
		"YOUR_TEAM_NUMBER": "Your team number",
		"TEAM_NUMBER": "Team number",
		"EVENT_CODE": "Event code",
		"SECRET_CODE": "Secret code",
		"LANGUAGE": "Language",
		"AUTO": "Autonomous",
		"TELEOP": "Teleop",
		"HIGH_GOAL_2022": "High Goal",
		"LOW_GOAL_2022": "Low Goal",
		"MISS_GOAL_2022": "Missed Shot",
		"MOBILITY_2022": "Taxi",
	},
	spanish:{
		"YOUR_TEAM_NUMBER": "Tu numero de equipo",
		"TEAM_NUMBER": "Numero de equipo",
		"EVENT_CODE": "Código del evento",
		"SECRET_CODE": "Código secreto",
		"LANGUAGE": "Lengua",
		"AUTO": "Auto", 
		"TELEOP": "Teleop", 
		"HIGH_GOAL_2022": "Núcleo Superior",
		"LOW_GOAL_2022": "Núcleo Inferior",
		"MISS_GOAL_2022": "Tiro fallado",
		"MOBILITY_2022": "Desplazamiento",



	},
	french:{
		"YOUR_TEAM_NUMBER": "Votre numéro d'équipe",
		"TEAM_NUMBER": "Numéro d'équipe",
		"EVENT_CODE": "Code de l'événement",
		"SECRET_CODE": "Code secret",
		"LANGUAGE": "Langue",
		"AUTO": "Auto",
		"TELEOP": "Téléop", 
		"HIGH_GOAL_2022": "Centre de Tri Supérieur",
		"LOW_GOAL_2022": "Centre de Tri Inférieur",
		"MISS_GOAL_2022": "Coup raté",
		"MOBILITY_2022": "Circulation",

	}
}
