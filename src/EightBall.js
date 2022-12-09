import React, {useState} from 'react'
import { answers } from './answers'

const EightBall = () => {
    const [color, setColor] = useState("black");
    const [message, setMessage] = useState('Think of a Question');
    function getRandomAnswer(answers) {
        const random = Math.floor(Math.random() * answers.length) + 1;
        return answers[random];
    } 

    function handleClick() {
        let answer = getRandomAnswer(answers);
        setMessage(answer.msg)
        setColor(answer.color)
    }

  return (
    <div className='EightBall' onClick={handleClick} style={{backgroundColor: color}}>
        <p className='EightBall-message'>{message}</p>
    </div>
  )
}

export default EightBall;