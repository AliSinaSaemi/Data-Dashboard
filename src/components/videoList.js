import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Link } from "react-router-dom";
class VideoList extends Component {
  state = {
    videos: [
      {
        id: 1,
        title: "Subject 001",
        detials:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, blanditiis! Velit maxime inventore doloremque saepe voluptates. Sit quos iure maxime, in aut facere iste ducimus saepe ullam culpa ea libero?",
        cover: "../assets/video-cover/001.jpg",
        video_address: "../assets/videos/001.mkv"
      },
      {
        id: 2,
        title: "Subject 002",
        detials:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, blanditiis! Velit maxime inventore doloremque saepe voluptates. Sit quos iure maxime, in aut facere iste ducimus saepe ullam culpa ea libero?",
        cover: "../assets/video-cover/002.jpg",
        video_address: "../assets/videos/002.mkv"
      },
      {
        id: 3,
        title: "Subject 003",
        detials:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, blanditiis! Velit maxime inventore doloremque saepe voluptates. Sit quos iure maxime, in aut facere iste ducimus saepe ullam culpa ea libero?",
        cover: "../assets/video-cover/003.jpg",
        video_address: "../assets/videos/003.mkv"
      },
      {
        id: 4,
        title: "Subject 004",
        detials:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, blanditiis! Velit maxime inventore doloremque saepe voluptates. Sit quos iure maxime, in aut facere iste ducimus saepe ullam culpa ea libero?",
        cover: "../assets/video-cover/004.jpg",
        video_address: "../assets/videos/004.mkv"
      }
    ]
  };
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
                <Link to={'/' + video.id}>
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
        <div className="sa_ticket_section">
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
