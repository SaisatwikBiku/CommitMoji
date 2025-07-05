import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
    const emojis = ['😊', '😂', '😁', '😄', '😉', '😎', '😍', '🥰', '😑', '😣', '😴', '🤔', '😝', '🙃', '🤠', '🥺', '😲', '😨', '🤯', '😵']
    const [emoji, setEmoji] = useState('😊');
    function generateEmojis() {
        // console.log(Math.random()*20)
        const newRandomNumber = Math.floor(Math.random() * emojis.length);
        setEmoji(emojis[newRandomNumber]);
    }
    useEffect(() => {
        const intervalId = setInterval(generateEmojis, 5000);
        return () => clearInterval(intervalId); // Clean up on unmount
    }, []);
    return (
        <div>
            <div className='flex justify-center content-center items-center my-20 flex-col '>
                <h1 className='text-8xl font-medium my-5'>CommitM<span>{emoji}</span>ji</h1>
                <h2>Make your commits clearer, smarter, and more expressive.</h2>
            </div>
            <div>
                <Card />
            </div>
        </div>
    )
}

export default App
