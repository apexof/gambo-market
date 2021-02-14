import React from 'react'
import Link from 'next/link'
import { Link as MuiLink } from '@material-ui/core'

const NextLink = ({ href, as, prefetch, ...props }) => (
    <Link href={href} as={as} prefetch={prefetch} >
        <MuiLink href={href} {...props} />
    </Link>
)

export default NextLink