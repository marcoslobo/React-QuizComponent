import React, { Component } from 'react'
let quizData = require('./quiz_data.json')
import QuizQuestion from './QuizQuestion'

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = { quiz_position: 1 }
    }

    render() {
        return <div>
            <QuizQuestion>
            { quizData[0].instuction_text }
            </QuizQuestion>
        </div>
    }

}

export default Quiz