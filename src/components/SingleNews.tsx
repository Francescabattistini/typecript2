import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import { NavLink } from "react-router-dom";

export interface News {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: Date;
  featured: boolean;
  launches: any[];
  events: any[];
}



interface SingleNewsProp {
  news: News;
}

function SingleNews({ news }: SingleNewsProp) {
  return (
    <Col xs="12" md="6" lg="4" xl="3">
      <Card style={{ height: "530px" }}>
        <Card.Img variant="top" src={news.image_url} className="fixed-height" />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-truncate">{news.title}</Card.Title>
          <p>{news.published_at.substring(0, 10)}</p>
          <Card.Text className="line-clamp-3 mb-auto">{news.summary}</Card.Text>
          <NavLink to={"/article/" + news.id} className="btn btn-warning">
            Go to article
          </NavLink>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleNews;
