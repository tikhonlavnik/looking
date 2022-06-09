import React from "react";
import {Button} from 'reactstrap'
export default function MainCard({title, img, desc, price, handleCheck, key, del, handleDel}) {
  return(
    <div className="card">
      <div className="row">
        <div className="col-4">
          <img className="img" alt="Недвижимость" src={img}/>
        </div>
        <div className="col-6 cntr">
          <div><h3>{title}</h3></div>
          <div>{desc}</div>
          {del ? <Button id={key} onClick={handleDel} color='primary' className="card-btn">Отменить бронирование</Button> : <Button id={key} onClick={handleCheck} color='primary' className="card-btn">Подробнее</Button>}
          {/* <Button id={key} color='primary' className="card-btn">Забронировать</Button> */}
        </div>
        <div className="col-2">
          <div><h3>{price}</h3> руб/сутки</div>
        </div>
      </div>
    </div>
  )
}