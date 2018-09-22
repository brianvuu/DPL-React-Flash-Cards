import React from 'react';

class QuizItems extends React.Component {

	render() {
		
		return (
			<p>
				{this.props.quiz.question}
			</p>
		)
	}
}

export default QuizItems;
        
