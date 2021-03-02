import React from "react"
import { makeStyles, } from "@material-ui/core/styles"
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined"
import { Box, Button, Typography, } from "@material-ui/core"
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined"
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined"
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined"
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined"
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined"
import TelegramIcon from "@material-ui/icons/Telegram"

const useStyles = makeStyles((theme) => ({
    container: {
        background: theme.palette.background.paper,
        maxWidth: 570,
    },
    border: { borderBottom: `1px solid ${theme.palette.grey["50"]}`, },
    largeIcon: {
        width: 56,
        height: 56,
    },
}))

const list = [
    {
        id: 1,
        title: "Address",
        text: "#000, St 8, Sks Nagar, Near Pakhowal Road, Ldh, 141001",
        icon: <RoomOutlinedIcon fontSise="small" />,
    },
    {
        id: 2,
        title: "Phone Number",
        text: "+919999999999",
        icon: <PhoneOutlinedIcon fontSise="small" />,
    },
    {
        id: 3,
        title: "Email Address",
        text: "[email protected]",
        icon: <MailOutlineOutlinedIcon fontSise="small" />,
        color: "#4183c4",
    },
    {
        id: 4,
        title: "Payment Method",
        text: "Cash on Delivery",
        icon: <PaymentOutlinedIcon fontSise="small" />,
    }
]

export default function OrderPlaced() {
    const classes = useStyles()

    return (
        <Box py={8}>
            <Box display="flex" flexDirection="column" alignItems="center">
                <CheckCircleOutlineOutlinedIcon className={classes.largeIcon} color="secondary" />
                <Box my={4}>
                    <Typography variant="h2">Order Successfully Placed</Typography>
                </Box>
                <Typography variant="h4">Thank you for your order! will received order timing - (Today, 3.00PM - 5.00PM)</Typography>
            </Box>
            <Box mt={6} mx="auto" className={classes.container}>
                <Box p={2} className={classes.border} display="flex" alignItems="center">
                    <Box display="flex" mr={2}>
                        <TelegramIcon color="secondary" />
                    </Box>
                    <Typography variant="h4" style={{ fontWeight: "400", }}>
                        Your order will be sent to this address
                    </Typography>
                </Box>
                <Box p={2} className={classes.border}>
                    {list.map((item) => (
                        <Box display="flex" alignItems="center" my={1} key={item.id}>
                            {item.icon}
                            <Box mx={1}>
                                <Typography style={{ fontWeight: "700", }} variant="body2">
                                    {item.title}
:
                                </Typography>
                            </Box>
                            <Typography style={{ color: item.color && item.color, }} variant="body2">{item.text}</Typography>
                        </Box>
                    ))}
                </Box>
                <Box p={2} className={classes.border} display="flex" justifyContent="space-between" alignItems="center">
                    <Box display="flex" alignItems="center">
                        <Typography variant="h4">
                            Stay Home
                        </Typography>
                        <Box ml={1} display="flex" alignItems="center">
                            <SentimentSatisfiedOutlinedIcon fontSize="small" />
                        </Box>
                    </Box>
                    <Button variant="contained" color="secondary" className={classes.btn}>
                        invoice
                    </Button>
                </Box>
                <Box p={3} display="flex" justifyContent="center">
                    <Typography variant="body2" component="span">
                        The payment of
                        <Typography variant="body2" color="secondary" component="span">
                            {" $16 "}
                        </Typography>
                         you'll make when the deliver arrives with your order.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
