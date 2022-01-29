import React from "react";
class LandingPage extends React.Component{
  render(){
    return(
      <div className='wrapper'>
        <h1 className='main-title' >Gear It Forward 2338</h1>
        <h2 className='subtitle-1'>Scouting App</h2>
        <h3>Team Number: </h3>
        <input className='text-box' type='Text'placeholder='Team Number: '></input>
        <h3>Event Code: </h3>
        <input className='text-box' type='Text'placeholder='Event Code: '></input>
        <h3>Secret Code: </h3>
        <input className='text-box' type='Text'placeholder='Secret Code: '></input>
        <div>*Secret code hint*</div>
        <button className='button' type="button">Submit</button>
        <img src='./2338logo.png' className='logo'></img>
      </div>
    )
  }
}
export default LandingPage