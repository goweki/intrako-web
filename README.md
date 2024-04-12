# Source code for Intrako website.

## Toolchain

- Next js 13: bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- css: [`Tailwind`](https://tailwindcss.com/) v3.
- Mail: [`nodemailer`](https://nodemailer.com/).
- Database: [`Mongodb`](https://www.mongodb.com/).

#### Pages

- Home: [`/`]
- About Us: [`/aboutUs`]
- Servives: [`/services`]
- Blog: [`/blog`]
- Contacts: [`/contacts`]

#### Backend routes

- Blog: [`/api/blog`]
- Emailing and sending SMS: [`/api/mailer`]

#### Database structure

The MongoDb blogposts collection contains blog entries as objects. The blog objects look like so:

```
{
  "date": String (eg 'March 2023'),
  "title": String (eg 'This is a Blogpost'),
  "article": String (prose blog content, paragraphs are separated by '\n' )
}
```

### Running App

Clone this repo in your local directory:

```bash
git clone https://github.com/goweki/loci.git
```

Navigate into the local repo and install dependencies:

```bash
npm i
```

Create a .env file with the following environment variables (fill the empty fields):

```
MONGODB_URI=""
NODE_ENV="development"
GMAIL_ACCOUNT_TO=''
NOTIFY_CHANNELS='email'
GMAIL_ACCOUNT_USERNAME=''
GMAIL_APP_KEY=''
GMAIL_ACCOUNT_FROM=''
```

To run the development server, within the cloned repo:

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### To build the production-ready optimized build.

```bash
npm run build
```

- The output of the build process is stored in the .next directory by default.

To start the server in production mode

```bash
npm run start
```

- serves the previously built and optimized version of your application.
- Next js runs the server on port 3000 by default
