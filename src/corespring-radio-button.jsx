import React from 'react'; 
import RadioButton from 'material-ui/RadioButton';


import CorespringFeedbackTick from './corespring-feedback-tick.jsx';
import CorespringFeedback from './corespring-feedback.jsx';

class CorespringRadioButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userValue: false,
      checked: props.checked
    };
  }

  onCheck(el) {
    var self = this;
    this.props.onChange({
      value: this.props.value
    });
    this.setState({userValue: !this.state.checked});
    this.setState({checked: !this.state.checked});
  }

  selectionChanged(value) {
    if (this.props.value !== value) {
      this.state.checked = false;
      this.forceUpdate();
    }
  }

  _checked() {
    return (this.props.correct !== undefined) ? this.props.correct : this.state.checked;
  }

  render() {
    var self = this;
    return (
      <div className="corespring-radio-button">
        <CorespringFeedbackTick correctness={self.props.correctness} />
        <div className="checkbox-holder">
          <RadioButton
            disabled={self.props.disabled}
            checked={self._checked()}
            onCheck={self.onCheck.bind(self)}
            label={self.props['display-key'] + '. ' + self.props.label} />
        </div>
        <CorespringFeedback feedback={self.props.feedback} correctness={self.props.correctness} />
      </div>
    );
  }
}

CorespringRadioButton.propTypes = {
  'display-key': React.PropTypes.string,
  checked: React.PropTypes.bool,
  correct: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  feedback: React.PropTypes.string,
  label: React.PropTypes.string,
  onChange: React.PropTypes.func
}

export default CorespringRadioButton