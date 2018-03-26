import React, {Component} from 'react';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  changeName(e){
    this.setState({
      name : e.target.value
    })
  }

  handlerClick(e){
    this.props.searchWriter(this.state);
    console.log(this.state);
  }

  render() {
    return(
      <div className="App-section" style={{height: '50px', marginLeft: '15%'}} >
        <div>
          <label >
            Search:
          </label>
        </div>
        <div >
          <input value={this.state.name} onChange={this.changeName.bind(this)} />
        </div>
        <div >
          <button onClick={() => {
            this.handlerClick(this.state.name)
          }}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Search;