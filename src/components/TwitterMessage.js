import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: "",
      remaining: this.props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      tweet: event.target.value,
      remaining: this.props.maxChars - event.target.value.length
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={event => this.handleChange(event)}
          type="text"
          name="message"
          id="message"
          value={this.state.tweet}
        />
        <br></br>
        <strong>Remaining Characters:</strong> {this.state.remaining}
      </div>
    );
  }
}

export default TwitterMessage;
