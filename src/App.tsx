import React, { useEffect, useState } from 'react'
import Card from './components/Card'
// import SearchBar from './components/SearchBar'
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

    const cards = [
        {
            emoji: "😎",
            code: ":cool:",
            desc: "For the time you make cool commits!"
        },
        {
            emoji: "✨",
            code: ":sparkles:",
            desc: "For the time you make new features!"
        }
    ]
    return (
        <div>
            <div className='flex justify-center content-center items-center my-20 flex-col '>
                <h1 className='text-8xl font-medium my-5'>CommitM<span className='text-7xl'>{emoji}</span>ji</h1>
                <div>Make your commits clearer, smarter, and more expressive!</div>
            </div>
            {/* <SearchBar/> */}
            <div className='flex flex-wrap justify-center mx-20'>
                <Card carditems={cards[0]} />
                <Card carditems={cards[1]} />
                <Card carditems={cards[0]} />
                <Card carditems={cards[0]} />
                <Card carditems={cards[0]} />
                <Card carditems={cards[0]} />
                <Card carditems={cards[0]} />
            </div>
        </div>
    )
}

export default App
