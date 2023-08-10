import LinkButton from "./Button";
import { Card } from "antd";

const { Meta } = Card;

import "../styles/App.css";

interface newsType {
  id: string;
  name: string;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}

interface newsCardType {
  item: newsType;
  // navigate: string;
  button_label: string;
  onClick?: () => void;
}

const NewsCard = ({ item, onClick, button_label }: newsCardType) => {
  return (
    <Card
      style={{
        width: 300,
        padding: 5,
        backgroundColor: "burlywood",
      }}
      cover={
        <img
          style={{
            width: 270,
            height: 200,
            objectFit: "cover",
          }}
          alt={item.title}
          src={item.urlToImage}
        />
      }
    >
      <Meta title={<div style={{ whiteSpace: "normal" }}>{item.title}</div>} />
      <Meta
        description={
          <div style={{ color: "black" }}>{`by: ${item.author}`}</div>
        }
      />
      <LinkButton url={item.url} label={button_label} onClick={onClick} />
    </Card>
  );
};

export default NewsCard;
