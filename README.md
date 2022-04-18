# basic-express-server

Dynamic API Phase 1: Build your core, standards compliant Express server

#### Phase One Requirements

From a business requirements standpoint, we will be building a basic Express server using best practices, including server modularization, use of middleware, and tests.

Person Route
- Method: GET
- Path: /person
  - Expects a query string from the user with a “name" property
  - When present, output JSON to the client with this shape: `{ name: "name provided" }`
  - Without a name in the query string, force a “500” error

<img width="1728" alt="lab 2" src="https://user-images.githubusercontent.com/91757275/163694084-e595ccf4-5ccb-42ed-b97f-ec70b3686201.png">