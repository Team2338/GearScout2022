import React from "react";
import Button from '@mui/material/Button';
import './DataCollectionPage.css';
import GearscoutService from "../../Services/GearscoutService";
class DataCollectionPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      autoTaxi: false,
      autoLowCount: 0,
      autoHighCount: 0,
      autoMissCount: 0,
      teleopLowCount: 0,
      teleopHighCount: 0,
      teleopMissCount: 0,
      teleopDefence: false,
      climbState: 0,
      climbLevel: "none",
      foul: 0,
      techFoul: 0,
      yellowCard: 0,
      redCard: 0,
      disable: false,
      disqualify: false,
      scoutingTeamNumber: "",
      matchNumber: ""
    }
  }

  addCount = (event)=>{
    console.log(event)
    this.setState({
      [event.target.name]: this.state[event.target.name] + 1
    })
  }

  subtractCount = (event)=>{
    console.log(event)
    this.setState({
      [event.target.name]: this.state[event.target.name] - 1
    })
  }

  doesAutoTaxi = (event)=>{
    this.setState({
      autoTaxi: true
    })
  }

  doesTeleopDefence = (event)=>{
    this.setState({
      teleopDefence: true
    })
  }

  noClimb = (event)=>{
    this.setState({
      climbState: 0
    })
  }

  lowClimb = (event)=>{
    this.setState({
      climbState: 4
    })
  }

  midClimb = (event)=>{
    this.setState({
      climbState: 6
    })
  }

  highClimb = (event)=>{
    this.setState({
      climbState: 10
    })
  }

  traversalClimb = (event)=>{
    this.setState({
      climbState: 15
    })
  }
  
  addDisable = (event)=>{
    this.setState({
      disable: true
    })
  }


  addDisqualify = (event)=>{
    this.setState({
      disqualify: true
    })
  }
  
  handleTextBox = (event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitData = ()=>{
    const url = "/team/" + this.props.teamNumber;
    const config = {
      headers: {
        secretCode: this.props.secretCode
      }
    }
    const body = {
      eventCode: this.props.eventCode,
      matchNumber: this.state.matchNumber,
      robotNumber: this.state.scoutingTeamNumber,
      creator: this.props.scouterName,
      objectives:[
        // {
        //   gamemode: "Auto",
        //   objective: "Taxi",
        //   count: this.state.autoTaxi
        // },
        {
          gamemode: "Auto",
          objective: "Lower Hub",
          count: this.state.autoLowCount
        },
        {
          gamemode: "Auto",
          objective: "Upper Hub",
          count: this.state.autoHighCount
        },
        {
          gamemode: "Auto",
          objective: "Missed Cargo",
          count: this.state.autoMissCount
        },
        // {
        //   gamemode: "Teleop",
        //   objective: "Defence",
        //   count: this.state.teleopDefence
        // },
        {
          gamemode: "Teleop",
          objective: "Lower Hub",
          count: this.state.teleopLowCount
        },
        {
          gamemode: "Teleop",
          objective: "Upper Hub",
          count: this.state.teleopHighCount
        },
        {
          gamemode: "Teleop",
          objective: "Missed Cargo",
          count: this.state.teleopMissCount
        },
        {
          gamemode: "Teleop",
          objective: "Hanger",
          count: this.state.climbState
        },
        {
          gamemode: "Penalties",
          objective: "Foul",
          count: this.state.foul
        },
        {
          gamemode: "Penalties",
          objective: "Tech Foul",
          count: this.state.techFoul
        },
        {
          gamemode: "Penalties",
          objective: "Yellow Card",
          count: this.state.yellowCard
        },
        {
          gamemode: "Penalties",
          objective: "Red Card",
          count: this.state.foul
        }
        // {
        //   gamemode: "Penalties",
        //   objective: "Disable",
        //   count: this.state.disable
        // },
        // {
        //   gamemode: "Penalties",
        //   objective: "Disqualify",
        //   count: this.state.disqualify
        // }
      ]
    }
    GearscoutService.post(url, body, config)
  }

    render(){
        return (
            <div>
              <div className="wrapper">
                <h2 className='subtitle-2' onChange={this.handleTextBox}>Scouting App</h2>
                <div className='button'></div>
                <input name="scoutingTeamNumber" className='text-box' type='Text' value={this.state.scoutingTeamNumber}onChange={this.handleTextBox} placeholder='Team Number: '></input>
                <input name="matchNumber" className='text-box' type='Text' value={this.state.matchNumber}onChange={this.handleTextBox} placeholder='Match Number: '></input>
                
                <h3>Auto</h3>
                <div className='center'>
                  <div className='outline-box'>Taxi</div>
                  <div className='outline-box'>Low</div>
                  <div className='outline-box'>High</div>
                  <div className='outline-box'>Miss</div>
                </div>
                <div className='center'>
                  <div>{this.state.autoTaxi.toString()}</div>
                  <div>{this.state.autoLowCount}</div>
                  <div>{this.state.autoHighCount}</div>
                  <div>{this.state.autoMissCount}</div>
                </div>
                <div className='center'>
                  <div className='plus-minus-margin'>
                    <Button className='plus-minus-button' type="button" variant="contained" onClick={this.doesAutoTaxi}>✓</Button>
                  </div>
                  <div className='plus-minus-margin'>
                    <Button name="autoLowCount" className='plus-minus-button' type="button" variant="contained" onClick={this.subtractCount}>-</Button>
                    <Button name="autoLowCount" className='plus-minus-button' type="button" variant="contained" onClick={this.addCount}>+</Button>
                  </div>
                  <div className='plus-minus-margin'>
                    <Button name='autoHighCount' className='plus-minus-button' type="button" variant="contained" onClick={this.subtractCount}>-</Button>
                    <Button name='autoHighCount' className='plus-minus-button' type="button" variant="contained" onClick={this.addCount}>+</Button>
                  </div>
                  <div className='plus-minus-margin'>
                    <Button name="autoMissCount" className='plus-minus-button' type="button" variant="contained" onClick={this.subtractCount}>-</Button>
                    <Button name="autoMissCount" className='plus-minus-button' type="button" variant="contained" onClick={this.addCount}>+</Button>
                  </div>
                </div>
      
                <h3>Teleop</h3>
                <div className='center'>
                  <div className='outline-box'>Defence</div>
                  <div className='outline-box'>Low</div>
                  <div className='outline-box'>High</div>
                  <div className='outline-box'>Miss</div>
                </div>
                <div className='center'>
                  <div>{this.state.teleopDefence.toString()}</div>
                  <div>{this.state.teleopLowCount}</div>
                  <div>{this.state.teleopHighCount}</div>
                  <div>{this.state.teleopMissCount}</div>
                </div>
                <div className='center'>
                  <div className='plus-minus-margin'>
                    <Button className='plus-minus-button' type="button" variant="contained" onClick={this.doesTeleopDefence}>✓</Button>
                  </div>
                  <div className='plus-minus-margin'>
                    <Button name="teleopLowCount" className='plus-minus-button' variant="contained" type="button" onClick={this.subtractCount}>-</Button>
                    <Button name="teleopLowCount" className='plus-minus-button' variant="contained" type="button" onClick={this.addCount}>+</Button>
                  </div>
                  <div className='plus-minus-margin'>
                    <Button name="teleopHighCount" className='plus-minus-button' variant="contained" type="button" onClick={this.subtractCount}>-</Button>
                    <Button name="teleopHighCount" className='plus-minus-button' variant="contained" type="button" onClick={this.addCount}>+</Button>
                  </div>
                  <div className='plus-minus-margin'>
                    <Button name="teleopMissCount" className='plus-minus-button' variant="contained" type="button" onClick={this.subtractCount}>-</Button>
                    <Button name="teleopMissCount" className='plus-minus-button' variant="contained" type="button" onClick={this.addCount}>+</Button>
                  </div>
                </div>
      
                <h4>Hanger</h4>
                <div className='center'>
                  <div className='outline-box'>Hanger</div>
                </div>
                <div className='center'>
                  <div>{this.state.climbState}</div>
                </div>
                <div className='center'>
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
                </div>

      
                <h3>Penalties</h3>
                <div className='center'>
                  <div className='outline-box'>Fouls</div>
                  <div className='outline-box'>Technical Fouls</div>
                  <div className='outline-box'>Yellow Cards</div>
                </div>
                <div className='center'>
                  <div>{this.state.foul}</div>
                  <div>{this.state.techFoul}</div>
                  <div>{this.state.yellowCard}</div>
                </div>
                <div className='center'>
                  <div className='plus-minus-margin'>
                    <Button name="foul" className='plus-minus-button' type="button" variant="contained" onClick={this.subtractCount}>-</Button>
                    <Button name="foul" className='plus-minus-button' type="button" variant="contained" onClick={this.addCount}>+</Button>
                  </div>
                  <div className='plus-minus-margin'>
                    <Button name="techFoul" className='plus-minus-button' type="button" variant="contained" onClick={this.subtractCount}>-</Button>
                    <Button name="techFoul" className='plus-minus-button' type="button" variant="contained" onClick={this.addCount}>+</Button>
                  </div>
                  <div className='plus-minus-margin'>
                    <Button name="yellowCard" className='plus-minus-button' type="button" variant="contained" onClick={this.subtractCount}>-</Button>
                    <Button name="yellowCard" className='plus-minus-button' type="button" variant="contained" onClick={this.addCount}>+</Button>
                  </div>
                </div>
                <div className='center'>
                  <div className='outline-box'>Red Cards</div>
                  <div className='outline-box'>Disabled</div>
                  <div className='outline-box'>Disqualified</div>
                </div>
                <div className='center'>
                  <div>{this.state.redCard}</div>
                  <div>{this.state.disable.toString()}</div>
                  <div>{this.state.disqualify.toString()}</div>
                </div>
                <div className='center'>
                  <div className='plus-minus-margin'>
                    <Button name="redCard" className='plus-minus-button' type="button" variant="contained" onClick={this.subtractCount}>-</Button>
                    <Button name="redCard" className='plus-minus-button' type="button" variant="contained" onClick={this.addCount}>+</Button>
                  </div>
                  <div className='plus-minus-margin'>
                    <Button className='plus-minus-button' type="button" variant="contained" onClick={this.addDisable} >✓</Button>
                  </div>
                  <div className='plus-minus-margin'>
                    <Button className='plus-minus-button' type="button" variant="contained" onClick={this.addDisqualify}>✓</Button>
                  </div>
                </div>
                
                <Button className='button' type="button" onClick={this.submitData}>Submit</Button>
                <img src='./2338logo.png' className='logo'></img>
              </div>
            </div>
            
          )    }
}
export default DataCollectionPage;