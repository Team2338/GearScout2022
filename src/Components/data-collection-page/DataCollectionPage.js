import React from "react";
import Button from '@mui/material/Button';
import './DataCollectionPage.css';
import GearscoutService from "../../Services/GearscoutService";
class DataCollectionPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      autoTaxi: 0,
      autoLowCount: 0,
      autoHighCount: 0,
      autoMissCount: 0,
      teleopLowCount: 0,
      teleopHighCount: 0,
      teleopMissCount: 0,
      teleopDefence: false,
      climbState: 0,
      climbLevel: "none",
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
      autoTaxi: 5
    })
  }
  Taxiundobutton = (event)=>{
    this.setState({
      autoTaxi: 0
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
        }
        
         
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
                  <div className='outline-box'>
                    <h3>Taxi</h3>
                    <div className='plus-minus-margin'>
                      <Button className='plus-minus-button' type="button"  variant="contained" onClick={this.Taxiundobutton}>X</Button>
                      <Button className='plus-minus-button' type="button" variant="contained" onClick={this.doesAutoTaxi}>✓</Button>
                    </div>
                    <div>{this.state.autoTaxi.toString()}</div>
                    
                  </div>
                  <div className='outline-box'>
                    <h3>Low</h3>
                    <div className='plus-minus-margin'>
                      <Button name="autoLowCount" className='plus-minus-button' type="button" variant="contained" onClick={this.subtractCount}>-</Button>
                      <Button name="autoLowCount" className='plus-minus-button' type="button" variant="contained" onClick={this.addCount}>+</Button>
                    </div>
                    <div>{this.state.autoLowCount}</div>
                  </div>
                  <div className='outline-box'>
                    <h3>High</h3>
                    <div className='plus-minus-margin'>
                      <Button name='autoHighCount' className='plus-minus-button' type="button" variant="contained" onClick={this.subtractCount}>-</Button>
                      <Button name='autoHighCount' className='plus-minus-button' type="button" variant="contained" onClick={this.addCount}>+</Button>
                    </div>
                    <div>{this.state.autoHighCount}</div>
                  </div>
                  <div className='outline-box'>
                    <h3>Miss</h3>
                    <div className='plus-minus-margin'>
                      <Button name="autoMissCount" className='plus-minus-button' type="button" variant="contained" onClick={this.subtractCount}>-</Button>
                      <Button name="autoMissCount" className='plus-minus-button' type="button" variant="contained" onClick={this.addCount}>+</Button>
                    </div>
                    <div>{this.state.autoMissCount}</div>
                  </div> 
                </div>
               
                 
             
                <h3>Teleop</h3>
                <div className='center'>
                  <div className='outline-box'>
                    <h3>Defence</h3>
                    <div className='plus-minus-margin'>
                      <Button className='plus-minus-button' type="button" variant="contained" onClick={this.doesTeleopDefence}>✓</Button>
                    </div>
                    <div>{this.state.teleopDefence.toString()}</div>
                  </div>
                  <div className='outline-box'>
                    <h3>Low</h3>
                    <div className='plus-minus-margin'>
                      <Button name="teleopLowCount" className='plus-minus-button' variant="contained" type="button" onClick={this.subtractCount}>-</Button>
                      <Button name="teleopLowCount" className='plus-minus-button' variant="contained" type="button" onClick={this.addCount}>+</Button>
                    </div>
                    <div>{this.state.teleopLowCount}</div>
                  </div>
                  <div className='outline-box'>
                    <h3>High</h3>
                    <div className='plus-minus-margin'>
                      <Button name="teleopHighCount" className='plus-minus-button' variant="contained" type="button" onClick={this.subtractCount}>-</Button>
                      <Button name="teleopHighCount" className='plus-minus-button' variant="contained" type="button" onClick={this.addCount}>+</Button>
                    </div>
                    <div>{this.state.teleopHighCount}</div>
                  </div>
                  <div className='outline-box'>
                    <h3>Miss</h3>
                    <div className='plus-minus-margin'>
                      <Button name="teleopMissCount" className='plus-minus-button' variant="contained" type="button" onClick={this.subtractCount}>-</Button>
                      <Button name="teleopMissCount" className='plus-minus-button' variant="contained" type="button" onClick={this.addCount}>+</Button>
                    </div>
                    <div>{this.state.teleopMissCount}</div>
                  </div>
                </div>

                <div className='center'>
                  <div className='outline-box'>
                    <h3>Hanger</h3>
                    <div className="center">
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
                    <div>{this.state.climbLevel}</div>
                  </div>
                </div>

      
                
         
                 
                  
                 
                 
               
                  
                  
               
                  
                
                 
                 
              
                  
                  
                  
              
                
                <Button className='button' type="button" onClick={this.submitData}>Submit</Button>
                <img src='./2338logo.png' className='logo'></img>
              </div>
            </div>
            
          )    }
}
export default DataCollectionPage;