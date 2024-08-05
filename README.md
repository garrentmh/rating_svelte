### Rating Survey - Svelte

This rating survey is a simple project utilizing Svelte as the frontend framework.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Live Demo](#live-demo)
- [Getting Started](#getting-started)
- [File Structure](#file-structure)
- [Change Log](#change-log)

## Features

- [x] Users can rate the service.
- [x] Users can input remarks before submitting.
- [x] Ensures users input at least 10 characters before submitting.
- [x] Displays the rating and remarks.
- [x] Shows total remarks and average rating.
- [x] Allows deletion of remarks.

## Live Demo

Check out the live demo [here](https://rating-survey-svelte.netlify.app).

## Getting Started

To get started with Rating Survey, follow these steps:

1. Clone the repository: `git clone https://github.com/garrentmh/rating_svelte.git`
2. Install dependencies: `npm install`
3. Start the server: `npm run dev`

## File Structure

Here's the basic file structure of Rating Survey:

```
src
├── App.svelte
├── main.js
├── stores.js
├── tree.txt
└── components
    ├── Button.svelte
    ├── Card.svelte
    ├── FeedbackForm.svelte
    ├── FeedbackItem.svelte
    ├── FeedbackList.svelte
    ├── FeedbackStats.svelte
    └── RatingSelect.svelte

```

## Change Log

See [CHANGELOG.md](CHANGELOG.md).
