import React from 'react'
import cx from 'clsx'
import OldPrice from '../../../ProductCard/OldPrice'
import Tracker from './Tracker'
import Price from '../../../ProductCard/Price'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Typography } from '@material-ui/core';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DirectionsSubwayIcon from '@material-ui/icons/DirectionsSubway';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import Tooltip from "../../../Elements/Tooltip";
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles(theme => ({
    header: {
        display: "flex",
        alignItems: "center",
    },
    block: {
        padding: "15px 20px",
        borderBottom: `1px solid ${theme.palette.grey["50"]}`,
        background: theme.palette.background.paper,
    },
    orderRow: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& + $orderRow": {
            marginTop: 20,
        }
    },
    cashBack: {
        display: "flex",
        alignItems: "center",
        "& img": {
            marginRight: theme.spacing(1),
        }
    },
    tooltipBlock: {
        display: "inline-flex",
        "& svg": {
            marginLeft: theme.spacing(1),
            cursor: "pointer",
        },
    }
}))
const trackData = {
    steps: ['Placed', 'Packed', 'On the way', 'Delivered'],
    icons: {
        1: <HomeIcon />,
        2: <MarkunreadMailboxIcon />,
        3: <DirectionsSubwayIcon />,
        4: <DoneAllIcon />,
    }
}

export default function Order({ timing, way, subTotal, charges, trackStatus, cashBack, items }) {
    const classes = useStyles();

    return (
        <div className="shadow1">
            <Box className={classes.block}>
                <Typography variant="body2">
                    {`Delivery Timing ${timing}`}
                </Typography>
            </Box>
            <Box className={cx(classes.block, classes.header)}>
                <img height={50} src="/img/account/groceries.svg" alt="" />
                <Box ml={1}>
                    <Typography variant="h5">
                        {way}
                    </Typography>
                    <Typography variant="body1">
                        Delivered - Gambo
                </Typography>
                    <Typography variant="body1" className={classes.tooltipBlock}>
                        {`${items.length} Items`}
                        <Tooltip title={items.map(item => item.title).join(" ")}>
                            <HelpIcon fontSize="small" />
                        </Tooltip>
                    </Typography>
                </Box>
            </Box>
            <Box className={classes.block}>
                <div className={classes.orderRow}>
                    <Typography variant="body2">
                        Sub Total
                    </Typography>
                    <OldPrice line={false}>{subTotal}</OldPrice>
                </div>
                <div className={classes.orderRow}>
                    <Typography variant="body2">
                        Delivery Charges
                    </Typography>
                    <OldPrice line={false} currency={charges > 0 ? "$" : ""}>{charges || "Free"}</OldPrice>
                </div>
                <div className={classes.orderRow}>
                    <Typography variant="h4">
                        Total
                    </Typography>
                    <Price>{subTotal + charges}</Price>
                </div>
            </Box>
            <Box className={classes.block}>
                <Typography variant="h5">Track Order</Typography>
                <Tracker activeStep={trackStatus} trackData={trackData} />
            </Box>
            {cashBack &&
                <Box className={cx(classes.block, classes.cashBack)}>
                    <img height={30} src="/img/account/ribbon.svg" alt="" />
                    <Typography variant="body2">
                        Cashback of $2 will be credit to Gambo Super Market wallet 6-12 hours of delivery.
                    </Typography>
                </Box>
            }
            <Box className={classes.block}>
                <div className={classes.orderRow}>
                    <Box>
                        <Typography variant="body2" component="span">
                            Delivery Boy -
                    </Typography>
                        <Box ml={1} component="span">
                            <Typography variant="body2" color="secondary" component="a" href="#">
                                {/* <PhoneIcon fontSize="small" /> */}
                                Call Us
                            </Typography>
                        </Box>
                    </Box>
                    <Button variant="contained" color="secondary" className={classes.btn}>
                        View bill
                                </Button>
                </div>
            </Box>
        </div>
    )
}