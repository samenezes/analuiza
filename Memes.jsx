import React, { useEffect, useState } from "react"

const Memes = () => {
    const [currentMemeIndex, setCurrentMemeIndex] = useState(0)
    const [memeData, setMemeData] = useState([])
    const [batataData, setBatataData] = useState({})

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => setMemeData(data.data.memes))
            .catch(error => console.error('Error fetching meme data:', error));

        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => setBatataData(data))
            .catch(error => console.error('Error fetching quote data:', error));
    }, []);

    const ChangeMeme = () => {
        const newIndex = Math.floor(Math.random() * memeData.length)
        setCurrentMemeIndex(newIndex)
        fetch('https://api.quotable.io/random')
            .then(Response => Response.json())
            .then(data => setBatataData(data))
            .catch(error => console.error(error))
    }

    return (
        <>
            {memeData.length > 0 && Object.keys(batataData).length > 0 && (
                <div>
                    <img src={memeData[currentMemeIndex].url} alt="Não carregou ;(" />
                    <h2> {memeData[currentMemeIndex].category} </h2>
                    <p> {batataData.type} </p>
                    <p> {batataData.difficulty} </p>
                </div>
            )}
        </>
    )
}

export default Memes

