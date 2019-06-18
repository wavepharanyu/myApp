import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';


const q1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const q2 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.";
const q3 = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.";


function getSteps() {
  return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];
}

function TabContainer(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [ text, setText ] = React.useState('');
  const steps = getSteps();

  const handleChange = name => event => {
    setText({ ...text, [name]: event.target.text });
  };

  const handleSent = name => event => {
    setText({ ...text, [name]: "" });
  };


  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div>
      <Typography variant="h5" style={{paddingTop:'20px' ,paddingBottom:'20px'}}>
        {props.header}
      </Typography>
      <Paper className="quiz" rounded>
        <Typography variant="h5" component="div" style={{paddingBottom:'20px'}}>
          {activeStep == 0 && q1}
          {activeStep == 1 && q2}
          {activeStep == 2 && q3}
        </Typography>
        <TextField
          id="standard-full-width"
          fullWidth
          placeholder="Placeholder"
          style={{paddingTop: '80px'}}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange('name')}
          value={text.name}
        />
         <div>
        {activeStep === steps.length ? (
          <div>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
            <div className="arrow">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                <KeyboardArrowLeft style={{fontSize: '64px'}}/>
              </Button>
              <Button  color="primary" onClick={() => {if (text !== '') { handleNext(); handleSent();}}}>
                {activeStep === steps.length - 1 ? 'Finish' : <KeyboardArrowRight style={{fontSize: '64px'}}/>}
              </Button>
            </div>
        )}
      </div>
      </Paper>
      <div className="stepperArea">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
}

function App() {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className="App">
      <table className="nav-bar">
      </table>
      <div className="body">
        <div className="topic">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label={<span className="topic">Aptitude</span>} />
          <Tab label={<span className="topic">English</span>} />
          <Tab label={<span className="topic">Psychology</span>} />
        </Tabs>
      {value === 0 && <TabContainer header="Aptitude Test" />}
      {value === 1 && <TabContainer header="English Test" />}
      {value === 2 && <TabContainer header="Psychology Test" />}
        </div>
      </div>
    </div>
  );
}

export default App;
