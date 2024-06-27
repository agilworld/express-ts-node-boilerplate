# Express TypeScript Boilerplate

Node Express.js backend boilerplate for API gateway using Express.js framework and TypeScript as typed language. The boilerplate is built and adopted repository pattern and support any service provider to be scalable and maintainable with small team, but I understand the boilerplate is very early, you can see authentication pattern with Supabase or Local DB.

The codes is not ready to PRODUCTION, currently still using development.

## Getting Started 

please use `yarn` or `pnpm` for recommendation

I used to `yarn` as common package manager

- yarn install
- yarn dev
- yarn build


## Structure

`config` : Config environment and config for provider
`controller`: Controller for routes
`core` : the main services app
`entities` : classes of service entitites
`interface` : Type interface of classes
`middleware` : Middleware collection 
`routes` : list of API endpoints 
`services` : collection of service provider 

## Integration Service Tools

- Auth --> using **Supabase** Authentication Flow
- ORM --> using Prisma to  interact database,it serves as an intermediary layer between applications and databases. the sample project used to MongoDB Atlas

Next big thing
- SMTP tool with Resend
- Logger with winston
- Firebase


## Test 

the boilerplate is designed to easy to use end-to-end test, you can find out directory in `tests`

## Contribute

Please email to agil.rahadi@gmail.com or visit https://linkedin.com/in/dianafrial

Let me know if any bug issue or request pull requesst

Thanks
