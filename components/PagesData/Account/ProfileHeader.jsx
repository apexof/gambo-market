import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import { Box, Button, Typography } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import EditIcon from '@material-ui/icons/Edit';
import BorderColorIcon from '@material-ui/icons/BorderColor';

const useStyles = makeStyles(theme => ({
    avatarBox: {
        position: "relative",
    },
    avatar: {
        borderRadius: "50%",
        border: "2px solid #fff",
        boxShadow: "0px 2px 2px 0px rgb(0 0 0 / 10%)",
        height: 100,
        width: 100,
    },
    bgc: {
        background: "rgba(245,93,44, 0.3)",
        position: "relative",
        padding: "50px 0",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        "&::before": {
            content: '""',
            background: "url(/img/account/banner.svg) no-repeat bottom",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            position: "absolute",
            pointerEvents: "none",
            backgroundSize: "cover",
            opacity: 0.02,
        }
    },
    uploadBtn: {
        // cursor: "pointer",
        outline: "none",
        transition: "all 0.3s",
        margin: 0,
        position: "absolute",
        bottom: 5,
        right: -5,
        color: "#fff",
        height: 35,
        width: 35,
        borderRadius: "50%",
        border: "1px solid #ffff",
        minWidth: "unset",
        background: theme.palette.secondary.main,
        "&:hover": {
            background: theme.palette.secondary.main,
            backgroundImage: "linear-gradient(to right, rgba(230, 92, 91, 0.9), rgba(245, 93, 44, 0.9))",
        }
    },
    tel: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& svg": {
            marginLeft: 5,
        },
    },
    pointsBlock: {
        fontSize: 16,
        fontWeight: 500,
        color: "#2b2f4c",
        background: "rgba(255,255,255, 0.3)",
        padding: "5px 11px 5px 10px",
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 27,
        "& img": {
            width: 24,
            marginRight: 7,
        },

    },
}))

export default function BannerSection() {
    const classes = useStyles();

    return (
        <div className={classes.bgc}>
            <div className={classes.avatarBox}>
                <img
                    src="/img/account/avatar.jpg"
                    className={classes.avatar}
                />
                <div>
                    <input
                        accept="image/*"
                        className={classes.input}
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="raised-button-file">
                        <Button component="span" className={classes.uploadBtn}>
                            <PhotoCameraIcon fontSize="small" />
                        </Button>
                    </label>
                </div>
            </div>
            <Typography variant="h2">
                John Doe
            </Typography>
            <Box className={classes.tel}>
                <Typography variant="body1" >
                    +91999999999
                </Typography>
                <BorderColorIcon fontSize="small" />
            </Box>
            <Box className={classes.pointsBlock}>
                <img src="/img/account/Dollar.svg" alt="" />
                <Typography variant="subtitle1">
                    Points : 20
                </Typography>
            </Box>

        </div>
    )
}