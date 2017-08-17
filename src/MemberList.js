import React, { Component } from 'react';
// import { ListGroup, ListGroupItem } from 'react-bootstrap';


class MemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: props.memberData,
    }
  }

  componentDidMount() {
    // console.log(`==>> MemberList props = ${JSON.stringify(this.props)}`);
  }

  render() {
    const members = this.state.members;
    const memberList = members.map((user, index) => (
      <li>
        <h4>{user.name} <span>({user.userId})</span></h4>
      </li>
    ));

    return (
      <ul>
        {memberList}
      </ul>
    );
  }
}

export default MemberList;
