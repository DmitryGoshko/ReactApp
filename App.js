import React, {Component} from 'react';
import logo from './Queens_Library_logo.svg';
import './App.css';
import NewWriter from "./NewWriter"
import Bookstore from "./Bookstore"
import Search from "./Search";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      rack: '',
      name: '',
      searchWriter: '',
      library: [
        {
          NameRack: 'Fantastic',
          tableList: [
            {
              name: "Tolkien",
              count: 5
            }, {
              name: "Rowling",
              count: 8
            }, {
              name: "Ursula Guin",
              count: 5
            }
          ]
        },
        {
          NameRack: 'Action',
          tableList: [
            {
              name: "Hiromi Itō",
              count: 2
            }, {
              name: "Kim Hyesoon",
              count: 3
            }
          ]
        },
        {
          NameRack: 'Detective',
          tableList: [
            {
              name: "Agatha Christie",
              count: 5
            }, {
              name: "Dashiell Hammett",
              count: 3
            }
          ]
        }
      ]
    };
  }


  changeWriter = (dataFromChild) => {
    console.log('App - writerName = ' + dataFromChild.writerName );
    console.log('App - count = ' + dataFromChild.count);
    console.log('App - section = ' + dataFromChild.section);
    this.setState({
      library: this.state.library.map((rack) => {
        if (rack.NameRack === dataFromChild.section) {
          return {
            NameRack: dataFromChild.section,
            tableList: [...rack.tableList, {
              name: dataFromChild.writerName,
              count: dataFromChild.count
            }]
          }
        } else {
          return rack
        }
      })
    });
  }

  search = (dataFromChild) => {
    console.log('App - searchName = ' + dataFromChild.name);
    this.setState({
      searchWriter: dataFromChild.name
    });
  }


  changeCountBook (dataRack, dataName, dataCount) {
    console.log('App - dataCount = ' + dataCount);
    console.log('App - dataRack = ' + dataRack);
    console.log('App - dataName = ' + dataName);
    this.setState({
      count: dataCount,
      rack: dataRack
    });

    this.setState({
      library: this.state.library.map((rack) => {
        if (rack.NameRack === dataRack) {
          return {
            ...rack,
            tableList:
              rack.tableList.map((book) => {
                if (book.name === dataName) {
                  console.log('App - rack = ' + book.name + '/' + dataCount );
                  return {
                    ...book,
                    count: dataCount
                  }
                } else {
                  return book
                }
              })
          }
        } else {
          return rack
        }
      })
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to Queens Library!</h1>
        </header>

        <p className="App-intro">
          The Queens Library serves 2.3 million people from 62 locations.
        </p>

        <div >
          <Search searchWriter={this.search} />
        </div>

        <div >
          <div >
            <Bookstore library={this.state.library} bookChange={this.changeCountBook.bind(this)} dataFilterName={this.state.searchWriter}/>
          </div>
          <div >
            <NewWriter writerNameFun={this.changeWriter} sections={this.state.library}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;