import React, { useEffect, useState, type JSX } from 'react'
import Card from './components/Card'
import Foot from './components/Foot'
import Notify from './components/Notify'
import SearchBar from './components/SearchBar'
import './App.css'


function App() {
    const [visible, setVisibility] = useState(0)
    const [emoji, setEmoji] = useState('😋');
    const [copiedEmoji, setCopiedEmoji] = useState('');
    const [search, setSearch] = useState('');

    const emojis = ['😊', '😂', '😁', '😄', '😉', '😎', '😍', '🥰', '😑', '😣', '😴', '🤔', '😝', '🙃', '🤠', '🥺', '😲', '😨', '🤯', '😵']
    // const emojis = [1,2,3,4,5,6,7,8,9,0]
    
    function generateEmojis() {
        const newRandomNumber = Math.floor(Math.random() * emojis.length);
        setEmoji(emojis[newRandomNumber]);
    }
    useEffect(() => {
        const intervalId = setInterval(generateEmojis, 1000);
        return () => clearInterval(intervalId); 
        // Clean up on unmount
    }, []);

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
    function copyText(text:string, emoji:string) {
        navigator.clipboard.writeText(text);
        setVisibility(1)
        setCopiedEmoji(emoji);
        setTimeout(() => {
            setVisibility(0)
        }, 3000);
        console.log("text copied to clipboard!", emoji)
    }

    const filteredCards = cards.filter(c =>
        c.emoji.includes(search) ||
        c.code.toLowerCase().includes(search.toLowerCase()) ||
        c.desc.toLowerCase().includes(search.toLowerCase())
    );

    function renderCards(): JSX.Element {
        if (filteredCards.length === 0) {
            return (
                <div className="flex flex-col items-center justify-center w-full my-16">
                    <span className="text-7xl mb-4">😢</span>
                    <span className="text-lg text-gray-500">No emojis found</span>
                </div>
            );
        }
        return (
            <>
                {filteredCards.map((c, i) => (
                    <div onClick={() => copyText(c.code, c.emoji)} key={i}>
                        <Card carditems={c} />
                    </div>
                ))}
            </>
        );
    }
    return (
        <div>
            <div className='flex justify-center content-center items-center my-20 flex-col '>
                <h1 className='text-8xl font-medium my-5'>CommitM<span className='text-7xl'>{emoji}</span>ji</h1>
                <div>Make your commits clearer, smarter, and more expressive!</div>
            </div>
            <SearchBar value={search} onChange={e => setSearch(e.target.value)} />
            <div className='flex flex-wrap justify-center mx-20'>
                {renderCards()}
            </div>
            <Foot/>
            <Notify visibility={visible} emoji={copiedEmoji}/>
        </div>
    )
}

export default App