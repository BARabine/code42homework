import React, { Component } from 'react';
import './App.css';
import Loader from 'react-loader';
import MemberList from './MemberList';
import { getAllMembers } from './MemberUtils';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: null,
    }
  }

  async componentDidMount() {
    const allMemberData = await getAllMembers();
    // console.log(`>>> AllData = ${JSON.stringify(allMemberData)}`);
    this.setState({ loaded: true, data: allMemberData })
  }


  render() {
    return (
      <div>
        <h2>Code42 Homework Exercise</h2>
        <Loader loaded={this.state.loaded}>
          <MuiThemeProvider>
            <MemberList memberData={this.state.data} />
          </MuiThemeProvider>
        </Loader>
      </div>
    )
  }
}

export default App;
