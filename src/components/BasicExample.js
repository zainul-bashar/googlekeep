import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor: '#DBA800'}}>
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item style={{color: '#DBA800', fontSize: 'x-large'}}>Notes</Dropdown.Item>
        <Dropdown.Item style={{color: '#DBA800', fontSize: 'x-large'}}>Reminder</Dropdown.Item>
        <Dropdown.Item style={{color: '#DBA800', fontSize: 'x-large'}}>Edit Labels</Dropdown.Item>
        <Dropdown.Item style={{color: '#DBA800', fontSize: 'x-large'}}>Archive</Dropdown.Item>
        <Dropdown.Item style={{color: '#DBA800', fontSize: 'x-large'}}>Trash</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;