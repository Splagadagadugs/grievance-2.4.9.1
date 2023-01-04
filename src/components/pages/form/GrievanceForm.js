
import './GrievanceForm.css';
import Form from './Form';
import Form2 from './Form2';



function GrievanceForm() {
  return (
    <div className="App">
      <div className="grievance-container">
      <header className="App-header">
      <div className='formTitle'> 
      PLM Student Assistance and Grievance Help Desk Form
      </div>
      
      {/* <Form/> */}
      <Form2/>
      </header>
      </div>
    </div>
  );
}

export default GrievanceForm;
