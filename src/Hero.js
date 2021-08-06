import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';
import WbSunny from '@material-ui/icons/WbSunny';
import Star from '@material-ui/icons/Star';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Person from '@material-ui/icons/Person';
//import Add from "@material-ui/icons/Add";
import AddAlert from '@material-ui/icons/AddAlert';
import EventAvailable from '@material-ui/icons/EventAvailable';
import TodoList from './Componets/TodoList';

const Hero = ({ handleLogout }) => {
  return (
    <section>
      <Grid item xs={12} container spacing={0}>
        <Grid
          item
          xs={2}
          style={{
            backgroundColor: 'white',
            textAlign: 'center',
            marginLeft: '120px',
            height: '500px',
            marginTop: '90px'
          }}
        >
          <TextField id="outlined-basic" label="Search" variant="outlined">
            {' '}
            <Search />
            Search{' '}
          </TextField>
          <br />
          <br />
          <br />
          <br />
          <WbSunny /> My Day
          <br />
          <br />
          <br />
          <br />
          <Star />
          Important
          <br />
          <br />
          <br />
          <br />
          <CalendarToday /> Planned
          <br />
          <br />
          <br />
          <br />
          <Person /> Assigned to you <br />
        </Grid>
        <Grid
          item
          xs={5}
          style={{
            height: '500px',
            marginTop: '90px',
            overflowY: 'scroll',
            background: '#3d7bdf'
          }}
        >
          <div
            className="todo-app"
            style={{ marginBottom: '0px', marginTop: '0px' }}
          >
            <TodoList />

           {/*} <img
              src="https://4.bp.blogspot.com/-NusT8_BxXvU/WigtjvJvKLI/AAAAAAABOyg/VP7N3f2xgkAOOU2LPKaVCBdTsMiDJp_EgCK4BGAYYCw/s1600/Web-design.jpg"
              width="100%"
        />*/}
          </div>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            backgroundColor: 'white',
            textAlign: 'center',
            height: '500px',
            marginTop: '90px'
          }}
        >
          <br />
          <WbSunny />
          add to My Day
          <br />
          <br />
          <br />
          <br />
          <AddAlert /> Remind Me
          <br />
          <br />
          <br />
          <br />
          <EventAvailable /> Add due Date
          <br />
          <br />
          <br />
          <br />
          <TextField id="outlined-basic" label="Add note" variant="outlined" />
          <br />
          <br />
          <br />
          <br />
          <nav>
            <button onClick={handleLogout}>logout</button>
          </nav>
        </Grid>
      </Grid>
    </section>
  );
};
export default Hero;
