# IMAGE PROCESSING API

To test and run this project, open a terminal at project folder and then

1. Install dependencies
    ```bash
    npm install
    ```
2. Transpile code from TypeScript to JavaScript
    ```bash
    npm run build
    ```
3. Run diagnostic tests
    ```bash
    npm run test
    ```
4. Run application in development mode
    ```bash
    npm start
    ```
5. View API documentation
   From a web browser, open `http://127.0.0.1:3000/api/v1/docs`
6. Run Postman tests
    - From Postman import image-processing-api.postman.json located in project folder
    - Run the imported collection
7. View activity logs including errors at `<project_folder>/logs`

&nbsp;
(Optional) Deploy application in production mode

-   Start the application

    ```bash
    npx pm2 start dist/index.js --name image-processing-api
    ```

-   Stop the application

    ```bash
    npx pm2 stop image-processing-api
    ```
