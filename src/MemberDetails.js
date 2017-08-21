import React, { Component } from 'react';
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';

class MemberDetails extends Component {

  getListOfItems = ((items) => {
    return items.map(item => (
      <li key={item.name}><a href={item.url}>{item.name}</a></li>
    ));
  });

  render() {
    const data = this.props.memberData;
    const reposList = this.getListOfItems(data.repos);
    const orgsList = this.getListOfItems(data.orgs);

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
            <dt>Public Location:</dt>
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
    )
  };
}

export default MemberDetails;
