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
    // get the data for the selected userId
    // if none selected, then return a blank page

  //   let data = {
  //   "repos": [
  //     {
  //       "name": "ace",
  //       "url": "https://github.com/chmontgomery/ace"
  //     },
  //     {
  //       "name": "angular-intro",
  //       "url": "https://github.com/chmontgomery/angular-intro"
  //     },
  //     {
  //       "name": "auto-tsc",
  //       "url": "https://github.com/chmontgomery/auto-tsc"
  //     },
  //     {
  //       "name": "belly-laugh",
  //       "url": "https://github.com/chmontgomery/belly-laugh"
  //     },
  //     {
  //       "name": "BloomAdminD3",
  //       "url": "https://github.com/chmontgomery/BloomAdminD3"
  //     },
  //     {
  //       "name": "chrismontgomery.info",
  //       "url": "https://github.com/chmontgomery/chrismontgomery.info"
  //     },
  //     {
  //       "name": "co",
  //       "url": "https://github.com/chmontgomery/co"
  //     },
  //     {
  //       "name": "concat-with-sourcemaps",
  //       "url": "https://github.com/chmontgomery/concat-with-sourcemaps"
  //     },
  //     {
  //       "name": "djx.dash",
  //       "url": "https://github.com/chmontgomery/djx.dash"
  //     },
  //     {
  //       "name": "DominionTracker",
  //       "url": "https://github.com/chmontgomery/DominionTracker"
  //     },
  //     {
  //       "name": "dotnet-across-platforms",
  //       "url": "https://github.com/chmontgomery/dotnet-across-platforms"
  //     },
  //     {
  //       "name": "example-app",
  //       "url": "https://github.com/chmontgomery/example-app"
  //     },
  //     {
  //       "name": "exec-promise",
  //       "url": "https://github.com/chmontgomery/exec-promise"
  //     },
  //     {
  //       "name": "expo",
  //       "url": "https://github.com/chmontgomery/expo"
  //     },
  //     {
  //       "name": "expo-charting",
  //       "url": "https://github.com/chmontgomery/expo-charting"
  //     },
  //     {
  //       "name": "express-graphql",
  //       "url": "https://github.com/chmontgomery/express-graphql"
  //     },
  //     {
  //       "name": "Find-a-Winner-Widget",
  //       "url": "https://github.com/chmontgomery/Find-a-Winner-Widget"
  //     },
  //     {
  //       "name": "fizzbuzz",
  //       "url": "https://github.com/chmontgomery/fizzbuzz"
  //     },
  //     {
  //       "name": "generator-app",
  //       "url": "https://github.com/chmontgomery/generator-app"
  //     },
  //     {
  //       "name": "generator-dj-module",
  //       "url": "https://github.com/chmontgomery/generator-dj-module"
  //     },
  //     {
  //       "name": "GetDirListingVariations",
  //       "url": "https://github.com/chmontgomery/GetDirListingVariations"
  //     },
  //     {
  //       "name": "gherkin-ace",
  //       "url": "https://github.com/chmontgomery/gherkin-ace"
  //     },
  //     {
  //       "name": "gherkin-ace-editor-example",
  //       "url": "https://github.com/chmontgomery/gherkin-ace-editor-example"
  //     },
  //     {
  //       "name": "gherkin-editor",
  //       "url": "https://github.com/chmontgomery/gherkin-editor"
  //     },
  //     {
  //       "name": "gherkin3",
  //       "url": "https://github.com/chmontgomery/gherkin3"
  //     },
  //     {
  //       "name": "git-extras",
  //       "url": "https://github.com/chmontgomery/git-extras"
  //     },
  //     {
  //       "name": "grunt-ts",
  //       "url": "https://github.com/chmontgomery/grunt-ts"
  //     },
  //     {
  //       "name": "gulp-belch",
  //       "url": "https://github.com/chmontgomery/gulp-belch"
  //     },
  //     {
  //       "name": "gulp-concat",
  //       "url": "https://github.com/chmontgomery/gulp-concat"
  //     },
  //     {
  //       "name": "gulp-help",
  //       "url": "https://github.com/chmontgomery/gulp-help"
  //     }
  //   ],
  //   "orgs": [
  //     {
  //       "name": "Code42 Software",
  //       "url": "https://github.com/code42"
  //     },
  //     {
  //       "name": "Node Forward",
  //       "url": "https://github.com/node-forward"
  //     },
  //     {
  //       "name": "areus.js",
  //       "url": "https://github.com/areusjs"
  //     }
  //   ],
  //   "contributedRepos": [
  //     {
  //       "name": "gulp-bundle-assets",
  //       "url": "https://github.com/dowjones/gulp-bundle-assets"
  //     },
  //     {
  //       "name": "monaco-editor",
  //       "url": "https://github.com/Microsoft/monaco-editor"
  //     }
  //   ],
  //   "userId": "chmontgomery",
  //   "name": "Chris Montgomery",
  //   "imageUrl": "https://avatars0.githubusercontent.com/u/232356?v=4",
  //   "numContributions": 6,
  //   "location": "Minneapolis, MN",
  //   "email": null,
  //   "joined": "03/28/2010"
  // };

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
