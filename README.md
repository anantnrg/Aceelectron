# Aceelectron
![Electron.js](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![ ](https://github.com/anantnrg/Aceelectron/blob/main/readme/aceelectron_desktop.png?raw=true)

**Aceelectron** is an awesome Electron.js :electron: boilerplate. It is designed to accelerate your Electron.js app develeopment. It includes by default, a customized window, titlebar, rounded corners, a transparent background and Hot Reloading. It is built so that you can get a head start into Electron.js and don't have to spend time creating a base environment for your project.

Made with :heart: by Anant Narayan. Check out my [other projects](https://github.com/anantnrg)

<!-- TOC -->
## Table Of Contents
- [Aceelectron](#Aceelectron)
   - [Usage](#Usage)
   - [Features](#Features)
   - [TODO](#TODO)
   - [Known Bugs](#Known-Bugs)
   

<!-- /TOC -->

## Usage
To use Aceelectron, you have to clone this repository to your local machine. To do that, you have to have Git installed on your machine. Then run the following command: </br>
```
git clone https://github.com/anantnrg/aceelectron myproj
```
Here ```myproj``` is the name of your Electron.js project.

Next, you have to install the required packages to run Electron.js. They have to be installed using Node.js. You haven't installed it on your machine, then go to the [Node.js Website](https://nodejs.org) and download either the LTS release or latest stable release. Then install it by running the .exe file. After Node.js has been installed, run
</br>
```
cd myproj
```
to change directory into your downloaded folder, then run
</br>
```
npm install
```
to install the dependencies and 
</br>
```
npm install electron electron-reload
```
to install Electron.js and the electron-reload package. The electron-reload package is what enables the Hot Reloading i.e., when you change the HTML, CSS or ```renderer.js```, your app will be reloaded automatically. Note that this does not reload the app if you make any changes to the ```main.js``` file.

Then you can run the app by entering
</br>
```
npm start
```
If everything works, then a window will open up like this 
</br>

![ ](https://github.com/anantnrg/Aceelectron/blob/main/readme/aceelectron_dev_final.png?raw=true)

</br> Congratulations! Now you can build upon this boilerplate code and make your awesome app using Electron.js.

## Features

* Custom Window
* Customized Window Frame
* Rounded Window Corners
* Transparent/Translucent Window
* Working Traffic Light Buttons
* HOT RELOADING!


## TODO
:x:  Create Node.js package installable via npm
</br>

:x: Add electron_builder or electron_forge packager

:heavy_check_mark:  Add Hot Reloading
</br>

:heavy_check_mark:  Transparent/Translucent Window


## Known Bugs
:x: The position of titlename label on the titlebar changes when padding or margin is applied to another component in the body.
