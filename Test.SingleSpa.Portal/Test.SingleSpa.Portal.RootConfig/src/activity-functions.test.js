import * as isActive from './activity-functions'

describe('activity functions', () => {
  it('verifies that the navbar is always active', () => {
    expect(isActive.react_instagram(location)).toBe(true)
  })
})