# SauceDemoTest

Automation Challenge Front End Testing Saucedemo Page </br>
The tests in this framework are for the web page https://www.saucedemo.com/

# Setup

- Clone this repository
  - Navigate to https://github.com/MiguelMoraa/QA_automation_certification
  - Click on Clone or Download and copy the project url
  - Open the command line terminal
  - Navigate to the desired directory for the project
  - Execute `git clone [ProjectURL]`
- Run command `npm init`
- Run command `npm install node`
- Run command `npm install testcafe`
- Run command `npm install testcafe-reporter-html`
- Run command `npm install dotenv`


# Project Structure

    - data (Store roles data, checkout data and errorMessage data files)
    - pages (Store files, selectors and page functions that are used in "Tests" file)
    - reports (Store de html report from de test cases)
    - tests (Store automated test cases)
    package.json (Store dependencies and can be used to set scripts)

## Running the tests

- To run test cases use on Chrome Browser `npm run testcafeChrome`
- To run the tests with the final report use `npm run testReport`
- To run the tests use `npm run testcafe [browser] [file]`


## Language
The framework is developing with javascript