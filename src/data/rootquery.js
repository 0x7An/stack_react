import gql from "graphql-tag";

const ROOT_QUERY = gql`
{
  questions(tags:"javascript"){
    score,
    question_id,
    tags,
    owner{
          user_id
    }
  }
}
`;

export default ROOT_QUERY;