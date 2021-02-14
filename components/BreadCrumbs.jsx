import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Link from './Link'
import { useRouter } from 'next/router'
import { Container, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    breadList: {
        background: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.grey["50"]}`,
    },
    link: {
        color: theme.palette.text.primary,
        marginRight: 10,
    },
    home: {
        color: "#8f91ac",
    },
}))

export default function BannerSection() {
    const classes = useStyles();
    const router = useRouter()
    return (
        <div className={classes.breadList}>
            <Container>
                <Toolbar>
                    <Link href="/" className={`${classes.home} ${classes.link}`}>
                        <Typography variant="body1">
                            Home
                        </Typography>
                    </Link>
                    <Link href={router.pathname} className={classes.link}>
                        <Typography variant="body1">
                            {router.pathname}
                        </Typography>
                    </Link>
                </Toolbar>
            </Container>
        </div>
    )
}