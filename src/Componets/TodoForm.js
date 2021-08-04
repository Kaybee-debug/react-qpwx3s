import React,{useState, useEffect, useRef} from 'react'
import firebase from "firebase/app";
import "firebase/firestore"

function TodoForm(props){
  const [Datalist,setData]=useState([{activity:''}])

  const[input, setInput]= useState(props.edit ? props.edit.value: '');
  //const [newActivity,setNewActivity]=useState();

  const [newDailyActivity, setNewDailyActivity] =useState()
  
  const onCreate = () =>{
    const db =firebase.firestore()
    db.collection("users").add({activity: newDailyActivity})
  }
  

  const inputRef= useRef(null)

  useEffect(() => {
    inputRef.current.focus()

  })

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e =>{
    e.preventDefault();

    props.onSubmit({
      id:Math.floor(Math.random()*10000),
     text: input
    });

setInput('');
  };
  return(
<form className="todo-form" onSubmit={handleSubmit}>
  {props.edit ? ( 
  <>
  <input
 type="text"
placeholder='update your item'
value={input}
name='text'
className='todo-input edit'
onChange={handleChange}
ref={inputRef}
/>
<button className='todo-button edit'
>update </button> 
</>
) :  (
<>
<input
 type="text"
placeholder='Add to do'
value={newDailyActivity}
name='text'
className='todo-input'
onChange={(e)=>setNewDailyActivity(e.target.value)}
ref={inputRef}
/>
<button className='todo-button'
onClick={onCreate}
>Add todo</button>


</>

)}
<br></br>

{/*<button onClick={onCreate}>create</button>*/}
<br></br>
<br></br>

<button onClick={()=>{ 
  let val=[]
  console.log("getting")
  console.log(Datalist)
  firebase.firestore().collection('users').get().then(response=>{
  console.log(response)
  response.forEach(data=>{
       
  
    
    val.push({...{id:data.id},...data.data()})
     console.log(data.id);
   
     //setData(...Datalist,val)

     

   })
setData(val)
   //console.log("list = ",val)
   console.log("list = ",Datalist)

})
}}>View</button>
  <div className = "App" >
  <ul>
  {Datalist.map(person => {
    return (
      <li key={person.id} onClick={(data)=>{
        console.log("click",person)

      }}>
        {person.activity} 
      </li>
    )
  })}
</ul>
     </div>



  

</form>

  )
}
export default TodoForm