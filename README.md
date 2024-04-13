<h1 align="center">
  BestProduct - BestDeveloper
</h1>

<p align="center">
  BestProduct helps developers to build successful applications, available on iOS, Android, Windows, macOS, BestOS, Linux and all the Unix like operating systems with the ultimate power of NodeJS and JavaScript in your hands.<br>
</p>

<p align="center">
<strong>Built with:</strong>
</p>

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Electron.js](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white)
![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![Raspberry Pi](https://img.shields.io/badge/-RaspberryPi-C51A4A?style=for-the-badge&logo=Raspberry-Pi)


## 💻 Get Started

> [!TIP]
> First, create a full-stack project in your **BestDeveloper Portal**, using JavaScript as the default language. 

> **Clone this repository**: <code>git clone https://github.com/BestMat/bestproduct-bestdeveloper.git</code>

> **Goto the directory**: <code>cd bestproduct-bestdeveloper</code>

### Use the tools that you ❤️
[![My Skills](https://skillicons.dev/icons?i=javascript,react,vue,angular,ts,electron,python,cpp,tailwind,sass,webpack,babel,next,threejs,bootstrap&perline=5)](https://skillicons.dev)

Install all your favourite tools in NodeJS by **NPM**. For React and other frameworks, use the CDN or Node Dependency.
> **Install the needed dependencies**: <code>npm install</code>        

## 💻 Edit your App
Edit your `index.html` file and add your CSS and JavaScript Files in the `src` directory.

### Testing product for desktop (Windows, macOS, Linux) - development build

In your server.js(Node file), call the function startDevServer, and give the first parameter as "desktop", and the second parameter, as a function. Inside this anonymous function, type what do you want to do, when the application has started.


```javascript
bestproduct.startDevServer("desktop", function(){ // you can also use ES6 arrow functions
   console.log("My application has started!");
});
```

Now run the <code>server.js</code> file - <code>node server.js</code>


***

### Testing product for desktop (Windows, macOS, Linux) - production build

In your server.js(Node file), call the function startDevServer, and give the first parameter as "desktop", and the second parameter, as a function. Inside this anonymous function, type what do you want to do, when the application has started, for the third parameter, type `windows` or `mac` or `linux` or `bestos`


```javascript
bestproduct.startProductionServer("desktop","windows/mac/linux/bestos", function(){ // you can also use ES6 arrow functions
   console.log("My application has started!");
});
```

Now run the <code>server.js</code> file - <code>node server.js</code>

## Product config for `bestproduct.config.json`:

The `bestproduct.config.json` is the main configuration file. Data from config, is used to configure the application.

<h4>1. applicationName key</h4>

This is a mandatory field. Enter your application as the value of this key. The defualt value is **"Test"**.

<h4>2. version key</h4>

This is also a mandatory field. It creates a package.json file (Node package). It is your version control system your application.

<h4>3. packages key</h4>

This is also a mandatory field. It imports the given dependencies. If there are no packages to import, leave it as empty. **Do not keep it as null or undefined or false**

<h4>4. styles and script keys</h4>
This is mandatory. Enter your script and the style directory respectively.
 
 <h4>5. buildType</h4>
 This is mandatory. When you are developing the product, please change the value to <b>development</b>. When you are going to publish the app to Google Play Store or App Store or the operating system's defualt store app, change it to "production".
 
 <h4>6. react-jsx</h4>
 <p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,redux,remix" />
  </a>
</p>
 This is mandatory. If your product is using **React** - The framework for building UI websites by Facebook, or using JSX set this as to <code>true</code>, and add a property in the packages key as react, babel, and the needed packages for a development build of React.
 
 <h4>typescript</h4>
  <p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=ts" />
  </a>
</p>
 This is mandatory. If your product is using **TypeScript** - the strict type language for JavaScript, set this as to <code>true</code>

 ---
