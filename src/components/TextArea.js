import { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TextArea() {

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = () => {

    const noteObj = {
      title: title,
      note: note
    }

     notes.push(noteObj)
     setTitle('')
     setNote('')
  }

  const deleteFnc = (index) => {

    const newNotesArr = notes.filter((obj, i) => i!== index)
    setNotes(newNotesArr)
  }


  return (
    <>
      <FloatingLabel
      
        controlId="floatingTextarea"
        label="Title"
        className="mb-3"
      >
        <Form.Control as="textarea" onChange={(e) => setTitle(e.target.value)} value = {title} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Take a note...">
        <Form.Control
          as="textarea"
          style={{ height: '80px' }}
          onChange={(e) => setNote(e.target.value)}
          value={note}
        />
      </FloatingLabel>
      <Button 
      variant="secondary" 
      size="lg" 
      style={{backgroundColor: '#DBA800', marginTop: '1rem'}} 
      onClick={addNote}
      active>
        Add note
      </Button>

     {
      notes?.map((obj,index) => (
        <div key={index} style={{marginTop: '1rem'}}> 
        <Card>
      <Card.Header>{obj.title}</Card.Header>
      <Card.Body>
        <Card.Title>{obj.note}</Card.Title>
        <Button variant="primary" onClick={() => deleteFnc(index)}>Delete</Button>
      </Card.Body>
    </Card>
    </div>
      ))
     }
    </>
  );
}

export default TextArea;