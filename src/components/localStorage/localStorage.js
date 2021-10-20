import React ,{useEffect, useState}from 'react';
// import Todos from './components/todos';

function LocalStorage() {
  // const data=["vishak","ravi","aravind","shyam","shakkela"]
  const [item, setitem] = useState('');
  const [data, setdata] = useState([]);

  useEffect(()=>{
    const items=JSON.parse(localStorage.getItem('UserData'))
    if(items){
      setdata(items)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('UserData',JSON.stringify(data))
  },[data])


  const submitHandler=(e)=>{
    e.preventDefault()
    setdata([...data,item])
    localStorage.setItem('UserData',JSON.stringify(data))
    setitem('')
  }


  return (
    <div className="LocalStorage">
    <form onSubmit={submitHandler}>
      <input type="text" value={item} onChange={(e)=>setitem(e.target.value)}/>
      <button>Submit</button>
         </form>
    {data.map((item,index)=>{
     return <li key={index}>{item}</li>
    })}
    </div>
  );
}

export default LocalStorage;
