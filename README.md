# Fragrance Company Catalog
This project delivers a well-crafted application designed for a fragrance and flavor company. It is implemented with the technologies of React, TypeScript, and Tailwind CSS. The application offers a compelling product catalog that enables customers to explore a variety of products, filter them according to categories like floral, fruity, and musk, and obtain comprehensive information about every selected product.
Tailwind CSS provides low-level utility classes that help me to build completely custom designs without ever leaving your HTML.
## Installation
This project is designed with Docker as its primary environment for building and running.
The upcoming guide provides a succession of commands that you'll need to initiate to get our application up and running using Docker.

However, if Docker doesn't resonate with your workflow, or if you prefer an alternative setup, worry not! Please navigate to the next section for non-Docker setup steps.

1.  **Prerequisites:** To successfully run this project, ensure that you have `React`, `TypeScript`, and `npm` installed on your system. Having `Docker` installed is optional but it can simplify the setup process.


2.  **Clone the Repository:** Use the following command to clone the project repository to your local machine.
    ```bash
    git clone git@github.com:matejdrienovsky/fragrance-company-catalog.git
    ```
    Alternatively, you can download the repository as a ZIP file and extract it to your desired location.


3. **Navigate to Project Directory:** Change your current directory to the location where the project has been cloned.


4. **Build the React app:** Execute the following command to install all the necessary dependencies.
    ```bash
    npm run build
    ```

### Docker Setup

1. **Build the Docker Image:**
    ```bash
    docker build -t fragrance-company-catalog .
    ```

   `fragrance-company-catalog` is the name of the image. You can give any name you prefer.

   Once the build is completed, let’s run
    ```bash
    docker image ls
    ```
   to list all the images. You should be able to see the newly created image.


2. **Create and run a container with the image:**

   Now that we have the image, let’s create a container. So that we can access the app.
   To do that, you need to execute the docker run command. In the terminal, execute the command as follows.
    ```bash
    docker run -p 8080:8080 --name fragrance-company-catalog fragrance-company-catalog
    ```

3. **Access the Application:**

   Open your browser and navigate to http://localhost:8080 to access the Fragrance Company Catalog application.


### Non-Docker Setup
If you prefer to run the application without Docker, follow the steps below.


**Prerequisites:** 

Ensure that you have `Node.js` and `npm` installed on your system.
You can verify the installation by running the following commands.
```bash
node -v
npm -v
```

**Steps to run the application without Docker:**
1. **Install Dependencies:**

   Before running the application, you need to install the necessary dependencies. Execute the following command to install the dependencies.
    ```bash
    npm install
    ```

2. **Start the Application:**

   Once the dependencies are installed, you can start the application in development mode. Run the following command in your terminal:
    ```bash
    npm run dev
    ```

   This command typically starts a local development server and builds the application for development. You might see additional messages in your terminal about the server starting and compilation progress.

3. **Access the Application:**

   After running npm run dev, open your web browser and navigate to http://localhost:3000. This should display the Fragrance Company Catalog application.


## Usage
Usage instructions for running the application using Docker and without Docker are provided below.
More useful commands are also included to help you manage the application effectively.
1. **Start the docker container:**

   If you are using Docker, you can start the container by executing the following command.
    ```bash
    docker start fragrance-company-catalog
    ```

2. **Stop the docker container:**

   To stop the container, run the following command.
     ```bash
     docker stop fragrance-company-catalog
     ```

3. **Remove the docker container:**

   If you want to remove the container, execute the following command.
    ```bash
    docker rm fragrance-company-catalog
    ```

4. **Remove the docker image:**

   If you want to remove the image, run the following command.
    ```bash
    docker rmi fragrance-company-catalog
    ```

5. **Rebuild the docker image:**

   If you want to rebuild the image, execute the following command.
    ```bash
    docker build -t fragrance-company-catalog .
    ```

6. **Run the application in development mode:**

   To run the application in development mode, execute the following command.
    ```bash
    npm run dev
    ```

7. **Build the application:**

   To build the application, run the following command.
    ```bash
    npm run build
    ```
###
For more detailed information, please refer to the official documentation of [Vite](https://vitejs.dev/guide/), [React](https://reactjs.org/docs/getting-started.html), and [Tailwind CSS](https://tailwindcss.com/docs).