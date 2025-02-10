import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './components/model';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default App;
