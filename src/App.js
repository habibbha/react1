     import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Name from './Components/Name';
import Price from './Components/Price';
import Description from './Components/Description'
import Image from './Components/Image'
function App() {
  const firstName = "habib"
  return (
     <div>
 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" />
      <Image/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
          <Description/>
        </Card.Text>
        <Button variant="primary"><Price/></Button>
      </Card.Body>
    </Card>
{
  firstName ? <div>
    <h1>Hello {firstName}</h1> 
  <img src="" alt="" /> 
  </div>
  : <h1>Hello, There!</h1>
} 
  </div>
    
  );
}

export default App;
