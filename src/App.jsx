
import { Card, CardGroup, Container } from 'react-bootstrap';
import Name from './component/Name';
import Image from './component/Image';
import Price from './component/Price';
import Description from './component/Description';
import 'bootstrap/dist/css/bootstrap.min.css';
import"./App.css"

export default function App() {
  const firstName = "";
  return (
    <>
     <Container className="my-5">
    <CardGroup className='container'>
    <Card className='card' >
        <Card.Img variant="top" as={Image} />
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Text>
          <Description />
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Price />
        </Card.Footer>
      </Card>
      </CardGroup>
      <div className="mt-3">
        <p>Hello, {firstName ? firstName : "there"}!</p>
        {firstName && <img src="https://img.freepik.com/premium-vector/hey-banner-text_997371-8.jpg" alt="User" style={{width:"100px", height:"100px", borderRadius:"50%" , boxShadow: "0 0 5px #1034ff"}}/>}
      </div>
      </Container>
      </>
  )
}
