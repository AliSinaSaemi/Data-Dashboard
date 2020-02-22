
import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
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
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
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
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
                        </div>
                      </div>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item md={8}>
                <Paper>
                  <div className="sa_ticket_editor">
                    <h3 style={{ 'marginBottom': '40px' }}>Ticket submission form</h3>
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