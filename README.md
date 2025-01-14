![travis](https://app.travis-ci.com/RedHatInsights/vuln4shift-frontend.svg?branch=master)

# Vulnerability for OpenShift frontend

## First time setup
### Quick start
1. Make sure you have [`Node.js`](https://nodejs.org/en/) and [`npm`](https://www.npmjs.com/) installed
2. Run [script to patch your `/etc/hosts`](https://github.com/RedHatInsights/insights-proxy/blob/master/scripts/patch-etc-hosts.sh)
3. Make sure you are using [Red Hat proxy](http://hdn.corp.redhat.com/proxy.pac)

### Comprehensive documentation
There is a [comprehensive quick start guide in the Storybook Documentation](https://github.com/RedHatInsights/insights-frontend-storybook/blob/master/src/docs/welcome/quickStart/DOC.md) to setting up an Insights environment.

## Running locally
1. Install dependencies with `npm install`
2. Run development server with `npm run start:proxy:beta`
3. Local version of the app will be available at https://stage.foo.redhat.com:1337/beta/openshift/insights/vulnerability/

## Testing
[Jest](https://jestjs.io/) is used as the testing framework
- ```npm run test``` - run all tests
- ```npm run test -- testName``` - run tests for all components matching `testName`
- ```npm run lint``` - run linter
- ```npm run test -- -u``` - run all tests and update snapshots
- ```npm run test -- --watch``` - run tests in watch mode

## Deploying
Any push to the following branches will trigger a build in [vuln4shift-frontend-build repository](https://github.com/RedHatInsights/vuln4shift-frontend-build) which will deploy to corresponding environment.

| Push to branch in this repo  | Updated branch in build repo  | Environment       | Available at
| :--------------------------- | :---------------------------- | :---------------- | :-----------
| master                       | stage-beta                    | stage beta        | https://console.stage.redhat.com/beta
| stage-stable                 | stage-stable                  | stage stable      | https://console.stage.redhat.com
| prod-beta                    | prod-beta                     | production beta   | https://console.redhat.com/beta 
| prod-stable                  | prod-stable                   | production stable | https://console.redhat.com

## Design System
This project uses [Patternfly React](https://github.com/patternfly/patternfly-react).

## Insights Components
This app imports components from [Insights Front-end Components library](https://github.com/RedHatInsights/frontend-components). ESI tags are used to import [Insights Chrome](https://github.com/RedHatInsights/insights-chrome) which takes care of the header, sidebar, and footer.
