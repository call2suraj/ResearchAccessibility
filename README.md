# ResearchAccessibility
### Project Structure

```
/
├── android						Android Native code
├── ios							iOS Native Code
├── shared
│   ├── redux					Applications Logic
│   │   ├── constants
│   │   ├── actions
│   │   ├── api
│   │   ├── reducers
│   │   ├── store
│   │   └── thunk
│   └── utilities
│   ├── services
│   │   ├── core				Core Services - API (fetch/axios), storage
│   │   │  ├── API
│   │   │  └── Storage
│   │   ├── home
│   │   └── search
├── src
│   ├── config					Global Configuration
│   ├── constants				Screen names and ids, Localization
│   ├── navigators				Router, Navigation
│   ├── view					UI compoments
│   │   ├── elements				Custom elements
│   │   ├── assets
│   │   ├── screens
│   │   ├── styles				Typography
│   │   └── widgets				Custom components
│   └── utilities
├── __tests__					Unit Tests
│   ├── presentation
│   └── redux
├── .babelrc
├── .gitignore
├── .travis.yml					Travis CI
├── tsconfig.json				TypeScript Configuration
├── tslint.js					TSLint configuration - extending AirBnb
├── tsconfig.json
├── app.json
├── index.js					Application Entry point
├── package.json
└── README.md
```

`shared`
Everything related to application business logic. The redux store.

`src`
Presentation layer for the app - screens, styles, images, icons etc.

### Getting Started

Make sure node version installed is `>=12.x.x`. Then install using yarn (or npm):
```
yarn install
```

Start the Metro Bundler:
```
yarn start
```

###### iOS

One time. Move to `ios` folder and install pods:

```
cd ios && pod install
```

Launch application from XCode (`Command + R`) Or launch from Terminal:

```
yarn ios
# runs the following command. change device name here
# `npx react-native run-ios --simulator='iPhone 11'`
```

###### Android

Start an Android Simulator from:
```
Android Studio > Tools > AVD Manager > Run any device
```

Similarly, run from Android Studio itself Or from Terminal:
```
yarn android
# runs the following command
# react-native run-android --variant=Debug
```

### Commands

|  | Remark |
|---|---|
| `yarn start` | Starts metro bundler |
| `yarn ios` | Starts iOS app. Start metro bundler first |
| `yarn android` | Starts Android app. Start metro bundler and Android emulator first |
| `yarn lint` | linting |
| `yarn lint:fix` | tries to fix linting issues automatically |
| `yarn build:android:debug` | Android debug build |
| `yarn build:android:release` | Android release build |

 This app is using React Native and TypeScript with most commoly needed tools already setup. Just yarn install to get started

<img width="382" alt="Screenshot 2022-10-13 at 6 28 03 PM" src="https://user-images.githubusercontent.com/31704596/195606753-14302532-6b4c-4e39-9a10-94a513f76bf3.png">
<img width="370" alt="Screenshot 2022-10-13 at 6 28 14 PM" src="https://user-images.githubusercontent.com/31704596/195606767-676fe846-b92d-418e-918c-cd174258ac08.png">
<img width="381" alt="Screenshot 2022-10-13 at 6 45 48 PM" src="https://user-images.githubusercontent.com/31704596/195606783-73630660-7230-4400-b467-7ffc97e9d82a.png">
