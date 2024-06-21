"use client";
import axios from "axios";
import ArticleList from "./components/ArticleList";
import NavBar from "./components/NavBar";
import Tabs from "./components/Tabs";
import React, { useEffect, useState } from "react";

export type Article = {
  id: number;
  author: string;
  title: string;
  date: string;
  body: string;
  image: string;
  tags: string[];
  readTime: string;
  selectedForYou?: boolean;
  memberOnly?: boolean;
  reactions: {
    dislikes: number;
    likes: number;
  };
  views: number;
};
type APIResponse = {
  posts: Article[];
};

const Home: React.FC = () => {
  const [data, setData] = useState<Article[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios
      .get<APIResponse>("https://dummyjson.com/posts")
      .then((response) => {
        setData(response.data.posts);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <Tabs />

      {!data ? <div>Loading...</div> : <ArticleList articles={data} />}
    </div>
  );
};

export default Home;
