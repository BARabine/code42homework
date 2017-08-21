import React, { Component } from 'react';
import { List } from 'material-ui/List';
import './App.css';
import MemberListItem from './MemberListItem';

class MemberList extends Component {

  render() {
    const memberList = this.props.members.map(user => (
      <MemberListItem
        key={user.userId}
        userName={user.name}
        userId={user.userId}
        userImage={user.imageUrl}
        on_click={this.props.onSelectUser.bind(null, user.userId)}
      />
    ));

    return (
      <List>
        {memberList}
      </List>
    );
  }
}

export default MemberList;
