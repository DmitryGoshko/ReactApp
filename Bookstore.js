import React, {Component} from 'react';
import Rack from "./Rack";

class Bookstore extends React.Component {

  constructor(props) {
    super(props);
  }

  changeCountBook (dataRack, dataName, dataCount) {
    this.props.bookChange(dataRack, dataName, dataCount);
  }

  render() {

    const Store = this.props.library.filter((data)=>!!data).map((data) => {
      return(
      <div>
          <p>{data.NameRack}</p>
          <Rack booklist={data.tableList} bookFun={this.changeCountBook.bind(this, data.NameRack)} dataFilterNameWriter={this.props.dataFilterName}/>
        </div>
      )
    }

    );

    return(
      <div>{Store}</div>
    );
  }
}

export default Bookstore;