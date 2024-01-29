This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This is the completed source code for the issue tracker project we build in my Ultimate Next.js series. You can find the full course here:

https://codewithmosh.com/p/ultimate-nextjs-series

To get started, follow these steps:

1. Clone this repository to your local machine. 
2. In the project folder, rename **.env.example** to **.env** (no period after). 
3. Set **all** the environment variables according to the instructions I've included in the file. If you don't set them properly, the application is not going to work.
4. Run `npm install` to install the dependencies.
5. Run `npx prisma migrate dev` to generate your database tables.
6. Run `npm run dev` to start the web server. 

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
