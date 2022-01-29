import React from "react";
import './DataCollectionPage.css';
class DataCollectionPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      autoTaxi: false,
      autoLowCount: 0,
      autoHighCount: 0,
      teleopLowCount: 0,
      teleopHighCount: 0,
      teleopDefence: false,
      climbState: 0,
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
      disable: true
    })
  }

  doesTeleopDefence = (event)=>{
    this.setState({
      teleopDefence: true
    })
  }

  lowClimb = (event)=>{
    this.setState({
      teleopDefence: 1
    })
  }

  midClimb = (event)=>{
    this.setState({
      teleopDefence: 2
    })
  }

  highClimb = (event)=>{
    this.setState({
      teleopDefence: 3
    })
  }

  traversalClimb = (event)=>{
    this.setState({
      teleopDefence: 4
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
      console.log("Taxi: " + this.state.autoTaxi)
      console.log("Auto low: " + this.state.autoLowCount)
      console.log("Auto high: " + this.state.autoHighCount)
      console.log("Teleop low: " + this.state.teleopLowCount)
      console.log("Teleop high: " + this.state.teleopHighCount)
      console.log("Defence: " + this.state.teleopDefence)
      console.log("Climb: " + this.state.climbState)
      console.log("Fouls: " + this.state.foul)
      console.log("Tech fouls: " + this.state.techFoul)
      console.log("Yellow cards: " + this.state.yellowCard)
      console.log("Red cards: " + this.state.redCard)
      console.log("Disabled: " + this.state.disable)
      console.log("Disqualified: " + this.state.disqualify)

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
                </div>
      
                <h3>Teleop</h3>
                <div className='center'>
                  <div className='outline-box'>Low</div>
                  <div className='outline-box'>High</div>
                  <div className='outline-box'>Defence</div>
                </div>
                <div className='center'>
                  <div className='plus-minus-margin'>
                    <button name="teleopLowCount" className='plus-minus-button' type="button" onClick={this.subtractCount}>-</button>
                    <button name="teleopLowCount" className='plus-minus-button' type="button" onClick={this.addCount}>+</button>
                  </div>
                  <div className='plus-minus-margin'>
                    <button name="teleopHighCount" className='plus-minus-button' type="button" onClick={this.subtractCount}>-</button>
                    <button name="teleopHighCount" className='plus-minus-button' type="button" onClick={this.addCount}>+</button>
                  </div>
                  <div className='plus-minus-margin'>
                    <button className='plus-minus-button' type="button" onClick={this.doesTeleopDefence}>✓</button>
                  </div>
                </div>
      
                <h4>Hanger</h4>
                <div className='center'>
                  <div className='outline-box'>Hanger</div>
                </div>
                <div className='center'>
                  <div className='plus-minus-margin'>
                    <button className='plus-minus-button' type="button" onClick={this.lowClimb}>Low</button>
                  </div>
                  <div className='plus-minus-margin'>
                    <button className='plus-minus-button' type="button"  onClick={this.midClimb}>Mid</button>
                  </div>
                  <div className='plus-minus-margin'>
                    <button className='plus-minus-button' type="button" onClick={this.highClimb}>High</button>
                  </div>
                  <div className='plus-minus-margin'>
                    <button className='plus-minus-button' type="button" onClick={this.traversalClimb}>Traversal </button>
                  </div>
                </div>
      
                <h3>Penalties</h3>
                <div className='center'>
                  <div className='outline-box'>Fouls</div>
                  <div className='outline-box'>Technical Fouls</div>
                  <div className='outline-box'>Yellow Cards</div>
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