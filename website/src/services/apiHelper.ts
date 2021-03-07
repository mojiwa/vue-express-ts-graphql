import fetch from "node-fetch";
import https from "https";
const agent = new https.Agent({
  rejectUnauthorized: false
});

const baseUrl = "http://localhost:8000/graphql";

export async function Add(numberOne: number, numberTwo: number) {
  // state the query and the parameters and what they will be
  const query = `query add($numberOne: Int!, $numberTwo: Int!) {
        add(numberOne: $numberOne, numberTwo: $numberTwo)
    }`;

  const response = await fetch(baseUrl, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      query: query,
      // pass the variables in using the variable option
      variables: { numberOne, numberTwo }
    }),
    agent: agent
  });
  return await response.json();
}
