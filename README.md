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

---





<h3>BestProduct for mobile (beta)</h3>
...
