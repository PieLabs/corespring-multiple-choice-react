import React from 'react';

module.exports = React.createClass({
  displayName: 'CorepsringFeedback',
  
  propTypes: {
    correctness: React.PropTypes.string,
    feedback: React.PropTypes.string
  },

  render: function() {
    var self = this;
    var feedbackClass = "corespring-feedback " + this.props.correctness;
    if (self.props.correctness && self.props.feedback) {
      return <div className={feedbackClass}>{self.props.feedback}</div>
    } else {
      return <div></div>
    }
  }
});