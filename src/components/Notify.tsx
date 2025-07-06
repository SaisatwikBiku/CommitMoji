import React from 'react'

interface Notifyprops {
    visibility:number
}
// const Card: React.FC<cardProps>
const Notify:React.FC<Notifyprops> = (visibility) => {
    console.log("Notify component")
    return (
        <div style={{ opacity:  visibility.visibility  }} className='w-80 h-80 bg-red-600 absolute top-0 right-0'>Notify</div>
    )
}

export default React.memo(Notify)