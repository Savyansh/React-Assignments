import logo from "./logo.svg";
import "./App.css";
import Emp from "./Components/Emp";
import ResponsiveExample from "./Components/Grid/ResponsiveExample";
import FormStackExample from "./Components/Stack/FormStackExample";
import FormExample from "./Components/Forms/FormExample";
import BasicExample from "./Components/Forms/BasicExample";
import InputReadOnlyExample from "./Components/Forms/InputReadOnlyExample";
import Container from "react-bootstrap/esm/Container";
import FormFileExample from "./Components/Forms/FormFileExample";
import ColorPickerExample from "./Components/Forms/ColorPickerExample";
import FormTextExample from "./Components/Forms/FormTextExample";
import AccordianEx from "./Components/Ex/AccordianEx";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import ModalEx from "./Components/Ex/modalEx";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState({});
  const details = [
    {
      name: "Becky",
      fname: "Becky Smith",
      email: "Becky@gmail.com",
      phNo: 8758768586,
      img: "https://th.bing.com/th/id/R.3bcbeff4ee0abb81ef150c9ea7e35730?rik=t3aMo1m4uUQi6g&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2010%2f05%2ffree-stock-photos-people_102217.jpg&ehk=vGjIrntn5QyP%2fIXY2Ei7Iiz4%2fy%2byXvP8I8j0XxemwjI%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      name: "John",
      fname: "John Doe",
      email: "John@gmail.com",
      phNo: 8758768586,
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/35af6a41332353.57a1ce913e889.jpg"
    },
    {
      name: "Ria",
      fname: "Ria Rathod",
      email: "Ria@gmail.com",
      phNo: 8758768586,
      img: "https://th.bing.com/th/id/OIP.RjWTyBNhc2SbqoKqiZ6eSgHaHF?pid=ImgDet&w=193&h=184&c=7&dpr=1.5"
    }
  ];
  return (
    <Container>
      <AccordianEx details={details} />
      <div>
        {details.map((el) => (
          <>
            <Button
              variant="warning"
              onClick={() => {
                setModalShow(true);
                setModalData(el);
              }}
              className="modal-btn"
            >
              {el.name}
            </Button>
          </>
        ))}
        <ModalEx
          show={modalShow}
          onHide={() => setModalShow(false)}
          detail={modalData}
        />
      </div>
    </Container>
  );
}

export default App;
