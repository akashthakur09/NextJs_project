# NextJs Project

This is a Next.js-based web application designed to assist users with their education and immigration queries. This project uses React with TypeScript, Tailwind CSS for styling, and Prisma for database management with PostgreSQL.
## Features

- Responsive UI: Built with Tailwind CSS for a modern and responsive user experience.
- User Form Handling: Integrated form to collect user queries, storing data in a PostgreSQL database.
- API Integration: Backend API routes are configured to handle user interactions.


## Project Setup Instruction

### 1. Clone the Repository

```bash
https://github.com/akashthakur09/NextJs_project.git
cd NextJs_project

```

### 2. Install Dependencies

```bash
npm install

```

### 3. Configure Environment Variables
Create a .env file in the root directory and add the following environment variables:

```bash
DATABASE_URL=postgresql://username:password@localhost:5432/database_name

```

### 4. Setup PostgreSQL Database
- Make sure PostgreSQL is installed and running on your system.
- Create a new database using the following command in PostgreSQL:

```bash
CREATE DATABASE database_name;

```
- Replace database_name with your desired database name.

```bash
Run Prisma migrations to set up your database schema:
npx prisma migrate dev --name init

```
This command will create the necessary tables in your PostgreSQL database.

## Running the Project
### 1. Running the Development Server
To start the development server, run:
```bash
npm run dev
```
This will launch frontend on http://localhost:3000.

### 2. Running the Prisma Studio
Prisma Studio is a visual editor for your database. 
 
You can start it with:

```bash
npx prisma studio
```
This will open Prisma Studio in your browser, where you can view and manage the data in your PostgreSQL database.

## Database Connection
* This project uses Prisma as an ORM to interact with a PostgreSQL database.

* Ensure your PostgreSQL server is running, and the connection details in your `.env` file are correct.

* Generate Prisma Client After setting up your environment variables, generate the Prisma client:

```bash
npx prisma generate
```
This command generates the Prisma client, which is used to interact with the database.

## Additional Information
* Tailwind CSS: This project uses Tailwind CSS for styling. You can customize the design in `tailwind.config.ts`.
* API Routes: API routes are located in src/pages/api/ and handle backend logic like form submissions.
* Form Validation: Form validation is managed using the schema defined in src/Schema/formSchema.tsx.