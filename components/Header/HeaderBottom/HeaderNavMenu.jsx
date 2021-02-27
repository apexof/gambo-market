import { Box, List, ListItem, } from '@material-ui/core'
import React from 'react'
import cx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import { scroller } from "react-scroll";
import { useRouter } from 'next/router'
import setActiveMenuEl from '../../../HOC/setActiveMenuEl'

const menuItems = [
    {
        id: 1,
        title: "Categories",
        alias: "categories",
    },
    {
        id: 2,
        title: "Top Products",
        alias: "top-featured-products",
    },
    {
        id: 3,
        title: "Best Values",
        alias: "best-values",
    },
    {
        id: 4,
        title: "Fresh & Fruits",
        alias: "fresh-and-fruits",
    },
    {
        id: 5,
        title: "New Products",
        alias: "added-new-products",
    },

]

const scrollOpt = {
    isDynamic: true,
    offset: -150,
    spy: true,
    smooth: true,
    duration: 500,
};

const useStyles = makeStyles(theme => ({
    list: {
        flexDirection: 'row',
        padding: 0,
        marginRight: "auto",
        display: "none",
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    listItem: {
        position: 'relative',
        cursor: "pointer",
        '&:hover': {
            '& ul': {
                transform: 'scaleY(1)',
            }
        }
    },
    link: {
        whiteSpace: 'nowrap',
        color: theme.palette.text.primary,
        display: "flex",
        alignItems: "center",
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.secondary.main,
        },
    },
    active: {
        color: theme.palette.secondary.main,
        fontWeight: "bold",
    }
}))

function HederMenu({ activeMenuEl }) {
    const classes = useStyles({ activeMenuEl });
    const router = useRouter()

    const handleClick = href => () => {
        scroller.scrollTo(href, scrollOpt);
        router.push(`/#${href}`);
    };
    return (
        <List className={classes.list}>
            {menuItems.map(item => {
                const active = activeMenuEl === item.alias;
                return (
                    <ListItem key={item.id} className={classes.listItem}>
                        <div className={cx(classes.link, active && classes.active)} onClick={handleClick(item.alias)}>
                            <Box>
                                {item.title}
                            </Box>
                        </div>
                    </ListItem>
                )
            })}
        </List >
    )
}

export default setActiveMenuEl(HederMenu);
