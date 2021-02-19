import React from 'react';
import cx from 'clsx';
import { useThemeContext } from '../../../ThemeSwitcher/MyThemeProvider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Link from '../../../Elements/Link';
import IntlMessages from '../../../KouttComponents/IntlMessages';
import {
    Grid, Typography, Box, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Paper, Divider, Container
} from '@material-ui/core';
import { CustomCard } from '../../../KouttComponents/CustomCard';
import { SmallTitleBar } from '../../../KouttComponents/SmallTitleBar';

const StyledTableCell = withStyles(theme => ({
    body: {
        fontSize: 14,
        color: theme.palette.text.primary
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

function createData(name, price, qty, subtotal) {
    return { name, price, qty, subtotal };
}

const rows = [
    createData('Batting Pads', 200, 1, 200),
    createData('Thigh Pads', 25, 1, 25),
    createData('Chestguard', 19, 1, 19),
    createData('Gloves', 15, 2, 30),
    createData('Cricket Bat', 450, 2, 900),
];

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    table: {
        minWidth: 700,
    },
    thinText: {
        fontWeight: 300,
    },
    borderHighlight: {
        padding: 10,
        borderRadius: 3,
        color: theme.palette.primary.contrastText,
        background: theme.palette.background.default,
    },
    borderPage: {
        padding: theme.spacing(1.5),
        border: `1px solid ${theme.palette.grey["50"]}`,
    },
    container: {
        background: theme.palette.background.paper,
    }
}));

export default function Invoice() {
    const classes = useStyles();
    const { nightMode } = useThemeContext()

    return (
        <div className={classes.container}>
            <CustomCard>
                <div className={classes.borderPage}>
                    <Grid container spacing={3} direction="row">
                        <Grid item xs={12} sm={8}>
                            <Box mb={5}>
                                <Typography variant="h2">INVOICE</Typography>
                            </Box>
                            <Box mb={3} >
                                <Link href="/">
                                    {nightMode ?
                                        <img src="/img/koutt-light.png" alt="site logo" width="80" />
                                        :
                                        <img src="/img/koutt-dark.png" alt="site logo" width="80" />
                                    }
                                </Link>
                            </Box>
                            <Box fontSize="body2.fontSize" color="text.primary" fontWeight="500">Koutt Solutions LLC
                                    <Typography className={classes.thinText}>4502  Poe Road, Conway South Carolina</Typography>
                                <Typography className={classes.thinText}>Zip Code - 29528</Typography>
                                <Typography className={classes.thinText}>FAX.843-234-0429</Typography>
                                <Typography className={cx(classes.thinText, "text-over")}>Email.invoice@email.com</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography className={classes.thinText}>Date:Nov 21 2010</Typography>
                            <Typography className={classes.thinText}>Invoice No. QWERTY12345TY</Typography>
                            <Typography className={classes.thinText}>Payment Due. $10.23</Typography>
                        </Grid>
                    </Grid>
                    <Box my={5}>
                        <Box className={classes.borderHighlight} fontSize="body2.fontSize" fontWeight="500" mb="20px">Bill To:</Box>
                        <Typography className={classes.thinText}>Kenneth C Thompson</Typography>
                        <Typography className={classes.thinText}>1249  Conifer Drive, Everett, Washington</Typography>
                        <Typography className={classes.thinText}>Zip Code - 98208</Typography>
                        <Typography className={classes.thinText}>Mob.425-359-3066</Typography>
                        <Typography className={cx(classes.thinText, "text-over")}>Email.rdce7marygo@classesmail.com</Typography>
                    </Box>
                    <Box>
                        <Box mb={4}>
                            <TableContainer component={Paper} className="shadow1">
                                <Table className={classes.table} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>Product Name</StyledTableCell>
                                            <StyledTableCell align="right">Price</StyledTableCell>
                                            <StyledTableCell align="right">QTY</StyledTableCell>
                                            <StyledTableCell align="right">Subtotal</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map(row => (
                                            <StyledTableRow key={row.name}>
                                                <StyledTableCell component="th" scope="row">
                                                    {row.name}
                                                </StyledTableCell>
                                                <StyledTableCell align="right">{row.price}</StyledTableCell>
                                                <StyledTableCell align="right">{row.qty}</StyledTableCell>
                                                <StyledTableCell align="right">{row.subtotal}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                        <Box>
                            <Box display="flex" justifyContent="flex-end" mb={3}>
                                <Box width={250}>
                                    <Box display="flex" alignItems="center" fontSize="body2.fontSize" color="text.secondary" mb={1}>
                                        <Box width="50%">Subtotal : </Box>
                                        <Box width="50%" textAlign="right">$1,174</Box>
                                    </Box>
                                    <Box display="flex" alignItems="center" fontSize="body2.fontSize" color="text.secondary" mb={2}>
                                        <Box width="50%">Vat (10%) :</Box>
                                        <Box width="50%" textAlign="right">$232</Box>
                                    </Box>
                                    <Divider />
                                    <Box pt={2} display="flex" alignItems="center" fontSize="h6.fontSize" color="primary" mb={1}>
                                        <Box width="50%">Total :</Box>
                                        <Box width="50%" textAlign="right">$1,406.00</Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </div>
            </CustomCard>
        </div>
    );
}
