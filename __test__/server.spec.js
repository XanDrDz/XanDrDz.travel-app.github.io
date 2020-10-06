import { app } from "../src/server/server"
const supertest = require("supertest");
const { response } = require('express');
const request = supertest(app);
import "regenerator-runtime/runtime";
it('test', async done => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
    expect(response.body).toBeDefined();
    done()
})



// Runtime ERROR for future me
// Help: https://stackoverflow.com/questions/53558916/babel-7-referenceerror-regeneratorruntime-is-not-defined