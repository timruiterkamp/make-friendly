'use strict';

const repeat = require('repeat-string');

/* Expose `vowel` as default function: vowel = require('this package'). */
module.exports = vowel;

/* Add other functions on `vowel`: inner = require('this package').inner. */
vowel.vowel = vowel;
vowel.inner = inner;
vowel.grawlix = grawlix;

const floor = Math.floor;
const defaultCharacter = '*';
const grawlixPattern = '@#$%!&?';
const vowels = /[aeiouy]/g;

/* `butt` > `b*tt` */
function vowel(value, character) {
	return value.replace(vowels, character || defaultCharacter);
}

/* `butt` > `b**t` */
function inner(value, character) {
	if (value.length <= 2) {
		return value;
	}

	return value.charAt(0) +
    repeat(character || defaultCharacter, value.length - 2) +
    value.charAt(value.length - 1);
}

/* `butt` > `@#$%` */
function grawlix(value, pattern) {
	const chars = pattern || grawlixPattern;
	const length = typeof value === 'number' ? value : value.length;
	const count = chars.length;
	return repeat(chars, floor(length / count)) + chars.slice(0, length % count);
}
