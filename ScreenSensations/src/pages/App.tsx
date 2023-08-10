import { lazy, FC, useEffect, useState } from "react";
import axios from "axios";
import { Row } from "antd";

import { newsType } from "../types/news";

const NewsCard = lazy(() => import("../components/NewsCard"));
const Load = lazy(() => import("../components/LoadMore"));

const Homepage: FC = () => {
  const [news, setNews] = useState<[]>([]);
  const [page, setPage] = useState(1);

  const fetchNews = async () => {
    try {
      const result = await axios.get(
        `https://newsapi.org/v2/everything?q=movie&apiKey=${
          import.meta.env.VITE_REACT_APP_NEWS_KEY
        }&pageSize=12&$page=${page}`
      );
      console.log(result);
      setNews(result.data.articles);
      const newPage = page + 1;
      setPage(newPage);
      console.log(news);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          marginBottom: 50,
        }}
      >
        <h1 style={{ fontStyle: "italic" }}>Welcome to Screen Sensations</h1>
        <p style={{ textAlign: "center" }}>
          Your ultimate source for the latest updates, reviews, and
          recommendations about films!
        </p>
      </div>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ placeContent: "center", gap: 5 }}
      >
        {news.map((item: any) => (
          <NewsCard
            key={item.url}
            item={item}
            button_label="Read More"
            onClick={() => window.open(`${item.url}`, "_blank")}
          />
        ))}
      </Row>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Load label="More news" onClick={() => fetchNews()} />
      </div>
    </>
  );
};

export default Homepage;
