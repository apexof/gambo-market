import { Box, Button, Menu, Typography } from '@material-ui/core'
import React from 'react'
import Link from '../../Elements/Link'
import cx from 'clsx'
import { makeStyles } from "@material-ui/core/styles";
import HeaderNavList from './HeaderNavList';
import WishIcon from '../../Elements/WishIcon';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles(theme => ({
    btn: {
        height: "40px",
        borderRadius: "10px",
        background: theme.palette.primary.light,
        padding: "0 15px",
        flexShrink: 0,
        textTransform: 'none',
        whiteSpace: "nowrap",
    },
    padding: {
        padding: 0,
    },
    container: {
        width: 400,
    },
    content: {
        background: theme.palette.background.paper,
        padding: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(2),
        background: theme.palette.background.default,

    },
}));

export default function HeaderMenu() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => setAnchorEl(event.currentTarget)
    const handleClose = () => setAnchorEl(null)

    return (
        <>
            <Button
                className={classes.btn}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <ListIcon />
                <Box ml={1}>
                    <Typography variant="body2" component="span">
                        Menu
                </Typography>
                </Box>
            </Button>
            <Menu
                id="simple-menu2"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                MenuListProps={{
                    classes: { padding: classes.padding },
                }}
            >
                <div className={classes.container}>
                    <div className={classes.content}>
                        <Link href="/" className={classes.wishLink}>
                            <WishIcon />
                            <div className={classes.countWishes}>3</div>
                        </Link>
                    </div>
                    <div className={classes.footer}>

                        <HeaderNavList />
                    </div>
                </div>
            </Menu>
        </>
    )
}
