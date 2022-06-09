import React, {useState} from "react";
import {Form, FormGroup, Input, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap'
export default function SideSearch({setCity, city}) {
  let [drDn, toggleDr] = useState(false)
  let toggleDrDn = (state) => {
    // console.log(1)
    toggleDr(!state)
  }
  return(
    <div className="side-Inp">
      <h3>Найти</h3>
      <span>Место/название объекта</span>
      {/* <Input value={searchInp} onChange={setCity(searchInp)} placeholder="Санкт-Петербург"/> */}
      <Dropdown className="dropDown"
      isOpen={drDn}
      onClick={() => toggleDrDn(drDn)}
      toggle={function noRefCheck(){}}>
        <DropdownToggle color='danger' caret>
          {/* Выбрать город */}
          {city ? city : 'Показать все'}
        </DropdownToggle>
        <DropdownMenu container="body">
          <DropdownItem  onClick={setCity}>
            Рим
          </DropdownItem>
          <DropdownItem onClick={setCity}>
            Париж
          </DropdownItem>
          <DropdownItem onClick={setCity}>
            Лондон
          </DropdownItem>
          <DropdownItem onClick={setCity}>
            Показать все
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <br/>
      <span>Дата заезда</span>
      <Input disabled placeholder="13.07.2025"/>
      <br/>
      <span>Дата отъезда</span>
      <Input disabled placeholder="21.09.2025"/>
      <br/>
      <Input disabled placeholder="2 взрослых 1 ребенок"/>
      <br/>
      {/* <Button onClick={showHotels} color="primary">Найти</Button> */}
    </div>
      
  )
}