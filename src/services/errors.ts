'use strict'

export const Errors = {
  1: 'Unknown error',
  2: 'Resource not found',
  3: 'Timeout',
  4: 'Incomplete arguments',
  5: 'Invalid argument',

  // validate error
  1000: 'Invalid username',
  1001: 'Invalid email',
  1002: 'Invalid phone',
  1003: 'Invalid full name',
  1004: 'Invalid sex',
  1005: 'Invalid password',

  // duplicate user
  1100: 'Duplicate user',
  1101: 'Error creating user',

  // signin
  1200: 'No such user',
  1201: 'Invalid account type',
  1202: 'Cannot detect account type',
  1203: 'Password not match',

  // delete user
  1300: 'No such user',
  1301: 'No permission',

  // authorization
  1400: 'Invalid authorization string',
  1401: 'Authorization failed',
  1402: 'Need Authorization',
}
