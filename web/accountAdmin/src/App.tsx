import { gql, ApolloClient, InMemoryCache } from "@apollo/client";
import { useCallback, useEffect } from "react";
import { CreateAccountWidget } from "./components/widgets/CreateAccountWidget";

export const uri = "http://localhost:3000";

export const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

const App = () => {
  const getIdentityList = async () => {
    try {
      const res = await client.query({
        query: gql`
          query GetIdentityList {
            getIdentityList {
              id
              email
            }
          }
        `,
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getIdentityListCallback = useCallback(getIdentityList, [getIdentityList]);

  return (
    <div>
      <CreateAccountWidget />
      {/* <button onClick={getIdentityListCallback}>getIdentityList</button> */}
    </div>
  );
};

export default App;
