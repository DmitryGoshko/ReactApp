import React, {Component} from 'react';
import Writer from "./Writer";
import './App.css';

class Rack extends React.Component {

  constructor(props) {
    super(props);
  }

  changeCountBook (dataName, dataCount) {
    this.props.bookFun(dataName, dataCount);
  }

  render() {
    return(
      <div className="Rack">
          <table id="rack" className="blueTable">
            <thead>
              <tr>
                <th>Poet</th>
                <th>Books count</th>
              </tr>
            </thead>
            <Writer booklist={this.props.booklist} bookCountFun={this.changeCountBook.bind(this)} dataName={this.props.dataFilterNameWriter}/>
          </table>
      </div>
    );
  }
}

export default Rack;