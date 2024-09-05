import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Col, Row, Spinner } from "react-bootstrap"

export interface Article {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: Date;
  featured: boolean;
  launches?: Launch[];
  events?: any[];
}

export interface Launch {
  launch_id: string;
  provider: string;
}




const Article = () => {
  const [article, setArticle] = useState <Article | null> (null);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();// permette di accedere ai parametri di un oggetto ad esempio un id
  const navigate = useNavigate();

  const fetchArticle = async () => {
    try {
      const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles/" + params.id);
      if (resp.ok) {
        const article: Article = await resp.json();
        setArticle(article);
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
    fetchArticle();
  }, []); // all'avvio fammi la fetch

  return isLoading ? (
    <div className="d-flex justify-content-center my-4">
      <Spinner variant="warning" />
    </div>
  ) : (
    <>
      <h1 className="mb-3">{article?.title}</h1>
      // usiamo article? perchè lo stato o è article o è null usando ? diciamo Se article è un oggetto valido, 
      allora l'operatore accede alla proprietà title di article.
      <Row>
        <Col xs="12">
          <img
            src={article?.image_url}
            alt="article-image"
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              boxShadow: "5px 5px 15px 1px rgba(0,0,0,0.27)",
            }}
            className="mb-3"
          />
          <hr />
        </Col>
        <Col className="mb-5">
          <p>Published: {article?.published_at.substring(0, 10)}</p>
          <p>{article?.summary}</p>
          <a href={article?.url}>Read More.</a>
        </Col>
      </Row>
    </>
  );
};

export default Article;
