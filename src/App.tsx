import React, { useEffect, useState, type JSX } from 'react'
import Card from './components/Card'
// import SearchBar from './components/SearchBar'
import './App.css'

function App() {
    const emojis = ['😊', '😂', '😁', '😄', '😉', '😎', '😍', '🥰', '😑', '😣', '😴', '🤔', '😝', '🙃', '🤠', '🥺', '😲', '😨', '🤯', '😵']
    const [emoji, setEmoji] = useState('😋');
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
            emoji:"✨",
            code: ":sparkles:",
            desc: "Introduced new features."
        },
        {
            emoji:"🚧",
            code: ":construction:",
            desc: "Work in progress."
        },
        {
            emoji:"⚡",
            code: ":zap:",
            desc: "Performance optimization."
        },
        {
            emoji:"🔥",
            code: ":fire:",
            desc: "Remove code or files."
        },
        {
            emoji:"🐛",
            code: ":bug:",
            desc: "Fixed a bug."
        },
        {
            emoji:"🚑",
            code: ":ambulance:",
            desc: "Critical hotfix."
        },
        {
            emoji:"📝",
            code: ":memo:",
            desc: "Add or update documentation."
        },
        {
            emoji:"🚀",
            code: ":rocket:",
            desc: "Deployment fix."
        },
        {
            emoji:"🎨",
            code: ":art:",
            desc: "Styling fixes"
        },
        {
            emoji:"🎉",
            code: ":tada:",
            desc: "begin a project!"
        },
        {
            emoji:"✅",
            code: ":white_check_mark:",
            desc: "Add, update or passed tests"
        },
    ]

    function renderCards(): JSX.Element  {
        return <>
            {
                cards.map((c,i)=> {
                    <Card carditems={c} key={i}/>
                })
            }
        </>
    }
    return (
        <div>
            <div className='flex justify-center content-center items-center my-20 flex-col '>
                <h1 className='text-8xl font-medium my-5'>CommitM<span className='text-7xl'>{emoji}</span>ji</h1>
                <div>Make your commits clearer, smarter, and more expressive!</div>
            </div>
            {/* <SearchBar/> */}
            <div className='flex flex-wrap justify-center mx-20'>
                {renderCards() }
            </div>
        </div>
    )
}

export default App