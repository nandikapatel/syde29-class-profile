# SYDE 2029 Class Profile

This is a React project for the SYDE 29 class profile.

## Requirements
- **Node.js 16** (recommended, see `.nvmrc`)
- **npm** (comes with Node.js)
- (Optional) [nvm](https://github.com/nvm-sh/nvm) for Node version management

## Setup
1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd syde29-class-profile
   ```
2. **Use the correct Node version:**
   ```sh
   nvm use
   # If you don't have Node 16 installed:
   nvm install 16
   nvm use 16
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```

## Running Locally
Start the development server:
```sh
npm start
```
The app will be available at [http://localhost:3000](http://localhost:3000).

## Building for Production
To create an optimized production build:
```sh
npm run build
```

## Continuous Integration
- This project uses **GitHub Actions** to build the app on every push and pull request to `main`.
- The workflow uses the Node.js version specified in `.nvmrc`.

## Troubleshooting
- If you see errors about OpenSSL or `digital envelope routines`, make sure you are using **Node.js 16** (not 18 or 20).
- If you change Node versions, always run `npm install` again.

## License
MIT

