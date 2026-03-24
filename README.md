# Guitar Trainer

An interactive fretboard study tool for comparing guitar scales and chords, exploring related harmony, and reinforcing pattern recognition.

[Live demo](https://vincentwue.github.io/guitar-trainer/)

## Overview

Guitar Trainer is a browser-based visualizer for scale and chord shapes. It is designed for practice sessions where you want to compare two patterns, inspect how chords sit inside scales, and move quickly between related views without losing context.

## Features

- Overlays two patterns on the same fretboard for direct comparison
- Lets you invert, copy, hide, or delete pattern layers during a session
- Shows related chords for a selected scale and related scales for a selected chord
- Includes optional piano visualization alongside the fretboard view
- Supports legend toggling for a cleaner practice layout
- Persists UI state in `localStorage`
- Includes generated scale, triad, and tetrad relationships in the data model

## Tech Stack

- React
- TypeScript
- Zustand
- Create React App
- Static GitHub Pages deployment

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server on Windows:

   ```bash
   npm start
   ```

The current `start` script uses Windows shell syntax and defaults to port `3003`.

## Production Preview

Build the app with:

```bash
npm run build
```

If you want to serve the generated build locally, the repository includes [`host.js`](host.js), which serves the `build/` directory on port `8004`.

## Project Direction

This repository is a practical study tool first: small, fast to iterate on, and centered around pattern fluency rather than curriculum or content management.
