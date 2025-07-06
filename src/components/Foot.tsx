import React from 'react'

const Foot = () => {
    console.log("Footer component")
    return (
        <div className='flex bg-amber-400 text-black text-xl py-10 px-20 mt-20 justify-between'>
            <a target='_blank' href="https://prathmesh-ka-github.github.io/pratham-c0des./">
                <div className='cursor-pointer hover:underline'>Made with ❤ and alot of Coffee by &nbsp;<span>pratham-c0des.</span></div>
            </a>

            <a target='_blank' href="https://github.com/prathmesh-ka-github/CommitMoji">
                <div className='cursor-pointer hover:underline'>Contribute</div>
            </a>
        </div>
    )
}

export default React.memo(Foot)