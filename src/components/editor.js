import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Terminal from './terminal';
import TextEditor from './text';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    tabs: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
      padding: 0,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      display: 'flex',
      with: '25%'
    },
  }));
  
  export default function CenteredGrid() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
     
          <Grid item xs={12} sm={5} lg={5}>
            <Paper className={classes.paper}>
              <div className="sa_textEditor_info">
                <div className="header">
                  <h4><i class="far fa-file-alt"></i> Exercise</h4>
                </div>
                <div className="content">
                <section>
                  <h1 class="exercise-title">The Python Interface</h1>
                  <p>In the Python script on the right, you can type Python code to solve the exercises. If you hit Run Code or <em>Submit answer</em>, your python script <span>(script.py)</span> is executed and the output is shown in the IPython Shell. Submit Answer checks whether your submission is correct and gives you feedback.</p>
                  <p>You can hit Run Code and Submit Answer as often as you want. If you're stuck, you can click Get Hint, and ultimately Get Solution.</p>
                  <p>You can also use the IPython Shell interactively by simply typing commands and hitting Enter. When you work in the shell directly, your code will not be checked for correctness so it is a great way to experiment.</p>

                </section>
                <div className="header relative">
                    <h4><i class="fas fa-check-circle"></i> Exercise</h4>
                    <span class="tag">100 XP</span>
                  </div>
                <section style={{'marginBottom': '80px'}}>
                  <ul>
                    <li><i class="fas fa-circle"></i>Experiment in the IPython Shell; type <span>5 / 8</span>, for example.</li>
                    <li><i class="fas fa-circle"></i>Add another line of code to the Python script on the top-right (not in the Shell): <span>print(7 + 10)</span>.</li>
                    <li><i class="fas fa-circle"></i>Hit <em>Submit Answer</em> to execute the Python script and receive feedback.</li>
                  </ul>
                  <a href="" className="sa_takeHint tool"><i class="far fa-lightbulb"></i> <p>Take Hint (-30 XP)</p></a>
                </section>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid className='sa_text_area' item xs={12} sm={7} lg={7}>
            <Paper className={classes.paper}>
              <div className={classes.root}>
                <AppBar position="static">
                  <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="script.py" {...a11yProps(0)} />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  <TextEditor/>
                </TabPanel>
              </div>
            </Paper>
            <Paper className={classes.paper} className="sa_terminal_section">
              <div className={classes.root}>
                <AppBar position="static">
                  <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="IPython Shell" {...a11yProps(0)} />
                  </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  <Terminal/>
                </TabPanel>
              </div>
            </Paper>
          </Grid>
          
        </Grid>
      </div>
    );
  }