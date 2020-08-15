'use strict';

import chai from 'chai';
import symmetricDifference from './index.js';
const { expect } = chai;

describe('symmetricDifference', () => {
  describe('given two arrays of primitives', () => {
    it('returns the symmetric difference', () => {
      expect(symmetricDifference(
        ['hello', 'world', 'foo', 'foo'],
        ['hello', 'world', 'foo', 'bar']
      )).to.have.members(['foo', 'bar']);

      expect(symmetricDifference(
        ['hello', 'world', 'foo', 'foo', 'foo'],
        ['hello', 'world', 'foo', 'bar']
      )).to.have.members(['foo', 'foo', 'bar']);

      expect(symmetricDifference(
        ['foo'],
        ['foo', 'foo', 'foo']
      )).to.have.members(['foo', 'foo']);
    });
  });
});