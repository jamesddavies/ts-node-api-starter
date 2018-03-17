process.env.NODE_ENV = 'test'

let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../app')
let should = chai.should()

import schema from './index.schema'

chai.use(chaiHttp)
chai.use(require('chai-json-schema'))

describe('index', () => {
    describe('/GET index', () => {
        it('it should return a JSON object with a message', done => {
            chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.jsonSchema(schema.get)
                done()
            })
        })
    }),
    describe('/POST index', () => {
        it('it should return a JSON object with a message and a number', done => {
            chai.request(server)
            .post('/')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.jsonSchema(schema.post)
                done()
            })
        })
    })
})