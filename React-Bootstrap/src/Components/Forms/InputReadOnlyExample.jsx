import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";

function InputReadOnlyExample() {
  return (
    <Container>
      <Form.Control type="text" placeholder="Readonly input here..." readOnly />
    </Container>
  );
}

export default InputReadOnlyExample;
