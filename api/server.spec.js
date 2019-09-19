const server = require('./server.js')
const request = require('supertest')
const db = require('../data/dbConfig.js')

describe('server', () => {
    
    beforeEach(async () => {
        await db('hobbits').truncate();
    });

    describe('GET /', () => {
        it('should run the test env', () => {
            expect(process.env.DB_ENV).toBe('testing')
        });
        it('should return status 200 OK', () => {
            //? REQUEST IS ASYNCHRONOUS SO WE MUST RETURN
            return request(server)
                .get('/')
                .then( res => {
                    //? ASSERTIONS MUST BE MADE IN .THEN 
                    expect(res.status).toBe(200);
                })
        })
        it('should return the correct object', () => {
            return request(server)
                .get('/')
                .then( res => {
                    expect(res.type).toBe('application/json')
                    expect(res.body).toEqual({ api: 'up' })
                })
        })
    });

    describe('GET /hobbits', () => {
        it('should return a list of hobbits', () => {
            return request(server)
                .get('/hobbits')
                    .then( res => {
                        expect(res.status).toBe(200);
                        expect(res.body).toEqual([])
                        expect(res.body.length).toBe(0)
                    })
        })
    })
});
