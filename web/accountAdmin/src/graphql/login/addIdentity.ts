import { gql } from "@apollo/client";
import { client } from "..";

export interface IAddIdentityData {
  email: string;
}

export const addIdentity = async (data: IAddIdentityData) => {
  return await client.mutate({
    mutation: gql`
      mutation AddIdentity {
        addIdentity(email: "${data.email}") {
          id
          email
        }
      }
    `,
  });
};
