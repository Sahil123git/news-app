import Layout from "@/Components/Layout";
import axios from "axios";
import NewsItem from "@/Components/NewsItem";
import CategoryStyle from "../styles/Category.module.css";
import React, { useState, useEffect } from "react";

const API_URL =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=42d3d7f7d7194bf686fcf4e231ca2746&category=business";
const API_CTG =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=42d3d7f7d7194bf686fcf4e231ca2746";
const API_URL2 = "https://jsonplaceholder.typicode.com/users";

export default function Index({ users }) {
  //API_KEY: 42d3d7f7d7194bf686fcf4e231ca2746
  // const [searchTerm, setSearchTerm] = useState(""); //here initial val is empty string
  const [category, setCategory] = useState(users); //here initial value of movies is empty array

  const changeCategory = async (title) => {

    const response = await axios(`${API_CTG}&category=${title}`);
    
    // console.log(title);
    // console.log(response.data.articles);
    setCategory(response.data.articles);
  };
  return (
    <Layout>
      <div>
        {/*<Category />*/}
        <div>
          <div className={CategoryStyle.space}>
            <h2 className="container">
              <u>Categories</u>
            </h2>
          </div>
          <div className="container">
            <p
              className={CategoryStyle.shine}
              onClick={(e) => {
                // console.log(e.target.innerHTML);
                changeCategory(e.target.innerHTML);
              }}
            >
              general
            </p>
            <p
              className={CategoryStyle.shine}
              onClick={(e) => {
                // console.log(e.target.innerHTML);
                changeCategory(e.target.innerHTML);
              }}
            >
              science
            </p>
            <p
              className={CategoryStyle.shine}
              onClick={(e) => {
                // console.log(e.target.innerHTML);
                changeCategory(e.target.innerHTML);
              }}
            >
              sports
            </p>
            <p
              className={CategoryStyle.shine}
              onClick={(e) => {
                // console.log(e.target.innerHTML);
                changeCategory(e.target.innerHTML);
              }}
            >
              technology
            </p>
            <p
              className={CategoryStyle.shine}
              onClick={(e) => {
                // console.log(e.target.innerHTML);
                changeCategory(e.target.innerHTML);
              }}
            >
              business
            </p>
            <p
              className={CategoryStyle.shine}
              onClick={(e) => {
                // console.log(e.target.innerHTML);
                changeCategory(e.target.innerHTML);
              }}
            >
              entertainment
            </p>
            <p
              className={CategoryStyle.shine}
              onClick={(e) => {
                // console.log(e.target.innerHTML);
                changeCategory(e.target.innerHTML);
              }}
            >
              health
            </p>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <h2>
          <u>Our Top Headlines</u>
        </h2>

        <div className="row">
          {category.map((user) => (
            <div className="col-md-4 p-4" key={user.url}>
              <p>{user.source.id}</p>
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
