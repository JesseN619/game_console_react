import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import controllers_img from '../../assets/images/controllers.jpg';
import { Link } from 'react-router-dom';

interface Props{
    title: string;
}


const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0',
        background: 'black',
        color: 'white',
        fontFamily: 'Arial'
    },
    navbar_container: {
        display: 'flex',
        height: '65px',
        fontSize: '120%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: '10px',
        marginLeft: '10px',
    },
    logo: {
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'white'
    },
    logo_navigation: {
        listStyle: 'none',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a: {
        display: 'block',
        padding: '1em',
        listStyle: 'none',
        textDecoration: 'none',
        color: 'white'
    },
    main: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${controllers_img});`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        height: '175px',
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontSize: '160%',
        alignItems: 'center'
    }
    
})


export const Home = (props:Props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={ `${classes.logo} `}>
                        <Link to='/' className={ `${classes.logo_a} ${classes.logo_navigation}` }>Consoles.DB</Link>
                    </h1>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                        <li>
                            <Link to='/' className={classes.nav_a}>Home</Link>
                        </li>
                        <li>
                            <Link to='/signin' className={classes.nav_a}>Sign In</Link>
                        </li>
                        <li>
                            <Link to='/dashboard' className={classes.nav_a}>Dashboard</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>{ props.title }</h1>
                    <p>Share your collection with other enthusiasts</p>
                    <Button size='large' variant="contained">Click Me</Button>
                </div>
            </main>
        </div>
    )
}