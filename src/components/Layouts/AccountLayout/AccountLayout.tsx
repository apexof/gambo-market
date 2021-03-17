import React, { FC, ReactNode, } from "react"
import { makeStyles, } from "@material-ui/core/styles"
import { Box, Container, Typography, } from "@material-ui/core"
import Footer from "../../Footer"
import CommonHead from "../CommonHead"
import Header from "../../Header"
import LeftNavMenu from "./LeftNavMenu"
import ProfileHeader from "./ProfileHeader"

const useStyles = makeStyles((theme) => ({
    page: {},
    containerMui: { overflow: "visible", },
    container: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        margin: theme.spacing(-2),
        marginTop: 50,
    },
    menuWrap: {
        width: "100%",
        padding: theme.spacing(2),
        [theme.breakpoints.up("md")]: { width: "30%", },
    },
    menu: {
        position: "sticky",
        top: 167,
    },
    content: {
        padding: theme.spacing(2),
        width: "100%",
        [theme.breakpoints.up("md")]: { width: "70%", },
    },
}))

interface IProps {
    children: ReactNode
    title: string
}

const AccountLayout: FC<IProps> = ({ children, title, }) => {
    const classes = useStyles()

    return (
        <div className={classes.page}>
            <CommonHead />
            <Header />
            <ProfileHeader />
            <Container className={classes.containerMui}>
                <div className={classes.container}>
                    <div className={classes.menuWrap}>
                        <div className={classes.menu}>
                            <LeftNavMenu />
                        </div>
                    </div>
                    <div className={classes.content}>
                        {title
                            && (
                                <Box mb={3.5}>
                                    <Typography variant="h2">{title}</Typography>
                                </Box>
                            )}
                        {children}
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default AccountLayout
