import React, { FC, } from "react"
import Link from "next/link"
import { Link as MuiLink, } from "@material-ui/core"

type Props = {
    href: string,
    props: any
}

const NextLink: FC<Props> = ({ href, ...props }) => (
    <Link href={href}>
        <MuiLink href={href} {...props} />
    </Link>
)

export default NextLink
