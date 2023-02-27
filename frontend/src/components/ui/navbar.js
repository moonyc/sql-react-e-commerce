import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Link } from 'gatsby'


import search from '../../images/search.svg'
import cart from '../../images/cart.svg'
import menu from '../../images/menu.svg'
import account from '../../images/account-header.svg'

const useStyles = makeStyles(theme => ({
    coloredIndicator: {
        backgroundColor: '#fff'
    },
    logoText: {
        color: theme.palette.common.offBlack,
        

    },
    text: {
      [theme.breakpoints.down('md')]: {
        fontSize: '2rem'
    }
    },
   
    tabs: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    icon: {
        height: "2.5rem",
        width: "2.5rem"
    },
    logoContainer: {
        [theme.breakpoints.down('md')]: {
            marginRight: "auto",
            
        }
    },
    drawer: {
        backgroundColor: theme.palette.primary.main,
    },
    listItemText: {
        color: "#fff"
    },
    tab: {
        ...theme.typography.body1,
        fontSize: "0.9rem"
    }
}))

function NavBar({ categories }) {
    
    const classes = useStyles()
    const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'))

    const [drawerOpen, setDrawerOpen] = useState(false)
     
    
    const routes = [...categories, {node: {name: 'Contact Us', strapiId: 'contact', link: '/contact'}}]

    const activeIndex = () => {
        const found = routes.indexOf(
            routes.filter(
                ({ node: { name, link } }) => 
                 link || `/${name.toLowerCase()}/` === window.location.pathname
            )[0])

        return found === -1 ? false : found
    }

    const tabs = (
        <Tabs 
        value={activeIndex()} 
        classes={{ indicator: classes.coloredIndicator, root: classes.tabs}}>
            {routes.map(route => (
                <Tab 
                component={Link}
                to={route.node.link || `/${route.node.name.toLowerCase()}`}
                classes={{root: classes.tab}}
                label={route.node.name} 
                key={route.node.strapiId} />
            ))}
        </Tabs>
    )

    const drawer = (
        <SwipeableDrawer 
           open={drawerOpen} 
           onOpen={() => setDrawerOpen(true)}
           onClose={() => setDrawerOpen(false)}
           classes={{ paper: classes.drawer}}
           >
          <List disablePadding>
            {routes.map((route, index)=>(
                <ListItem 
                   selected={activeIndex() === index}
                   divider 
                   button 
                   key={route.node.strapiId} 
                   component={Link} 
                   to={route.node.link || `/${route.node.name.toLowerCase()}`}
                   
                   >
                    <ListItemText primary={route.node.name} classes={{ primary: classes.listItemText}} key={route.node.strapiId + `1`}/>
                </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
    )

    const actions = [
        {icon: search, alt: "string", visible: true, onClick: () => console.log("search")}, 
        {icon: cart, alt: "cart", visible: true, link: "/cart"},
        {icon: account, alt: "account", visible: !matchesMD, link: "/account"},
        {icon: menu, alt: 'menu', visible: matchesMD, onClick: () => setDrawerOpen(true)}
        ]
    return (
        <AppBar color="transparent" elevation={0} position="static">
            <Toolbar>
                <Button component={Link} to="/" classes={{ root: classes.logoContainer}}>
                    <Typography variant="h1" classes={{root: classes.text}}>
                        <span className={ classes.logoText }>Sasha</span>corp
                    </Typography>
                </Button>
                {matchesMD ? drawer : tabs}
                {actions.map(action => 
                 { if (action.visible){
                    return (
                    <IconButton
                      key={action.alt}
                      component={action.onClick ? undefined: Link}
                      to={action.onClick ? undefined: action.link}
                      onClick={action.onClick}
                    >
                    <img 
                    className={classes.icon}
                    src={action.icon} 
                    alt={action.alt} 
                    />
                    </IconButton>
                    )}
                    else { return (null)}
                 } 
                )}
            </Toolbar>
        </AppBar>
    )
}

export default NavBar