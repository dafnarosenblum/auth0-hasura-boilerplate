import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_ABOUT_ME = gql`
  query aboutme {
    about_me {
      text
    }
  }
`;

export default function Main() {
  const { loading, error, data } = useQuery(GET_ABOUT_ME);
  return (
    <div style={{ marginTop: "5rem" }}>
      {loading ? "Loading.." : data["about_me"][0]["text"]}
    </div>
  );
}
