import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Potato from './Potato/Potato'; 
class App extends Component { 
  state = {
    potatoes:[
      {name: 'BELARUS', year: '1991'},
      {name: 'BANGLADESH', year: '1885'}
    ],
    PageTitle: 'Blog about Potato',
    showPotatoes : false
  };
  // ChangeTitleHeadler = () => { 
  //   console.log('clicked');
  //   let oldTitle = this.state.PageTitle; 
  //   oldTitle = oldTitle + 'es'
  //   this.setState ({ 
  //     PageTitle: oldTitle
  //   })

  // };
  onChangeName(name, index) {
    const potato = this.state.potatoes[index]
    potato.name = name 
    let potatoes2 = [...this.state.potatoes]
    potatoes2[index] = potato
    this.setState({
      potatoes: potatoes2
    }); 
  };
  tonglePotatoesHandler = () => { 
    this.setState({
      showPotatoes: !this.state.showPotatoes 
    });
  };
  render() {
    const divStyle = { 
      'text-align': 'center', 
       'border' : '2px',
       'border-color': 'black' 
    }
    const potatos = this.state.potatoes; 
    return(
      <div className = "App" style = {divStyle}>
        <h1 style = {{color: 'black', fontSize : '20px' }}>{this.state.PageTitle}</h1>
        <button onClick = {this.tonglePotatoesHandler}>Show Potatoes</button>
        {this.state.showPotatoes 
          ?this.state.potatoes.map((potatoes, index) => {
            return (
              <div style = {{
                width: 400, 
                margin: 'auto', 
                paddingTop: '20px'
              }}>  
              <Potato 
                key = {index} 
                name = {potatoes.name} 
                year = {potatoes.year} 
                onChangeName = {event => this.onChangeName(event.target.value, index)}
              />
              </div> 
            ) 
          })
        : null
        }
        {/* <Potato name = 'Бразильская' year = '2001'>
        <p>Samaya luchaya kortoshka</p>
        </Potato>
        <Potato name = {potatos[0].name} year = {potatos[0].year}></Potato>  */}
      </div>
    );
  }
};
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
