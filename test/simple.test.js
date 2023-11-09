import {OJSPlot} from '../src/ojs-plot.js';
import {assert} from '@open-wc/testing';

suite('simple test', () => {
  test('is defined', () => {
    const el = document.createElement('ojs-plot');
    assert.instanceOf(el, OJSPlot);
  });
});
