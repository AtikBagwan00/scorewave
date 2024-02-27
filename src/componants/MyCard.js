import { Carpenter, NestCamWiredStandTwoTone } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React from "react";



const MyCard = ({ match }) => { // Accepting 'match' as props

    const getMatchcard = () => {
        return (
            <Card style={{margin:20}}>
                <CardContent >
                    <Grid container justifyContent="center" spacing={4} alignItems="center" >
                        <Grid item>
                            <Typography variant="h5">{match.teamInfo[0].shortname}</Typography> {/* Using match data */}
                        </Grid>
                        <Grid item>
                            <img style={{ width: 85 }} src={require("../componants/img/OIP.jpg")} />
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">{match.teamInfo[1].shortname}</Typography> {/* Using match data */}
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pt: 2 }}>
                    <Grid container justifyContent="center" spacing={5}>
                        <Button variant="outlined" color="secondary">
                            Show Detail
                        </Button>
                        <Button variant="outlined" color="secondary" style={{marginLeft:5}}>
                            {match.date}
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        );
    };

    return getMatchcard();
};

export default MyCard;
