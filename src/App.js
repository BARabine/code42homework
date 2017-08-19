import React, { Component } from 'react';
import './App.css';
import Loader from 'react-loader';
import { Switch, Route } from 'react-router-dom';
import MemberList from './MemberList';
import MemberDetails from './MemberDetails';
import NotFound from './NotFound';
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
            <Switch>
              <Route path='/' exact
                render={() => (<MemberList memberData={this.state.data} />)} />
              <Route path="/members" component={MemberDetails} />
              <Route path="/404" component={NotFound} />
              <Route path="*" component={NotFound} />
            </Switch>
          </MuiThemeProvider>
        </Loader>
      </div>
    )
  }
}

export default App;
