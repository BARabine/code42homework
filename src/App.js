import React, { Component } from 'react';
import './App.css';
import Loader from 'react-loader';
import MemberList from './MemberList';
import { getAllMembers } from './MemberUtils';

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
          <MemberList memberData={this.state.data} />
        </Loader>
      </div>
    )
  }
}

export default App;
