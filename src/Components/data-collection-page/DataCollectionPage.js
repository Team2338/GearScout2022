import react from "react";
import React from "react";
import './DataCollectionPage.css';
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
      disqualify: false
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

    render(){
        return (
            <div>
              <div className="wrapper">
                <h2 className='subtitle-2'>Scouting App</h2>
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
                    <button className='plus-minus-button' type="button" onClick={this.doesAutoTaxi}>✓</button>
                  </div>
                  <div className='plus-minus-margin'>
                    <button name="autoLowCount" className='plus-minus-button' type="button" onClick={this.subtractCount}>-</button>
                    <button name="autoLowCount" className='plus-minus-button' type="button" onClick={this.addCount}>+</button>
                  </div>
                  <div className='plus-minus-margin'>
                    <button name='autoHighCount' className='plus-minus-button' type="button" onClick={this.subtractCount}>-</button>
                    <button name='autoHighCount' className='plus-minus-button' type="button" onClick={this.addCount}>+</button>
                  </div>
                  <div className='plus-minus-margin'>
                    <button name="autoMissCount" className='plus-minus-button' type="button" onClick={this.subtractCount}>-</button>
                    <button name="autoMissCount" className='plus-minus-button' type="button" onClick={this.addCount}>+</button>
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
                    <button className='plus-minus-button' type="button" onClick={this.doesTeleopDefence}>✓</button>
                  </div>
                  <div className='plus-minus-margin'>
                    <button name="teleopLowCount" className='plus-minus-button' type="button" onClick={this.subtractCount}>-</button>
                    <button name="teleopLowCount" className='plus-minus-button' type="button" onClick={this.addCount}>+</button>
                  </div>
                  <div className='plus-minus-margin'>
                    <button name="teleopHighCount" className='plus-minus-button' type="button" onClick={this.subtractCount}>-</button>
                    <button name="teleopHighCount" className='plus-minus-button' type="button" onClick={this.addCount}>+</button>
                  </div>
                  <div className='plus-minus-margin'>
                    <button name="teleopMissCount" className='plus-minus-button' type="button" onClick={this.subtractCount}>-</button>
                    <button name="teleopMissCount" className='plus-minus-button' type="button" onClick={this.addCount}>+</button>
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
                    <button className='plus-minus-button' type="button" onClick={this.noClimb} onClick={this.climbNone}>none</button>
                  </div>
                  <div className='plus-minus-margin'>
                    <button className='plus-minus-button' type="button" onClick={this.lowClimb} onClick={this.climbLow}>Low</button>
                  </div>
                  <div className='plus-minus-margin'>
                    <button className='plus-minus-button' type="button" onClick={this.midClimb} onClick={this.climbMid}>Mid</button>
                  </div>
                  <div className='plus-minus-margin'>
                    <button className='plus-minus-button' type="button" onClick={this.highClimb} onClick={this.climbHigh}>High</button>
                  </div>
                  <div className='plus-minus-margin'>
                    <button className='plus-minus-button' type="button" onClick={this.traversalClimb} onClick={this.climbTraversal}>Traversal </button>
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
                    <button name="foul" className='plus-minus-button' type="button" onClick={this.subtractCount}>-</button>
                    <button name="foul" className='plus-minus-button' type="button" onClick={this.addCount}>+</button>
                  </div>
                  <div className='plus-minus-margin'>
                    <button name="techFoul" className='plus-minus-button' type="button" onClick={this.subtractCount}>-</button>
                    <button name="techFoul" className='plus-minus-button' type="button" onClick={this.addCount}>+</button>
                  </div>
                  <div className='plus-minus-margin'>
                    <button name="yellowCard" className='plus-minus-button' type="button" onClick={this.subtractCount}>-</button>
                    <button name="yellowCard" className='plus-minus-button' type="button" onClick={this.addCount}>+</button>
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
                    <button name="redCard" className='plus-minus-button' type="button" onClick={this.subtractCount}>-</button>
                    <button name="redCard" className='plus-minus-button' type="button" onClick={this.addCount}>+</button>
                  </div>
                  <div className='plus-minus-margin'>
                    <button className='plus-minus-button' type="button" onClick={this.addDisable} >✓</button>
                  </div>
                  <div className='plus-minus-margin'>
                    <button className='plus-minus-button' type="button" onClick={this.addDisqualify}>✓</button>
                  </div>
                </div>
                
                <button className='button' type="button">Submit</button>
                <img src='./2338logo.png' className='logo'></img>
              </div>
            </div>
            
          )    }
}
export default DataCollectionPage;