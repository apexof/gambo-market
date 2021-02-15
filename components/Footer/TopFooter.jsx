import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, List, ListItemIcon, ListItem, Link, Typography } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import DialpadIcon from '@material-ui/icons/Dialpad';

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
    phone: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& svg": {
            marginRight: "5px",
            color: theme.palette.secondary.main,
        }
    },
    phoneText: {
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
            marginTop: "-15px"
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
                    <Link className={classes.phone} href="#">
                        <DialpadIcon />
                        <Typography className={classes.phoneText}>
                            1800-000-000
                        </Typography>
                    </Link>
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