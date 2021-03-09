import React, { FC, ReactNode, } from "react"

const withSWR = (Component,) => {
    const NewComponent: FC = (props) => {
        return (
            <Component {...props} />
        )
    }

    return NewComponent
}

export default withSWR
