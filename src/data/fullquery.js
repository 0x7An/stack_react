import gql from "graphql-tag";

const FULL_QUERY = gql`
{
  questions($tags:String!, $score:Int, $limit:Int, $sort:Int){
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
`;

export default FULL_QUERY;