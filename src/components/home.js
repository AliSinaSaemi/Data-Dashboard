
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'; 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
class Home extends Component{
    render(){
      return(

        <React.Fragment>
          <div className="sa_ticket_section">
            <h1>Ticket</h1>
            <hr/>
            <Grid container spacing={3}>
              <Grid item md={4}>
                <Paper>
                  <div className="sa_tickets">
                    <h3>My Tickets</h3>
                    <FormControl>
                      <InputLabel id="demo-simple-select-label">Sort by ...</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="simple-select"
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                    <div className="tabs">
                      <div class="tab">
                        <input className='display-hidden' type="checkbox" id="chck1" />
                        <label class="tab-label" for="chck1">Item 1</label>
                        <div class="tab-content">
                          <List component="nav" aria-label="mailbox folders">
                            <ListItem button>
                              <a href="">
                                <div className="display-flex" style={{ 'marginBottom': '10px' }}>
                                  <span className='code'>#12j855</span>
                                  <span className='name'>Sepehr Akbarzadeh</span>
                                </div>
                                <span className='date'>Date</span>
                              </a>
                            </ListItem>
                            <Divider />
                            <ListItem button divider>
                            <a href="">
                                <div className="display-flex" style={{ 'marginBottom': '10px' }}>
                                  <span className='code'>#12j855</span>
                                  <span className='name'>Sepehr Akbarzadeh</span>
                                </div>
                                <span className='date'>Date</span>
                              </a>
                            </ListItem>
                            <ListItem button>
                            <a href="">
                                <div className="display-flex" style={{ 'marginBottom': '10px' }}>
                                  <span className='code'>#12j855</span>
                                  <span className='name'>Sepehr Akbarzadeh</span>
                                </div>
                                <span className='date'>Date</span>
                              </a>
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                            <a href="">
                                <div className="display-flex" style={{ 'marginBottom': '10px' }}>
                                  <span className='code'>#12j855</span>
                                  <span className='name'>Sepehr Akbarzadeh</span>
                                </div>
                                <span className='date'>Date</span>
                              </a>
                            </ListItem>
                          </List>
                        </div>
                      </div>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item md={8}>
                <Paper>
                  <div className="sa_ticket_editor">
                    <h3 style={{ 'marginBottom': '40px', 'marginLeft': '23px' }}>Ticket submission form</h3>
                    <form className="sa_ticket_form" noValidate autoComplete="on">
                      <Grid container spacing={3}>
                        <Grid item md={6}>
                          <TextField className="width-full" id="standard-basic" label="First & Last name" />
                        </Grid>
                        <Grid item md={6}>
                        <InputLabel className='width-full' id="demo-simple-select-label">Priority</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="simple-select"
                            className="width-full"
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </Grid>
                      </Grid>
                      <Grid container spacing={3} style={{ 'marginTop': '40px' }}>
                        <Grid item md={6}>
                          <TextField className="width-full" id="standard-basic" label="Topic" />
                        </Grid>
                        <Grid item md={6}>
                        <InputLabel className='width-full' id="demo-simple-select-label">Part</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="simple-select"
                            className="width-full"
                          >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <textarea id="w3mission" rows="4" cols="50">
                          
                        </textarea>
                      </Grid>
                      <Button className="primary" variant="contained" color="primary">
                        Primary
                      </Button>
                    </form>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </React.Fragment>

      )
    }
  }
  
  export default Home;