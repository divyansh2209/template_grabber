# Template Grabber

Template Grabber helps you create custom boilerplate templating code files that you need to create over and over again. All you need is NodeJS installed to get started.

## Installation

With NPM:
```sh
$ npm i @divyansh2209/temp-grabber
```
## Command Line Interface

Template Grabber is crafted using NodeJS and several external third-party libraries:

- **inquirer**: for prompting missing values
- **args**: for parsing CLI arguments
- **ncp**: for recursive copying
- **chalk**: for coloring output commands
- **execa**: for running external commands
- **listr**: for specifying list of tasks
## Usage

- Generate JavaScript template:
```sh
  npx temp-grabber javascript
```
- Generate Create React App template:
```sh
  npx temp-grabber react
```
- Generate Vite React template
```sh
  npx temp-grabber viteReact
```
- Generate React Redux template:
```sh
  npx temp-grabber react-redux
```
- Generate Next.js template:
```sh
  npx temp-grabber nextjs
```

## Additional Options
**Generate template with initialized GIT:**
```sh
  npx temp-grabber javascript --git
  npx temp-grabber react --git
  npx temp-grabber viteReact --git
  npx temp-grabber react-redux --git
  npx temp-grabber nextjs --git
```

**Generate template with initialized GIT and install all dependencies:**
```sh
  npx temp-grabber javascript --git --install 
  npx temp-grabber react --git --install
  npx temp-grabber viteReact --git --install
  npx temp-grabber react-redux --git --install
  npx temp-grabber nextjs --git --install
```
## License

[MIT](https://choosealicense.com/licenses/mit/)

