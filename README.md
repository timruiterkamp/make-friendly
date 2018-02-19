# Make the web friendly!

The **Make-friendly** package allows you to replace swear words with censored words by replacing characters.

## How to install

To install make-friendly use:
`npm install make-friendly --save-dev`

## How to use

To use the **make-friendly** package use:

```javascript
require("make-friendly");
```

### Vowel

The vowel method uses `(value, character)` and returns a `string`.
To use the vowel replacement use:

```javascript
var mf = require("make-friendly");
mf("butt"); // returns 'b*tt'
mf("butt", "@"); // returns 'b@tt'
```

### Inner

The inner method uses `(value, character)` and returns a `string`.
To use the inner replacement use:

```javascript
var mf = require("make-friendly");
mf.inner("butt"); // returns 'b**t'
mf.inner("butt", "$"); // returns 'b$$t'
```

### grawlix

The grawlix method uses `(value, pattern)` and returns a `string`.
To use the inner replacement use:

```javascript
var mf = require("make-friendly");
mf.grawlix("butt"); // returns '@#$%'
mf.grawlix("butt", "text"); // returns 'text'
mf.grawlix(5); // returns '@#$%!'
```

## Testing

The **make-friendly** uses [xo](https://www.npmjs.com/package/xo) to enforce readable code.
Beside the XO package, we also use [Mocha](https://www.npmjs.com/package/mocha) for testing.
To run the XO and Mocha package simply use `npm test`.

## License

[MIT License](https://github.com/timruiterkamp/make-friendly/blob/master/License.txt)
