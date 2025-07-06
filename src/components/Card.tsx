import React from 'react'

import '../styles/card.css'

interface cardProps {
    carditems: any; // Allows the prop 'myProp' to be of any type
}

const Card: React.FC<cardProps> = ({carditems}) => {

    // function copyText(text) {
    //     navigator.clipboard.writeText(text);
    //     console.log("text copied to clipboard!")
    // }

    return (
        <div className='border-transparent cursor-pointer border-4 hover:border-amber-400 card-container w-[16rem] h-[20rem] flex items-center justify-center flex-col rounded-md'>
            <div className='text-[6rem]  emoji'>{carditems.emoji}</div>
            <div className='text-center'>
                <div className='text-[20px] font-bold  card-code'>{carditems.code}</div>
                <div className='my-2'>{carditems.desc}</div>
            </div>
        </div>
    )
}

export default Card