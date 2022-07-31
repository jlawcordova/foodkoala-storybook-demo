**foodkoala** is a mock food delivery app used to demonstrate the use of [Storybook](https://storybook.js.org) in a [Next.js](https://nextjs.org/) project. fooakoala is composed of a _Home Page_ which allows navigation to the _Restaurants Page_. The _Restaurant Page_ then lists two imaginary restaurants.

To demonstrate Storybook, the _Restaurant Card_ component has been placed into a [Story](https://storybook.js.org/docs/react/get-started/whats-a-story). See `stories/RestaurantCard.stories.jsx`.

## Run the foodkoala NextJS Project
First, if dependencies have not yet been installed, run the following command:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Run Storybook
With the foodkoala project running, run Storybook:

```bash
npm run storybook
```