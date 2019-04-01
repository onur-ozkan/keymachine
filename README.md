<div align="center">

<img src="https://user-images.githubusercontent.com/39852038/55247335-649b2680-5258-11e9-81be-d05eb195295d.png" width="140" />

# Keymachine
A package plugin for Javascript that generates random keys for you
<div align="center">

<img src="https://img.shields.io/circleci/project/github/ozkanonur/keymachine/master.svg?color=00bfa5&label=.circleci&style=for-the-badge"/>
<img src="https://img.shields.io/travis/com/ozkanonur/keymachine/master.svg?color=00bfa5&label=.travis&style=for-the-badge"/>
<img src="https://img.shields.io/github/license/ozkanonur/keymachine.svg?color=212121&label=LICENSE&style=for-the-badge"/>

</div>

</div>

## Installation

Npm:

```sh
npm install keymachine
```

Yarn:

```sh
yarn add keymachine
```

## Example Usage

<p> With default configurations: </p>

```js

 /*
   Default configurations comes as:
   lenght: 7
   possibility: 'abcdefghijklmnopqrstuvwxyz0123456789'
   case: 'mixed'
 */
    
 const kmachine = require('keymachine');
 let randomKey = kmachine.keymachine();

```

<p> With setting custom configurations: </p>

```js

 const kmachine = require('keymachine');
 
 // You can make strong keys depending on the configurations you make
 kmachine.configuration.lenght = 32;
 kmachine.configuration.possibility = 'anythingYouWant123x*/'
 
 // You can configurate also letter case in keys with 'mixed', 'lower' or 'upper'
 kmachine.configuration.case = 'upper'
 
 let randomKey = kmachine.keymachine();

```

<div align=center>
<img src="https://user-images.githubusercontent.com/39852038/55265797-e1df8f00-528a-11e9-8f3b-28e93e0dcca0.png" width="100" />

#### [The MIT LICENSE](LICENSE.md) Copyright &copy; 2019 Onur ÖZKAN
 
</div>
