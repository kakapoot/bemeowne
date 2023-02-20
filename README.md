# BeMeowne
BeMeowne is a web search app for cats to find their purrfect partner! :3

## What this project is about
A mini frontend project which fetches data from [The Cat API](https://thecatapi.com/) to  display details and images of random cats, and allow the user to search cats according to breeds.

This project was built as an assignment for an internship application at Accredify, with the requirements of a frontend built in Vue 3 with at least 1 API integration, at least 2 routes, and unit testing with Jest.

## Technologies Used
- Vue.js + Vue CLI
- Vue Router
- Bootstrap
- Jest + Vue Test Utils

## Project Setup
View the project online [here](https://bemeowne-catapi.netlify.app/)!

... or run the project locally:
1. Download the app source code by cloning this GitHub repository
```sh
git clone https://github.com/kakapoot/bemeowne.git
```
2. Download required dependencies in terminal using Node package manager
```sh
npm install
```
3. Compile and run the app server

> Compile and Hot-Reload for Development
> ```sh
> npm run serve
> ```
> Compile and Minify for Production
> ```sh
> npm run build
> ```
> Testing
> ```sh
> npm run test:unit
> ```

4. View the locally hosted app in your browser (eg. http://localhost:8080/)

## Design Considerations
- **Responsive User Interface:** Used Bootstrap to quickly build a responsive web layout compatible for different screen sizes. Indicators are displayed when loading pages.
- **Error Handling:** Implemented handling for errors such as unable to fetch data from API, 404 page not found.
- **Reusability:** Broke down and encapsulated elements of the application into smaller Components for reusability and maintainability. Used mixins to reuse code functionality of fetching of data from API.
- **Project Structure**: Predictable and organized file structure for the codebase for maintainability and scalability.

*Extra Notes:* 
- *I initially wanted to implement a Favourites feature where users can "favourite" and "unfavourite" cats and the user would then be able to view all their currently favourited cats, but had to scrap it due to time constraints. Since this was a small application, I had planned to use Vue's Reactivity API to maintain a simple global state to store the list of favourites. However for a larger-scale application, I would opt for a proper state management library or a database.*
- *Ideally I would hide the API key but due to time constraints and the lack of a backend so I am just leaving it in for now :')*