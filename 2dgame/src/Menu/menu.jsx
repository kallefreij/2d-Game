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
                        <NavLink to="/play" style={{textDecoration: 'none'}}>
                            <p class="buttonText">PLAY</p>
                        </NavLink>                       
                    </Grid>
                    <Grid item>
                        <NavLink to="/stats" class="buttonText">
                            <p>STATS</p>
                        </NavLink>                        
                    </Grid>
                    <Grid item>
                        <NavLink to="/about" class="buttonText">
                            <p>ABOUT</p>
                        </NavLink>
                    </Grid>
                    <Grid item>
                        <NavLink to="/store" class="buttonText">
                            <p>STORE</p>
                        </NavLink>
                    </Grid>
                    <Grid item>
                        <NavLink to="/settings" class="buttonText">
                            <p>SETTINGS</p>
                        </NavLink>
                    </Grid>
                </Grid>
                {/* <canvas></canvas> */}
            </div>         
        </div>
    )
}

export default Menu;