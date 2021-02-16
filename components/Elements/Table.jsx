import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BlockTitle from './BlockTitle';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            // backgroundColor: theme.palette.action.hover,
        },
    },
    cell: {
        "&.MuiTableCell-head": {
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.primary.contrastText,
        },
        "&.MuiTableCell-body": {
            fontSize: 14,
        },
    }
}));

export default function CustomTable({ title }) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} className="shadow1">
            <BlockTitle >{title}</BlockTitle>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.cell}>Dessert (100g serving)</TableCell>
                        <TableCell className={classes.cell} align="right">Calories</TableCell>
                        <TableCell className={classes.cell} align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell className={classes.cell} align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell className={classes.cell} align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow className={classes.row} key={row.name}>
                            <TableCell className={classes.cell} component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell className={classes.cell} align="right">{row.calories}</TableCell>
                            <TableCell className={classes.cell} align="right">{row.fat}</TableCell>
                            <TableCell className={classes.cell} align="right">{row.carbs}</TableCell>
                            <TableCell className={classes.cell} align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}