import React, {Component} from 'react';


class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      color: '#a23456',
      count: 0,
      numbers: [1, 2, 3, 4, 5]
    };
  }

  handlerClick = (count) => {

    this.setState((prevState, props) => {
      let newCount = prevState.count + 1;

      if (this.props.onTitleChange) {
        this.props.onTitleChange(newCount)
      }
      return {
        count: newCount,
        color: '#a2f4a6'
      };
    });
   };

  componentDidMount() {
    console.log(123)
  }

  render() {
/*
    const listItems = this.state.numbers.map((number) =>
      <li>{number}</li>
    );*/

    return (
      <div className="App2">
        <span style={{color: this.state.color}}>
          11111111
        </span>
        {this.props.title}
        {this.props.title2}
        <button onClick={() => {
          this.handlerClick(5)
        }}>
          {
            this.state.count ?
              this.state.count :
              <span>no value</span>
          }
        </button>
        <ul>
          {
            this.state.numbers.map((number, index) =>
              <li key={'i_' + index}>{number}</li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default App2;
