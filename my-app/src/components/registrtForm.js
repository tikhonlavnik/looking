import React, {useState} from "react";
import { InputGroup, Input, InputGroupText, Button } from "reactstrap";

export default function RegistrtForm({regUser, setPs, setLg, inp1, inp2}) {

  // let [inp1, setInputOne] = useState()
  // let [inp2, setInputTwo] = useState()

  

  return(
    <div className="com-div">
      <h3>Регистрация</h3>
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
      <Button color='primary' onClick={regUser()}>Зарегистрироваться</Button>
    </div>
  )
}