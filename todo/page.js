'use client'
import React, { useState } from 'react'

const page = () => {
  const  [name,setName]=useState('');
  const [nameShow,setNameShow]=useState([])
   const inputHandler=()=>{
    if(!name){
      alert('this is empty string')
    }
    let alreadyExists=false;
    nameShow.map((item,index)=>{if(item.title==name){
      alreadyExists=true;
      return;
    }
    })
    if(alreadyExists){
      alert('this is already exist')
      return;
    }

    setNameShow([...nameShow,{id:nameShow.length+1,title:name}])
   }
  return (
    <div>
       <input type='text' placeholder='enter todo text'
       onChange={(e)=>{setName(e.target.value)}} />

       <button
       onClick={()=>{inputHandler(); }}
       >add todo</button>
       <div>
          {nameShow.map(item =>{ 
            return <div key={item.id} className='flex'>
             <h1> {item.title}</h1> <button className='bg-red-400'
             onClick={()=>{
                // Use filter to create a new array without the item with the given id
                const updatedTodos = nameShow.filter(toDeleteItem => toDeleteItem.id !== item.id);
                setNameShow(updatedTodos);}
              }>delete</button>
                  </div> 
            })}     
         </div>

      {/* delete button section */}
        
    


    </div>
  )
}

export default page


// 'use client'

// import React, { useState } from 'react'

// const page = () => {
//   const [name,setName]=useState('')
//   const [nameShow,setNameShow]=useState([])
//   const clickHandler=()=>{
//     if(!name){
//       alert('this is an empty string')
//     }
//     let alreadyExists=false;
//       nameShow.map((item ,index)=>{if(item.title==name){
//         alreadyExists=true;
//       }
//     })
//     if(alreadyExists){
//       alert('this isalready exist')
//       return;
//     }
//         setNameShow([...nameShow,{id:nameShow.length+1, title:name}])

//     // setNameShow([...nameShow, name])
//   }
//   return (
//     <div>
//      <input type='text' placeholder='enter the todo' 
//      onChange={(e)=>{setName(e.target.value)}}
//      />    
//      <button
//       onClick={()=>{clickHandler();}}
//      >add todo</button>

//    <div> 
//     {
//       nameShow.map(item=>{return <div key={item}> {item.title} </div>})
//     }
//    </div>












//     </div>
//   )
// }

// export default page







































// 'use client'
// // run  on client side
// import React from 'react'
// import { useState } from 'react'
// //it is a react hook used to manage state it 
// //also allow the component to track and update user input



// const page = () => {
//   //state management
//   //name:a piece of state that stores the text entered by user in input field intially empty string
//   //setname:a function to update the value of name
//   const [name, setName]=useState('')


//   // const [nameShow , setNameShow] = useState([])

 
//   return (
//     <div>
//         <div className='bg-black h-[100vh]  flex items-center justify-center'>
//             <div className='bg-red-900 min-h-[50vh] w-[50%] '>



//               <h1 className='text-white'>Todo List</h1>


//               <input type='text' placeholder='Enter the name'
//                className='h-[40px] mt-6' 
//                 onChange={(e)=>{setName(e.target.value)}}
//                 />
              
//               <button className='bg-black h-[45px] ml-4 text-white'
              
//               //  onClick={()=>{setNameShow([...nameShow , name])}}
//                >
//               Click me </button>
            
//           <p>{name}</p>
//           {/* {nameShow.map(item=>{ return (<h1 key={item}>{item}</h1>)})} */}

//             </div>
//         </div>
//     </div>
//   )
// }

// export default page