import React, { Component } from 'react';
import './App.css';
import Loader from 'react-loader';
// import { Switch, Route } from 'react-router-dom';
import MemberList from './MemberList';
import MemberDetails from './MemberDetails';
// import NotFound from './NotFound';
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
    let userId = this.state.selectedUser;
    if (userId) {
      let userData = this.state.data.filter((data) => {
        return data.userId === userId;
      })[0];
      selected_user = <MemberDetails memberData={userData} />;
    } else {
      selected_user = <NoneSelected />;
    }

    return (
      <div>
        <h2>Code42 Homework Exercise</h2>
        <Loader loaded={this.state.loaded}>
          <MuiThemeProvider>

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

          </MuiThemeProvider>
        </Loader>
      </div>
    )
  }
}

export default App;
