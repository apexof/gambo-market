import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';

const ColorlibConnector = withStyles(theme => ({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            background: theme.palette.secondary.main,
        },
    },
    completed: {
        '& $line': {
            background: theme.palette.secondary.main,
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
}))(StepConnector);

const useColorlibStepIconStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
        background: theme.palette.secondary.main,
    },
    completed: {
        background: theme.palette.secondary.main,
    },
}));

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed, icons, icon } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(icon)]}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
}));

export default function CustomizedSteppers({ activeStep, trackData }) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {trackData.steps.map((label) => (
                    <Step key={label}>
                        <StepLabel
                            StepIconComponent={(props) => <ColorlibStepIcon {...props} icons={trackData.icons} />}>
                            {label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
}