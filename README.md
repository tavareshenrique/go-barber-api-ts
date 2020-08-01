<h1 align="center">
  <img alt="GoBarber" title="GoBarber" src="assets/logo.svg" width="300px" />
</h1>

<p align="center">
  <img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/tavareshenrique/go-barber-api-ts?color=7D40E7">
  <img alt="Made by Henrique Tavares" src="https://img.shields.io/badge/made%20by-Henrique Tavares-%20?color=7D40E7">
  <img alt="Project top programing language" src="https://img.shields.io/github/languages/top/tavareshenrique/go-barber-api-ts?color=7D40E7">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/tavareshenrique/go-barber-api-ts?color=7D40E7">
  <img alt="GitHub license" src="https://img.shields.io/github/license/tavareshenrique/go-barber-api-ts?color=7D40E7">
</p>

<p align="center">
  <a href="#information_source-content">ℹ️ Content</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies">🚀 Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-author">💻 Author</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">📝 License</a>
</p>

<div align="center"><a href="https://insomnia.rest/run/?label=%5B11%5D%20Go%20Barber%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2Ftavareshenrique%2Fgo-barber-api-ts%2Fmaster%2Finsomnia%2FInsomnia_2020-07-26.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a></div>

<p align="center">
  Go Barber API is a project developed on the Rocketseat Bootcamp GoStack 11. This project was developed using TypeScript with NodeJS and Express.
</p>

---

# :information_source: Content

- [Session](#session)
  - [Create Session](#create-session)
- [Users](#users)
  - [Create User](#create-user)
- [Avatar](#avatar)
  - [Update Avatar](#update-avatar)
- [Profile](#profile)
  - [Show Profile](#show-profile)
  - [Update Profile](#update-profile)
- [Password](#profile)
  - [Forgot Password](#forgot-password)
  - [Reset Password](#reset-password)
- [Providers](#providers)
  - [Days](#days-providers)
  - [Month](#month-providers)
  - [List All Providers](#list-all-providers)

---

# Session

## **Create** Session

Create a session.

* **URL**

  `/sessions`

* **Method:**

  `POST`

* **URL Params**

   **Required:**

    None

* **Data Params**

    ```json
    {
      "email": "johndoe@example.com",
      "password": "123456"
    }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```json
    {
      "user": {
        "id": "f11a9a79-4458-4701-b9af-1f01ce047a02",
        "name": "John Doe",
        "email": "johndoe@example.com",
        "avatar": "68a1dcb377ff3f9642de-E58C073E-A75D-4A58-B96E-D6495C5AB1D8.jpg",
        "created_at": "2020-05-09T22:47:42.775Z",
        "updated_at": "2020-05-24T07:10:13.168Z",
        "avatar_url": "http://localhost:3333/files/68a1dcb377ff3f9642de-E58C073E-A75D-4A58-B96E-D6495C5AB1D8.jpg"
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTIwNjY0NTcsImV4cCI6MTU5MjE1Mjg1Nywic3ViIjoiZjExYTlhNzktNDQ1OC00NzAxLWI5YWYtMWYwMWNlMDQ3YTAyIn0.eMRC_cB-qGyRXOHYnidABU4S7ZgY-itMOfveiHlQcSE"
    }
    ```

---

# Users

## **Create** User

Create a user.

* **URL**

  `/users`

* **Method:**

  `POST`

* **URL Params**

   **Required:**

    None

* **Data Params**

    ```json
    {
      "name": "John Doe",
      "email": "johndow@example.com",
      "password": "123456"
    }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```json
    {
      "name": "John Doe",
      "email": "johndow@example.com",
      "id": "b3107cf3-1d7a-4cdc-8b23-19a3756a63b0",
      "created_at": "2020-05-14T12:38:24.811Z",
      "updated_at": "2020-05-14T12:38:24.811Z",
      "avatar_url": null
    }
    ```

---

# Avatar

## **Update** Avatar

Update avatar user.

* **URL**

  `/users/avatar`

* **Method:**

  `PATCH`

* **URL Params**

   **Required:**

    None

* **Data Params**

    `Multipart Form`

    avatar - image

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```json
    {
      "id": "f11a9a79-4458-4701-b9af-1f01ce047a02",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "avatar": "3b9c5a02a8061d6e7c99-profile-pic.jpg",
      "created_at": "2020-05-09T22:47:42.775Z",
      "updated_at": "2020-06-14T19:23:44.570Z",
      "avatar_url": "http://localhost:3333/files/3b9c5a02a8061d6e7c99-profile-pic.jpg"
    }
    ```

---

# Profile

## **Show** Profile

Show user profile

* **URL**

  `/profile`

* **Method:**

  `GET`

* **URL Params**

   **Required:**

    None

* **Data Params**

    None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```json
    {
      "id": "f11a9a79-4458-4701-b9af-1f01ce047a02",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "avatar": "3b9c5a02a8061d6e7c99-profile-pic.jpg",
      "created_at": "2020-05-09T22:47:42.775Z",
      "updated_at": "2020-06-14T19:23:44.570Z",
      "avatar_url": "http://localhost:3333/files/3b9c5a02a8061d6e7c99-profile-pic.jpg"
    }
    ```

---

## **Update** Profile

Update profile user.

* **URL**

  `/profile`

* **Method:**

  `PUT`

* **URL Params**

   **Required:**

    None

* **Data Params**

    ```json
    {
      "name": "Henrique Tavares",
      "email": "ihenrits@gmail.com",
      "old_password": "12345",
      "password": "12345"
    }
    ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```json
    {
      "id": "f11a9a79-4458-4701-b9af-1f01ce047a02",
      "name": "Henrique Tavares",
      "email": "ihenrits@gmail.com",
      "avatar": "0937bcd4ec3684cb1ba1-IMG_7226.jpg",
      "created_at": "2020-05-09T22:47:42.775Z",
      "updated_at": "2020-05-23T22:31:29.201Z",
      "avatar_url": "http://localhost:3333/files/0937bcd4ec3684cb1ba1-IMG_7226.jpg"
    }
    ```

---

# Password

## **Forgot** Password

Recover User Password.

* **URL**

  `/password/forgot`

* **Method:**

  `POST`

* **URL Params**

   **Required:**

    None

* **Data Params**

    ```json
    {
      "email": "johndoe@example.com"
    }
   ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    No Content

---

## **Reset** Password

Reset User Password.

* **URL**

  `/password/reset`

* **Method:**

  `POST`

* **URL Params**

   **Required:**

    None

* **Data Params**

    ```json
    {
     "password": "123123",
      "token": "a525c234-5b1f-405a-a43d-f97720625b43"
    }
   ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    No Content

---

# Providers

## **Days** Providers

List days available from provider.

* **URL**

  `/providers/:user_id/day-availability`

* **Method:**

  `GET`

* **URL Params**

   **Required:**

    None

* **Data Params**

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```json
    [
      {
        "hour": 8,
        "available": false
      },
      {
        "hour": 9,
        "available": false
      },
      {
        "hour": 10,
        "available": false
      },
      {
        "hour": 11,
        "available": false
      },
      {
        "hour": 12,
        "available": false
      },
      {
        "hour": 13,
        "available": false
      },
      {
        "hour": 14,
        "available": false
      },
      {
        "hour": 15,
        "available": false
      },
      {
        "hour": 16,
        "available": false
      },
      {
        "hour": 17,
        "available": false
      }
    ]
    ```

---

## **Month** Providers

List days available in month from provider.

* **URL**

  `/providers/:user_id/month-availability`

* **Method:**

  `GET`

* **URL Params**

   **Required:**

    None

* **Data Params**

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```json
    [
      {
        "day": 1,
        "available": false
      },
      {
        "day": 2,
        "available": false
      },
      {
        "day": 3,
        "available": false
      },
      {
        "day": 4,
        "available": false
      },
      {
        "day": 5,
        "available": false
      },
      {
        "day": 6,
        "available": false
      },
      {
        "day": 7,
        "available": false
      },
      {
        "day": 8,
        "available": false
      },
      {
        "day": 9,
        "available": false
      },
      {
        "day": 10,
        "available": false
      },
      {
        "day": 11,
        "available": false
      },
      {
        "day": 12,
        "available": false
      },
      {
        "day": 13,
        "available": false
      },
      {
        "day": 14,
        "available": false
      },
      {
        "day": 15,
        "available": false
      },
      {
        "day": 16,
        "available": false
      },
      {
        "day": 17,
        "available": false
      },
      {
        "day": 18,
        "available": false
      },
      {
        "day": 19,
        "available": false
      },
      {
        "day": 20,
        "available": false
      },
      {
        "day": 21,
        "available": false
      },
      {
        "day": 22,
        "available": true
      },
      {
        "day": 23,
        "available": true
      },
      {
        "day": 24,
        "available": true
      },
      {
        "day": 25,
        "available": true
      },
      {
        "day": 26,
        "available": true
      },
      {
        "day": 27,
        "available": true
      },
      {
        "day": 28,
        "available": true
      },
      {
        "day": 29,
        "available": true
      },
      {
        "day": 30,
        "available": true
      },
      {
        "day": 31,
        "available": true
      }
    ]
    ```

---

## **List All** Providers

List all providers

* **URL**

  `/providers`

* **Method:**

  `GET`

* **URL Params**

   **Required:**

    None

* **Data Params**

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**

    ```json
    [
      {
        "id": "76e90736-7667-436b-a8b5-020eeaf5adc7",
        "name": "Barber One",
        "email": "barberone@example.com",
        "avatar": null,
        "created_at": "2020-05-14T12:35:56.665Z",
        "updated_at": "2020-05-14T12:35:56.665Z",
        "avatar_url": null
      },
      {
        "id": "c0c44550-77c9-432b-b952-aca5a5664698",
        "name": "Barber Two",
        "email": "barbertwo@example.com",
        "avatar": "9f276402341753997fc5-2254731.jpeg",
        "created_at": "2020-05-10T03:52:30.114Z",
        "updated_at": "2020-05-24T03:12:28.634Z",
        "avatar_url": "http://localhost:3333/files/9f276402341753997fc5-2254731.jpeg"
      }
    ]
    ```

---

# :rocket: Technologies

- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://nodemon.io/)
- [typeorm](https://typeorm.io/#/)
- [ts-node-dev](https://github.com/whitecolor/ts-node-dev)
- [tsyringe](https://github.com/microsoft/tsyringe)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js#readme)
- [celebrate](https://github.com/arb/celebrate)
- [class-transformer](https://github.com/typestack/class-transformer)
- [cors](https://github.com/expressjs/cors)
- [date-fns](https://date-fns.org/)
- [express-async-errors](https://github.com/davidbanham/express-async-errors#readme)
- [express-handlebars](https://github.com/ericf/express-handlebars)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [ioredis](https://github.com/luin/ioredis)
- [nodemailer](https://nodemailer.com/about/)
- [mongodb](https://www.mongodb.com/)
- [pg](https://github.com/brianc/node-postgres)
- [redis](https://redis.io/)
- [rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example)
- [reflect-metadata](https://github.com/rbuckton/reflect-metadata)
- [sequelize](https://sequelize.org/)
- [uuidv4](https://github.com/thenativeweb/uuidv4#readme)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

---

# :computer: Author

<table>
  <tr>
    <td align="center">
      <a href="http://github.com/tavareshenrique/">
        <img src="https://avatars1.githubusercontent.com/u/27022914?v=4" width="100px;" alt="Henrique Tavares"/>
        <br />
        <sub>
          <b>Henrique Tavares</b>
        </sub>
       </a>
       <br />
       <a href="https://www.linkedin.com/in/tavareshenrique/" title="Linkedin">@tavareshenrique</a>
       <br />
       <a href="https://github.com/tavareshenrique/fastfeet-api/commits?author=tavareshenrique" title="Code">💻</a>
    </td>
  </tr>
</table>

---

# :memo: License

This project is licensed under the MIT license - see the archive [LICENSE](LICENSE.md) for details.
