import moment from 'node-moment';

export default class Member {
  userId;
  name;
  imageUrl;
  repos = [];
  orgs = [];
  numContributions;
  contributedRepos = [];
  location;
  email;
  joined;

  constructor(
    memberData,
    userDetails,
    repos,
    orgs,
    events,
    eventRepos
  ) {
    this.userId = memberData.login;
    this.name = userDetails.name;
    this.imageUrl = memberData.avatar_url;
    this.repos = repos.map(repo => (
      { name: repo.name, url: repo.html_url }
    ));
    this.orgs = orgs.map(org => (
      { name: org.name, url: org.html_url }
    ));
    this.numContributions = events.length;
    this.contributedRepos = eventRepos.map(repo => (
      { name: repo.name, url: repo.html_url }
    ));
    this.location = userDetails.location;
    this.email = userDetails.email;
    this.joined = moment(userDetails.created_at).format('L');
  }
}
