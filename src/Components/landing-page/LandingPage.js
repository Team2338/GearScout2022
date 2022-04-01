import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './LandingPage.css';

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
      scouterName: scouterName,
    }));
  }

  render(){
    return(
      <div className='wrapper'>
        <div className="header">
          <div className="left">
            <img src='./2338logo.png' className="landingpage-logo"/>
          </div>
          <h1 className='main-title'>Gear It Forward 2338</h1>
          <span>
            <Select name="language" id="lang" onChange={this.props.changeLanguage} value={this.props.language} size="medium">
              <MenuItem value="english">English</MenuItem>
              <MenuItem value="spanish">Español</MenuItem>
              <MenuItem value="french">Français</MenuItem>
              <MenuItem value="hindi">हिन्दी</MenuItem>
            </Select>
          </span>
        </div>

        <h1 className="login-title">Login: </h1>
        <div className="landingpage-forms">
          {/* <h3>{this.props.translate("TEAM_NUMBER")}: </h3> */}
          <TextField name="teamNumber" id="outlined-basic" label={this.props.translate("YOUR_TEAM_NUMBER")} variant="filled" type='Text'  onChange={this.handleChange} value={this.state.teamNumber} /> 
        </div>

        <div className="landingpage-forms">
          <TextField name="eventCode" id="outlined-basic" label={this.props.translate("EVENT_CODE")} variant="filled" type='Text' onChange={this.handleChange} value={this.state.eventCode} placeholder={this.props.translate("EVENT_CODE")}/>
        </div>

        <div className="landingpage-forms">
          <TextField name="scouterName" id="outlined-basic" label={this.props.translate("SCOUTER_NAME")} variant="filled" type='Text' onChange={this.handleChange} value={this.state.scouterName} placeholder={this.props.translate("SCOUTER_NAME")}/>
        </div>

        <div className="landingpage-forms">
          <TextField name="secretCode" id="outlined-basic" label={this.props.translate("SECRET_CODE")} variant="filled" type='Text' onChange={this.handleChange} value={this.state.secretCode} placeholder={this.props.translate("SECRET_CODE")}/>
        </div>

        <div className="points-landingpage">*{this.props.translate("SECRET_CODE_HELPER_1")}*</div>
        <div className="points-landingpage">*{this.props.translate("SECRET_CODE_HELPER_2")}*</div>
        <div className="points-landingpage">*{this.props.translate("SECRET_CODE_HELPER_3")}*</div>
        <Button name="submit" className='button' type="button" variant="contained" size="medium" onClick={this.handleClick} >{this.props.translate("SUBMIT_1")}</Button>

      </div>
    )
  }
}
export default LandingPage
