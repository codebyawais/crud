// // 'use client'
// // import React, { useState } from 'react'

// // const page = () => {
// //  const [name, setName]=useState('')
// //  const [nameShow, setNameShow]=useState([])
// //  return (
// //     <div>
// //         <div className='bg-slate-500 min-h-[100vh]'>
// //        <header className='bg-slate-900 '>
// //         <h1 className='text-3xl text-white'>Todos</h1>
// //         </header>
// //         <main className='p-4'>
// //             <input type='text' placeholder='enter a new todo' className='rounded '
// //             onChange={(e)=>{setName(e.target.value)}}
// //             />
        
// //         <button className='bg-red-900'
// //         onClick={()=>{return (setNameShow([...nameShow,name]))}}
// //         >add me</button>
// //         </main>
// //       {nameShow.map(item=>{return(<h1 key={item}>{item}</h1>)})}


// //        </div>
// //     </div>
// //   )
// // }

// // export default page


// 'use client'
// import React, { useState } from 'react'

// const page = () => {
//   const [name, setName]=useState('')
//   const [nameShow, setNameShow]=useState([])
//   return (
//     <div>
//      <h1>todo list</h1>
//      <input type='text' placeholder='enter the text' 
//      onChange={(e)=>{setName(e.target.value)}}  />
//      <button onClick={()=>{return(setNameShow([...nameShow, name]))}} >add me</button>
//     {/* <p>{name}</p> */}
//     {/* <p> {nameShow.map(item=>{return(<h1 key={item}>{item}</h1>)})}</p> */}
//         <p>{nameShow.map(item=>{return(<h1 key={item}>{item}</h1>)}) }</p>

//     </div>
//   )
// }

// export default page

'use client'
import React, { useState } from 'react'

const page = () => {
  const [name,setName]=useState('awais')
  const [nameShow,setNameShow]=useState([]) 
  return (
    <div>

        <h1>todo list</h1>
        <input type='text' placeholder='enter the text' 
        onChange={(e)=>{setName(e.target.value)}} />  
        
        <button 
        onClick={()=>{return(setNameShow([...nameShow, name]))}}
        >add me</button>
   {/* {name} */}
   <p>{nameShow.map(item=>{return(<h1 key={item}>{item}</h1>)}) }</p>
    </div>
  )
}

export default page





































// 'use client'
// import React, { useState } from 'react'



// const page = () => {

// const [name, setName] = useState('')
// // initializes a state variable name to store the current input value.
// const [show, setShow]=useState([])
// //initializes a state variable show as an empty array to store the list of added items.
//     return (
//         <div>
//             <h1>todo list</h1>
//             <input type='text' placeholder='enter the text'
//             //When the input value changes, setName updates the name state. 
//             onChange={(e)=>{setName(e.target.value)}}  />

 
 
//             <button onClick={()=>{setShow([...show, name])}}>Add me</button>
 
//        {/* <p>{name}</p> */}
        
//         {show.map(item =>{return  (<h1 key={item}>{item}</h1>)  })}
        
//         </div>
 
   
//     )
// }

// export default page