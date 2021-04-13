import react from 'react';
import { Grid, Button } from "@material-ui/core";
import styles from '../Menu/menu.css'
import { NavLink } from "react-router-dom";

function Menu() {
    return(
        <div class="test">
            <div class="buttons">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={5}
                >
                    <Grid item>
                    <NavLink to="/play">
                        <p class="buttonText">PLAY</p>
                    </NavLink>                       
                    </Grid>
                    <Grid item>
                        <p class="buttonText">STATS</p>
                    </Grid>
                    <Grid item>
                        <p class="buttonText">ABOUT</p>
                    </Grid>
                    <Grid item>
                        <p class="buttonText">STORE</p>
                    </Grid>
                    <Grid item>
                        <p class="buttonText">SETTINGS</p>
                    </Grid>
                </Grid>
                {/* <canvas></canvas> */}
            </div>         
        </div>
    )
}

export default Menu;