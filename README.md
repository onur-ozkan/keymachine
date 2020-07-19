<div align="center">

<img src="https://user-images.githubusercontent.com/39852038/55247335-649b2680-5258-11e9-81be-d05eb195295d.png" width="140" />

# Keymachine
Zero dependency, lightweight and simple key generator for the JS world
<div align="center">

<img src="https://img.shields.io/github/license/ozkanonur/keymachine.svg?color=212121&label=LICENSE&style=for-the-badge"/>

</div>

</div>

## Usage Fields

Keymachine works very well in cases such as automatically assigned Email passwords, private invitation codes, verification keys, automatic link creation, etc.

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
   length: 24
   possibility: 'abcdefghijklmnopqrstuvwxyz0123456789'
   case: 'mixed'
 */

 import { keymachine } from 'keymachine';

 /* with defaults */
 let randomKey = keymachine();

 /* with custom configurations */
 let randomKey = keymachine({ possibility: 'KJAUZNSO27AJSND', length: 18, case: 'upper' });

```

</div>
