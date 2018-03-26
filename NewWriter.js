import React, {Component} from 'react';
import './App.css';
import Writer from "./Writer";
import App from "./App";
import Dropdown, { DropdownTrigger, DropdownContent } from './Dropdown.js';


class NewWriter extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      marginLeft: '15%',
      inputsize: 30,
      count: 1,
      writerName: '',
      section: '',
      flag: null
    }
    this.changeName =this.changeName.bind(this);
    this.changeSection =this.changeSection.bind(this);
    this.changeCount =this.changeCount.bind(this);
    this.addWriter =this.addWriter.bind(this);
  }


  changeName(e){
    this.setState({
      writerName : e.target.value
    })
  }

  changeSection(e){
    this.setState({
      section : e.target.value
    })
  }

  changeCount(e){
    this.setState({
      count : e.target.value
    })
  }

  addWriter(e){
    e.preventDefault();
    this.props.writerNameFun(this.state);
    console.log(this.state);
  }

  handlerClickPlus = (count) => {
    this.setState((prevState, props) => {
      let newCount = prevState.count + 1;

      return {
        count: newCount
      };
    });
  };

  handlerClickMinus = (count) => {
    this.setState((prevState, props) => {
      let newCount = prevState.count - 1;

      if(newCount < 0){
        newCount = 0;
      }

      return {
        count: newCount
      };
    });
  };

  handlerClickAction = (flag) => {
    this.setState((prevState, props) => {
      let newFlag = flag;

      if(newFlag){
        return {
          Writer: props.writerName,

          writerName: '',
          count: 0,
          flag: null
        }
      } else {
        return{
          writerName: '',
          count: 0
        };
      }
    });
  }

  dropdownSelected(data){
    this.setState({
        section: data.target.value
    });
  }

  render(){
    const Sec = this.props.sections.filter((data)=>!!data).map((data) =>
      <option key={data.NameRack} value={data.NameRack}>{data.NameRack}</option>
    );

    return (
      <div className="App-section" style={{ marginLeft: this.state.marginLeft }}>
        <div>
          <label >
            Section:
          </label>
        </div>
        <div >
          <select name="text" onChange={this.dropdownSelected.bind(this)} >
            <option key="-None-" value="-None-">-None-</option>
            {Sec}
          </select>
        </div>
        <div>
          <label >
            New Writer:
          </label>
        </div>
        <div >
          <input value={this.state.writerName} onChange ={this.changeName}/>
        </div>
        <div >
          <button onClick={() => {
            this.handlerClickMinus(this.state.count)
          }}>-</button>
        </div>
        <div >
          <input style={{ width: this.state.inputsize, textAlign: "center" }} onChange ={this.changeCount} value={this.state.count}/>
        </div>
        <div >
          <button onClick={() => {
            this.handlerClickPlus(this.state.count)
          }}>+</button>
        </div>
        <div >
          <button onClick={this.addWriter.bind(this)}>Add</button>
        </div>
        <div >
          <button onClick={() => {
            this.handlerClickAction(false)
          }}>Cancel</button>
        </div>
      </div>
    );
  }


}

export default NewWriter;