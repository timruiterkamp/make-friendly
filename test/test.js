const assert = require('assert');
const mf = require('..');

    it('vowel should be replaced', () => {
      assert.strictEqual(mf('butt'), 'b*tt', 'these booleans are strictly equal');
    });

    it('vowel should be replaced with custom character', () => {
      assert.strictEqual(mf('butt', '@'), 'b@tt', 'these booleans are strictly equal');
    });

    it('vowel should replaces inner characters', () => {
      assert.strictEqual(mf.inner('butt', '@'), 'b@@t', 'these booleans are strictly equal');
    });

    it('vowel should replaces all characters', () => {
      assert.strictEqual(mf.grawlix(5), '@#$%!', 'these booleans are strictly equal');
    });

