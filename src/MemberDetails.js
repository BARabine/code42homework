import React, { Component } from 'react';


class MemberDetails extends Component {
  constructor(props) {
    super(props);
    console.log(`>>> Detail Props: ${JSON.stringify(props)}`);
    this.state = {
      userId: props.selectedId,
      members: props.memberData,
    }
  }

  componentDidMount() {
    console.log('>>> Inside componentDidMount');
  }

  render() {
    // get the data for the selected userId
    // if none selected, then return a blank page


    return (
      <div>MemberDetails</div>
    )

  }

}

export default MemberDetails;
