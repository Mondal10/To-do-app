# To-do-app
### [Working Web-App Link](https://to-do-node-app.herokuapp.com/)

Developed a basic To-Do web app using:
- **Express:** Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is an open source framework developed and maintained by the Node.js foundation.
- **MLab:** mLab is a fully managed cloud database service featuring automated provisioning and scaling of MongoDB databases, backup and recovery, 24/7 monitoring and alerting, web-based management tools, and expert support. mLab's Database-as-a-Service platform powers hundreds of thousands of databases across AWS, Azure, and Google and allows developers to focus their attention on product development instead of operations.
- **Node.js:** It is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux. [You can visit my Basic Node.JS Tutorial](https://github.com/Mondal10/Node-JS-Tutorial)
- **Embedded JavaScript Templates(EJS):** EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript.
- **REST:** (REpresentational State Transfer) is an architectural style for developing web services. REST is popular due to its simplicity and the fact that it builds upon existing systems and features of the internet's HTTP in order to achieve its objectives, here (GET,POST and DELETE).
- **Heroku:** Heroku is a cloud platform as a service supporting several programming languages. I used it to deploy my app by connecting it with my github repository.

## Steps to create ```package.json``` with dependencies:
1. Crete ```package.json``` using the following command in your terminal ```$ npm init``` fill the details or just skip it by pressing enter.
2. Install packages/dependencies and saving it in  ```package.json```
   - **[Express:](https://www.npmjs.com/package/express)** use ```$ npm install express -save```  
   - **[EJS:](https://www.npmjs.com/package/ejs)** use ```$ npm install ejs -save```
   - **[Body-Parser:](https://www.npmjs.com/package/body-parser)** use ```$ npm install body-parser -save```
   - **[Mongoose:](https://www.npmjs.com/package/mongoose)** use ```$ npm install mongoose -save```
   - **[UUID:](https://www.npmjs.com/package/uuid)** use ```npm install uuid```
   #### Optional 
   - **[Nodemon:](https://www.npmjs.com/package/nodemon)** use ```npm install -g nodemon``` Helps to automatically restart the node application when file changes in the directory are detected.
3. Once all the packages are installed you can use ```require('<whatever is required>')``` in the files to get access to that package and its functionality. 
