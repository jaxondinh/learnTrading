import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { imageMap } from './imageMapping.js';

const CandleCard = ({ candle }) => {
      const typeColor = (type) => {
        switch (type) {
            case "Bullish":
                return "green";
            case "Bearish":
                return "red";
            case "Reversal":
                return "purple";
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