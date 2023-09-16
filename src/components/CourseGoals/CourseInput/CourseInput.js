import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
import '../../UI/Button/Button.css'

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setIsValid]=useState(false)

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if(event.target.value.trim().length>0){
      setIsValid(true)
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      setIsValid(false)
      return
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid?'invalid':''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      {/* <Button className={`button['button.invalid']${enteredValue.trim().length===0?'invalid':''}`} type="submit">Add Goal</Button> */}
      <Button isValidCheck={isValid} type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
