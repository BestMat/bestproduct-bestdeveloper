# BestProduct - BestDodger
<h1 align="center">
 <center><img src="https://codeprojects.org/Vv-6CjeqcK83FycQ-qy2NxVKn1FA0MojyShNazJp4Us/BestMat.jpg" width="150" height="100"></center>
  
  BestProduct
</h1>

<p align="center">
  <strong>BestProduct helps developers to build successful applications, available on iOS, Android, Windows, macOS, Linux and all the Unix like operating systems.</strong><br>
</p>

<p align="center">
  <a href="https://www.npmjs.org/package/bestproduct-bestmat">
    <img src="https://img.shields.io/npm/v/bestproduct-bestmat?color=brightgreen&label=NPM%20Package" alt="Current npm package version." />
  </a>
</p>



<h3>Get Started</h3>
Clone this repository  - <code>git clone https://github.com/BestMat/bestproduct-base-code</code>


Goto the directory - <code>cd bestproduct-base-code</code>            
Install the needed dependencies - <code>npm install</code>        



<h3>Editing our application</h3>
Edit your <code>index.html</code> file,
Goto the <code>src</code> directory - <code>cd src</code> (You should add your CSS and JavaScript file here...)

<h3>Testing product for desktop (Windows, macOS, Linux) - development build</h3>

In your server.js(Node file), call the function startDevServer, and give the first parameter as "desktop", and the second parameter, as a function. Inside this anonymous function, type what do you want to do, when the application has started.


```javascript
bestproduct.startDevServer("desktop", function(){ // you can also use ES6 arrow functions
   console.log("My application has started!");
});
```

Now run the <code>server.js</code> file - <code>node server.js</code>


***

<h3>Testing product for desktop (Windows, macOS, Linux) - production build</h3>

In your server.js(Node file), call the function startDevServer, and give the first parameter as "desktop", and the second parameter, as a function. Inside this anonymous function, type what do you want to do, when the application has started, for the third parameter, type `windows` or `mac` or `linux` or `bestos`


```javascript
bestproduct.startProductionServer("desktop","windows/mac/linux/bestos", function(){ // you can also use ES6 arrow functions
   console.log("My application has started!");
});
```

Now run the <code>server.js</code> file - <code>node server.js</code>

<h3>Product config - <code>bestproduct.config.json</code></h3>

The `bestproduct.config.json` is the main configuration file. Data from config, is used to configure the application.

<h4>applicationName key</h4>

This is a mandatory field. Enter your application as the value of this key. The defualt value is **"Test"**.

<h4>version key</h4>

This is also a mandatory field. It creates a package.json file (Node package). It is your version control system your application.

<h4>packages key</h4>

This is also a mandatory field. It importes the given dependencies. If there are no packages to import, leave it as empty. **Do not keep it as null or undefined or false**

<h4>styles and script keys</h4>
This is mandatory. Enter your script and the style directory respectively.
 
 <h4>buildType</h4>
 This is mandatory. When you are developing the product, please change the value to <b>development</b>. When you are going to publish the app to Google play store or App store or BestStore or the operating system's defualt store app, change it to "production".
 
 <h4>react-jsx</h4>
 This is mandatory. If your product is using React - The framework for building UI websites by Facebook, or using JSX set this as to <code>true</code>
 
  <h4>typescript</h4>
 This is mandatory. If your product is TypeScript - the strict type language for JavaScript, set this as to <code>true</code>
