import React from "react";
import {Nav, NavItem, NavLink , Button} from 'reactstrap'

export default function Navig(props) {

const {startState, handleReg, handleLog, person, handleMyOrders, handleOutLog} = props

return (
  <div className="header">
    <Nav className="header_inner">
      <NavItem className="logo" onClick={startState}>
        Looking.com
      </NavItem>
      <Nav>
        {person ? <><NavItem>
          <Button onClick={handleMyOrders} className="Btn-Nav place" outline color="primary">
            Личный кабинет
          </Button>
        </NavItem>
        <NavItem>
        <Button className="Btn-Nav lgi" style={{backgroundColor: '#fff'}} outline color="primary" onClick={handleOutLog}>
          Выйти
        </Button>
      </NavItem></> : <><NavItem>
          <Button className="Btn-Nav place" outline color="primary">
            Добавить свой объект
          </Button>
        </NavItem>
        <NavItem>
          <Button className="Btn-Nav reg" style={{backgroundColor: '#fff'}} outline color="primary" onClick={handleReg}>
            Регистрация
          </Button>
        </NavItem>
        <NavItem>
          <Button className="Btn-Nav lgi" style={{backgroundColor: '#fff'}} outline color="primary" onClick={handleLog}>
            Войти
          </Button>
        </NavItem></>}
      </Nav>
    </Nav>
  </div>
  )
}