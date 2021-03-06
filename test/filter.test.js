/* global describe, it */

import * as filter from '../src/util/filter'
import assert from 'assert'

describe('greaterThanNumber', () => {
  it('returns an empty array if given an empty array', () => {
    const data = []
    const expected = []
    const filterGreaterThan2 = filter.greaterThanNumber(2)
    assert.deepEqual(expected, filterGreaterThan2(data))
  })
  it('takes an array of numbers and a number and returns an array with numbers greater than the supplied number', () => {
    const data = [1, 2, 3, 4, 5]
    const expected = [3, 4, 5]
    const filterGreaterThan2 = filter.greaterThanNumber(2)
    assert.deepEqual(expected, filterGreaterThan2(data))
  })
})

describe('byYear', () => {
  it('returns only objects that have years that correspond to provided year', () => {
    const data = [
      {
        AcademicPeriod: 2016,
        MoreData: {

        }
      },
      {
        AcademicPeriod: 2016,
        MoreData: {

        }
      },
      {
        AcademicPeriod: 2013,
        MoreData: {

        }
      },
      {
        AcademicPeriod: 2011,
        MoreData: {

        }
      }
    ]
    const expected = [
      {
        AcademicPeriod: 2016,
        MoreData: {

        }
      },
      {
        AcademicPeriod: 2016,
        MoreData: {

        }
      }
    ]
    const filterYear2016 = filter.byYear(2016)
    assert.deepEqual(expected, filterYear2016(data))
  })
})

describe('filterByTerm', () => {
  it('takes an array and a term a and returns a new array with only objects that contain that term, and it only returns the last 15 entries', () => {
    let array = [
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W6', data: ''},
      {year: '2016W5', data: ''},
      {year: '2016W4', data: ''},
      {year: '2016W3', data: ''},
      {year: '2016W2', data: ''}
    ]
    let output = [
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'},
      {year: '2016W1', data: 'hi'}
    ]
    assert.deepEqual(filter.filterByTerm('W1', array), output)
  })
})
