import React from "react";
import { Button } from "reactstrap";
export default function HotelPage({img, price, desc, title, handleBack, addHotel}) {
  return(
    <div className="">
      <div className="row">
        <div className="header-hot"><div><h3>{title}</h3></div><Button onClick={handleBack} color="primary" className="btn-hot">Назад</Button></div>
        <img className="img-hot" alt="Недвижимость" src={img}/>
      </div>
      <div className="row">
        <div className="cntr">
          <div>{desc}</div>
          <h3>{price} Руб/сутки</h3>
          <Button onClick={addHotel} color="primary" className="btn-hot">Забронировать</Button>
        </div>
      </div>
    </div>
  )
}