import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import { NavLink } from 'react-router-dom';

class MemberListItem extends Component {

  render() {
    const tofield = '/member/' + this.props.userId;
    const navLink = <NavLink to={tofield} />
    return (
      <ListItem
        primaryText={this.props.userName}
        secondaryText={this.props.userId}
        leftAvatar={<Avatar src={this.props.userImage} />}
        containerElement={navLink}
        onClick={this.props.on_click(this.props.userId)}
      />
    )
  }
}

export default MemberListItem;
