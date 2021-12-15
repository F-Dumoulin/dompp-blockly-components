# DOM-PP Blockly Lit Components

Based on the LitElement JavaScript Starter

## Setup

Install dependencies:

```bash
npm i
```

## Run the example site

To enable the server, run :

```bash
npm run serve
```

The site will be served at http://localhost:8000/dev/index.html.

## Components

There are 4 components in the package.\
test-editor, basic-selection, advanced-selection are the 3 base components and dompp-test-manager is a wrapper component that uses the 3 other components and handles the entire flow.

## Inputs

Each component has a data-tests and a data-pages attribute, through which input data can be submitted.\
'data-tests' must be the xml corresponding to an array of objects with a 'name' attribute (which should be unique) and a 'xml' attribute, containing the xml corresponding to a blockly test case.\
'data-pages' must be the xml corresponding to an array of objects with a 'url' attribute\
\
The selection components have data-checked attributes, through which a test configuration can be submitted. The dompp-test-manager also has data-checked-basic and data-checked-advanced attributes, in order to initialize test configurations for its corresponding sub-components.\
'data-checked' must be the xml corresponding to an object with a 'tests' attribute and a 'pages' attribute.\
'tests' is an associative array with the test's unique name as its key and the test xml as its value.\
'pages' is an associative array with the page's url as its key and an array containing the name of the tests to execute on this specific page.

## Outputs

The components dispatch different events that allow to retrieve data.\
test-editor dispatches a 'save-tests' event each time a test is saved, created, deleted, or renamed, it provides JSON containing a list of tests as well as a string indicating the type of action that triggered the event.\
basic-selection and advanced-selection dispatch a 'run-tests' event when clicking on the "Run tests" button, it provides JSON containing a test configuration as well as a string indicating the type of selection that has been made. The test configuration follows the same format as described in the Inputs section.\
dompp-test-manager receives these events and re-sends them after making use of it, so that the user can attach their listeners directly to the test manager element.
