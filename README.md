### Code42 Members Homework Exercise

## Description

Create a single page application using a modern JavaScript library or framework. Examples include but are not limited to: React, Ember.js, Vue.js.  In addition, leverage an HTTP client library, such as jQuery.ajax, github/fetch, or what's included within your framework.

For this single-page app, create a sidebar and main content areas.  This is a typical master-detail view application.

In the sidebar, list each member of the Code42 organization using the public GitHub API.

When you click on a member in the sidebar, the main content area should populate with that person's information.  For each person, show the following relevant information from their profile:

* Their GitHub image
* A list of their repos
* Their public location
* Their public email
* Their join date

**Extra credit:**

* Additional details for each Code42 Member:
  * Their total number of contributions in the last year
  * The organizations to which they belong
  * A list of repos they have contributed to
* Well-styled: feel free to use a css library including bootstrap, material design, foundation or a similar style framework
* The back button works
* The sidebar and main content views could have loading states while data is being fetched from the server
* Tests

## How to run

* Clone this repository
* Install dependencies with `npm install`
* Run the web server in development mode with `npm start`
* Open [http://localhost:3000](http://localhost:3000) to view it in the browser
