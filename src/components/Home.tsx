import { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import { News } from "../interfaces/iNews";
import SingleNews from "./SingleNews";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [news, setNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const fetchNews = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      if (resp.ok) {
        const news = await resp.json();
        setNews(news.results);
      } else {
        throw new Error("Errore nel fetch");
      }
    } catch (error) {
      console.log(error);
      navigate("/error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <h1 className="my-3">Latest News</h1>
      <Row className="mb-5 g-2">
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <Spinner variant="warning" />
          </div>
        ) : (
          news.map((news: News) => <SingleNews key={news.id} news={news} />)
        )}
      </Row>
    </>
  );
};

export default Home;
