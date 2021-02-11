import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    btn: {
        width: 142,
        height: 64,
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        borderRadius: 0,
        '&:hover': {
            background: theme.palette.secondary.main,
            backgroundImage: "linear-gradient(to right, rgba(230, 92, 91, 0.9), rgba(245, 93, 44, 0.9))"
        }
    },
}))

const listItems = [
    {
        id: 1,
        title: "123",
        icon: "phone",
    },
    {
        id: 2,
        title: "123",
        icon: "phone",
    },
    {
        id: 3,
        title: "123",
        icon: "phone",
    },
]

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => setOpen(!open)


    return (
        <>
            <Button onClick={toggleDrawer} className={classes.btn}>
                <Icon>shopping-cart</Icon>
                Cart 2
            </Button>
            <Drawer anchor="left" open={open} onClose={toggleDrawer}>
                <div
                    // className={`${classes.list} ${classes.fullList}`}
                    role="presentation"
                    onClick={toggleDrawer}
                    onKeyDown={toggleDrawer}
                >
                    <List>
                        {listItems.map(item => (
                            <ListItem button key={item.id}>
                                <ListItemIcon>
                                    <Icon>{item.icon}</Icon>
                                </ListItemIcon>
                                <ListItemText >{item.title}
                                </ListItemText >
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </>
    );
}
