import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='w-auto h-screen bg-blue-400 text-black flex justify-center items-center'><div className=' w-full sm:w-1/4 rounded-lg h-2/3 bg-white flex-initial flex items-center flex-col  justify-evenly'>
<div className='flex-start text-black-400 font-popins text-6xl '>Login</div>
 <form className='flex flex-col items-center gap-5' >
   
 <input className='flex-initial input-md border-2 border-zinc-500 rounded-md input w-full max-w-xs'datatheme="light" type="text" placeholder="Enter Your Name" ></input>
 <input className='flex-initial input-md border-2  border-zinc-500 rounded-md input w-full max-w-xs 'type="text" placeholder="Enter Your Password" ></input>

<button className='flex-inital btn-md flex-1 bg-emerald-600 text-white rounded-md'>Click me!</button>
 </form>
    
    </div></div>
  )
}
