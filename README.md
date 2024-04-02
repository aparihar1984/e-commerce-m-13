# e-commerce-m-13
Module 13 Object-Relational Mapping (ORM) Challenge

Building The Back End For An E-Commerce Site!

## Introduction

For this assignment, I had to attempt to build the back end for an e-commerce site by taking a working Express.js API and configuring it to use Sequelize in order to interact with a MySQL database.

## Criteria
To meet the Accepted Criteria of this assignment, I built the back end for an e-commerce site using Sequelize:

When I add my database name, MySQL username, and MySQL password to an environment variable file, I am then able to connect to a database using Sequelize.

When I enter the schema and seed commands, a development database is created and is seeded with the test data.

When I enter the command to invoke the application, then my server is started and the Sequelize models are synced to the MySQL database.

When I open the API GET routes in Postman for categories, products, or tags, the data for each of these routes is displayed in a formatted JSON.

When I test the API POST, PUT, and DELETE routes in Postman, I am able to successfully create, update, and delete data in my database.

## References

To complete this assignment I first cloned the starter code that was given in the assignment.  After that, I studied the following activities from the Module 13-ORM (Object-Relational Mapping) Class Activity Files as references:

"01-Ins_Sequelize-Setup"

"06-Stu_Create-Read"

"07-Ins_Update-Delete"

"09-Ins_Async-Await"

"21-Ins_One-to-One"

"22-Stu_One-to-One"

"23-Ins_One-to-Many"

"24-Stu_One-to-Many"

After this, I searched the internet for further information and came across the following websites as references:

"https://github.com/esroleo/orm-e-commerce-back-end"

"https://github.com/priyaravi23/orm-e-commerce"

"https://github.com/likearollinson/ORM-ecommerce-back-end"

"https://sequelize.org/docs/v6/core-concepts/assocs/#:~:text=To%20create%20a%20One%2DTo,belongsToMany%20calls%20are%20used%20together."

"https://sequelize.org/docs/v6/other-topics/legacy/#primary-keys"

The process of coding for me involved using code from the activities and websites mentioned above and commenting out every section of code in all the models javascript files (Cateory.js, Product.js, ProductTag.js and Tag.js), and all the api routes javascript files (category-routes.js, index.js, product-routes.js, and tag-routes.js) as I was adding the required code to each js file to ultimately see what each specific block of code accomplished.

This led to a lot of experimentation in order to see what I felt was needed to ultimately complete as much of the Accepted Criteria as possible.

The experimentation was necessary since it should be pointed out that while the code given inside the above referenced websites was very helpful, simply copying and pasting code without understanding what that code does will lead to more complications and a lack of understanding.  

To complete the GET, POST, PUT and DELETE routes used in this assignment, I went with the async-await method since that one was used in class activities 21 through 24.  I felt most comfortable with this method, which was also used in the following resource:

"https://github.com/likearollinson/ORM-ecommerce-back-end/tree/main/routes/api"

## Screenshots
Here are the screenshots from my Postman App:

## Categories

![Alt text](https://github.com/aparihar1984/e-commerce-m-13/blob/main/screenshots/GET%20All%20Categories%20Screenshot.png)

![Alt text](https://github.com/aparihar1984/e-commerce-m-13/blob/main/screenshots/GET%20One%20Category%20Screenshot.png)

![Alt text](https://github.com/aparihar1984/e-commerce-m-13/blob/main/screenshots/POST%20Categories%20Screenshot.png)

![Alt text](https://github.com/aparihar1984/e-commerce-m-13/blob/main/screenshots/PUT%20Categories%20Screenshot.png)

![Alt text](https://github.com/aparihar1984/e-commerce-m-13/blob/main/screenshots/DELETE%20Categories%20Screenshot.png)

## Products

![Alt text](https://github.com/aparihar1984/e-commerce-m-13/blob/main/screenshots/GET%20All%20Products%20Screenshot.png)

![Alt text](https://github.com/aparihar1984/e-commerce-m-13/blob/main/screenshots/GET%20One%20Product%20Screenshot.png)

![Alt text](https://github.com/aparihar1984/e-commerce-m-13/blob/main/screenshots/POST%20Products%20Screenshot.png)

![Alt text](https://github.com/aparihar1984/e-commerce-m-13/blob/main/screenshots/PUT%20Products%20Screenshot.png)

![Alt text](https://github.com/aparihar1984/e-commerce-m-13/blob/main/screenshots/DELETE%20Products%20Screenshot.png)

## Tags

![Alt text](https://github.com/aparihar1984/e-commerce-m-13/blob/main/screenshots/GET%20All%20Tags%20Screenshot.png)

![Alt text](https://github.com/aparihar1984/e-commerce-m-13/blob/main/screenshots/GET%20One%20Tag%20Screenshot.png)

![Alt text](https://github.com/aparihar1984/e-commerce-m-13/blob/main/screenshots/POST%20Tags%20Screenshot.png)

![Alt text](https://github.com/aparihar1984/e-commerce-m-13/blob/main/screenshots/PUT%20Tags%20Screenshot.png)

![Alt text](https://github.com/aparihar1984/e-commerce-m-13/blob/main/screenshots/DELETE%20Tags%20Screenshot.png)

## Walkthrough Video

https://drive.google.com/file/d/10Ihtgz3HPFlKGeAiMm9kJdSybrCb_YvY/view?usp=sharing

