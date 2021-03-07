import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(cors());

// the schema defines the queries and what parameters they will take
let schema = buildSchema(`
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

function add(number1:number, number2:number) : number {
    return number1+number2
} 

function getList() {
    return ["Item 1", "Item 2", "Item 3", "Item 4"]
}

// when the query is made, state what is returned
let root = {
    hello: () => {
        return "Hello world!";
    },
    goodbye: () => goodbye(),    
    add: (args: any) => add(args.numberOne, args.numberTwo),
    getList: () => getList(),
};

// all api requests are made to a single graphql endpoint
app.use(`/graphql`, graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);    
});