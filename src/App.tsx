import React, { useEffect, useState, type JSX } from 'react'
import Card from './components/Card'
import Foot from './components/Foot'
import Notify from './components/Notify'
import './App.css'

function App() {
    const [visible, setVisibility] = useState(0)
    const [emoji, setEmoji] = useState('😋');

    const emojis = ['😊', '😂', '😁', '😄', '😉', '😎', '😍', '🥰', '😑', '😣', '😴', '🤔', '😝', '🙃', '🤠', '🥺', '😲', '😨', '🤯', '😵']
    
    function generateEmojis() {
        // console.log(Math.random()*20)
        const newRandomNumber = Math.floor(Math.random() * emojis.length);
        setEmoji(emojis[newRandomNumber]);
    }
    useEffect(() => {
        const intervalId = setInterval(generateEmojis, 1000);
        return () => clearInterval(intervalId); // Clean up on unmount
    }, [emoji]);

    const cards = [
        {
            emoji: "✨",
            code: ":sparkles:",
            desc: "Introduced new features."
        },
        {
            emoji: "🚧",
            code: ":construction:",
            desc: "Work in progress."
        },
        {
            emoji: "⚡",
            code: ":zap:",
            desc: "Performance optimization."
        },
        {
            emoji: "🔥",
            code: ":fire:",
            desc: "Remove code or files."
        },
        {
            emoji: "🐛",
            code: ":bug:",
            desc: "Fixed a bug."
        },
        {
            emoji: "🚑",
            code: ":ambulance:",
            desc: "Critical hotfix."
        },
        {
            emoji: "📝",
            code: ":memo:",
            desc: "Add or update documentation."
        },
        {
            emoji: "🚀",
            code: ":rocket:",
            desc: "Deployment fix."
        },
        {
            emoji: "🎨",
            code: ":art:",
            desc: "Styling fixes"
        },
        {
            emoji: "🎉",
            code: ":tada:",
            desc: "begin a project!"
        },
        {
            emoji: "✅",
            code: ":white_check_mark:",
            desc: "Add, update or passed tests"
        },
        {
            emoji: "🔒",
            code: ":lock:",
            desc: "Fix security or privacy issues."
        },
        {
            emoji: "🔐",
            code: ":closed_lock_with_key:",
            desc: "Add/Update secrets."
        },
        {
            emoji: "🔖",
            code: ":bookmark:",
            desc: "Release/Version tags."
        },
        {
            emoji: "🚨",
            code: ":rotating_light:",
            desc: "Add, update or passed tests"
        },
        {
            emoji: "💚",
            code: ":green_heart:",
            desc: "Fix CI Build."
        },
        {
            emoji: "📌",
            code: ":push_pin:",
            desc: "Pin dependencise to specific versions."
        },
        {
            emoji: "👷🏻‍♂️",
            code: ":construction_worker:",
            desc: "Add/Update CI build system."
        },
        {
            emoji: "♻",
            code: ":recycle:",
            desc: "Refactor code."
        },
        {
            emoji: "➕",
            code: ":heavy_plus_sign:",
            desc: "Added a dependency."
        },
        {
            emoji: "➖",
            code: ":heavy_minus_sign:",
            desc: "Removed a dependency."
        },
        {
            emoji: "🔧",
            code: ":wrench:",
            desc: "Add/Update configuration files."
        },
        {
            emoji: "🔨",
            code: ":hammer:",
            desc: "Add/Update development scripts."
        },
        {
            emoji: "✏",
            code: ":pencil2:",
            desc: "Fixed typos."
        },
        {
            emoji: "💩",
            code: ":poop:",
            desc: "Written bad code that needs improvement."
        },
        {
            emoji: "⏪",
            code: ":rewind:",
            desc: "Reverted changes."
        },
        {
            emoji: "🔀",
            code: ":twisted_rightwards_arrows:",
            desc: "Merged branches."
        },
        {
            emoji: "📦",
            code: ":package:",
            desc: "Add/Update compiled files or packages."
        },
        {
            emoji: "👽",
            code: ":alien:",
            desc: "Updated code due to external API changes."
        },
        {
            emoji: "🚚",
            code: ":truck:",
            desc: "Move or rename resources (e.g: files, paths, routes)."
        },
        {
            emoji: "📃",
            code: ":page_facing_up:",
            desc: "Add/Updated license."
        },
        {
            emoji: "💥",
            code: ":boom:",
            desc: "Introduced breaking changes."
        },
        {
            emoji: "🍱",
            code: ":bento:",
            desc: "Add/Updated assets."
        },
        {
            emoji: "♿",
            code: ":wheelchair:",
            desc: "Improved accessibility."
        },
        {
            emoji: "💡",
            code: ":bulb:",
            desc: "Add/Updated comments in source code."
        },
        
    ]
    function copyText(text) {
        navigator.clipboard.writeText(text);
        setVisibility(1)
        setTimeout(() => {
            setVisibility(0)
        }, 3000);
        console.log("text copied to clipboard!")
    }

    function renderCards(): JSX.Element {
        return <>
            {
                cards.map((c, i) => (
                    <div onClick={() => copyText(c.code)} key={i}>
                        <Card carditems={c} key={i} />
                    </div>
                ))
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
                {renderCards()}
            </div>
            <Foot/>
            <Notify visibility={visible}/>
        </div>
    )
}

export default App