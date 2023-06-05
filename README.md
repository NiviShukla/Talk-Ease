# Talk-Ease
This is a full-stack chat application project that incorporates real-time messaging functionality using Socket.IO. The app supports both one-on-one and group chatting features, providing a seamless communication experience.

## Features

- Real-time messaging: The app allows users to send and receive messages instantly, without the need to refresh the page.
- One-on-one chat: Users can engage in private conversations with other individuals.
- Group chat: Users can participate in group conversations with multiple participants.
- User authentication: The app includes a secure authentication system to ensure that only authorized users can access the chat functionality.
- User presence indicators: Users can see the online/offline status of other participants in the chat.
- Message history: The app stores message history, enabling users to view previous conversations.
- Notifications: Users receive notifications for new messages, ensuring they never miss any important communication.

## Technologies Used

The following technologies and frameworks were used to build this chat app:

- **Node.js**: A JavaScript runtime environment used on the server-side to execute JavaScript code.
- **Express.js**: A web application framework for Node.js used to build the backend server.
- **Socket.IO**: A library that enables real-time, bidirectional communication between the server and the clients using WebSocket protocol.
- **React**: A JavaScript library used for building user interfaces.
- **Redux**: A predictable state container for managing the application's state.
- **MongoDB**: A NoSQL database used to store user information and chat history.
- **Mongoose**: An object data modeling (ODM) library for MongoDB and Node.js, used to interact with the database.
- **HTML/CSS**: The standard markup language and styling sheet used for designing and structuring the frontend.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org).
- MongoDB: [Download and install MongoDB](https://www.mongodb.com/try/download/community).

## Getting Started

1. Clone the repository:
 ```bash
 git clone https://github.com/NiviShukla/Talk-Ease.git
```
2. Install the dependencies:

```bash
npm install 
``` 

3. Create a .env file in the root directory and specify the following environment variables:

```bash 
PORT=3000
```

4. Start the server:

```bash
npm start
```
5. Navigate to http://localhost:3000 in your web browser.

## Contributing
Contributions are welcome! If you want to contribute to this project, please follow these steps:

1. Fork this repository.

2. Create a new branch:
```
git checkout -b feature/your-feature-name
```
3. Make your changes and commit them:
```
git commit -m "Add your commit message here"
```
4. Push to the branch:
```
git push origin feature/your-feature-name
```
Replace your-feature-name with a descriptive name for your branch.


## Acknowledgements
We would like to express our gratitude to the following resources and projects that inspired and helped us in building this chat app:

Socket.IO documentation: https://socket.io/docs/

React documentation: https://reactjs.org/docs/

Express.js documentation: https://expressjs.com/

Mongoose documentation: https://mongoosejs.com/docs/

MongoDB documentation: https://docs.mongodb.com/

## Contact
If you have any questions, suggestions, or feedback, please feel free to reach out to us at [insert email or contact information]. We appreciate your interest and support!

Happy chatting!
