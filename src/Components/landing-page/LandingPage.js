import React from "react";
import Button from '@mui/material/Button';
class LandingPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      teamNumber: "",
      eventCode: "",
      secretCode: ""
    }
  }
  handleClick = (event) => {
    this.props.parentCallback(event, this.state.teamNumber, this.state.eventCode, this.state.secretCode);
  };

  handleChange = (event)=>{
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render(){
    return(
      <div className='wrapper'>
        <h1 className='main-title' >Gear It Forward 2338</h1>
        <h2 className='subtitle-1'>Scouting App</h2>
        <h3>Team Number: </h3>
        <input name="teamNumber" className='text-box' type='Text'  onChange={this.handleChange} value={this.state.teamNumber} placeholder='Team Number: '></input>
        <h3>Event Code: </h3>
        <input name="eventCode" className='text-box' type='Text'  onChange={this.handleChange} value={this.state.eventCode} placeholder='Event Code: '></input>
        <h3>Secret Code: </h3>
        <input name="secretCode" className='text-box' type='Text' onChange={this.handleChange} value={this.state.secretCode} placeholder='Secret Code: '></input>
        <div>*Secret code hint*</div>
        <Button name="submit" className='button' type="button" variant="contained" size="medium" onClick={this.handleClick}>Submit</Button>
        <img src='./2338logo.png' className='logo'></img>
      </div>
    )
  }
}
export default LandingPage