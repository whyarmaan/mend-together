import {isAuthRequired} from '../../middlewares/isAuth'
import {Response} from "express";

let req = null
let i = 0
let theStatus = null
let theMessage = null

beforeAll(() => {
    req = {
        user: {},
    }
})

beforeEach(() => {
    i = 0
    req = {
        user: {},
    }
})

describe('Check Role Test', () => {
    it('Test is user auth will let user go in if req.user is present', async (done) => {
        isAuthRequired(req, {} as Response, () => {
            i += 1
        })

        expect(i).toBe(1)
        done()
    })

    it('Test is user auth will not let user go in if req.user is not present', async (done) => {
        req = {}
        isAuthRequired(
            req,
            {
                status(status) {
                    theStatus = status
                    return this
                },
                json(message) {
                    console.log("here")
                    theMessage = message
                    return this
                },
            } as Response,
            () => {
                i += 1
            }
        )
        expect(theMessage).toMatchObject({message: 'UnAuthorized!'})
        expect(i).toBe(0)
        expect(theStatus).toBe(401)
        req = {}

        // ...
        done()
    })
})
