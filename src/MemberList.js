import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './App.css';


class MemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: props.memberData,
    }
  }

  selectUser = userId => () => {
    alert(`>>> Selected userId = ${userId}`);

  };

  render() {
    const members = this.state.members;
    const memberList = members.map(user => (
      <ListGroupItem
        id={`btn-${user.userId}`}
        key={user.userId}
        className="MemberListItem"
        header={user.name}
        bsStyle='link'
        onClick={this.selectUser(user.userId)}>
        ({user.userId})
        {/* <h4>{user.name} <span>({user.userId})</span></h4> */}
      </ListGroupItem>
    ));

    return (
      <ListGroup>
        {memberList}
      </ListGroup>
    );
  }
}

export default MemberList;


// class MemberList extends Component {
//   selectMember = handle => () => {
//     this.props.history.push({ pathname: `/members/${handle}` });
//   };
//
//   render() {
//     const { members } = this.props;
//
//     const items = members.map(member =>
//       (<ListItem key={member.handle} onClick={this.selectMember(member.handle)} button>
//         <Avatar>
//           <img src={member.imageUrl} alt="Member Avatar" width={40} height={40} />
//         </Avatar>
//         <ListItemText primary={member.name} secondary={member.handle} />
//       </ListItem>),
//     );
//
//     if (members && members.length) {
//       return (
//         <List>
//           {items}
//         </List>
//       );
//     }
//     return null;
//   }
// }
