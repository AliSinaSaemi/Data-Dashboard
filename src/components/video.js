import React, { Component } from "react";

class Video extends Component {
  state = {
    id: null
  };
  componentDidMount() {
    let id = this.props.match.params.video_id;
    this.setState({
      id: id
    });
  }
  render() {
    return (
      <React.Fragment>
        <h1>{this.state.id}</h1>
      </React.Fragment>
    );
  }
}

export default Video;
