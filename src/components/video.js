import React, { Component } from "react";
import axios from 'axios';
import ReactPlayer from 'react-player';
class Video extends Component {
  state = {
    video: null
  };
  componentDidMount() {
    let id = this.props.match.params.video_id;
    // Get selected Video based on id
    axios.get('' + id) 
      .then(res => {
        this.setState({
          video: res.data
        })
      })
    this.setState({
      id: id
    });
  }
  render() {
    const movie = this.state.video ? (
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=I55ZrBlVSKI" // Address video from api to here
          width="100%"
          height="100%"
          constrols={true}
        />
      </div>
    ) : (
      <div>
        <h2>Loading ...</h2>
      </div>
    );
    return (
      <React.Fragment>
        <h1>{this.state.id}</h1>
      </React.Fragment>
    );
  }
}

export default Video;
