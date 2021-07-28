import React,{useState,useEffect}from "react";
import './style.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import Login from './Login';
import Hero from './Hero';

var firebaseConfig = {
  apiKey: 'AIzaSyDUosIzZpqS95FUvvsX2SlB5TIcxMO-63A',
  authDomain: 'karabo-ab4c7.firebaseapp.com',
  projectId: 'karabo-ab4c7',
  storageBucket: 'karabo-ab4c7.appspot.com',
  messagingSenderId: '274048737674',
  appId: '1:274048737674:web:126b7f8697da0eb6752873',
  measurementId: 'G-G7L50L5VVF'
};
 firebase = firebase.initializeApp(firebaseConfig);

const App = () =>{
  const [user,setUser]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [emailError,setEmailError]=useState('');
  const [passwordError,setPasswordError]=useState('');
  const [hasAcoount,setHasAccount]=useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');

  }
  const clearErrors = () =>{
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () =>{
    clearErrors('');
    firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
        setEmailError(err.message);
        break;
        case "auth/wrong-password":
        setPasswordError(err.message);
        break;
      }

    });
  };
  const handleSingup = ()=> {
    clearErrors();
    firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
        
        setEmailError(err.message);
        break;
        case "auth/weak-password":
        setPasswordError(err.message);
        break;
      }

    });
  };

  const handleLogout = () => {
    firebase.auth().signOut();
  };
  const authListener = () =>{
    firebase.auth().onAuthStateChanged((user) =>{
      if(user){
        clearInputs();
        setUser(user);
       } else {
      setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();

  },[]);
  return(
    <div>
      {user ?(
        <Hero handleLogout={handleLogout}/>
      ):(
        <Login
email={email}
setEmail={setEmail}
password={password}
setPassword={setPassword}
handleLogin={handleLogin}
handleSingup={handleSingup}
hasAcoount={hasAcoount}
setHasAccount={setHasAccount}
emailError={emailError}
passwordError={passwordError}

/>

      )}

    </div>

  );
};


export default App;













{/*import React from 'react';
import './style.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckBox from '@material-ui/icons/CheckBox';
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
import {creteTheme} from '@material-ui/core/styles';



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


const useStyles = makeStyles({
  root: {
    
    color: 'black'
  }
});

function GridStyled() {
  let history = useHistory();

  const classes = useStyles();
  return <Grid className={classes.root} />;
}




export default function App() {
  return (
    <Router>
      <div  >
        
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
          <Link to="/register" style={{ textDecoration:'none'}}  > <button style={{backgroundColor:"blue"}}>Sign up</button></Link>
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
  });}}> </button><br/>
Have an account? <Link to="/register" style={{color:'blue'}} >sign in</Link>
         
         
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
          
          <h3>Sign in to your account</h3>
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
           <Link to="/todolist"  style={{textDecoration:'none'}}> <button style={{backgroundColor:"blue"}}>Sign in</button></Link>
          </Button>
          <br />
          
          
        
        </Grid>
      </Grid>
    </div>
</div>
  
}

function ToDoList({authorized }) {
  if (! authorized){
    return <Redirect to ="/Home"/>
  }
  

 
  return  <div  >
      
        
        <Grid item xs ={12} container spacing={0} >
          
          <Grid item xs={2} style={{backgroundColor:'white',textAlign:'center' , marginLeft:'120px', height:'500px' ,marginTop: '420px', marginBottom: '420px'}} >

          <TextField id="outlined-basic" label="Search" variant="outlined"><Link style={{marginTop:"100px" ,textDecoration:"none",color:"black"}}> <Search/>Search </Link></TextField>
       <br/><br/>
       <br/><br/>
         <Link style={{marginTop:"100px" ,textDecoration:"none",color:"black"}}> <WbSunny/> My Day </Link>
         <br/><br/>
         <br/><br/>
          
          <Link style={{marginTop:"100px" ,textDecoration:"none",color:"black"}}> <Star/>Important </Link>
          <br/><br/>
          <br/><br/>
         <Link style={{marginTop:"100px" ,textDecoration:"none",color:"black"}}> <CalendarToday/> Planned </Link>
         <br/><br/>
         <br/><br/>

         <Link style={{marginTop:"100px" ,textDecoration:"none",color:"black"}}> <Person/> Assigned to you </Link><br/>
    
          </Grid>
          <Grid item xs={5} style={{ height:'500px' ,marginTop: '420px', marginBottom: '420px' ,overflow:'scroll'}} >

           <div className="todo-app" style={{  marginBottom: '0px',marginTop: '0px'}} >
         
            <TodoList  />
          
           </div>
          
          <img src="https://4.bp.blogspot.com/-NusT8_BxXvU/WigtjvJvKLI/AAAAAAABOyg/VP7N3f2xgkAOOU2LPKaVCBdTsMiDJp_EgCK4BGAYYCw/s1600/Web-design.jpg"  width="100%"
              />
            
              </Grid>
          <Grid item xs={3 }style={{backgroundColor:'white',textAlign:'center' ,height:'500px',marginTop: '420px', marginBottom: '420px' }}>
            <br/>
            <Link style={{marginTop:"100px" ,textDecoration:"none",color:"black"}}><WbSunny/>add to My Day </Link>
            <br/><br/>
           <br/><br/>
            <Link style={{marginTop:"100px" ,textDecoration:"none" ,color:"black"}}><AddAlert/> Remind Me </Link>
            <br/><br/>
           <br/><br/>
           <Link style={{marginTop:"100px" ,textDecoration:"none" ,color:"black"}}><EventAvailable />  Add due Date </Link>
           <br/><br/>
           <br/><br/>
           <TextField id="outlined-basic" label="Add note" variant="outlined" />
           <br/><br/>
           <br/><br/>

          
        
           <Link to="/home" style={{ textDecoration:'none' }}  > <button style={{backgroundColor:"blue"}} >logout </button></Link>
          </Grid>
          </Grid>
</div>
    ;
}*/}





