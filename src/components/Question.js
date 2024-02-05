import React, { useEffect, useState } from 'react';
import googleFonts from 'google-fonts';
import '../styles/Question.css';
import pachuImage from '../images/pachu.png';

const Question = () => {
    useEffect(() => {
        googleFonts.add({
            'Roboto': true,
            'Shadows Into Light': true,
            'Great Vibes': true,
            'Sacramento': true 
        });
    }, []);

    const promptArray = [
        'are you sure?',
        'are you really really sure?',
        'think again!!',
        'think once more REALLY hard',
        'you might regret this!!',
        'are you ABSOLUTELY certain?',
        'you are breaking my heart :(',
        'why are you being so mean??',
        'the YES button is so big just click it!!',
        'is this really what you want?',
        'this decision could change everything...',
        'think about the consequences!',
        'are you prepared for the implications?',
        'you have to reconsider!!!'
    ];

    const gifUrls = [
        'https://gifdb.com/images/high/mochi-mochi-peach-cat-gif-file-1574kb-phdsb8efhum27qd3.gif',
        'https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif'
    ];

    const [noButtonText, setNoButtonText] = useState('No');
    const [yesButtonSize, setYesButtonSize] = useState(1);
    const [promptIndex, setPromptIndex] = useState(0);
    const [currentGifIndex, setCurrentGifIndex] = useState(0);
    const [showButtons, setShowButtons] = useState(true);
    const [displayText, setDisplayText] = useState("Will you be my Valentine's, Pachu?");
    const [imagePositions, setImagePositions] = useState([]);
    const [showSentence, setShowSentence] = useState(false);

    const handleNoButtonClick = () => {
        setNoButtonText(promptArray[promptIndex]);
        setPromptIndex((prevIndex) => (prevIndex + 1) % promptArray.length);
        setYesButtonSize((prevSize) => prevSize + 0.5);
        const newPosition = {
            left: `${Math.random() * 90}vw`,
            top: `${Math.random() * 90}vh`
        };
        setImagePositions((prevPositions) => [...prevPositions, newPosition]);
        setShowSentence(true);
    };

    const handleYesButtonClick = () => {
        setShowButtons(false);
        setDisplayText("I always knew you liked me :)");
        setCurrentGifIndex(1);
        setImagePositions([]);
        setShowSentence(false);
    };

    return (
        <div className="question-container">
            {imagePositions.map((position, index) => (
                <img
                    key={index}
                    src={pachuImage}
                    alt="Pachu"
                    style={{
                        position: 'absolute',
                        left: position.left,
                        top: position.top,
                        height: '100px',
                        zIndex: '-1'
                    }}
                />
            ))}
            <img style={{ height: "300px" }} src={gifUrls[currentGifIndex]} alt="GIF" /><br />
            <h1 className="question-text" style={{ fontFamily: 'Great Vibes, cursive', fontSize: '75px' }}>{displayText}</h1>
            {showSentence && <p style={{ fontSize: '20px', fontFamily: 'Shadows Into Light, cursive' }}>The photo will keep coming till you press Yes😊</p>}
            {showButtons && (
                <div className="button-container">
                    <button className="btn btn-success m-2" style={{ fontSize: `${yesButtonSize}rem` }} onClick={handleYesButtonClick}>Yes</button>
                    <button className="btn btn-danger m-2" style={{ fontSize: '1rem' }} onClick={handleNoButtonClick}>{noButtonText}</button>
                </div>
            )}
        </div>
    );
};

export default Question;
