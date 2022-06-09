import React from "react";
import {Form, FormGroup, Input, Button} from 'reactstrap'
export default function Search() {
  return(
    <Form className="form">
      <FormGroup className="form-group">
        <Input
          id="place"
          name="email"
          placeholder="Куда вы хотите поехать?"
          type="text"
        />
        <Input
          id="date"
          name="email"
          placeholder="Дата"
          type="text"
        />
        <Input
          id="date"
          name="email"
          placeholder="Количество человек"
          type="text"
        />
        <button><span className="checkPrice">Проверить цены</span></button>
      </FormGroup>
    </Form>
  )
}