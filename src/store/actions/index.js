import gql from "graphql-tag";
import { client } from "../../data/client";

export const GET_QUESTIONS = 'GET_QUESTIONS';

export async function getQuestions({tag, limit, score, sort}){
    
    let data = await client.query({
      query: gql`
      {
        questions(tags:\"${tag}\", limit:${limit}, score:${score}, sort:\"${sort}\"){
          question_id,
          creation_date,
          title,
          score,
          tags,
          owner{
            display_name
          }
        }
      }
      `
    })
    .then(result => result);

    return {
      type: GET_QUESTIONS,
      payload: data
    };
}
