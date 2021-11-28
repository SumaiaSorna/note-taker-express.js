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
    "id": "4d2ca0f3-597d-488a-80c7-a8aad04c9b91",
    "title": "Test Title",
    "text": "Test text"
  },
  {
    "id": "26d33b16-7277-45f1-b8ec-8acdd5b6fec7",
    "title": "Test Title",
    "text": "Test text"
  }
]
```

- POST /notes
  This will create a new note

POST body:

```json
{
  "title": "yur title",
  "text": "your text"
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
