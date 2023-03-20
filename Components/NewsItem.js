import React from "react";
import { useRouter } from "next/router";

const NewsItem = (props) => {
  const url = `/${props.data.source.name}`;
  const router = useRouter();
  return (
    <div>
      <div className="card" style={{ width: "20rem" }}>
        <img
          className="card-img-top"
          src={props.data.urlToImage}
          alt="News headline image"
        />
        <div className="card-body">
          <h5 className="card-title">{props.data.title}</h5>
          <p className="card-text">{props.data.content}</p>
          <p style={{ fontWeight: "500" }} className="card-text">
            {props.data.source.name}
          </p>
          <h5
            onClick={() => {
              router.push(url);
            }}
            className="btn btn-primary mr-4"
            style={{ marginTop: "12px" }}
          >
            Our Summary
          </h5>
          <a href={props.data.url} className="btn btn-secondary">
            Visit Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
