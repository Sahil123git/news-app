import Layout from "@/Components/Layout";
import axios from "axios";
import NewsItem from "@/Components/NewsItem";

const API_URL =
  "https://newsapi.org/v2/everything?q=apple&from=2023-03-19&to=2023-03-19&sortBy=popularity&apiKey=42d3d7f7d7194bf686fcf4e231ca2746";
const API_URL2 = "https://jsonplaceholder.typicode.com/users";

export default function Index({ users }) {
  //42d3d7f7d7194bf686fcf4e231ca2746
  return (
    <Layout>
      <div className="container my-3">
        <h2>Our Top Headlines</h2>

        <div className="row">
          {users.map((user) => (
            <div className="col-md-4 p-4" key={user.id}>
              <NewsItem data={user} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const { data } = await axios.get(API_URL);
    // console.log(data);
    return {
      //here we are using only data from object
      props: {
        users: data.articles,
      },
    };
  } catch (error) {}
}
