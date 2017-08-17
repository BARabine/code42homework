/* eslint-disable import/prefer-default-export */
import _uniqWith from 'lodash/uniqWith';
import Member from './MemberModel';

const CODE42_API_URL = 'https://api.github.com/orgs/code42/members';


async function getMemberObj(memberData) {
  async function getOrgs(orgs) {
    return Promise.all(
      orgs.map(async (org) => {
        const orgResponse = await fetch(org.url);
        return orgResponse.json();
      }),
    );
  }

  async function getRepos(repos) {
    return Promise.all(
      repos.map(async (repo) => {
        const repoResponse = await fetch(repo.url);
        return repoResponse.json();
      }),
    );
  }

  const userDetails = await (await fetch(memberData.url)).json();
  const repoList = await (await fetch(memberData.repos_url)).json();
  const memberOrgs = await (await fetch(memberData.organizations_url)).json();

  // Strip out privacy path if it exists
  const eventUrl = memberData.events_url.replace('{/privacy}', '');
  const events = await (await fetch(eventUrl)).json();

  // Need to retrieve full organization data for each org
  const orgs = await getOrgs(memberOrgs);

  // The repos in the event object don't contain the full set of data --
  // Retrieve the full data for each one
  const repos = events.map(event => event.repo);
  const uniqueRepos = _uniqWith(repos, (a, b) => a.id === b.id);
  const allRepos = await getRepos(uniqueRepos);

  // Return an object with all the needed details for each user
  return new Member(
    memberData,
    userDetails,
    repoList,
    orgs,
    events,
    allRepos
  );
}


export async function getAllMembers() {
  const json = await (await fetch(CODE42_API_URL)).json();
  const members = await Promise.all(json.map(getMemberObj));
  return members;
}
