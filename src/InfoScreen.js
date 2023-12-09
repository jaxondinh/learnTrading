import React from "react";
import database from './database.json';
import Grid from '@mui/material/Grid';
import CandleCard from "./CandleCard";
const InfoScreen = () => {
    return (
        <Grid container spacing={2} justifyContent="center">
          {database.candles.map((candle, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CandleCard candle={candle} />
            </Grid>
          ))}
        </Grid>
    );
}
export default InfoScreen;