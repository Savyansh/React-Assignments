import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ResponsiveExample() {
  return (
    <Container >
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row className='m-2' >
        <Col xs={12} md={8} className="border border-primary bg-info p-3 ">
          xs=12 md=8
        </Col>
        <Col xs={6} md={4} className="border border-primary bg-info p-3">
          xs=6 md=4
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row className='m-2'>
        <Col xs={6} md={4} className="border border-primary bg-info p-3">
          xs=6 md=4
        </Col>
        <Col xs={6} md={4} className="border border-primary bg-info p-3">
          xs=6 md=4
        </Col>
        <Col xs={6} md={4} className="border border-primary bg-info p-3">
          xs=6 md=4
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row className='m-2'>
        <Col xs={6} className="border border-primary bg-info p-3">xs=6</Col>
        <Col xs={6} className="border border-primary bg-info p-3">xs=6</Col>
      </Row>
    </Container>
  );
}

export default ResponsiveExample;