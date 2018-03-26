import React, {Component} from 'react';
import './App.css';
import _ from 'lodash';

class Writer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      marginLeft: '15%',
      inputsize: 30,
      count: 0,
      writerName: '',
      flag: null
    }
  }

  handlerClickPlus = (name, count) => {
    this.props.bookCountFun(name, count+1);
  };

  handlerClickMinus = (name, count) => {
    if(count-1 >= 0){
      this.props.bookCountFun(name, count-1);
    }
  };


  render() {
    let filterData = this.props.dataName;
    const Writer = this.props.booklist.filter(function(item) {
      if(filterData == ''){
        return item
      } else {
        return item.name.toLowerCase().search(filterData.toLowerCase()) !== -1;
      }
    }).map((data) =>
      <tr className="blueTable">
        <td key={data.name}>
          {data.name}
         </td>
        <td className="App-row">
          <div >
            <button onClick={() => {
              this.handlerClickMinus(data.name, data.count)
            }}>-</button>
          </div>
          <div>
            <input style={{ width: this.state.inputsize, textAlign: "center" }}  value={data.count}/>
          </div>
          <div>
            <button onClick={() => {
              this.handlerClickPlus(data.name, data.count)
            }}>+</button>
          </div>
        </td>
      </tr>
    );

    return(
      <tbody>{Writer}</tbody>
    );
  }
}

export default Writer;