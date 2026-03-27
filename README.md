# TDD Practice - Utility Functions

## Description

A collection of utility functions built following Test-Driven Development practices, as part of The Odin Project curriculum. Each function was developed by writing tests first using Jest, then implementing the minimum code to make them pass.

## Installation

1. Clone this repository

    ```Bash
    git clone https://github.com/gvillarroel-dev/top-testing-practice.git

    ```

2. Install all dependencies with `npm install`

## Usage

Run the test suite with `npm test`. Run the entry point with `node index.js`

## Functions

- `capitalize` — takes a string and returns it with the first character capitalized
- `reverseString` — takes a string and returns it reversed
- `Calculator` — object with add, subtract, multiply and divide methods, each taking two numbers
- `caesarCipher` — takes a string and a shift factor, returns the string with each letter shifted by that amount
- `analyzeArray` — takes an array of numbers and returns an object with average, min, max and length

## Testing

Tests are written with Jest and cover normal cases, edge cases, and error handling for each function.
