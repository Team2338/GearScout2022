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
  componentDidMount(){
    const language = localStorage.getItem('language') ?? "english";
		this.setState(({
      language: language,
		}))
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
		localStorage.setItem("language",event.target.value,)
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
		"SIGN_IN": "Sign In",
		"YOUR_TEAM_NUMBER": "Your team number",
		"TEAM_NUMBER": "Team number", 
		"EVENT_CODE": "Event code",
		"SECRET_CODE": "Secret code",
		"MATCH": "Match",
		"MATCHES": "Matches",
		"TEAM": "Team",
		"TEAMS": "Teams",
		"STATS": "Stats",
		"DATA": "Data",
		"LANGUAGE": "Language",
		"LOGOUT": "Logout",
		"SELECT_MATCH_VIEW_MORE_DETAILS": "Select a match to view more details",
		"STAT_TABLE": "Stat table",
		"MEAN": "Mean",
		"MEDIAN": "Median",
		"MODE": "Mode",
		"SCORES": "Scores",
		"SELECT_TEAM_VIEW_MORE_DETAILS": "Select a team to view more details",
		"VALUE": "Value",
		"SELECT_STAT_VIEW_MORE_DETAILS": "Select a statistic to view in-depth analysis",
		"ACCOUNT": "Account",
		"DOWNLOAD_DATA": "Download data",
		"DOWNLOAD_DATA_AS_CSV": "Download data as a CSV file",
		"CHANGE_LANGUAGE": "Change language",
		"EXCLUDE_FROM_STATS": "Exclude match data from team statistics",
		"INCLUDE_IN_STATS": "Include match data in team statistics",
		"HIDDEN": "Hidden",
		"AUTO": "Autonomous",
		"TELEOP": "Teleop",
		"HIGH_GOAL_2022": "High Goal",
		"LOW_GOAL_2022": "Low Goal",
		"MISS_GOAL_2022": "Missed Shot",
		"MOBILITY_2022": "Taxi",
		"CLIMB_2022": "Hangar",
		"SECRET_CODE_HELPER_1": "Enter team specific password to store data",
		"SECRET_CODE_HELPER_2": "This code will be used to view your analytics",
		"SECRET_CODE_HELPER_3": "Make sure all scouters from the same team use the same code",
		"SUBMIT_1": "Submit",
		"SCOUTER_NAME":"Scouter",
		"LOW":"Low",
		"MID":"Mid", 
		"HIGH":"High",
		"TRAVERSAL":"Traversal",
		"NONE":"None",
		"MATCH_NUMBER":"Match number",
		"ANALYTICS":"Analytics",
		
		
	},
	spanish:{
		"SIGN_IN": "Iniciar sesión",
		"YOUR_TEAM_NUMBER": "Tu numero de equipo",
		"TEAM_NUMBER": "Numero de equipo",
		"EVENT_CODE": "Código del evento",
		"SECRET_CODE": "Código secreto",
		"MATCH": "Partido",
		"MATCHES": "Partidos",
		"TEAM": "Equipo",
		"TEAMS": "Equipos",
		"STATS": "Estadísticas",
		"DATA": "Datos",
		"LANGUAGE": "Lengua",
		"LOGOUT": "Cerrar sesión",
		"SELECT_MATCH_VIEW_MORE_DETAILS": "Seleccione un partido para ver más detalles",
		"STAT_TABLE": "Tabla de estadisticas",
		"MEAN": "Media",
		"MEDIAN": "Mediana",
		"MODE": "Moda",
		"SCORES": "Anotaciones",
		"SELECT_TEAM_VIEW_MORE_DETAILS": "Seleccione un equipo para ver más detalles",
		"VALUE": "Valor",
		"SELECT_STAT_VIEW_MORE_DETAILS": "Seleccione una estadística para ver un análisis en profundidad",
		"ACCOUNT": "Cuenta",
		"DOWNLOAD_DATA": "Descargar datos",
		"DOWNLOAD_DATA_AS_CSV": "Descargar datos como archivo CSV",
		"CHANGE_LANGUAGE": "Cambiar idioma",
		"EXCLUDE_FROM_STATS": "Excluir datos de partidos de las estadísticas del equipo",
		"INCLUDE_IN_STATS": "Incluir datos de partidos en las estadísticas del equipo",
		"HIDDEN": "Oculto",
		"AUTO": "Auto", 
		"TELEOP": "Teleop", 
		"HIGH_GOAL_2022": "Núcleo Superior",
		"LOW_GOAL_2022": "Núcleo Inferior",
		"MISS_GOAL_2022": "Tiro fallado",
		"MOBILITY_2022": "Desplazamiento",
		"CLIMB_2022": "Hangar",
		"SECRET_CODE_HELPER_1": "Ingrese una contraseña específica del equipo para almacenar datos",
		"SECRET_CODE_HELPER_2": "Este código se utilizará para ver sus análisis",
		"SECRET_CODE_HELPER_3": "Asegúrate de que todos los exploradores del mismo equipo usen el mismo código",
		"SUBMIT_1": "Entregar",
		"SCOUTER_NAME":"Nombre de explorador",
		"LOW":"Bajo",
		"MID":"Medio",
		"HIGH":"Alto",
		"TRAVERSAL":"Traversal",
		"NONE":"No",
		"MATCH_NUMBER":"Numero de partido"

		
		
	

		



	},
	french:{
		"SIGN_IN": "Connexion",
		"YOUR_TEAM_NUMBER": "Votre numéro d'équipe",
		"TEAM_NUMBER": "Numéro d'équipe",
		"EVENT_CODE": "Code de l'événement",
		"SECRET_CODE": "Code secret",
		"MATCH": "Match",
		"MATCHES": "Matchs",
		"TEAM": "Équipe",
		"TEAMS": "Équipes",
		"STATS": "Statistiques",
		"DATA": "Les données",
		"LANGUAGE": "Langue",
		"LOGOUT": "Se déconnecter",
		"SELECT_MATCH_VIEW_MORE_DETAILS": "Sélectionnez une match pour afficher plus de détails",
		"STAT_TABLE": "Tableau statistique",
		"MEAN": "Moyenne",
		"MEDIAN": "Médiane",
		"MODE": "Mode",
		"SCORES": "Pointages",
		"SELECT_TEAM_VIEW_MORE_DETAILS": "Sélectionnez une équipe pour afficher plus de détails",
		"VALUE": "Évaluer",
		"SELECT_STAT_VIEW_MORE_DETAILS": "Sélectionnez une statistique pour afficher une analyse approfondie",
		"ACCOUNT": "Compte",
		"DOWNLOAD_DATA": "Télécharger les données",
		"DOWNLOAD_DATA_AS_CSV": "Télécharger les données sous forme de fichier CSV",
		"CHANGE_LANGUAGE": "Changer de langue",
		"EXCLUDE_FROM_STATS": "Exclure les données de match des statistiques de l'équipe",
		"INCLUDE_IN_STATS": "Inclure les données de match dans les statistiques de l'équipe",
		"HIDDEN": "Caché",
		"AUTO": "Auto", 
		"TELEOP": "Téléop", 
		"HIGH_GOAL_2022": "Centre de Tri Supérieur",
		"LOW_GOAL_2022": "Centre de Tri Inférieur",
		"MISS_GOAL_2022": "Coup raté",
		"MOBILITY_2022": "Circulation",
		"CLIMB_2022": "Hangar",
		"SECRET_CODE_HELPER_1": "Entrez un mot de passe spécifique à l'équipe pour stocker les données",
		"SECRET_CODE_HELPER_2": "Ce code sera utilisé pour afficher vos analyses",
		"SECRET_CODE_HELPER_3": "Assurez-vous que tous les recruteurs d'une même équipe utilisent le même code",
		"SUBMIT_1": "Nous faire parvenir",
		"SCOUTER_NAME":"Nom de l'animateur",
		"LOW":"Meugler",
		"MID":"Milieu",
		"HIGH":"Haut",
		"TRAVERSAL":"Traversal",
		"NONE":"Rien",
		"MATCH_NUMBER":"Match number",
		
	}
}
