import gql from "graphql-tag";

const ROOT_QUERY = gql`
{
  questions(tags:"javascript"){
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
`;

export default ROOT_QUERY;