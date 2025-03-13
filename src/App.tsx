import { useRef } from "react";

import Input from "./components/Input";
import Form, { type FormHandle } from './components/Form';
import Button from "./components/Button";
import Container from "./components/Container";

function App() {
  const input = useRef<HTMLInputElement>(null);
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };

    console.log(extractedData)
    customForm.current?.clear();
  }

  return (
    <main>
      <Input lable="Text" id="test" ref={input}></Input>
      <Container as={Button}>Click me</Container>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" lable="Name" id="name" />
        <Input type="number" lable="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  )
}

export default App;
