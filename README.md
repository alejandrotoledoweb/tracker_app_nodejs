# tracker_app_nodejs

## RestAPI for a Application to Tracker_App

This app handles the back end of the application (tracker_app), allowing the front end to create users and then for each user creates their own tracking exercise with description, duration and a date.

## Built With

- NodeJS
- Express
- mongoose (mongoDB)

## End points

### Users

GET : `/users`

GET : `/users/:id`

POST : `/users/add`

### Exercises

GET : `/exercises`

GET : `/exercises/:id`

POST : `/exercises/add`

DELETE : `/exercises/:id`

PUT : `/exercises/:id`

## Getting Started

To get a local copy up and follow these simple example steps.

### Prerequisites

- Local Machine installed `node` and `npm`
- A code editor as Visual Studio, Sublime,etc.

### Setup

Please make a local copy of this repo by typing this command on your terminal.

`git clone https://github.com/alejandrotoledoweb/tracker_app_nodejs.git`

Then, go to the folder created with this command:

`cd tracker_app_nodejs`

`npm install` to install all necessary dependencies.

`npm run start` to start the server on the local machine.

## Author

👤 **Alejandro Toledo**

- GitHub: [@alejandrotoledoweb](https://github.com/alejandrotoledoweb)
- Twitter: [@alejot](https://twitter.com/alejot)
- LinkedIn: [Alejandro Toledo](https://www.linkedin.com/in/alejandro-toledo-freire/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/alejandrotoledoweb/tracker_app_nodejs/issues).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.
