import React from "react";
import { InputGroup, Input, InputGroupText, Button } from "reactstrap";

export default function LoginForm({logUser, setPs, setLg, inp1, inp2}) {

  return(
    <div className="com-div">
      <h3>Войти</h3>
      <InputGroup>
        <InputGroupText>
          login
        </InputGroupText>
        <Input
        value = {inp1}
        onChange={setLg(inp1)}
        />
      </InputGroup>
      <br />
      <InputGroup>
        <Input
        value = {inp2}
        onChange={setPs(inp2)}
        type="password" placeholder="password" />
      </InputGroup>
      <br/>
      <Button color='primary' onClick={logUser()}>Войти</Button>
    </div>
  )
}