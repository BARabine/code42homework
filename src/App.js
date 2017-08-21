import React, { Component } from 'react';
import './App.css';
import Loader from 'react-loader';
import { Switch, Route } from 'react-router-dom';
import MemberList from './MemberList';
import MemberDetails from './MemberDetails';
import NotFound from './NotFound';
import NoneSelected from './NoneSelected';
import { getAllMembers } from './MemberUtils';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: null,
      selectedUser: null,
    }
  }

  async componentDidMount() {
    const allMemberData = await getAllMembers();
    // console.log(`>>> AllData = ${JSON.stringify(allMemberData)}`);
    this.setState({ loaded: true, data: allMemberData })
  }

  handleSelectUser = userId => () => {
    this.setState({ selectedUser: userId });
  }

  render() {

    let selected_user = null;
    const getUserData = id => {
      return this.state.data.filter((data) => {
        return data.userId === id;
      })[0];
    };
    const userId = this.state.selectedUser;
    if (userId) {
      // console.log('>>> userId = ', userId);
      const userData = getUserData(userId);
      console.log(`==>> UserData = ${JSON.stringify(userData)}`);
      selected_user = userData
        ? <MemberDetails memberData={userData} />
        : <NotFound />;
    } else {
      selected_user = <NoneSelected />;
    }

    const Home = ({ match }) => {
      // console.log(`=>> match = ${JSON.stringify(match)}`);
      // console.log(`=>> state.selectedUser = ${this.state.selectedUser}`);
      if (this.state.selectedUser !== match.params.userId) {
        // Shouldn't change state inside render, but...
        this.setState({ selectedUser: match.params.userId});
      }
      return (
        <Table>
          <TableBody displayRowCheckbox={false} style={{verticalAlign: 'top'}}>
            <TableRow selectable={false}>
              <TableRowColumn>
                <MemberList
                  members={this.state.data}
                  onSelectUser={this.handleSelectUser}
                />
              </TableRowColumn>
              <TableRowColumn>
                {selected_user}
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      )
    }


    return (
      <div>
        <h2>Code42 Homework Exercise</h2>
        <Loader loaded={this.state.loaded}>
          <MuiThemeProvider>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/member/:userId' component={Home} />
              <Route path='/404' component={NotFound} />
              <Route component={NotFound} />
            </Switch>

          </MuiThemeProvider>
        </Loader>
      </div>
    )
  }
}

export default App;
