# NY Times Most Popular Articles

This React application displays the New York Times Most Popular Articles using the NYT API. It features a responsive master/detail interface where users can view a list of popular articles and click on them to see more details.

## Features

- Fetches most popular articles from the NY Times API
- Responsive master/detail interface using Tailwind CSS
- State management with React Hooks
- Comprehensive test coverage with vitest and React Testing Library
- End-to-end testing with Cypress
- Modern JavaScript practices and clean code architecture

## Prerequisites

- Node.js (v16.x or higher)
- NPM or Yarn
- NY Times API Key (obtain from https://developer.nytimes.com/get-started)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nyt-popular-articles.git
cd ny-news-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your NY Times API key:

```
VITE_API_KEY=your_api_key_here
```

## Running the Application

Start the development server:

```bash
npm start
# or
yarn start
```

The application will be available at http://localhost:5173

## Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm test` - Runs the test suite
- `npm run test:coverage` - Runs tests with coverage report
- `npm run build` - Builds the app for production
- `npm run lint` - Runs ESLint to check code quality

## Testing

### Unit Tests

Run unit tests with:

```bash
npm test
```

Generate a coverage report with:

```bash
npm run test:coverage
```

## License

MIT
