import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { Toolbar, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    list: {
        width: 250,
    },
    header: {
        background: theme.palette.type === "dark" ? "#000" : "#2b2f4c",
        padding: "15px 20px",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    drawer: {
        width: 400,
    },
    closeIcon: {
        cursor: "pointer",
        color: "#fff"
    },
}))

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => setOpen(!open)
    const handleClose = () => setOpen(false)

    return (
        <>
            <Button onClick={toggleDrawer} variant="contained" color="primary" className="shadow1">
                Filters
            </Button>
            <Drawer anchor="right" open={open} onClose={toggleDrawer}>
                <div
                    className={`${classes.drawer} `}
                    role="presentation"
                >
                    <Toolbar className={classes.header}>
                        <Typography variant="h4">
                            Filters
                        </Typography>
                        <CloseIcon
                            fontSize="large"
                            className={classes.closeIcon}
                            onClick={handleClose}
                        />
                    </Toolbar>
                </div>
            </Drawer>
        </>
    );
}
