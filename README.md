<div align="center">
<p align="center"><img width="50%" src="http://25.media.tumblr.com/8e4aafd22dfc23592ea2bf16f4f7be87/tumblr_mze2tugzvO1qh44dro1_500.gif">
</p>
  
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

</div>

# React Pokedex

Pokedex built with ReactJS for Wizeline Academy Course.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

In order to run this project locally, you'll need to have [Node 10.13.0](https://nodejs.org/fr/blog/release/v10.13.0/) and [Yarn](https://yarnpkg.com/lang/en/) installed on your computer.

After installing both tools, open a commando line window and enter the following:

To check that Node was installed correctly, run:
```
node -v
```

To check that Yarn was installed correctly, run:
```
yarn -v
```

### Installing

To install the project locally, you'll have to configure the Backend repository first in order to make the project work correctly.
Once everything is configured, follow the next steps:

 - Download repository by cloning the repo on your local machine
 - Once on your machine, open a terminal/command line on the project folder and execute the following command:
	```
	cp .env.example .env
	```
- In order to use all the libraries for the project execute the following command to download the necessary tools:
	```
	yarn
	```
- To run the project on the browser, execute the following command, once started, website such be displayed on `http://localhost:8080`
	```
	yarn run dev-server
	```

## Lint

If code is not lint (on Javascript or Styles) you can run the following command on the Terminal/Command Line to order the code styling: 

For Javascript files:
```
yarn lint:js
```

For Styles files:
```
yarn lint:css
```

## Built With

* [React](https://es.reactjs.org/) - JS library to create user interfaces
* [Styled-Components](https://www.styled-components.com/) - CSS to Javascript styles
* [React-Router](https://reacttraining.com/react-router/web/) - Collection of  navigational components that compose declaratively with applications
* [React-Redux](https://redux.js.org/) - Predictable state container for JavaScript apps.
* [Webpack](https://webpack.js.org/) - Static module bundler for modern JavaScript applications
* [Dotenv](https://www.npmjs.com/package/dotenv) - Zero-dependency module that loads environment variables from a .env file into process.env
* [StandardJS](https://standardjs.com/) - JavaScript style guide, linter, and formatter
* [Stylelint](https://stylelint.io/) - A mighty, modern linter that helps you avoid errors and enforce conventions in your styles
* [Lodash](https://lodash.com/) - A JavaScript utility library delivering consistency, modularity, performance, & extras

## Authors

* **Jose Almaraz** - *Frontend Developer* - [jalmarazg](https://github.com/jalmarazg)
* **Ruben Saucedo** - *Frontend Developer* - [RubenSaucedo](https://github.com/RubenSaucedo)
* **Angel Martinez** - *Backend Developer* - [miickeyreyez](https://github.com/miickeyreyez)
