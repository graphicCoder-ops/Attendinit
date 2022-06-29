    import React from 'react'
class Card extends React.Component{
    render(){
        return (<div className='bg-white rounded-md p-4 drop-shadow-md text-black font-mono '>
            <div className='p-2 px-0 text-zinc-600 text-lg'>Card #{this.props.number}</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur nesciunt vel vero minus fugit quibusdam cum et voluptates libero provident soluta voluptatum, dolor debitis sequi quas? Eum quisquam iste error?</div>
        </div>)
    }
}
export default Card