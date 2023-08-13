import { useState } from "react";


const initialUserInput={
    'current-savings':'',
    'yearly-contribution':'',
    'expected-return':'',
    duration:''
}


const UserInput=(props)=>{

    const [userInput, setUserInput] = useState(initialUserInput);

    const submitHandler=(event)=>{
        event.preventDefault();
        //....
        props.onCalculate(userInput);
    };

    const resethandler=()=>{
        //...
        setUserInput(initialUserInput);
    };

    const inputChangeHandler=(input, value)=>{
        setUserInput((prevInput)=>{
            return{
                ...prevInput,
                [input]:+value,
            };
        });
    };



    return(
        <form onSubmit={submitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings (₹)</label>
            <input required
            onChange={(event)=> 
            inputChangeHandler('current-savings', event.target.value)
            }
            value={userInput['current-savings']}
             type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings (₹)</label>
            <input   required          
            onChange={(event)=> 
            inputChangeHandler('yearly-contribution', event.target.value)
            }
            value={userInput['yearly-contribution']}
             type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input required
             onChange={(event)=> 
            inputChangeHandler('expected-return', event.target.value)
            }
            value={userInput['expected-return']}
             type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input required             
            onChange={(event)=> 
            inputChangeHandler('duration', event.target.value)
            }
            value={userInput['duration']}
             type="number" id="duration" />
          </p>
        </div>
        <p className="actions">
          <button onClick={resethandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    );
}

export default UserInput;