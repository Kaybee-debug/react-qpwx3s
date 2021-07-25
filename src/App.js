import React from 'react';
import './style.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TodoList from './Componets/TodoList';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import {Redirect} from "react-router-dom";
import Search from "@material-ui/icons/Search";
import WbSunny from "@material-ui/icons/WbSunny";
import Star from "@material-ui/icons/Star";
import CalendarToday from "@material-ui/icons/CalendarToday";
import Person from "@material-ui/icons/Person";
import Add from "@material-ui/icons/Add";
import AddAlert from "@material-ui/icons/AddAlert";
import EventAvailable from "@material-ui/icons/EventAvailable";
import React, { useState } from "react";
import Calendar from "react-material-ui-calendar";
import {creteTheme} from '@material-ui/core/styles';


//import {useState} from 'react-router-dom';
//components
//import {Nav} from 'components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
  useLocation
} from 'react-router-dom';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDUosIzZpqS95FUvvsX2SlB5TIcxMO-63A',
  authDomain: 'karabo-ab4c7.firebaseapp.com',
  projectId: 'karabo-ab4c7',
  storageBucket: 'karabo-ab4c7.appspot.com',
  messagingSenderId: '274048737674',
  appId: '1:274048737674:web:126b7f8697da0eb6752873',
  measurementId: 'G-G7L50L5VVF'
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

//const db = firebase.firestore();
//export {db};


//const fb=firebase.initializeApp
//(firebaseConfig)
const useStyles = makeStyles({
  root: {
    backgroundColor: 'gray',
    color: 'black'
  }
});

function GridStyled() {
  let history = useHistory();

  const classes = useStyles();
  return <Grid className={classes.root} />;
}


function App() {
  const classes = useStyles();
  //let history = useHistory();
  console.log();
  return (
    
    <div style={{ backgroundColor: 'turquoise' }}>
      
      <Grid container spacing={0}>
        <Grid item xs={1} />
        <Grid item xs={5} >
          <img
            src="https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/107070798_899383087210144_631496564149069433_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=PXulVd66UsgAX-kOTkv&_nc_ht=scontent.fjnb11-1.fna&oh=d7052661a5449b44b6f11f7ae604d90b&oe=60FA6FDB"
            width="100%"
          />
        </Grid>
        <Grid
          item
          xs={5}
          className={classes.root}
          style={{
            textAlign: 'center',
            backgroundColor: 'white',
            marginTop: '420px',
            marginBottom: '420px'
          }}
        >
          <marquee>
            {' '}
            <h2>WeThinkCode</h2>
          </marquee>
          <h3>sign up to your account</h3>
          <TextField
            id="outlined-basic"
            label="Your email"
            variant="outlined"
          />
          <br />
          <TextField id="outlined-basic" label="Your name" variant="outlined" />
          <br />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <br />
          By signing up you confirm that you've read and accepted our user
          Notice and Privacy
          <br />
          <Button
            onClick={() => {
              firebase
                .auth()
                .createUserWithEmailAndPassword('malehu@gmail.com', '123456')
                .then(userCredential => {
                  // Signed in
                  var user = userCredential.user;
                  console.log(user);
                  // ...
                })
                .catch(error => {
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  console.log(error.message);
                  // ..
                });
            }}
          >
            Register
          </Button>
          <br />
          OR
          <br />
          Alredy have an account?
          <div>
            {/*<Router>
                <Link to="/todolist">
                 
                    
                    Login
                  
                </Link>
                <Switch>
                  <Route exact path="/todolist" component={() =><ToDoList authorized ={true} />}/>

                  <ToDoList />
                </Switch>
              </Router>*/}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
export default function App() {
  return (
    <Router>
      <div  >
        <nav>
          
          
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/todolist" component= {() =>  <ToDoList authorized={true} />}>
          
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const[mail,setMail]=useState('')
const[password,setPassword]=useState('')
  const classes = useStyles();
  return <div> 
  

  <div>
      
      <Grid container spacing={0}>
        <Grid item xs={1} />
        <Grid item xs={5} style={{ marginTop: '420px', marginBottom: '420px' }}>
          <img
            src="https://4.bp.blogspot.com/-NusT8_BxXvU/WigtjvJvKLI/AAAAAAABOyg/VP7N3f2xgkAOOU2LPKaVCBdTsMiDJp_EgCK4BGAYYCw/s1600/Web-design.jpg"
            width="100%"
          />
        </Grid>
        <Grid
          item
          xs={5}
          className={classes.root}
          style={{
            textAlign: 'center',
            backgroundColor: 'white',
            marginTop: '420px',
            marginBottom: '420px'
          }}
        >
          <marquee>
            {' '}
            <h2>WeThinkCode</h2>
          </marquee>
          <h3>sign up to your account</h3>
         
          <TextField onChange={event => setMail(event.target.value)} id="outlined-basic" label="Email" variant="outlined" />
          <br />
          <TextField onChange={event => setPassword(event.target.value)}  id="outlined-basic" label="Password" type="password" variant="outlined" />
          <br />
          By signing up you confirm that you've read and accepted our user
          Notice and Privacy
          <br />
          <Button
            onClick={() => {
              firebase
                .auth()
                .createUserWithEmailAndPassword(mail,password)
                .then(userCredential => {
                  // Signed in
                  var user = userCredential.user;
                  console.log(user);
                  // ...
                })
                .catch(error => {
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  console.log(error.message);
                  // ..
                });
            }}
          >
          <Link to="/re"  >Sign up</Link>
          </Button>
          <button onClick={()=>{  firebase.auth().createUserWithEmailAndPassword("mail", "password")
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error.message)
    // ..
  });}}> Have an account? <Link to="/register"  >sign in</Link></button>

         
          <div>
            {/*<Router>
                <Link to="/todolist">
                 
                    
                    Login
                  
                </Link>
                <Switch>
                  <Route exact path="/todolist" component={() =><ToDoList authorized ={true} />}/>

                  <ToDoList />
                </Switch>
              </Router>*/}
          </div>
        </Grid>
      </Grid>
    </div>
</div>
  
}

function Register() {
  const[mail,setMail]=useState('')
const[password,setPassword]=useState('')
  const classes = useStyles();
  return <div> 
  

  <div >
      
      
      <Grid container spacing={0}>
        <Grid item xs={1} />
        <Grid item xs={5} style={{ marginTop: '420px', marginBottom: '420px' }}>
          <img
            src="https://4.bp.blogspot.com/-NusT8_BxXvU/WigtjvJvKLI/AAAAAAABOyg/VP7N3f2xgkAOOU2LPKaVCBdTsMiDJp_EgCK4BGAYYCw/s1600/Web-design.jpg"
            width="100%"
          />
        </Grid>
        <Grid
          item
          xs={5}
          className={classes.root}
          style={{
            textAlign: 'center',
            backgroundColor: 'white',
            marginTop: '420px',
            marginBottom: '420px'
          }}
        >
          <marquee>
            {' '}
            <h2>WeThinkCode</h2>
          </marquee>
          <h3>Login</h3>
          <TextField onChange={event => setMail(event.target.value)} 
            id="outlined-basic"
            label="Your email"
            variant="outlined"
          />
         <br/>
          <TextField  onChange={event => setPassword(event.target.value)} id="outlined-basic" label="Password" type="password"  variant="outlined" />
          <br />
         
          <Button
            onClick={() => {
              firebase
                .auth()
                .createUserWithEmailAndPassword(mail, password)
                .then(userCredential => {
                  // Signed in
                  var user = userCredential.user;
                  console.log(user);
                  // ...
                })
                .catch(error => {
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  console.log(error.message);
                  // ..
                });
            }}
          >
           <Link to="/todolist"> Login</Link>
          </Button>
          <br />
          
          
          <div>
            {/*<Router>
                <Link to="/todolist">
                 
                    
                    Login
                  
                </Link>
                <Switch>
                  <Route exact path="/todolist" component={() =><ToDoList authorized ={true} />}/>

                  <ToDoList />
                </Switch>
              </Router>*/}
          </div>
        </Grid>
      </Grid>
    </div>
</div>
  
}

function ToDoList({authorized }) {
  if (! authorized){
    return <Redirect to ="/Home"/>
  }
  return  <div  className ='todo-app'>
      
        
        <Grid container spacing={1}>
          <Grid item xs={1}></Grid>
          <Grid item xs={2} style={{backgroundColor:'white',textAlign:'center' , marginTop: '420px', marginBottom: '420px' }} >

          <Search/>Search<br/>
         <WbSunny/> My Day<br/>
          <Star/>Important<br/>
         <CalendarToday/> Planned <br/>
         <Person/> Assigned to you<br/>
          </Grid>
          <Grid item xs={5} style={{ marginTop: '420px', marginBottom: '420px' }}>
         
           <TodoList/>
          <img src="https://4.bp.blogspot.com/-NusT8_BxXvU/WigtjvJvKLI/AAAAAAABOyg/VP7N3f2xgkAOOU2LPKaVCBdTsMiDJp_EgCK4BGAYYCw/s1600/Web-design.jpg"  width="100%"
              />
              </Grid>
          <Grid item xs={3 }style={{backgroundColor:'white',textAlign:'center' ,marginTop: '420px', marginBottom: '420px' }}>
            write about time booking<br/>
            <WbSunny/>add to My Day<br/>
           <AddAlert/> Remind Me<br/>
           <EventAvailable />    <Calendar
        generalStyle={{
          maxWidth: "3opx",
          margin: "0 auto",
          backgroundColor: "rgba(0,0,0,1)",
          height: "100px",
          overflow: "auto"
        }}
      />Add due Date<br/>
           <TextField id="outlined-basic" label="Add note" variant="outlined" /><br/>
        
           <Button><Link to="/home" >logout</Link></Button>
          </Grid>
          </Grid>
        </div>
    ;
}



