import React, { useState} from 'react';
import { Drawer as MUIDrawer, 
    ListItem, 
    List, 
    ListItemText, 
    ListItemIcon, 
    Theme,
    useTheme, 
    makeStyles, 
    createStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle,
    CssBaseline
} from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import clsx from 'clsx';
import { RouteComponentProps, withRouter, Switch, Route } from "react-router-dom";
import { DataTable, ConsoleForm } from '../../components';

const drawerWidth = 200;

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
        background: 'rgb(121, 102, 207)',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    toolbar:{
      display: 'flex',
    },
    toolbar_button: {
      marginLeft: 'auto',
      color: 'white'
    },
    myConsoles: {
        marginLeft: theme.spacing(6),
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(5)
    },
  }),
);

interface DashProps{
    history: RouteComponentProps["history"];
    location: RouteComponentProps['location'];
    match: RouteComponentProps['match'];
}

export const Dashboard = withRouter((props: DashProps) => {

    const darkTheme = createTheme({
        palette: {
          type: 'dark',
        },
      });

    console.log(props)
    // same as history = props.history -- known as object deconstruction
    const { history } = props;
    const classes = useStyles();
    const theme = useTheme();
    // UseState Hook
    const [open, setOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    // functions to set the state of 'open'
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    // functions to set the state of 'dialogOpen'
    const handleDialogClickOpen = () => {
      setDialogOpen(true);
    };
    const handleDialogClickClose = () => {
      setDialogOpen(false);
    };

    // organization - keeping a few items for later
    const itemsList = [
        {
            text: 'Home',
            onClick: () => history.push('/')
        },
        {
            text: 'Sign In',
            onClick: () => history.push('/signin')
        }
    ];

    // Finally - returning our Dashboard using all the info stored above
    return (
        <ThemeProvider theme={darkTheme}>
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
            position='fixed'
            className={clsx(classes.appBar, {
                // ternary operator
                [classes.appBarShift]: open
            })}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap>
                        Dashboard
                    </Typography>
                    <Button className={classes.toolbar_button} onClick={handleDialogClickOpen}><AddBoxRoundedIcon /> &nbsp; New Console</Button>

                    {/*Dialog Pop Up begin */}
                    <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby="form-dialog-title">
                      <DialogTitle id="form-dialog-title">Add New Console</DialogTitle>
                      <DialogContent>
                          <ConsoleForm />
                      </DialogContent>
                      <DialogActions>
                        <Button onClick = {handleDialogClickClose} color="secondary">Cancel</Button>
                        <Button onClick={handleDialogClickClose}>Done</Button> 
                      </DialogActions>
                    </Dialog>

                </Toolbar>
            </AppBar>
            <MUIDrawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {itemsList.map((item, index)=> {
                        const { text, onClick } = item;
                        return (
                            <ListItem button key={text} onClick={onClick}>
                                <ListItemIcon>{index === 0 ? <HomeRoundedIcon /> : <ExitToAppRoundedIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        )
                    })}
                </List>
            </MUIDrawer>
            <main 
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />

                <h1 className={classes.myConsoles}>My Consoles</h1>

                <DataTable />
            </main>
        </div>
        </ThemeProvider>
    )
})