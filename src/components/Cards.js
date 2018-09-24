import React from 'react';
import QuizItems from './QuizItems';

class Cards extends React.Component {

	render() {

		let test;
		if(this.props.quiz){
			test = this.props.quiz.map(quiz => {
				return(
          <div className="Cards">
            <strong>					
              <QuizItems key={quiz.question} quiz={quiz} />
            </strong>
          </div>
				)
			})
		}

		return (
			<div className="Cards-container">
				{ test }
			</div>
		)
	}

}

export default Cards;
        
