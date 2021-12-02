# Note Taker

## Table Of Contents

- [Description](#description)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Launch the app](#launch-the-app)
  - [Heroku link](#heroku-link)
  - [User Stories](#user-stories)
- [Link to Repository](#link-to-repository)
- [Endpoints](#endpoints)
  - [/api](#api)
- [Screenshots](#screenshots)
- [Questions](#questions)

## Description

## Getting Started

### Installation

```
git clone git@github.com:SumaiaSorna/note-taker-express.js.git
cd note-taker-express.js/
code .
npm i express
```

### Launch the app

```
npm run start
```

Project Title

# Links

- Deployed Heroku link

## User Stories

## Tools/Technologies

## Endpoints

### /api

- GET /notes
  This will return an array of notes

See sample response:

```json
[
  {
    "id": "a0ef708c-fae2-4722-bcd3-42fa40e57b9d ",
    "title": "Job Interview",
    "text": "prepare yourself"
  },
  {
    "id": "ed7333a6-f9d0-4839-9bfe-d0fc763edaae",
    "title": "Meeting with the Boss",
    "text": "Take all the"
  },
  {
    "id": "1a5dfd36-aecc-46df-b0aa-fe2e9daea42c",
    "title": "Movie Night",
    "text": "Don't forget the tickets "
  }
]
```

- POST /notes
  This will create a new note

POST body:

```json
{
  "title": "Appointment with Gp",
  "text": "take all the prescription "
}
```

- DELETE /notes/:id
  This will delete a note by ID

## Link to repository

Click [here](#) to view deployed application on Github page.

## Screenshots

![screenshot of generated html](./assets/images/my-team.png)

## Questions

If you have any questions about this application, please feel free to contact me in my <a href="mailto:sorna.sumaia@gmail.com">email.</a>
