import {useEffect, useState} from 'react'
// import Image from 'next/image';

export default function IndexPage(){
  const [inputValue, setInputValue]=useState('อะไรก็ได้')
  const [nameValue, setName]=useState('')
  const [list,setList]=useState([])

  useEffect(()=>{
    // console.log("after page")
    loadList()
  })
  const loadList=()=>{
    fetch('https://api.zenon.si/post')
    .then(resp=>resp.json())
    .then(data=>setList(data))
  }

  const tweet =()=>{
    // console.log("fsfsf")
    if (inputValue!==''){
      fetch('https:/api.zenon.si/post',{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          name:nameValue,
          content: inputValue,
        }),
        })
        .then(()=>loadList())
    }
  }
  return (
    <div className="min-h-full bg-gray-100 flex flex-col items-center ">
      {/* <Image src='/images/logo.jpg' 
      width={100} 
      height={100}
      alt="logo"
      /> */}

      <form 
      className="w-1/2 flex flex-col items-end"
      onSubmit={(event)=>{
        event.preventDefault()
        tweet()
        // alert('fsfsf')
      }}>
      <div className="mt-36">
            {/* <div>Name</div> */}
        <div>
          <input type='text' className="bg-black border border-gray-500 rounded-lg"
          value={nameValue}
          onChange={(event)=>{
            const value=event.target.value
            // console.log(value1)
            setName(value)
          }}
          required
          />
        </div>
        </div>
        <div className="w-full mt-3 bg-white p-6 rounded-lg shadow">
          <textarea rows={8} 
          className="outline-none w-full resize-none"
          value={inputValue}
          onChange={(event)=>{
            const value=event.target.value
            // console.log(value1)
            setInputValue(value)
          }}                 
          />
        </div>
        <button type='submit' className="mt-6 bg-gray-800 text-white font-bold rounded-lg px-8 py-4 shadow-lg"
        onClick={tweet}>Tweet</button>
        <button type='button' className='bg-gray-400 text-white p-4 rounded-lg'
        onClick={loadList}>
          Reflesh
        </button>
    </form>


    <div className='w-1/2 mt-8'>
      {list.map(data=>{
        return(
          <div key={data.id} className='bg-white rounded-lg shadow-lg p-6'>
          <h1 className='text-xl font-bold'>{data.name}</h1>
          <div className='mt-2 text-gray-600'>
            {data.content}
            </div>
          </div>
        )
      })}
    </div>
  </div>
  )
}