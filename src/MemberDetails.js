import React, { Component } from 'react';
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';

class MemberDetails extends Component {
  constructor(props) {
    super(props);
    console.log(`>>> Detail Props: ${JSON.stringify(props)}`);
    this.state = {
      userId: props.userId,
      members: props.memberData,
    }
  }

  componentDidMount() {
    console.log('>>> Inside componentDidMount');
    console.log(`>> DidMount, state = ${JSON.stringify(this.state)}`);
    console.log(this.props.match);
  }


  render() {

  console.log('>> Length of data = ' + this.state.members.length);
  let data = null;

  // const getListOfItems = items => () => {
  function getListOfItems(items) {
    return items.map(item => (
      <li key={item.name}><a href={item.url}>{item.name}</a></li>
    ));
  };

  const reposList = data && data.repos ? getListOfItems(data.repos)() : null;
  const orgsList = data && data.orgs ? getListOfItems(data.orgs)() : null;
  // const contribReposList = getListOfItems(data.contributedRepos)();

  const getDataCard = data => () => {
    if (data) {
      return (
        <Card>
          <CardHeader
            title={data.name}
            subtitle={data.userId}
          />
          <CardMedia>
            <img src={data.imageUrl} alt={data.name} />
          </CardMedia>
          <CardText>
            <dl>
              <dt>Location:</dt>
              <dd>{data.location ? data.location : 'N/A'}</dd>
              <dt>Public Email:</dt>
              <dd>{data.email ? data.email : 'N/A'}</dd>
              <dt>Joined Date:</dt>
              <dd>{data.joined ? data.joined : 'N/A'}</dd>
              <dt>Repo List:</dt>
              <dd>
                <ul>
                  {reposList}
                </ul>
              </dd>
              <dt>Orgs List:</dt>
              <dd>
                <ul>
                  {orgsList}
                </ul>
              </dd>
              <dt>Contributed Repos List:</dt>
              <dd>
                <ul>
                  {orgsList}
                </ul>
              </dd>
            </dl>
          </CardText>
        </Card>
      )};
      return ( <div>Please select a user</div> );
    }

    return getDataCard(data)();

  }

}

export default MemberDetails;
