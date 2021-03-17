import React, { FC, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import { Box, Button, Container, Grid, Input, Typography, } from "@material-ui/core"
import Image from "next/image"
import TelegramIcon from "@material-ui/icons/Telegram"
import MenuFooter from "./MenuFooter"
import { menu1, menu2, menu3, } from "./menus"

const useStyles = makeStyles((theme) => ({
    container: { background: theme.palette.primary.main, },
    middleFooter: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: "50px 0",
        margin: `-${theme.spacing(2)}`,
    },
    footerPart: {
        width: "25%",
        padding: theme.spacing(2),
        [theme.breakpoints.down("sm")]: { width: "50%", },
        [theme.breakpoints.down("xs")]: { width: "100%", },
    },
    payBlock: { margin: "20px 0", },
    sendNewsBtn: {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        minWidth: "unset",
        "&:hover": {
            backgroundImage: "linear-gradient(to right, rgba(230, 92, 91, 0.9), rgba(245, 93, 44, 0.9))",
            background: theme.palette.secondary.main,
        },
    },
    inputWrap: {
        border: `1px solid ${theme.palette.grey["50"]}`,
        justifyContent: "space-between",
    },
}))

const MiddleFooter: FC = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Container>
                <div className={classes.middleFooter}>
                    <Box className={classes.footerPart}>
                        <MenuFooter title="Categories" items={menu1} />
                    </Box>
                    <Box className={classes.footerPart}>
                        <MenuFooter title="Useful Links" items={menu2} />
                    </Box>
                    <Box className={classes.footerPart}>
                        <MenuFooter title="Top Cities" items={menu3} />
                    </Box>
                    <Box className={classes.footerPart}>
                        <div>
                            <Box mb={1}>
                                <Typography variant="h4">Download App</Typography>
                            </Box>
                            <Image
                                src="/img/footer/googlePlay.svg"
                                alt=""
                                width={120}
                                height={35}
                            />
                            <Image
                                src="/img/footer/appStore.svg"
                                alt=""
                                width={120}
                                height={35}
                            />
                        </div>
                        <div className={classes.payBlock}>
                            <Box mb={1}>
                                <Typography variant="h4">Payment Method</Typography>
                            </Box>
                            {[1, 2, 3, 4, 6].map((i) => (
                                <Box key={i} mr={0.5} display="inline">
                                    <Image
                                        src={`/img/footer/pyicon-${i}.svg`}
                                        alt=""
                                        width={35}
                                        height={21}
                                    />
                                </Box>
                            ))}
                        </div>
                        <div>
                            <Box mb={1}>
                                <Typography variant="h4">Newsletter</Typography>
                            </Box>
                            <Grid container spacing={1} alignItems="flex-end" className={classes.inputWrap}>
                                <Grid item>
                                    <Input
                                        id="input-with-icon-grid"
                                        placeholder="Email Arrdess"
                                        disableUnderline
                                    />
                                </Grid>
                                <Grid item>
                                    <Button className={classes.sendNewsBtn}>
                                        <TelegramIcon />
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Box>
                </div>
            </Container>
        </div>
    )
}

export default MiddleFooter
