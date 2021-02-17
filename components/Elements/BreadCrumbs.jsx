import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Link from '../Elements/Link'
import { useRouter } from 'next/router'
import { capitalizeFirstLetter } from '../../helpers'
import { Breadcrumbs, Container, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    breadList: {
        background: theme.palette.background.paper,
        borderTop: `1px solid ${theme.palette.grey["50"]}`,
    },
    currentItem: {
        color: theme.palette.text.primary,
        marginRight: 10,
    },
    prevLinks: {
        color: "#8f91ac",
    },
}))

export default function BreadCrumbs() {
    const classes = useStyles();
    const router = useRouter()
    let breadArray = router.asPath.split("/");
    breadArray = breadArray.filter(item => item.length)
    breadArray = breadArray.map(item => capitalizeFirstLetter(item))
    breadArray = breadArray.map(item => item.replace("-", " "))
    return (
        <div className={classes.breadList}>
            <Container>
                <Toolbar>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link href="/" className={classes.prevLinks}>
                            <Typography variant="body1">
                                Home
                            </Typography>
                        </Link>
                        {breadArray.map((item, i) => {
                            if (i === breadArray.length - 1) {
                                return (
                                    <Typography key={item} variant="body1" className={classes.currentItem}>
                                        {item}
                                    </Typography>
                                )
                            }
                            return (
                                <Link key={item} href="/" className={classes.prevLinks}>
                                    <Typography variant="body1">
                                        {item}
                                    </Typography>
                                </Link>
                            )
                        })}
                    </Breadcrumbs>
                </Toolbar>
            </Container>
        </div>
    )
}