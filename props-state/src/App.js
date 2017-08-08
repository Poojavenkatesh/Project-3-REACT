import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>prop number is : {this.props.propNumber}</h3>
        <h3>prop string is : {this.props.propString}</h3>
        <h3>prop object is : {this.props.propObject.obj1}</h3>
        <Parent />
      </div>

    );
  }
}

App.propTypes = {
  propObject: React.PropTypes.object, //*propObject of type object
  propString: React.PropTypes.string,
  propNumber: React.PropTypes.number
}

App.defaultProps = {
  propNumber: 3,
  propString: "This is Prop String",
  propObject: {
    obj1: "I am obj 1",
    obj2: "I am obj 2",
    obj3: "I am obj 3"
  }
}


class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: ['s-BMW', 's-MERC', 's-CITY', 's-AUDI']
    }; //calling default state just like defaultProps
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState( {cars: this.state.cars.reverse()});
  }

  render(){
    return(
      <div>
        <h2 onClick = {this.handleClick}>Just some info</h2>
        <Cars msg="cars are cool" model="12345" coolcars={this.state.cars}/> {/*Component inside a component */}
      </div>
    );
  }
}

Parent.defaultProps = {
  cars: ['BMW', 'MERC', 'CITY', 'AUDI']
}


class Cars extends Component {
  render(){
    console.log(this.props);
    return(
      <div>
        <h3>I am from Cars component</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.model}</p>
        <div>{this.props.coolcars.map((item,i) =>
           {
            return <p key={i}>{item}</p>;
           }
          )}
        </div>
      </div>
    );
  }
}

export default App;
