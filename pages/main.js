import Card from "../components/card"
export default function Home(){
    return(
        
        <div className=" bg-wall1 bg-contain h-screen w-screen flex justify-center items-center">
            <div className="fixed top-0 left-0 z-10 text-[#4c3626] backdrop-brightness-100 backdrop-blur-sm bg-white/30 w-screen p-4 font-bold-800  px-10 drop-shadow-md text-7xl">Sessions</div>
          <div className="grid grid-cols-2 gap-10 w-2/3">   <Card number="1"/>
             <Card number="2"/> 
             <Card number="3"/> 
             <Card number="4"/>
             <Card number="4"/>
             <Card number="4"/>
             <Card number="4"/>
             <Card number="4"/> </div>
         </div>
    )
}
