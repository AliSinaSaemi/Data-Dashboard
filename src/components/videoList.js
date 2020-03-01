import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "react-router-dom";
import axios from "axios";
class VideoList extends Component {
  state = {
    videos: []
  };
  componentDidMount() {
    axios.get("")
      .then(res => {
        this.setState({
          videos: res.data
        })
      })
  }
  render() {
    const { videos } = this.state;
    const tutorials = videos.map(video => {
      return (
        <Grid item md={4} key={video.id}>
          <Card>
            <CardActionArea>
              <div className="sa_cover">
                <img src={video.cover} alt={video.title} />
              </div>
              <CardContent>
                <Link to={"/" + video.id}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {video.title}
                  </Typography>
                </Link>
                <Typography variant="body2" color="textSecondary" component="p">
                  {video.detials}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      );
    });
    return (
      <React.Fragment>
        <div className="sa_video_gallary">
          <h1>Ticket</h1>
          <hr />
          <Grid container spacing={3}>
            {tutorials}
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default VideoList;
