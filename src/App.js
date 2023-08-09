import { useContext } from "react";
import { MainSpace, ImageSpace, FormSpace } from "./styles";
import { Button, Container } from "@mui/material";
import Form from "./Form";
import { CounterContext } from "./constex";


function App() {
  const counterData = useContext(CounterContext)
  console.log(counterData)
  return (
    <MainSpace>
      <ImageSpace />
      <FormSpace>
        <Form />
        <Container>
          <Button>-</Button>
          <Button onClick={() =>counterData.suma()}>+</Button>
        </Container>
      </FormSpace>
    </MainSpace>
  );
}

export default App;
