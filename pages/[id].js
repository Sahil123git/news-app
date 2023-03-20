import Layout from "@/Components/Layout";
import React from "react";
import axios from "axios";

const Content = ({ user }) => {
  return (
    <Layout>
      <h1>Hii There</h1>
    </Layout>
  );
};

export default Content;

// export async function getServerSideProps(context) {
//   try {
//     const { data } = await axios.get(
//       `https://newsapi.org/v2/everything?q=health&from=2023-03-19&to=2023-03-19&sortBy=popularity&apiKey=42d3d7f7d7194bf686fcf4e231ca2746/${context.query.id}`
//     );
//     return {
//       props: {
//         user: data,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }
