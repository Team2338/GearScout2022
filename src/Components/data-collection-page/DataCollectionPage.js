import React from "react";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import "./DataCollectionPage.css";
import GearscoutService from "../../Services/GearscoutService";


const INITIAL_STATE = {
	autoTaxi: 0,
	autoLowCount: 0,
	autoHighCount: 0,
	autoMissCount: 0,
	teleopLowCount: 0,
	teleopHighCount: 0,
	teleopMissCount: 0,
	climbState: 0,
	climbLevel: "none",
	matchNumber: "",
	scoutingTeamNumber: ""
}

class DataCollectionPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = INITIAL_STATE;
	}

	addCount = (event) => {
		console.log(event);
		this.setState({
			[event.target.name]: this.state[event.target.name] + 1
		});
	};

	subtractCount = (event) => {
		console.log(event);
		this.setState({
			[event.target.name]: this.state[event.target.name] - 1
		});
	};

	doesAutoTaxi = (event) => {
		this.setState({
			autoTaxi: 2
		});
	};

	Taxiundobutton = (event) => {
		this.setState({
			autoTaxi: 0
		});
	};


	noClimb = (event) => {
		this.setState({
			climbState: 0,
      climbLevel:"NONE"
		});
	}

	lowClimb = (event) => {
		this.setState({
			climbState: 4,
      climbLevel: "LOW"
		});
	};

	midClimb = (event) => {
		this.setState({
			climbState: 6,
      climbLevel: "MID"
		});
	};

	highClimb = (event) => {
		this.setState({
			climbState: 10,
      climbLevel: "HIGH"
		});
	};

	traversalClimb = (event) => {
		this.setState({
			climbState: 15,
      climbLevel: "TRAVERSAL"
		});
	};

	handleTextBox = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	submitData = () => {
		alert("Data Submited!")
		const url = "/team/" + this.props.teamNumber;
		const config = {
			headers: {
				secretCode: this.props.secretCode
			}
		};
		const body = {
			eventCode: this.props.eventCode,
			matchNumber: this.state.matchNumber,
			robotNumber: this.state.scoutingTeamNumber,
			creator: this.props.scouterName,
			objectives: [
        {
          gamemode: "AUTO",
          objective: "MOBILITY_2022",
          count: this.state.autoTaxi
        },
				{
					gamemode: "AUTO",
					objective: "LOW_GOAL_2022",
					count: this.state.autoLowCount
				},
				{
					gamemode: "AUTO",
					objective: "HIGH_GOAL_2022",
					count: this.state.autoHighCount
				},
				{
					gamemode: "AUTO",
					objective: "MISS_GOAL_2022",
					count: this.state.autoMissCount
				},
				{
					gamemode: "TELEOP",
					objective: "LOW_GOAL_2022",
					count: this.state.teleopLowCount
				},
				{
					gamemode: "TELEOP",
					objective: "HIGH_GOAL_2022",
					count: this.state.teleopHighCount
				},
				{
					gamemode: "TELEOP",
					objective: "MISS_GOAL_2022",
					count: this.state.teleopMissCount
				},
				{
					gamemode: "TELEOP",
					objective: "CLIMB_2022",
					count: this.state.climbState
				}


			]
		};
		GearscoutService.post(url, body, config);

		this.setState(INITIAL_STATE);
	};

	render() {
		return (
			<div>
				
				<div className="wrapper">
					<h2 className="subtitle-2" onChange={this.handleTextBox}>GearScout</h2>
          <a className="space" href="https://data.gearitforward.com/">Analytics</a>
					<TextField
						id="outlined-basic" 
						label={this.props.translate("TEAM_NUMBER")}
						variant="outlined"
						name="scoutingTeamNumber"
						type="Text"
						value={this.state.scoutingTeamNumber}
						onChange={this.handleTextBox}
						placeholder={this.props.translate("TEAM_NUMBER")}
						className="data_form"></TextField>
					<TextField
						id="outlined-basic" 
						label={this.props.translate("MATCH_NUMBER")}
						variant="outlined"
						name="matchNumber" 
						type="Text"
						value={this.state.matchNumber}
						onChange={this.handleTextBox}
						placeholder={this.props.translate("MATCH_NUMBER")}></TextField>

					<h3>{this.props.translate("AUTO")}</h3>
					<div className="center">
						<div className="outline-box">
							<h3>{this.props.translate("MOBILITY_2022")}</h3>
							<div className="plus-minus-margin">
								<Button
									className="plus-minus-button"
									type="button"
									variant="contained"
									onClick={this.Taxiundobutton}>X</Button>
								<Button
									className="plus-minus-button"
									type="button"
									variant="contained"
									onClick={this.doesAutoTaxi}>✓</Button>
							</div>
							<div>{this.state.autoTaxi.toString()}</div>

						</div>
						<div className="outline-box">
							<h3>{this.props.translate("LOW_GOAL_2022")}</h3>
							<div className="plus-minus-margin">
								<Button
									name="autoLowCount"
									className="plus-minus-button"
									type="button"
									variant="contained"
									onClick={this.subtractCount}>-</Button>
								<Button
									name="autoLowCount"
									className="plus-minus-button"
									type="button"
									variant="contained"
									onClick={this.addCount}>+</Button>
							</div>
							<div>{this.state.autoLowCount}</div>
						</div>
					</div>

					<div className="center">
						<div className="outline-box">
							<h3>{this.props.translate("HIGH_GOAL_2022")}</h3>
							<div className="plus-minus-margin">
								<Button
									name="autoHighCount"
									className="plus-minus-button"
									type="button"
									variant="contained"
									onClick={this.subtractCount}>-</Button>
								<Button
									name="autoHighCount"
									className="plus-minus-button"
									type="button"
									variant="contained"
									onClick={this.addCount}>+</Button>
							</div>
							<div>{this.state.autoHighCount}</div>
						</div>
					</div>

					<div className="outline-box">
						<h3>{this.props.translate("MISS_GOAL_2022")}</h3>
						<div className="plus-minus-margin">
							<Button
								name="autoMissCount"
								className="plus-minus-button"
								type="button"
								variant="contained"
								onClick={this.subtractCount}>-</Button>
							<Button
								name="autoMissCount"
								className="plus-minus-button"
								type="button"
								variant="contained"
								onClick={this.addCount}>+</Button>
						</div>
						<div>{this.state.autoMissCount}</div>
					</div>
					<h3>{this.props.translate("TELEOP")}</h3>
					<div className="center">
						<div className="outline-box">
							<h3>{this.props.translate("LOW_GOAL_2022")}</h3>
							<div className="plus-minus-margin">
								<Button
									name="teleopLowCount"
									className="plus-minus-button"
									variant="contained"
									type="button"
									onClick={this.subtractCount}>-</Button>
								<Button
									name="teleopLowCount"
									className="plus-minus-button"
									variant="contained"
									type="button"
									onClick={this.addCount}>+</Button>
							</div>
							<div>{this.state.teleopLowCount}</div>
						</div>
					</div>

					<div className="center">
						<div className="outline-box">
							<h3>{this.props.translate("HIGH_GOAL_2022")}</h3>
							<div className="plus-minus-margin">
								<Button
									name="teleopHighCount"
									className="plus-minus-button"
									variant="contained"
									type="button"
									onClick={this.subtractCount}>-</Button>
								<Button
									name="teleopHighCount"
									className="plus-minus-button"
									variant="contained"
									type="button"
									onClick={this.addCount}>+</Button>
							</div>
							<div>{this.state.teleopHighCount}</div>
						</div>
						<div className="outline-box">
							<h3>{this.props.translate("MISS_GOAL_2022")}</h3>
							<div className="plus-minus-margin">
								<Button
									name="teleopMissCount"
									className="plus-minus-button"
									variant="contained"
									type="button"
									onClick={this.subtractCount}>-</Button>
								<Button
									name="teleopMissCount"
									className="plus-minus-button"
									variant="contained"
									type="button"
									onClick={this.addCount}>+</Button>
							</div>
							<div>{this.state.teleopMissCount}</div>
						</div>
					</div>

					<div className="center">
						<div className="outline-box">
							<h3>{this.props.translate("CLIMB_2022")}</h3>
							<div className="center">
								<div className="plus-minus-margin">
									<Button
										className="plus-minus-button"
										type="button"
										variant="contained"
										onClick={this.noClimb}>{this.props.translate("NONE")}</Button>
								</div>
								<div className="plus-minus-margin">
									<Button
										className="plus-minus-button"
										type="button"
										variant="contained"
										onClick={this.lowClimb}>{this.props.translate("LOW")}</Button>
								</div>
								<div className="plus-minus-margin">
									<Button
										className="plus-minus-button"
										type="button"
										variant="contained"
										onClick={this.midClimb}>{this.props.translate("MID")}</Button>
								</div>
							</div>

							<div className="space"></div>

							<div className="center">
								<div className="plus-minus-margin">
									<Button
										className="plus-minus-button"
										type="button"
										variant="contained"
										onClick={this.highClimb}>{this.props.translate("HIGH")}</Button>
								</div>
								<div className="plus-minus-margin">
									<Button
										className="plus-minus-button"
										type="button"
										variant="contained"
										onClick={this.traversalClimb}>{this.props.translate("TRAVERSAL")}</Button>
								</div>
							</div>

							<div>{this.props.translate(this.state.climbLevel)}</div>
						</div>
					</div>
					<Button className="button" type="button" variant="contained" onClick={this.submitData}>{this.props.translate("SUBMIT_1")}</Button>
					<img src="/2338logo.png" className="logo"></img>
				</div>
			</div>


		);
	}
}

export default DataCollectionPage;
