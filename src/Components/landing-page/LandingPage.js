import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

class LandingPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      teamNumber: "",
      eventCode: "",
      secretCode: "",
      scouterName: ""
    }
  }
  handleClick = (event) => {
    localStorage.setItem('teamNumber', this.state.teamNumber.toString());
    localStorage.setItem('eventCode', this.state.eventCode.toString());
    localStorage.setItem('secretCode', this.state.secretCode.toString());
    localStorage.setItem('scouterName', this.state.scouterName.toString());
    this.props.parentCallback(event, this.state.teamNumber, this.state.eventCode, this.state.secretCode, this.state.scouterName);
  };

  handleChange = (event)=>{
    console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidMount(){
    const teamNumber = localStorage.getItem('teamNumber') ?? "";
    const eventCode = localStorage.getItem('eventCode') ?? "";
    const secretCode = localStorage.getItem('secretCode') ?? "";
    const scouterName = localStorage.getItem('scouterName') ?? "";

    this.setState(({
      teamNumber: teamNumber,
      eventCode: eventCode,
      secretCode: secretCode,
      scouterName: scouterName
    }));
  }

  render(){
    return(
      <div className='wrapper'>
        <div className='subtitlechange'>
          <h1 className='main-title' >Gear It Forward 2338</h1>
          <h2 className='subtitle-1'>Scouting App</h2>
          <select name="language" id="lang" onChange={this.props.changeLanguage} value={this.props.language}> 
            <option value="english">English</option>
            <option value="spanish">Español</option>
            <option value="french">Français</option>    
          </select>
        </div>
        
        <h3>Team Number: </h3>
        <input name="teamNumber" className='text-box' type='Text'  onChange={this.handleChange} value={this.state.teamNumber} placeholder={this.props.translate("YOUR_TEAM_NUMBER")} ></input> 
        {/* <TextField id="standard-basic" name="teamNumber" type='Text'  onChange={this.handleChange} value={this.state.teamNumber} label="Team Number: " variant="standard"/> */}
        <h3>Event Code: </h3>
        <input name="eventCode" className='text-box' type='Text'  onChange={this.handleChange} value={this.state.eventCode} placeholder='Event Code: '></input>
        {/* <TextField id="standard-basic" name="eventCode" type='Text'  onChange={this.handleChange} value={this.state.eventCode} label="Event Code: " variant="standard" /> */}
        <h3>Scouter Name: </h3>
        <input name="scouterName" className='text-box' type='Text' onChange={this.handleChange} value={this.state.scouterName} placeholder='Scouter Name: '></input>
        <h3>Secret Code: </h3>
        <input name="secretCode" className='text-box' type='Text' onChange={this.handleChange} value={this.state.secretCode} placeholder='Secret Code: '></input>
        <div>*Enter team specific password to store data*</div>
        <div>*This code will be used to view your analytics*</div>
        <div>*Make sure all scouters from the same team use the same code*</div>
        <Button name="submit" className='button' type="button" variant="contained" size="medium" onClick={this.handleClick}>Submit</Button>
        <img src='./2338logo.png' className='logo'></img>
      </div>
    )
  }
}
export default LandingPage
