# ![ ](https://github.com/anantnrg/Aceelectron/blob/main/src/icons/aceelectron.ico) Aceelectron 
![Electron.js](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

![ ](https://github.com/anantnrg/Aceelectron/blob/main/readme/aceelectron_mss.png?raw=true)

**Aceelectron** (pronounced *eɪs-ɪˈlɛktrɒn*) is an awesome Electron.js :electron:  boilerplate. It is designed to accelerate your Electron.js app develeopment. It includes by default, a customized window, titlebar, rounded corners, a transparent background, a custom icon and Hot Reloading. It is built so that you can get a head start into Electron.js and don't have to spend time creating a base environment for your project.

Made with :heart: by Anant Narayan. Check out my [other projects](https://github.com/anantnrg)

<!-- TOC -->
## Table Of Contents
- [Aceelectron](#Aceelectron)
   - [Getting Started](#Getting-Started)
      - [Usage](#Usage)
   - [Features](#Features)
   - [TODO](#TODO)
   - [Known Bugs](#Known-Bugs)
   - [Contributing](#Contributing)
   - [Built With](#Built-With)
   - [Authors](#Authors)
   - [License](#License)
   

<!-- /TOC -->

## Getting Started
The following instructons will help you to use this boilerplate for your own projects.

### Prerequisites
To use this boilerplate you have to have the following packages installed on your machine.
* Git CLI - [Windows](https://git-scm.com/download/win), [Mac OS](https://git-scm.com/download/mac), [Linux](https://git-scm.com/download/linux)
* NodeJS - [Download](https://nodejs.org)


### Usage
To use Aceelectron, you have to clone this repository to your local machine. To do that, run the following command: </br>
```bash
git clone https://github.com/anantnrg/aceelectron <myproj>
```
Here ```myproj``` is the name of your Electron.js project.

Next, you have to install the required packages to run Electron.js. They have to be installed using Node.js. To install these packages run:
</br>
```bas
cd myproj
```
to change directory into your downloaded folder, then run
</br>
```bas
npm install
```
to install the dependencies and 
</br>
```bash
npm install electron electron-reload
```
to install Electron.js and the electron-reload package. The electron-reload package is what enables the Hot Reloading i.e., when you change the HTML, CSS or ```renderer.js``` file, your app will be reloaded automatically. Note that this does not reload the app if you make any changes to the ```main.js``` file.

Then you can run the app by entering
</br>
```bash
npm start
```
If everything works, then a window will open up like this 
</br>

![ ](https://github.com/anantnrg/Aceelectron/blob/main/readme/aceelectron_result.png?raw=true)

</br> Congratulations! Now you can build upon this boilerplate code and make your awesome app using Electron.js.

## Features

* Custom Window
* Customized Window Frame
* Rounded Window Corners
* Transparent/Translucent Window
* Working Traffic Light Buttons
* Custom Icon
* HOT RELOADING!


## TODO


:heavy_check_mark:  Add Hot Reloading
</br>

:heavy_check_mark:  Add custom icon
</br>

:heavy_check_mark:  Transparent/Translucent Window
</br>

:black_square_button:  Create Node.js package installable via npm
</br>

:black_square_button: Add electron_builder or electron_forge packager


## Known Bugs
:heavy_check_mark: The position of the icon on the titlebar changes when padding or margin is applied to another component in the body.


## Built With
[Electron.js](https://electronjs.org) - Native app development tool based on Node.js and JavaScript
</br>

[Figma](https://figma.com) - Icon creation
</br>

[Visual Studio Code](https://code.visualstudio.com) - Code Editor for development


## Contributing
If you find a bug or issue please create and Issue so that myself or the community can fix it.If you want to just make this project even more awesome, feel free to create a Pull Request with your changes 🙂.

## Authors
* Anant Narayan - *Initial Work* - [Website](https://anantnrg.github.io), [GitHub](https://github.com/anantnrg)


## License
This project is licensed under the Apache-2.0 licence - see the [LICENSE.md](https://github.com/anantnrg/Aceelectron/blob/main/LICENSE) file for details.
