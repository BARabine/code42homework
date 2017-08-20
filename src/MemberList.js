import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import './App.css';
import MemberDetails from './MemberDetails';
import { Route } from 'react-router-dom';


class MemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: props.memberData,
    }
  }

  selectUser = userId => () => {
    // this.setState({ members: this.state.members, selected: {userId} })
    console.log(`>>> Selected userId = ${userId}`);
    // Get the data object for the selected user
    let userData = this.state.members.filter((data) => {
      return data.userId === userId;
    })[0];
    console.log(`>>>> UserData = ${JSON.stringify(userData)}`);
    const MemberDetailPage = props => <MemberDetails members={userData} {...props} />;
    <Route path='/memberDetails/:userId'
      render={() => (MemberDetailPage)} />

  };

  render() {
    const members = this.state.members;
    const memberList = members.map(user => (
      <ListItem
        primaryText={user.name}
        secondaryText={user.userId}
        leftAvatar={<Avatar src={user.imageUrl} />}
        id={`btn-${user.userId}`}
        key={user.userId}
        onClick={this.selectUser(user.userId)}
      />
    ));

    return (
      <Table>
        <TableBody displayRowCheckbox={false} style={{verticalAlign: 'top'}}>
          <TableRow selectable={false}>
            <TableRowColumn>
              <List>
                {memberList}
              </List>
            </TableRowColumn>
            <TableRowColumn>
              <MemberDetails memberData={this.state.members} userId={this.state.selected} />
            </TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default MemberList;
