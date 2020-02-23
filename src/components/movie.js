
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
import profile from '../assets/bootstrap-social-logo.png';

import Divider from '@material-ui/core/Divider';
class Home extends Component{
    render(){
      return(

        <React.Fragment>
          <div className="sa_ticket_section">
            <h1>Ticket</h1>
            <hr/>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={5} md={4}>
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
              <Grid item xs={12} sm={7} md={8}>
                <Paper>
                  <div className="sa_todo_list">
                    <Button className="sa_reply" variant="contained" color="primary">
                      Reply
                      <i class='fas fa-plus'></i>
                    </Button>
                    <div className="sa_todo_item">
                      <div className="header display-flex">
                        <img src={profile} alt="profile"/>  
                        <section className="width-full">
                          <div style={{'marginBottom': '7px'}} className="display-flex">
                            <h3>Sepehr Akbarzadeh</h3>
                            <span className='date'>Date</span>
                          </div>
                          <div className="display-flex">
                            <h4>Backup</h4>
                            <span className='clock'>Clock</span>
                          </div>
                        </section>
                      </div>
                      <div className="body">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nostrum, quasi ex est qui corrupti voluptatum! Quod consequatur illo, impedit velit architecto consectetur doloremque ut vel minus perferendis dolor. Tenetur.</p>
                      </div>
                    </div>
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