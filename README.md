# Some initial thoughts for Merkle

The application currently consists of two main components: the `StoryList` and the `Story`. The `StoryList` gets 10 random ids and fetches the initial data for the stories, in order to render them all at once, while each `Story` then subscribes to realtime updates for its story and user data.

Even though I initially planned on using `getServerSideProps` + `useSWR` for the data fetching, I thought that Firebase would be a better fit for an application that could show updated scores in real time. Also, I haven't worked a lot with Firebase, so I thought that this could be a nice opportunity to try it out. However, due to my limited time and experience with it, I didn't figure out how you mock Firebase subscriptions in Storybook, hence why I decided to create a `X.container.tsx` file which can take care of all that logic, while the "dumb" component can be used for testing and stories, using mock data.

Also, due to the current logic and needs, the application does not feel the fastest. I'd say it's probably because we fetch random stories every time, and all the data for both the stories and the users. I wanted to render them all at once, because I did not like how it looked when the stories would randomly start showing up on the page, depending on which ever was first to load. Some caching + possibly a better way to query the Firebase database (if there's, for example, a smarter way to query random entries directly) should improve the load speed.

There's also plenty of other things I would improve:

- Finish adding unit tests, also for the utils functions
- Storybook stories could also be improved
- My initial wish was to add a little animation when a score would update in real time, to "teach" the user that it's a feature the application has
- Add a better animation for when you upvote a story so it brings more "character" to the ap
- Do an accessibility audit to see what elements can be optimised
- Tweak the linting a bit, and maybe increase the character limit per line, because I don't like how it splits the code currently
- In a real life scenario, I would rethink the data that needs to be updated in real time (could be that the score would be the only one that needs that)
- Come up with a better mobile design/layout
- Add a skeleton loader, instead of the "Loading...." message
- Add some node-cache maybe, so the stories that have been fetched before are stored in memory
- Refactor out some database constants

# About

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and TypeScript.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/health](http://localhost:3000/api/health). This endpoint can be edited in `pages/api/health.js. (Just a test)

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Includes:

- Unit test setup
- Storybook
- Simple firebase connection that subscribes to real time data
- SCSS Modules
- API health check on /api/health
- Linting on pre-commit

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can also read about how to [Read and Write Data on the Web with a Realtime Firebase database](https://firebase.google.com/docs/database/web/read-and-write).

# How to run

Run the following commands inside your app directory:

```sh
npm run dev
```

Starts the Next app in a development build.

```sh
npm run build
```

Followed by:

```sh
npm run start
```

To build and run a production build of the app.

## Storybook

Run the following commands inside your app directory:

```sh
npm run storybook
```

Or

```sh
npm run build-storybook
```

To generate a static build of your storybook environment.

# Routes:

`/api/health`

should respond with a simple `200 OK` HTTP status code.
