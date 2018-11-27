import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dismissFlashMsg} from '../../actions/formsActions';

class Flash extends Component {
  constructor(props) {
	super(props);
	this.onDismiss = this.onDismiss.bind(this);
  }

  componentDidUpdate() {
	if (this.props.flash.isOpen) {
	  setTimeout(() => {
		this.onDismiss()
	  }, 4000); //TODO: clean interval in willunmount
	}
  };

  onDismiss() {
	this.props.dismissFlashMsg();
  }

  render() {
	const modal = this.props.flash.isOpen ? 'show' : 'hide';
	return (
	  <div className={`flash-message ${modal} ${this.props.flash.type}`}
			 onClick={this.onDismiss}>
		{this.props.flash.text}
	  </div>
	);
  }
}

function mapStateToProps({flash}) {
  return {
	flash
  }
}

function mapDispatchToProps(dispatch) {
  return {
	dismissFlashMsg: () => dispatch(dismissFlashMsg())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flash);