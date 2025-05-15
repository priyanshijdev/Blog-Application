export type Post = {
    slug:string
    title:string
    date:string
    author: string
    excerpt: string
    content: string
    category: string 
}

// sample blog post data with category :

const blogPosts: Post[] = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with Next.js",
      date: "2023-04-18",
      author: "John Doe",
      excerpt: "Learn the basics of Next.js and how to create your first application.",
      category: "Next.js",
      content: `Next.js is a React framework that gives you building blocks to create web applications.
  
      By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.
  
      You can use React to build your UI, then incrementally adopt Next.js features to solve common application requirements such as routing, data fetching, integrations - all while improving the developer and end-user experience.
  
      Whether you're an individual developer or part of a larger team, you can leverage React and Next.js to build fully interactive, highly dynamic, and performant web applications.`,
    },
    {
      slug: "why-typescript-is-awesome",
      title: "Why TypeScript is Awesome",
      date: "2023-04-25",
      author: "Jane Smith",
      excerpt: "Discover the benefits of using TypeScript in your projects.",
      category: "TypeScript",
      content: `TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
  
      TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.
  
      TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps.
  
      TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.`,
    },
    {
      slug: "tailwind-css-for-beginners",
      title: "Tailwind CSS for Beginners",
      date: "2023-05-02",
      author: "Alex Johnson",
      excerpt: "A beginner-friendly introduction to Tailwind CSS.",
      category: "CSS",
      content: `Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
  
      Instead of opinionated predesigned components, Tailwind provides low-level utility classes that let you build completely custom designs without ever leaving your HTML.
  
      Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.
  
      It's fast, flexible, and reliable — with zero-runtime.`,
    },
    {
      slug: "react-hooks-explained",
      title: "React Hooks Explained",
      date: "2023-05-15",
      author: "Sarah Williams",
      excerpt: "A comprehensive guide to React Hooks and how to use them effectively.",
      category: "React",
      content: `React Hooks are functions that let you "hook into" React state and lifecycle features from function components.
  
      Hooks don't work inside classes — they let you use React without classes. React provides a few built-in Hooks like useState, useEffect, and useContext.
  
      You can also create your own Hooks to reuse stateful behavior between different components. This pattern helps to share logic across your application.
  
      With Hooks, you can extract stateful logic from a component so it can be tested independently and reused.`,
    },
    {
      slug: "css-grid-layout",
      title: "CSS Grid Layout Made Simple",
      date: "2023-06-01",
      author: "Michael Brown",
      excerpt: "Learn how to create complex layouts easily with CSS Grid.",
      category: "CSS",
      content: `CSS Grid Layout is a two-dimensional layout system designed for the web. It lets you lay out items in rows and columns.
  
      Grid Layout gives us a method of creating grid structures that are described in CSS and not in HTML. It helps us to create layouts that can be redefined using Media Queries and adapt to different contexts.
  
      CSS Grid introduces a series of properties that allow us to create grid structures and control the placement and sizing of grid items using CSS.
  
      This means we can create layouts that change depending on the context they are used in, without needing to change the HTML.`,
    },
    {
        slug: "understanding-server-side-rendering",
        title: "Understanding Server-Side Rendering in Next.js",
        date: "2023-05-10",
        author: "Jane Smith",
        excerpt: "Explore the concept of server-side rendering (SSR) and how it's implemented in Next.js.",
        category: "Next.js",
        content: `Server-side rendering (SSR) is a technique where the HTML of a page is generated on the server for each request.
      
        In Next.js, SSR can be enabled on a per-page basis using the \`getServerSideProps\` function. This allows your app to fetch data at request time and generate dynamic content that is SEO-friendly and fast.
      
        SSR is useful for applications that need up-to-date data or rely on dynamic content generation.`
      },
      {
        slug: "static-site-generation-nextjs",
        title: "Static Site Generation in Next.js",
        date: "2023-06-02",
        author: "Emily Johnson",
        excerpt: "Learn how to use Static Site Generation (SSG) in Next.js to pre-render pages at build time.",
        category: "Next.js",
        content: `Static Site Generation (SSG) is a method of pre-rendering pages at build time. This means the HTML is generated during the build and reused on each request.
      
        In Next.js, you can use \`getStaticProps\` and \`getStaticPaths\` to enable SSG. This is ideal for blogs, documentation, or any content that doesn't need to change often.
      
        With SSG, you get the benefits of fast load times, great SEO, and reduced server load.`
      },
      {
        slug: "routing-in-nextjs",
        title: "Routing in Next.js",
        date: "2023-07-12",
        author: "Michael Brown",
        excerpt: "Understand how file-based routing works in Next.js and how to use dynamic routes.",
        category: "Next.js",
        content: `Next.js uses a file-based routing system built on the \`pages\` directory.
      
        Each file in the \`pages\` folder automatically becomes a route in your application. For dynamic routes, you can use square brackets in file names (e.g., \`[id].js\`) to match variable parts of the URL.
      
        This approach simplifies routing logic and integrates naturally with data fetching methods like \`getStaticProps\` and \`getServerSideProps\`.`
      },
      {
        slug: "getting-started-with-nextjs",
        title: "Getting Started with Next.js",
        date: "2023-05-10",
        author: "John Doe",
        excerpt: "Learn the basics of building server-side rendered React apps with Next.js.",
        category: "Next.js",
        content: `Next.js is a React framework that enables functionality such as server-side rendering and generating static websites.
        
        With built-in routing, image optimization, and file-based routing, Next.js makes it easy to build production-ready applications.
        
        You can also create API routes in the same codebase, making it a powerful full-stack framework.`,
      },
      
      {
        slug: "css-flexbox-guide",
        title: "Mastering CSS Flexbox",
        date: "2023-06-15",
        author: "Emily Johnson",
        excerpt: "A deep dive into CSS Flexbox layout and how to build responsive UIs.",
        category: "CSS",
        content: `Flexbox is a CSS layout model that allows elements to align and distribute space within a container.
        
        With properties like \`justify-content\`, \`align-items\`, and \`flex-direction\`, Flexbox gives you control over layout responsiveness.
        
        It's great for both one-dimensional layouts and complex UI structures without the need for floats or positioning.`,
      },
      
      {
        slug: "react-hooks-intro",
        title: "Understanding React Hooks",
        date: "2023-07-05",
        author: "Mike Anderson",
        excerpt: "An introduction to React Hooks and how they simplify state and side effects.",
        category: "React",
        content: `React Hooks let you use state and other React features without writing a class.
        
        Common hooks like \`useState\`, \`useEffect\`, and \`useContext\` make your components more reusable and readable.
        
        Hooks encourage writing smaller components with better separation of concerns.`,
      },
      
      {
        slug: "nextjs-api-routes",
        title: "Building APIs with Next.js",
        date: "2023-08-20",
        author: "Jane Smith",
        excerpt: "Explore how to build and deploy API routes using Next.js.",
        category: "Next.js",
        content: `Next.js allows you to create serverless API routes directly inside your project using the \`pages/api\` directory.
        
        These API routes are automatically deployed as serverless functions, enabling you to handle backend logic within the same project.
        
        It's ideal for small to medium backend logic like form submissions, authentication, or database operations.`,
      },
      {
        slug: "responsive-design-with-css",
        title: "Responsive Design with CSS",
        date: "2023-09-01",
        author: "Liam Brown",
        excerpt: "Learn how to create mobile-first designs with CSS media queries.",
        category: "CSS",
        content: `Responsive design ensures your web pages look good on all devices by using flexible grids and layouts.
        
        CSS media queries help apply different styles depending on the screen size, resolution, and orientation.
        
        A mobile-first approach prioritizes smaller screens and adds enhancements for larger devices.`,
      },
      {
        slug: "react-component-patterns",
        title: "Advanced React Component Patterns",
        date: "2023-10-10",
        author: "Sophia Lee",
        excerpt: "Explore reusable component patterns in React to write scalable code.",
        category: "React",
        content: `React component patterns like compound components, render props, and custom hooks improve code reuse.
        
        These patterns help separate concerns, abstract logic, and build flexible UI libraries.
        
        Understanding these patterns is essential for building large-scale React applications.`,
      }
            
]

// Function to get all blog posts
export function getBlogPosts(): Post[] {
    return blogPosts;
}

// Function to get a single blog post by slug
export function getBlogPostById(slug: string):Promise<Post | undefined> {
  return Promise.resolve(blogPosts.find((post) => post.slug === slug));
}

// Function to get all unique categories
export async function getCategories(): Promise<string[]> {
  const posts = await getBlogPosts()
  const categories = new Set(posts.map((post) => post.category))
  return ["All", ...Array.from(categories)]
}
