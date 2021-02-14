import React, { forwardRef } from 'react'
import Link from 'next/link'
import { Link as MuiLink } from '@material-ui/core'

const NextLink = ({ href, as, prefetch, ...props }, ref) => (
    <Link href={href} as={as} prefetch={prefetch} passHref>
        <MuiLink ref={ref} {...props} />
    </Link>
)

export default forwardRef(NextLink)