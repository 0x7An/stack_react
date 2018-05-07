import gql from "graphql-tag";
import { client } from "../../data/client";

export const GET_QUESTIONS = 'GET_QUESTIONS';

export async function getQuestions({tag, limit, score, sort}){
    
    let data = await client.query({
      query: gql`
      {
        questions(tags:\"${tag}\", limit:${limit}, score:${score}, sort:\"${sort}\"){
          score,
          question_id,
          tags,
          owner{
                user_id,
                reputation,
                user_type,
                accept_rate,
                profile_image,
                display_name
                link
          },
          is_answered,
          view_count,
          answer_count,
          last_activity_date,
          creation_date,
          link,
          title
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
