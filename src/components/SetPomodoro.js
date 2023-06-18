import React, { useState } from 'react'
import Button from './Button'

const SetPomodoro = () => {
    const [newTimer,SetNewTimer] = useState({
        work:0.3,
        short:0.2,
        long:1,
        active:"work"

    });

    const handleChange = input => {
        const {name,value} = input.target;
        switch (name) {
            case 'work':
                SetNewTimer({
                    ...newTimer,
                    work:parseInt(value)
                })
                break;
            case 'ShortBreak':
                SetNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
            case 'LongBreak':
                SetNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break;
        
            default:
                break;
        }
    }

    const handleSubmit = e =>{
        e.preventDefault();
    }
    return (
        <div className='formContainer'>
            <form noValidate>
                <div className="input-wrapper">
                    <input className='input' name='work' onChange={handleChange} value={newTimer.work} />
                    <input className='input' name='ShortBreak' onChange={handleChange} value={newTimer.ShortBreak} />
                    <input className='input' name='LongBreak' onChange={handleChange} value={newTimer.long} />
                </div>
                <Button title='SetTimer' _Callback={handleSubmit} />

            </form>
        </div>
    )
}

export default SetPomodoro