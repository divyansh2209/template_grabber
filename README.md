# Template Grabber

Template Grabber helps you create custom boilerplate templating code files that you need to create over and over again. All you need is NodeJS installed to get started.

## Installation

With NPM:
```sh
$ npm i @divyansh2209/template-grabber
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
  npx template-grabber javascript
```
- Generate Create React App template:
```sh
  npx template-grabber react
```
- Generate Vite React template
```sh
  npx template-grabber viteReact
```
- Generate React Redux template:
```sh
  npx template-grabber react-redux
```
- Generate Next.js template:
```sh
  npx template-grabber nextjs
```

## Additional Options
**Generate template with initialized GIT:**
```sh
  npx template-grabber javascript --git
  npx template-grabber react --git
  npx template-grabber viteReact --git
  npx template-grabber react-redux --git
  npx template-grabber nextjs --git
```

**Generate template with initialized GIT and install all dependencies:**
```sh
  npx template-grabber javascript --git --install 
  npx template-grabber react --git --install
  npx template-grabber viteReact --git --install
  npx template-grabber react-redux --git --install
  npx template-grabber nextjs --git --install
```
## License

[MIT](https://choosealicense.com/licenses/mit/)

