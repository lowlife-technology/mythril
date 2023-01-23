import { gql } from "@apollo/client";
import { client } from ".";

export const getIdentityList = async () => {
  return await client.query({
    query: gql`
      query GetIdentityList {
        getIdentityList {
          id
          email
        }
      }
    `,
  });
};
