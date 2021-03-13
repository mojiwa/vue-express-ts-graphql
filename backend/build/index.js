"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("graphql");
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const port = 8000;
app.use(cors_1.default());
// the schema defines the queries and what parameters they will take
let schema = graphql_1.buildSchema(`
    type Query { 
        hello: String,
        goodbye: String,
        add(numberOne: Int!, numberTwo: Int!): Int,
        getList: [String],
    }
`);
function goodbye() {
    return "This is a goodbye";
}
function add(number1, number2) {
    return number1 + number2;
}
function getList() {
    return ["Item 1", "Item 2", "Item 3", "Item 4"];
}
// when the query is made, state what is returned
let root = {
    hello: () => {
        return "Hello world!";
    },
    goodbye: () => goodbye(),
    add: (args) => add(args.numberOne, args.numberTwo),
    getList: () => getList(),
};
// all api requests are made to a single graphql endpoint
app.use(`/graphql`, express_graphql_1.graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
