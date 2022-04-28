<h1>e-Commerce-Backend</h1>

<h2>Table of Contents</h2>

- [Description](#description)
- [User Story](#user-story)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Seed the data](#seed-the-data)
- [Usage](#Usage)
- [Endpoints](#endpoints)
  - [Get /categories/](#get-/categories/)
  - [Get /categories/:id](#GET-/categories/:id)
  - [Post /categories/](#post-/categories/)
  - [Put /categories/:id](#put-/categories/:id)
  - [Delete /categories/:id](#delete-/categories/:id)
  - [Get /products/](#get-/products/)
  - [Get /products/:id](#GET-/products/:id)
  - [Post /products/](#post-/products/)
  - [Put /products/:id](#put-/products/:id)
  - [Delete /products/:id](#delete-/products/:id)
  - [Get /tags/](#get-/tags/)
  - [Get /tags/:id](#GET-/tags/:id)
  - [Post /tags/](#post-/tags/)
  - [Put /tags/:id](#put-/tags/:id)
  - [Delete /tags/:id](#delete-/tags/:id)
- [Video Walkthrough](#video-walkthrough)
- [Questions](#questions)

## Description

Internet retail, also known as **e-commerce**, is the largest sector of the electronics industry, generating an estimated $29 trillion in 2019. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes.

This application is the back end for an e-commerce site that has a Express.js sever and use Sequelize to interact with a MySQL database.

## User Story

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Technologies Used

#### Languages

- JavaScript
- JQuery

#### Packages used

- Node.Js
- Express
- Dotenv
- Mysql2
- Sequelize

## Installation

To install the application follow the steps below:

```
npm install
```

## Seed the data

To seed the data follow the steps below:

```
npm run seed
```

## Usage

To use the application follow the steps below:

```
npm run start
```

## Endpoints

### /api

#### - GET /categories/

This endpoint is for users who want to get all the categories saved previously. It will return an array of categories and all their related products.

Sample endpoint with parameters:

```
http://localhost:3001/api/categories/
```

See sample response:

```json
"data": [
        {
            "id": 1,
            "categoryName": "Shirts",
            "Products": [
                {
                    "id": 1,
                    "productName": "Plain T-Shirt",
                    "price": "14.99",
                    "stock": 14,
                    "categoryId": 1
                },
```

#### - GET /categories/:id

This endpoint is for users who want to get a specific category by id. It will return an object containing the category and all its related products.

Sample endpoint with parameters:

```
http://localhost:3001/api/categories/2
```

See sample response:

```json
 "data": {
        "id": 2,
        "categoryName": "Shorts",
        "Products": [
            {
                "id": 21,
                "productName": "Cargo Shorts",
                "price": "29.99",
                "stock": 22,
                "categoryId": 2
            },
            {
                "id": 22,
                "productName": "Charcoal Modal Pyjama Shorts",
                "price": "5.99",
                "stock": 42,
                "categoryId": 2
            },
```

#### - POST /categories/

This endpoint is for users who want to save a new category to your saved categories. It will create a new category.

Sample endpoint with parameters:

```
http://localhost:3001/api/categories/
```

POST body:

```json
{
  "categoryName": "Home"
}
```

#### - put/categories/:id

This endpoint is for users who want to update an specific category from your saved categories by its id. It will return a object with a message.

Sample endpoint with parameters:

```
http://localhost:3001/api/categories/2
```

PUT body:

```json
{
  "categoryName": "Home"
}
```

See sample response:

```json
{
  "success": true,
  "data": "Updated Category"
}
```

#### - DELETE /categories/:id

This endpoint is for users who want to delete an specific category from your saved categories by its id. It will return a object with a message.

Sample endpoint with parameters:

```
http://localhost:3001/api/categories/2
```

See sample response:

```json
{
  "success": true,
  "data": "Deleted Category"
}
```

#### - GET /products/

This endpoint is for users who want to get all the products saved previously. It will return an array of products and all their related tags.

Sample endpoint with parameters:

```
http://localhost:3001/api/products/
```

See sample response:

```json
"data": [
        {
            "id": 1,
            "productName": "Plain T-Shirt",
            "price": "14.99",
            "stock": 14,
            "categoryId": 1,
            "Category": {
                "id": 1,
                "categoryName": "Shirts"
            },
            "Tags": [
                {
                    "id": 6,
                    "tagName": "white",
                    "ProductTag": {
                        "id": 1,
                        "productId": 1,
                        "tagId": 6
                    }
                },
                {
                    "id": 8,
                    "tagName": "pop culture",
                    "ProductTag": {
                        "id": 2,
                        "productId": 1,
                        "tagId": 8
                    }
                },
            ]
        },
```

#### - GET /products/:id

This endpoint is for users who want to get a specific product by id. It will return an object containing the product, its category and all its related tags.

Sample endpoint with parameters:

```
http://localhost:3001/api/products/2
```

See sample response:

```json
 "data": {
        "id": 3,
        "productName": "White Pearl T-Shirt",
        "price": "2.99",
        "stock": 18,
        "categoryId": 1,
        "Category": {
            "id": 1,
            "categoryName": "Shirts"
        },
        "Tags": [
            {
                "id": 6,
                "tagName": "white",
                "ProductTag": {
                    "id": 8,
                    "productId": 3,
                    "tagId": 6
                }
            },
            {
                "id": 7,
                "tagName": "gold",
                "ProductTag": {
                    "id": 9,
                    "productId": 3,
                    "tagId": 7
                }
            },
        ]
    }
}
```

#### - POST /products/

This endpoint is for users who want to save a new product to your saved categories. It will create a new category.

Sample endpoint with parameters:

```
http://localhost:3001/api/products/
```

POST body:

```json
{
  "productName": "Green Satin Solid Shirt",
  "price": 8.99,
  "stock": 21,
  "categoryId": 1,
  "tagIds": []
}
```

#### - put/products/:id

This endpoint is for users who want to update an specific product from your saved products by its id. It will return a object with a message.

PUT body (Needs to has at least one of the attributes in the body below):

```json
{
  "productName": "Green Satin Solid Shirt",
  "price": 8.99,
  "stock": 21,
  "categoryId": 1,
  "tagIds": []
}
```

See sample response:

```json
{
  "success": true,
  "data": "Updated Product"
}
```

#### - DELETE /products/:id

This endpoint is for users who want to delete an specific product from your saved products by its id. It will return a object with a message.

See sample response:

```json
{
  "success": true,
  "data": "Deleted Category"
}
```

#### - GET /tags/

This endpoint is for users who want to get all the tags saved previously. It will return an array of tags and all their related products.

Sample endpoint with parameters:

```
http://localhost:3001/api/tags/
```

See sample response:

```json
 "data": [
        {
            "id": 1,
            "tagName": "rock music",
            "Products": [
                {
                    "id": 16,
                    "productName": "Top 40 Music Compilation Vinyl Record",
                    "price": "12.99",
                    "stock": 50,
                    "categoryId": 3,
                    "ProductTag": {
                        "id": 44,
                        "productId": 16,
                        "tagId": 1
                    }
                },
```

#### - GET /tags/:id

This endpoint is for users who want to get a specific tag by id. It will return an object containing the tag and all its related products.

Sample endpoint with parameters:

```
http://localhost:3001/api/tags/2
```

See sample response:

```json
 "data": {
        "id": 10,
        "tagName": "men",
        "Products": [
            {
                "id": 1,
                "productName": "Plain T-Shirt",
                "price": "14.99",
                "stock": 14,
                "categoryId": 1,
                "ProductTag": {
                    "id": 4,
                    "productId": 1,
                    "tagId": 10
                }
            },
            {
                "id": 3,
                "productName": "White Pearl T-Shirt",
                "price": "2.99",
                "stock": 18,
                "categoryId": 1,
                "ProductTag": {
                    "id": 11,
                    "productId": 3,
                    "tagId": 10
                }
            },
        ]
    }
}
```

#### - POST /tags/

This endpoint is for users who want to save a new tag to your saved tags. It will create a new tag.

Sample endpoint with parameters:

```
http://localhost:3001/api/tags/
```

POST body:

```json
{
  "tagName": "Summer"
}
```

#### - put/categories/:id

This endpoint is for users who want to update an specific tag from your saved tags by its id. It will return a object with a message.

Sample endpoint with parameters:

```
http://localhost:3001/api/tags/2
```

PUT body:

```json
{
  "tagName": "winter"
}
```

See sample response:

```json
{
  "success": true,
  "data": "Updated Tag"
}
```

#### - DELETE /categories/:id

This endpoint is for users who want to delete an specific tag from your saved tags by its id. It will return a object with a message.

Sample endpoint with parameters:

```
http://localhost:3001/api/tags/2
```

See sample response:

```json
{
  "success": true,
  "data": "Deleted tag"
}
```

## Video Walkthrough

Click [here](https://drive.google.com/file/d/1aiBXw9HOSrFSPMXvBw3UhTdr1OYQLiTQ/view?usp=sharing) to access the Video Walkthrough.

## Questions

If you have any question or suggestion, please fell free to get in touch with me by:

Email: [luizfroes@gmail.com](mailto:luizfroes@gmail.com)

GitHub: [luizfroes](https://github.com/luizfroes)
