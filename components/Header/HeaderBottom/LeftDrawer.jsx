import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import CartList from './CartDrawer/CartList';
import Icon from '@material-ui/core/Icon';
import { Toolbar, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Price from '../../ProductCard/Price';
import OldPrice from '../../ProductCard/OldPrice';

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
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        justifyContent: "space-between",
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
    closeIcon: {
        cursor: "pointer",
        color: "#fff"
    },
    footer: {
        marginTop: "auto",
        flexWrap: "wrap",
        padding: "20px 0",
        alignItems: "center",
        background: theme.palette.background.default,
    },
    footerPrice: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        justifyContent: "space-between",
    },
    headerItemsCount: {
        color: "#f69733",
    },
    footerConfirm: {
        width: "100%",
        display: "flex",
        padding: "20px 20px 0",
        marginTop: "20px",
        alignItems: "center",
        justifyContent: "space-between",
        borderTop: `1px solid ${theme.palette.grey["50"]}`,
    },
    confirmBtn: {
        flexShrink: 0,
    },
}))

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = () => setOpen(!open)
    const handleClose = () => setOpen(false)

    return (
        <>
            <Button onClick={toggleDrawer} className={classes.btn}>
                <Icon>shopping-cart</Icon>
                Cart 2
            </Button>
            <Drawer anchor="left" open={open} onClose={toggleDrawer}>
                <div
                    className={`${classes.drawer} `}
                    role="presentation"
                >
                    <Toolbar className={classes.header}>
                        <Typography>
                            My Cart<span className={classes.headerItemsCount}>{` (2 Items)`}</span>
                        </Typography>
                        <CloseIcon
                            fontSize="large"
                            className={classes.closeIcon}
                            onClick={handleClose}
                        />
                    </Toolbar>
                    <CartList />
                    <Toolbar className={classes.footer}>
                        <div className={classes.footerPrice}>
                            <Typography>
                                Total Saving
                            </Typography>
                            <OldPrice>11</OldPrice>
                        </div>
                        <div className={classes.footerPrice}>
                            <Typography variant="h4">
                                Total
                            </Typography>
                            <Price>21</Price>
                        </div>
                        <div className={classes.footerConfirm}>
                            <Typography variant="body1">
                                Have a promocode?
                            </Typography>
                            <Button variant="contained" color="secondary" className={classes.confirmBtn}>
                                Checkout
                            </Button>
                        </div>
                    </Toolbar>
                </div>
            </Drawer>
        </>
    );
}
