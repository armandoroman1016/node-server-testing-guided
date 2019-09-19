const Hobbits = require('./hobbitsModel.js')
const db = require('../data/dbConfig.js')

describe('The hobbit model', () => {
    beforeEach(async () => {
        await db('hobbits').truncate();
    });

    describe('the insert function', () => {
        it('should insert a new hobbit', async () => {
            //? TEST SETUP
            const hobbitData = {
                name: 'frodo'
            }
            const hobbit = await Hobbits.insert(hobbitData);

            //? TEST ASSERTION
            const hobbits = await db('hobbits');
            expect(hobbits.length).toBe(1)
            expect(hobbits[0].name).toBe('frodo')
        });
        it('should resolve to the newly created hobbit', async () => {
            const hobbitData = { name: 'bilbo' }
            //? ASSERTION
            const hobbit = await Hobbits.insert(hobbitData)
            expect(hobbit).toEqual({ id: 1, name: 'bilbo' })
        });
    });
});