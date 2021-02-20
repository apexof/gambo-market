import React from 'react'
import cx from 'clsx'
import Link from 'next/link'
import { Link as MuiLink } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

}))


const NextLink = ({ href, as, prefetch, ...props }) => {
    const classes = useStyles();
    return (

        <Link href={href} as={as} prefetch={prefetch} >
            <MuiLink href={href} {...props} />
        </Link>
    )
}

export default NextLink