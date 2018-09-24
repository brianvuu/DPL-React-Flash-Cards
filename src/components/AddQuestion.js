import React from 'react';

class AddQuestion extends React.Component {
  render() {
    return(
      
      <div>
        <h3>Create New Flash Card</h3>
        <form>
          <label>Question</label>
          <input type="text" ref="question" />
        </form>
      </div>
    )
  }
}

export default AddQuestion;