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

Below is how the app will look like

<img width="378" alt="Screenshot 2022-10-25 at 1 12 50 PM" src="https://user-images.githubusercontent.com/31704596/197714070-07a598cc-bb0a-48e6-8210-c3ae8ab5f386.png">
<img width="385" alt="Screenshot 2022-10-25 at 1 13 12 PM" src="https://user-images.githubusercontent.com/31704596/197714088-0ea2b03c-f1dd-4539-8587-48adb19ccb3c.png">
<img width="385" alt="Screenshot 2022-10-25 at 1 13 32 PM" src="https://user-images.githubusercontent.com/31704596/197714097-f9406530-2dce-44a3-9ced-727fcd9aee29.png">
<img width="386" alt="Screenshot 2022-10-25 at 1 16 59 PM" src="https://user-images.githubusercontent.com/31704596/197714488-a0d61aca-baf3-4cd8-9aef-2af18d1be132.png">


https://user-images.githubusercontent.com/31704596/198197078-282f8a6a-4cef-47dd-83c9-ee80679eabe4.mp4

https://user-images.githubusercontent.com/31704596/198197179-e548e6af-12e5-4ab8-8491-81c1d7e2ddcc.mp4

https://user-images.githubusercontent.com/31704596/198957421-7986f8d5-1cb9-4ba7-9dab-b057b79f052f.mp4

https://user-images.githubusercontent.com/31704596/199653507-378e7557-a181-4759-9dd5-8712be41ce47.mp4

https://user-images.githubusercontent.com/31704596/199653577-0a0e5917-f1f4-422a-9772-d4ddcce4211f.mp4



https://user-images.githubusercontent.com/31704596/200994836-bc8ed504-d5dc-4970-b722-423d2150318f.mp4


