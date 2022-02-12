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
      scoutingTeamNumber: ""
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

  climbNone = (event)=>{
    if (this.state.climbState = 1) {
      this.setState({
        climbLevel: "none"
      })
    }
  }

  climbLow = (event)=>{
    if (this.state.climbState = 2) {
      this.setState({
        climbLevel: "low"
      })
    }
  }
    
  climbMid = (event)=>{
    if (this.state.climbState = 3) {
      this.setState({
        climbLevel: "mid"
      })
    }
  }

  climbHigh = (event)=>{
    if (this.state.climbState = 4) {
      this.setState({
        climbLevel: "high"
      })
    }
  }
  
  climbTraversal = (event)=>{
    if (this.state.climbState = 5) {
      this.setState({
        climbLevel: "traversal"
      })
    }
  }

  noClimb = (event)=>{
    this.setState({
      climbState: 1
    })
  }

  lowClimb = (event)=>{
    this.setState({
      climbState: 2
    })
  }

  midClimb = (event)=>{
    this.setState({
      climbState: 3
    })
  }

  highClimb = (event)=>{
    this.setState({
      climbState: 4
    })
  }

  traversalClimb = (event)=>{
    this.setState({
      climbState: 5
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
  
  handleTextBox = (event) => {
    this.props.parentCallback(event, this.state.scoutingTeamNumber);
  };

  submitData = ()=>{
    const url = "/team/" + this.props.scoutingTeamNumber;
    const config = {
      headers: {
        secretCode: this.props.secretCode
      }
    }
    const body = {
      eventCode: this.props.eventCode,
      matchNumber: 1,
      robotNumber: 1,
      creator: "abcd",
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
                <input className='text-box' type='Text'placeholder='Team Number: '></input>
                
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
                  <div>{this.state.climbLevel}</div>
                </div>
                <div className='center'>
                  <div className='plus-minus-margin'>
                    <Button className='plus-minus-button' type="button" variant="contained" onClick={this.noClimb} onClick={this.climbNone}>none</Button>
                  </div>
                  <div className='plus-minus-margin'>
                    <Button className='plus-minus-button' type="button" variant="contained" onClick={this.lowClimb} onClick={this.climbLow}>Low</Button>
                  </div>
                  <div className='plus-minus-margin'>
                    <Button className='plus-minus-button' type="button" variant="contained" onClick={this.midClimb} onClick={this.climbMid}>Mid</Button>
                  </div>
                  <div className='plus-minus-margin'>
                    <Button className='plus-minus-button' type="button" variant="contained" onClick={this.highClimb} onClick={this.climbHigh}>High</Button>
                  </div>
                  <div className='plus-minus-margin'>
                    <Button className='plus-minus-button' type="button" variant="contained" onClick={this.traversalClimb} onClick={this.climbTraversal}>Traversal </Button>
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