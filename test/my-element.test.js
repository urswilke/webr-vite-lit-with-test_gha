/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {OJSPlot} from '../src/ojs-plot.js';
import {assert} from '@open-wc/testing';

suite('my-element', () => {
  test('is defined', () => {
    const el = document.createElement('ojs-plot');
    assert.instanceOf(el, OJSPlot);
  });
});
