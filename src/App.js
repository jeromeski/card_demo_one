import { Fragment } from "react";
import "./assets/css/bootstrap.min.css";
import "./assets/sass/main.scss";
import CardTypeOne from "./components/CardTypeOne";
import Col from "./layout/Col";
import Container from "./layout/Container";
import Row from "./layout/Row";

const cardData = {
  id: 1,
  title: "Beautiful Cove",
  address: "56 Forest View Dr, San Francisco, CA 94132",
  imgUrl: "card-room-430x300-0.jpg",
  bedrooms: 2,
  baths: 1,
  guests: 1,
  isFeatured: true,
  price: "175.00",
  averageRating: "Good",
  hostedBy: {
    name: "Binibini Gandanghari",
    imgUrl: "card-host-150x150-0.jpg"
  }
};

export default function App() {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col className="col">
            <div style={{ marginTop: "15rem" }}></div>
            <CardTypeOne data={cardData} />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
