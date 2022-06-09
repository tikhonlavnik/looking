import React from "react";
import {Nav, NavItem, NavLink , Button} from 'reactstrap'

export default function Header(props) {

  let {handleLog, handleReg, startState} = props

  return(
  <div className="main_header">
    
    <div className="header">
      <Nav className="Nav-header-div">
        <NavItem>
          <button onClick={props.findHotel} className="Nav-header-btn active">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
          </svg>Жилье
          </button>
        </NavItem>
        <Nav>
          <NavItem>
            <button className="Nav-header-btn">
              Аренда машин
            </button>
          </NavItem>
          <NavItem>
            <button className="Nav-header-btn">
              Авиабилеты
            </button>
          </NavItem>
          <NavItem>
            <button className="Nav-header-btn">
              Такси
            </button>
          </NavItem>
        </Nav>
      </Nav>
    </div>
    <div className="header">
      <Nav className="adv">
        <span>
          <h1><b>Найдите жилье для новой поездки</b></h1>
          Ищите спецпредложения на отели, дома и другие варианты.
        </span>
        {/* <Button className="Btn-Nav-Reg" style={{backgroundColor: '#fff'}} outline color="primary" onClick={handleLog}>
          Войти/Зарегистрироваться
        </Button> */}
      </Nav>
    </div>
  </div>
  )
}