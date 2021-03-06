import * as assert from 'power-assert'
import {UserController} from '../../src/controllers'
import {Token} from '../../src/services'
import {chance, Run, Support} from '../assets'

describe('Token#get', () => {
  it('normalUser', (done) => {
    Run(async () => {
      const normalUser = await Support.getNormalUser()
      const account = normalUser.username ? normalUser.username : normalUser.email
      const token = await Token.get(normalUser.id, normalUser.client)
      assert.equal(token, normalUser.token)
    }, done)
  })
})
