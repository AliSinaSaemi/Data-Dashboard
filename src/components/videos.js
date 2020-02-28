import React, { Component } from 'react';
import Video from './video';
class Videos extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="sa_ticket_section">
          <h1>Ticket</h1>
          <hr/>
          <Grid item md={4} key={ video.id }y>
            <a href="">
              <Card>
                <CardActionArea>
                  <div className="sa_cover">
                    <img src={video.cover} alt=""/>
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {video.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {video.address}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </a>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

export default Videos;