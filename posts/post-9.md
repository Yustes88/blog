---
id: 9
title: "Creating a Next.js 13 app directory"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in ultricies nisl. Aliquam sit amet neque tincidunt, finibus quam at, aliquam eros. Nullam eget turpis libero. Quisque sed nisi dignissim, bibendum nulla vel, tincidunt tortor. Vestibulum non luctus arcu. Donec vitae sapien ultricies, euismod risus ac, iaculis mauris. Nullam non mauris non ante dictum auctor. Nunc ac mauris eget quam feugiat bibendum. Duis et sollicitudin tellus."
date: "April 30, 2023"
datetime: "2023-04-30"
authorName: "Emma Johnson"
authorRole: "Full Stack Developer"
authorHref: "/"
authorUrl: "https://images.unsplash.com/photo-1590038767624-dac5740a997b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
categoryTitle: "Design"
categoryHref: "/#"
imageUrl: "https://images.unsplash.com/photo-1506097425191-7ad538b29cef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
---

Creating a Next.js 13 app directory is a simple process that can help you organize your codebase and speed up development. Here are the steps to create a Next.js 13 app directory:

1. Create a new directory for your app: `mkdir my-next-app`
2. Navigate into the directory: `cd my-next-app`
3. Initialize a new npm package: `npm init -y`
4. Install Next.js 13 and React: `npm install next react react-dom`
5. Create a new `pages` directory: `mkdir pages`
6. Create a new file inside `pages` called `index.js`: `touch pages/index.js`
7. Add the following code to `pages/index.js`:

```javascript
function Home() {
  return <div>Welcome to my Next.js 13 app!</div>;
}

export default Home;
```

8. Start the development server: `npm run dev`

That's it! You now have a basic Next.js 13 app directory set up and running. You can add more pages to the `pages` directory and they will automatically be served at their respective routes. You can also add components, styles, and other assets to your app directory as needed.

Happy coding!