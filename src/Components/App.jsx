import './App.css';
import React from 'react';
import DataCollectionPage from './data-collection-page/DataCollectionPage';
import LandingPage from './landing-page/LandingPage';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      page: true
    }
  }

  // landing page = true; data page = false
  changePage = (event)=>{
    this.setState({
      page: false
    });
  }

  render(){
    let data;
    if (this.state.page ){
      data = <LandingPage/>;
    }
    else{
      data = <DataCollectionPage/>;
    }
    
    return(
      <React.Fragment>
        {data}
        <button type="button" onClick={this.changePage}>To Data Collection Page</button>
        <button type="button" onClick={this.addCount}>Add To Count</button>

      </React.Fragment>
    )
  }
}

export default App;