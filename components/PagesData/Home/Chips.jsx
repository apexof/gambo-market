import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    chip: {
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.primary.main,
    },
    icon: {
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.primary.main,
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
    },
}));

export default function OutlinedChips() {
    const classes = useStyles();

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (
        <Container>
            <div className={classes.root}>
                <Chip
                    avatar={<Avatar>M</Avatar>}
                    label="Clickable"
                    onClick={handleClick}
                    variant="outlined"
                    color="secondary"
                />
                <Chip
                    avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                    label="Deletable"
                    variant="outlined"
                />
                <Chip
                    icon={<FaceIcon />}
                    label="Clickable deletable"
                    onClick={handleClick}
                    variant="filled"
                />
                <Chip
                    icon={<FaceIcon className={classes.icon} />}
                    label="Deletable secondary"
                    className={classes.chip}
                    variant="default"
                />
                <Chip
                    avatar={<Avatar className={classes.avatar}>M</Avatar>}
                    label="Deletable secondary"
                    className={classes.chip}
                    variant="default"
                />
            </div>
        </Container>
    );
}