import Accordion from "react-bootstrap/Accordion";

function AccordianEx({ details }) {
  return (
    <div className="accordian">
      {details.map((el) => (
        <Accordion className="p-accordian">
          <Accordion.Item eventKey="0">
            <Accordion.Header>{el.name}</Accordion.Header>
            <Accordion.Body>
              <div className="image">
                <img src={`${el.img}`} alt="" />
              </div>
              <p>
                <b>Full Name: </b> {el.fname}
              </p>
              <p>
                <b>Email: </b> {el.email}
              </p>
              <p>
                <b>Ph No: </b> {el.phNo}
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
}

export default AccordianEx;
