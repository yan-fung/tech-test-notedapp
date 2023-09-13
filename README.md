<h1 align="center">
# 📱🎤📓 Noted App - Technical Test
</h1>

## Introduction 
A technical test as part of an interview for Digital Workroom.

My task involved building a React web application that allows users to subscribe to the newsletter by simply entering their email addresses. Valid email addresses will be securely stored in the Firestore database. The application was built with React and JSX alongside Jest and React Testing library for testing purposes. Sass is employed to style the entire application, ensuring a visually appealing presentation across all devices.

<img width="220" height="425" alt="Screenshot" src="https://github.com/yan-fung/tech-test-notedapp/assets/106375522/f8875d7b-6380-4616-880f-1330b181f100"> ![ezgif com-video-to-gif](https://github.com/yan-fung/tech-test-notedapp/assets/106375522/1c5ea988-c6ee-421e-b3ce-7151039a0328)


## Quick Start and Commands

1. Clone the repo:

```bash
gh repo clone yan-fung/tech-test-notedapp
```

2. Install the packages locally:

```bash
npm install
```

3. Create an .env file in the root directory of the project. Store the Firebase API key, auth domain, project ID, storage bucket, messaging sender ID, and app ID as environment variables. See the example below:

```bash
REACT_APP_API_KEY=XXXXXXXXXXXXX
REACT_APP_AUTH_DOMAIN=XXXXXXXXXXXXX
REACT_APP_PROJECT_ID=XXXXXXXXXXXXX
REACT_APP_STORAGE_BUCKET=XXXXXXXXXXXXX
REACT_APP_MESSAGING-SENDER_ID=XXXXXXXXXXXXX
REACT_APP_APP_ID=XXXXXXXXXXXXX
```

4. Run the development server for the app.

```bash
npm start
```

5. Test the code in tests folder. 

```bash
npm test
```

## Technology
- [React](https://legacy.reactjs.org/docs/getting-started.html) is a JavaScript library for building user interfaces, and [React Testing library](https://testing-library.com/docs/react-testing-library/intro/) is a testing utility for testing React components. Combining them allowing to create interactive and easily testable user interfaces.
- [Firestore](https://firebase.google.com/docs/firestore) is a flexible and scalable NoSQL cloud database provided by Firebase. It enables storing and syncing data across clients and backend services, making it ideal for real-time applications.
- [Sass](https://sass-lang.com/install/) is a popular preprocessor scripting language used to enhance CSS. It provides features like variables, mixins, and nested rules, simplifying the process of writing and managing styles for applications.
  
## Improvements
If I would have more time, I would like to add the following features to my application:
- Making the application more repsonsive to different sizes of device.
- Adding more tests to ensure the application's functionality and stability.

## Authors
🧑‍🚀 Yan Fung
- GitHub [@yan-fung](https://github.com/yan-fung)
- LinkedIn [@yan-fung](https://www.linkedin.com/in/yan-fung-4082401a4/)
