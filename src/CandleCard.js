import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import DojiImage from './images/Doji.png';
import ShootingStarImage from './images/Shooting-Star.png';
import HammerImage from './images/Hammer.png';
import HangingManImage from './images/Hanging-Man.png';
import SpinningTopImage from './images/Spinning-Top.png';

const CandleCard = ({ candle }) => {
    const imageMap = {
        "Doji": DojiImage,
        "The Shooting Star": ShootingStarImage,
        "The Hammer": HammerImage,
        "The Hanging Man": HangingManImage,
        "The Spinning Top": SpinningTopImage,
      };
      const typeColor = (type) => {
        switch (type) {
            case "Bullish":
                return "green";
            case "Bearish":
                return "red";
            default:
                return "black";
        }
    };
    return (
    <Card sx={{ maxWidth: 345, padding: 0, marginRight: 'auto', marginLeft: 'auto' }}>
      <CardMedia
        component="img"
        height="140"
        image={imageMap[candle.name]}
        alt={candle.name}
        sx={{ objectFit: 'contain' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {candle.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Type: <span style={{ color: typeColor(candle.type) }}>{candle.type}</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {candle.desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CandleCard;