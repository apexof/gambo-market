import React from 'react'
import Link from '../Elements/Link'
import { makeStyles } from '@material-ui/core/styles';
import { Container, ListItemIcon, ListItem, List, Typography, Box } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import DialpadIcon from '@material-ui/icons/Dialpad';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const useStyles = makeStyles(theme => ({
    topFooter: {
        padding: "12px 0",
        borderBottom: `1px solid ${theme.palette.grey["50"]}`,
        background: theme.palette.primary.main,
    },
    list: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    socMenu: {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
    },
    iconWrap: {
        minWidth: "unset",
        marginLeft: 15,
    },
    contactsMenuItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& svg": {
            marginRight: "5px",
            color: theme.palette.secondary.main,
        },
        "& + $contactsMenuItem": {
            marginLeft: theme.spacing(2),
        }
    },
    contactsMenuText: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.text.primary,
    },
    icon: {
        color: theme.palette.primary.contrastText,
        transition: "all 0.3s ease",
        "&:hover": {
            color: theme.palette.secondary.main,
        }
    }
}))

export default function TopFooter() {
    const classes = useStyles();
    const menuArray = [
        {
            id: 1,
            icon: <FacebookIcon className={classes.icon} />
        },
        {
            id: 2,
            icon: <InstagramIcon className={classes.icon} />
        },
        {
            id: 3,
            icon: <TwitterIcon className={classes.icon} />
        },
        {
            id: 4,
            icon: <LinkedInIcon className={classes.icon} />
        },
    ]
    return (
        <div className={classes.topFooter}>
            <Container>
                <div className={classes.list}>
                    <Box display="flex">
                        <a href="tel:1800-000-000" className={classes.contactsMenuItem}>
                            <DialpadIcon />
                            <Typography className={classes.contactsMenuText}>
                                1800-000-000
                            </Typography>
                        </a>
                        <Link className={classes.contactsMenuItem} href="/ ">
                            <MailOutlineIcon />
                            <Typography className={classes.contactsMenuText}>
                                [email protected]
                        </Typography>
                        </Link>
                    </Box>
                    <List className={classes.socMenu}>
                        {menuArray.map(item => (
                            <ListItem key={item.id} disableGutters>
                                <Link href="#">
                                    <ListItemIcon className={classes.iconWrap}>
                                        {item.icon}
                                    </ListItemIcon>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Container>
        </div>
    )
}