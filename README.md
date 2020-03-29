# 42Race - The top virtual race platform - with React / Typescript / Redux

- This project is hosted at: [42race.netlify.com](42race.netlify.com)
- Below is the main points that'll help reviewers to better go through the project 👍.

### It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses:

[Typescript](https://github.com/microsoft/TypeScript) because it's 2020  
[React Router](https://github.com/ReactTraining/react-router) to handle client side routing  
[Redux](https://github.com/reduxjs/react-redux) to handle State Management
[Redux-toolkit](https://redux-toolkit.js.org/) to reduce Redux boilerplate
[React Query](https://github.com/tannerlinsley/react-query) for data fetching
[Ant Design](https://github.com/ant-design/ant-design) for its very complete set of components  
[Styled Components](https://github.com/styled-components/styled-components) to extend Ant's default component styling  
[TailwindCSS](https://github.com/tailwindcss/tailwindcss) to elegantly handle the rest of your app's UI

### And also:

[Axios](https://github.com/axios/axios) as a proper Http client  
[Prettier](https://github.com/prettier/prettier) because it's just too helpful

## Main features

### Header

- Sticky header that hides when scroll down / shows when scroll up or at the top of the page.
- A control modal contains navigation links.

### Home page

- A responsive carousel to display featured races.
- An event list to navigate to Race page.
- Multiple other responsive carousels to show main races.

### Races page

- A form to filter races based on sport type, time, event type, pricing.
- Persist filter states to localstorage with redux-persist.
- Sort races based on start date, end date, most popular, new release.
- A switch to change between normal and medal view.
- Data fetching with infinite scroll.

## Project structure

- src/pages: the 2 main pages of the projects - Home and Race
- src/components: components that can be reused
- src/reducers: redux state slices with redux toolkit

## To be improved

- View all button should navigate users to race page with corresponding sort value
- I18n support

### That's it, thank you for reading, happy hacking 🎉
