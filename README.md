# Rick and Morty App

## Overview

This React app showcases a list of characters from the Rick and Morty TV show. The app implements infinite scroll for loading more characters and features a cache system to enhance performance.

## Features

- Display a list of characters with infinite scroll
- Cache system to avoid unnecessary API calls
- Details view for individual characters

## Infinite Scroll and Cache System

The app uses an infinite scroll mechanism to load more characters as the user scrolls down. It also incorporates a cache system to store previously fetched data locally, reducing the need for repeated API requests. The cache is checked for validity based on a specified time limit, and if expired, the app fetches fresh data.

## Local Setup

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

### Clone the Repository

```bash
git clone https://github.com/edu2andrade/ricky-and-morty.git
cd rick-and-morty-app
```

### Install Dependencies

```bash
npm install
```

### Run the App

```bash
npm run dev
```
The app will be available at http://localhost:5173 in your browser.
