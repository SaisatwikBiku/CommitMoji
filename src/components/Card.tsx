import React from 'react'
interface cardProps {
    carditems: any; // Allows the prop 'myProp' to be of any type
}

const Card: React.FC<cardProps> = ({carditems}) => {
    return (
        <div className='w-70 h-[23rem] bg-[#383838] my-8 mx-5 p-5 flex items-center justify-center flex-col rounded-md cursor-pointer'>
            <div className='text-[7rem] cursor-pointer'>{carditems.emoji}</div>
            <div className='text-center'>
                <div className='text-[20px] font-bold'>{carditems.code}</div>
                <div className='my-2'>{carditems.desc}</div>
            </div>
        </div>
    )
}

export default Card