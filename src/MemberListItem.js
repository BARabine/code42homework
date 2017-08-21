import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

class MemberListItem extends Component {

  render() {
    return (
      <ListItem
        primaryText={this.props.userName}
        secondaryText={this.props.userId}
        leftAvatar={<Avatar src={this.props.userImage} />}
        onClick={this.props.on_click(this.props.userId)}
      />
    )
  }
}

export default MemberListItem;
