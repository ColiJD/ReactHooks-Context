import { MainSpace, ImageSpace, FormSpace } from "./styles";
import { Button, Container } from "@mui/material";
import Form from "./Form";

function App() {
  return (
    <MainSpace>
      <ImageSpace />
      <FormSpace>
        <Form />
        <Container>
          <Button>-</Button>
          <Button>+</Button>
        </Container>
      </FormSpace>
    </MainSpace>
  );
}

export default App;
