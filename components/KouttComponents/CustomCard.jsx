/**
 * CustomCard Component
 */
import React, { Fragment } from 'react';
import cx from 'clsx';
import { Card, CardContent, Typography, makeStyles, Divider } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    card: {
        padding: '1.25rem',
        backgroundColor: theme.palette.background.paper,
        borderRadius: 4,
    },
    cardContent: {
        padding: '0 !important',
    },
    divider: {
        marginTop: '0.625rem'
    }
}));

function CustomCard(props) {
    const classes = useStyles();
    return (
        <Card className={cx(classes.card, props.cardClasses && props.cardClasses, "shadow1")}>
            <Fragment>
                {props.title ?
                    <Typography variant="h6">
                        {props.title}
                    </Typography>
                    :
                    null
                }
            </Fragment>
            {props.showDivider ?
                <Divider className={classes.divider} />
                :
                null
            }
            <CardContent className={classes.cardContent}>
                {props.children}
            </CardContent>
        </Card>
    );
}

CustomCard.defaultProps = {
    title: "",
    titleAlign: "left"
}

export { CustomCard };