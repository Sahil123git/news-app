import Layout from "@/Components/Layout";
import axios from "axios";
import NewsItem from "@/Components/NewsItem";
import CategoryStyle from "../styles/Category.module.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import img from "../Components/Search1.png";

const API_URL =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=42d3d7f7d7194bf686fcf4e231ca2746&category=business";
const API_CTG =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=42d3d7f7d7194bf686fcf4e231ca2746";
const API_search = "https://newsapi.org/v2/top-headlines?";
const API_URL2 = "https://jsonplaceholder.typicode.com/users";

export default function Index({ users }) {
  //API_KEY: 42d3d7f7d7194bf686fcf4e231ca2746
  // const [searchTerm, setSearchTerm] = useState(""); //here initial val is empty string

  const [API_input, setAPI_input] = useState(users);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState(users); //here initial value of movies is empty array

  const changeCategory = async (title) => {
    const response = await axios(`${API_CTG}&category=${title}`);

    // console.log(title);
    // console.log(response.data.articles);
    setAPI_input(response.data.articles);
  };

  const searchNews = async (title) => {
    const response = await axios(
      `${API_search}q=${title}&apiKey=42d3d7f7d7194bf686fcf4e231ca2746`
    );

    setAPI_input(response.data.articles);
    // const data = await response.json();
    // console.log(response.data.articles);
    // console.log(title);
  };
  return (
    <Layout>
      {/*<Category />*/}
      <div className="container">
        <div className={CategoryStyle.search}>
          <input
            className={CategoryStyle.search_input}
            //here we r updating only searchTerm useState val as user is currently writing he is not yet finished
            placeholder="Search for news"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <Image
            src={img}
            width="27"
            height="30"
            style={{ cursor: "pointer" }}
            alt="searchIcon"
            onClick={() => {
              searchNews(searchTerm);
            }}
          ></Image>
        </div>
      </div>

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

      <div className="container my-3">
        <h2>
          <u>Our Top Headlines</u>
        </h2>

        {/*Checking length of input so that we can show no result found */}
        {API_input?.length > 0 ? (
          <div className="row">
            {API_input.map((user) => (
              <div className="col-md-4 p-4" key={user.url}>
                <NewsItem data={user} />
              </div>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
        
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
