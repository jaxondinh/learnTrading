import React, { useState, useEffect } from 'react';
import { Card, CardMedia, Typography, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import database from './database.json';
import DojiImage from './images/Doji.png';
import ShootingStarImage from './images/Shooting-Star.png';
import HammerImage from './images/Hammer.png';
import HangingManImage from './images/Hanging-Man.png';
import SpinningTopImage from './images/Spinning-Top.png';

const Quiz = () => {
    const [currentCandle, setCurrentCandle] = useState(null);
    const [selectedName, setSelectedName] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);
    const imageMap = {
        "Doji": DojiImage,
        "The Shooting Star": ShootingStarImage,
        "The Hammer": HammerImage,
        "The Hanging Man": HangingManImage,
        "The Spinning Top": SpinningTopImage,
      };
    useEffect(() => {
        const selectRandomCandle = () => {
            const randomIndex = Math.floor(Math.random() * database.candles.length);
            return database.candles[randomIndex];
        };

        setCurrentCandle(selectRandomCandle());
    }, []);

    const handleNameChange = (event) => {
        setSelectedName(event.target.value);
    };

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const checkAnswer = () => {
        if (currentCandle && selectedName === currentCandle.name && selectedType === currentCandle.type) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };
    const selectRandomCandle = () => {
        const randomIndex = Math.floor(Math.random() * database.candles.length);
        setIsCorrect(null);
        return database.candles[randomIndex];
    };
    return (
        <div>
            {currentCandle && (
                <Card>
                    <CardMedia
                        component="img"
                        height="140"
                        image={imageMap[currentCandle.name]}
                        alt={currentCandle.name}
                        sx={{ objectFit: 'contain' }}
                    />
                    <FormControl fullWidth>
                        <InputLabel>Name</InputLabel>
                        <Select value={selectedName} label="Name" onChange={handleNameChange}>
                            {database.candles.map((candle, index) => (
                                <MenuItem key={index} value={candle.name}>{candle.name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth>
                        <InputLabel>Type</InputLabel>
                        <Select value={selectedType} label="Type" onChange={handleTypeChange}>
                            <MenuItem value="Bullish">Bullish</MenuItem>
                            <MenuItem value="Bearish">Bearish</MenuItem>
                            <MenuItem value="Neutral">Neutral</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained" onClick={checkAnswer}>Check Answer</Button>
                    <Button variant="contained"                         onClick={() => {
                            setCurrentCandle(selectRandomCandle());
                            setSelectedName('');
                            setSelectedType('');
                        }} >Random Candle</Button>
                    {isCorrect !== null && (
                        <Typography>
                            {isCorrect ? '✅ Correct! ✅' : '❌ Incorrect. Try again! ❌'}
                        </Typography>
                    )}
                </Card>
            )}
        </div>
    );
};

export default Quiz;
