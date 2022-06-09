import React from "react";
import {CardColumns, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap'
// [img, title, subtitle, text]
export default function CardItem({img, title, text, price}) {
  return(
    <CardColumns>
      <Card className="card-item">
        <CardImg
        className="card-img"
          alt="Card image cap"
          // src="https://cf.bstatic.com/xdata/images/hotel/square600/39659322.webp?k=8b62535404752f009d7706c9b90fdbac820b1b0d37fa876647bca0375a66edd8&o=&s=1"
          src={img}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            {title}
          </CardTitle>
          <CardText>
            {text}
          </CardText>
          <CardText>
            {price} Руб./сутки
          </CardText>
          <Button color="primary">
            Подробнее
          </Button>
        </CardBody>
      </Card>
    </CardColumns>
  )
}