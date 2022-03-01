import React from "react";
import Button from "@mui/material/Button";
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
			autoTaxi: 5
		});
	};

	Taxiundobutton = (event) => {
		this.setState({
			autoTaxi: 0
		});
	};


	noClimb = (event) => {
		this.setState({
			climbState: 0
		});
	};

	lowClimb = (event) => {
		this.setState({
			climbState: 4
		});
	};

	midClimb = (event) => {
		this.setState({
			climbState: 6
		});
	};

	highClimb = (event) => {
		this.setState({
			climbState: 10
		});
	};

	traversalClimb = (event) => {
		this.setState({
			climbState: 15
		});
	};

	handleTextBox = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	submitData = () => {
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
					<h2 className="subtitle-2" onChange={this.handleTextBox}>Scouting App</h2>
					<input
						name="scoutingTeamNumber"
						className="text-box"
						type="Text"
						value={this.state.scoutingTeamNumber}
						onChange={this.handleTextBox}
						placeholder="Team Number: "></input>
					<input
						name="matchNumber"
						className="text-box"
						type="Text"
						value={this.state.matchNumber}
						onChange={this.handleTextBox}
						placeholder="Match Number: "></input>

					<h3>Auto</h3>
					<div className="center">
						<div className="outline-box">
							<h3>Taxi</h3>
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
							<h3>Low</h3>
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
							<h3>High</h3>
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
						{/* <div className='plus-minus-margin'>
                    <Button name="teleopMissCount" className='plus-minus-button' variant="contained" type="button" onClick={this.subtractCount}>-</Button>
                    <Button name="teleopMissCount" className='plus-minus-button' variant="contained" type="button" onClick={this.addCount}>+</Button>
                  </div> */}
					</div>

					{/* <h4>Hanger</h4>
                <div className='center'>
                  <div className='outline-box'>Hanger</div>
                </div>
                <div className='center'>
                  <div>{this.state.climbState}</div>
                    <div className='plus-minus-margin'>
                      <Button className='plus-minus-button' type="button" variant="contained" onClick={this.noClimb}>none</Button>
                    </div>
                    <div className='plus-minus-margin'>
                      <Button className='plus-minus-button' type="button" variant="contained" onClick={this.lowClimb}>Low</Button>
                    </div>
                    <div className='plus-minus-margin'>
                      <Button className='plus-minus-button' type="button" variant="contained" onClick={this.midClimb}>Mid</Button>
                    </div>
                    <div className='plus-minus-margin'>
                      <Button className='plus-minus-button' type="button" variant="contained" onClick={this.highClimb}>High</Button>
                    </div>
                    <div className='plus-minus-margin'>
                      <Button className='plus-minus-button' type="button" variant="contained" onClick={this.traversalClimb}>Traversal </Button>
                    </div>
                  </div> */}
					<div className="outline-box">
						<h3>Miss</h3>
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
					<h3>Teleop</h3>
					<div className="center">
						<div className="outline-box">
							<h3>Low</h3>
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
							<h3>High</h3>
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
							<h3>Miss</h3>
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
							<h3>Hanger</h3>
							<div className="center">
								<div className="plus-minus-margin">
									<Button
										className="plus-minus-button"
										type="button"
										variant="contained"
										onClick={this.noClimb}
										onClick={this.climbNone}>none</Button>
								</div>
								<div className="plus-minus-margin">
									<Button
										className="plus-minus-button"
										type="button"
										variant="contained"
										onClick={this.lowClimb}
										onClick={this.climbLow}>Low</Button>
								</div>
								<div className="plus-minus-margin">
									<Button
										className="plus-minus-button"
										type="button"
										variant="contained"
										onClick={this.midClimb}
										onClick={this.climbMid}>Mid</Button>
								</div>
							</div>

							<div className="space"></div>

							<div className="center">
								<div className="plus-minus-margin">
									<Button
										className="plus-minus-button"
										type="button"
										variant="contained"
										onClick={this.highClimb}
										onClick={this.climbHigh}>High</Button>
								</div>
								<div className="plus-minus-margin">
									<Button
										className="plus-minus-button"
										type="button"
										variant="contained"
										onClick={this.traversalClimb}
										onClick={this.climbTraversal}>Traversal </Button>
								</div>
							</div>

							<div>{this.state.climbLevel}</div>
						</div>
					</div>
					<Button className="button" type="button" variant="contained" onClick={this.submitData}>Submit</Button>
					<img src="/2338logo.png" className="logo"></img>
				</div>
			</div>


		);
	}
}

export default DataCollectionPage;
