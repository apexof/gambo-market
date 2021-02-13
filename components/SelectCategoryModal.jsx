import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import AppsIcon from '@material-ui/icons/Apps';
import CategoryCard from './CategoryList/CategoryCard';
import { Backdrop, Button, Link, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const categories = [
    {
        id: 0,
        title: " Electronics",
        img: "/img/categoryIcons/icon-1.svg"
    },
    {
        id: 1,
        title: "Snacks",
        img: "/img/categoryIcons/icon-2.svg"
    },
    {
        id: 2,
        title: "Meat & Seafood",
        img: "/img/categoryIcons/icon-3.svg"
    },
    {
        id: 3,
        title: " Electronics",
        img: "/img/categoryIcons/icon-1.svg"
    },
    {
        id: 4,
        title: "Snacks",
        img: "/img/categoryIcons/icon-2.svg"
    },
    {
        id: 5,
        title: "Meat & Seafood",
        img: "/img/categoryIcons/icon-3.svg"
    },
    {
        id: 6,
        title: " Electronics",
        img: "/img/categoryIcons/icon-1.svg"
    },
    {
        id: 7,
        title: "Snacks",
        img: "/img/categoryIcons/icon-2.svg"
    },
    {
        id: 8,
        title: "Meat & Seafood",
        img: "/img/categoryIcons/icon-3.svg"
    },
]

const useStyles = makeStyles((theme) => ({
    modal: {
        backgroundImage: "linear-gradient(to right, rgba(230, 92, 91, 0.9), rgba(245, 93, 44, 0.9))",
        "& > div": {
            backgroundColor: "unset !important",
        }
    },
    paper: {
        position: 'absolute',
        top: "10%",
        left: "calc(50% - 250px)",
        width: 500,
        height: 500,
        "&:focus": {
            outline: "none",
            border: "none",
        }
    },
    title: {
        background: theme.palette.type === "dark" ? "#000" : "#2b2f4c",
        padding: "15px 20px",
        color: "#fff"
    },
    btn: {
        width: 190,
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderRight: `1px solid ${theme.palette.grey["50"]}`,
        height: 64,
        borderRadius: 0,
        textTransform: "none",
        "&:hover": {
            color: theme.palette.secondary.contrastText,
            backgroundImage: "linear-gradient(to right, rgba(230, 92, 91, 0.9), rgba(245, 93, 44, 0.9))",
        },
        "& svg": {
            marginRight: "5px",
        },
    },
    list: {
        display: "flex",
        flexWrap: "wrap",
        width: "100%"
    },
    itemWrap: {
        width: "33.333%",
        cursor: "pointer",
        background: theme.palette.primary.main,
        "&:hover": {
            background: theme.palette.primary.dark,

        }
    },
    moreCategory: {
        textAlign: "center",
        borderTop: `1px solid ${theme.palette.grey["50"]}`,
        padding: "20px",
        display: "flex",
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        justifyContent: "center",
        "& svg": {
            marginRight: "5px",
        },
        "&:hover": {
            textDecoration: "none",
            color: theme.palette.secondary.main,
        }
    },
    closeIcon: {
        position: "absolute",
        top: "-40px",
        right: 0,
        cursor: "pointer",
        color: "#fff"
    }
}));

export default function SimpleModal() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true)

    const handleClose = () => setOpen(false)

    return (
        <div className={classes.btnWrapp}>
            <Button onClick={handleOpen} className={classes.btn}>
                <AppsIcon />
                <Typography>
                    Select Category
                </Typography>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                className={classes.modal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 1000,
                }}
            >
                <Slide direction="down" in={open}>
                    <div className={classes.paper}>
                        <CloseIcon
                            fontSize="large"
                            className={classes.closeIcon}
                            onClick={handleClose}
                        />
                        <Typography variant="h4" className={classes.title}>
                            Select Category
                    </Typography>
                        <div className={classes.list}>
                            {categories.map(item => (
                                <div className={classes.itemWrap}>
                                    <CategoryCard
                                        key={item.id}
                                        title={item.title}
                                        img={item.img}
                                    />
                                </div>
                            ))}
                        </div>
                        <Link className={classes.moreCategory} href="#">
                            <AppsIcon />
                            <Typography>
                                More Category
                        </Typography>
                        </Link>
                    </div>
                </Slide>
            </Modal>
        </div>
    );
}