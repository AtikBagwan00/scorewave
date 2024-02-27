import React, { useEffect, useState } from 'react';
import Navbar from "./componants/Navbar";
import MyCard from "./componants/MyCard";
import { Grid, Typography } from '@mui/material';
import { getMatches } from "./componants/api/Api";
import "./App.css";
function App() {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getMatches();
                console.log('Fetched data:', data.data);

                setMatches(data.data);
            } catch (error) {
                console.error('Unable to fetch matches:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className=''>
            <Navbar />
            <Typography  style={{ marginTop: 20 , textAlign: "center"}} variant="h3">This is Live Score Web site</Typography>

            <Grid container>
                <Grid sm="3">
                </Grid>
                <Grid sm="6">
                    {matches.map((match) => (
                        <MyCard key={match.id} match={match} />
                    ))}
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
