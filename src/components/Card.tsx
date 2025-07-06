import React from 'react'
interface cardProps {
    carditems: any; // Allows the prop 'myProp' to be of any type
}

const Card: React.FC<cardProps> = ({carditems}) => {
    return (
        <div className='w-[16rem] h-[20rem] bg-[#383838] my-7 mx-5 p-5 flex items-center justify-center flex-col rounded-md'>
            <div className='text-[6rem] cursor-pointer emoji'>{carditems.emoji}</div>
            <div className='text-center'>
                <div className='text-[20px] font-bold cursor-pointer '>{carditems.code}</div>
                <div className='my-2'>{carditems.desc}</div>
            </div>
        </div>
    )
}

export default Card