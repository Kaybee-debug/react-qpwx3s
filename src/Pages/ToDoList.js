import React from "react";
import {Redirect} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Search from "@material-ui/icons/Search";
import WbSunny from "@material-ui/icons/WbSunny";
import Star from "@material-ui/icons/Star";
import CalendarToday from "@material-ui/icons/CalendarToday";
import Person from "@material-ui/icons/Person";
import Add from "@material-ui/icons/Add";
import AddAlert from "@material-ui/icons/AddAlert";
import EventAvailable from "@material-ui/icons/EventAvailable";



function ToDoList(){

      return(
      <div> 
        youre at the right page
        <Grid container spacing={1}>
          <Grid item xs={2} style={{ backgroundColor: 'steel blue',textAlign:'center'}}>

          <Search/>Search<br/>
         <WbSunny/> My Day<br/>
          <Star/>Important<br/>
         <CalendarToday/> Planned <br/>
         <Person/> Assigned to you<br/>
          </Grid>
          <Grid item xs={7}>
          GYRHIJ
          <img src="https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/119590075_951069198708199_398863466099231430_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=pPEPyA6etCoAX8XUz51&_nc_ht=scontent.fjnb11-1.fna&oh=ce408739abb6ea32bd505fcbfe6d762f&oe=60FCD6D1"  width="100%"
              margin="auto"/>
              </Grid>
          <Grid item xs={3 }style={{backgroundColor:'white',textAlign:'center'}}>
            write about time booking<br/>
            <WbSunny/>add to My Day<br/>
           <AddAlert/> Remind Me<br/>
           <EventAvailable/> Add due Date<br/>
           <TextField id="outlined-basic" label="Add note" variant="outlined" />
          </Grid>
          </Grid>
        </div>
      );
  
  

}
