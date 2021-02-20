import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box pt={3} >
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        boxShadow: "none",
        border: `1px solid ${theme.palette.grey["50"]}`,
    }
}));

const texts = [
    {
        id: 0,
        title: "Description",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere nunc in condimentum maximus. Integer interdum sem sollicitudin, porttitor felis in, mollis quam. Nunc gravida erat eu arcu interdum eleifend. Cras tortor velit, dignissim sit amet hendrerit sed, ultricies eget est. Donec eget urna sed metus dignissim cursus.",
    },
    {
        id: 1,
        title: "Benefits",
        text: `Aliquam nec nulla accumsan, accumsan nisl in, rhoncus sapien.
        In mollis lorem a porta congue.
        Sed quis neque sit amet nulla maximus dignissim id mollis urna.
        Cras non libero at lorem laoreet finibus vel et turpis.
        Mauris maximus ligula at sem lobortis congu`,
    },
    {
        id: 2,
        title: "How to Use",
        text: `The peeled, orange segments can be added to the daily fruit bowl, and its juice is a refreshing drink.`,
    },
    {
        id: 3,
        title: "Seller",
        text: `Gambolthemes Pvt Ltd, Sks Nagar, Near Mbd Mall, Ludhana, 141001`,
    },
    {
        id: 4,
        title: "Disclaimer",
        text: `Phasellus efficitur eu ligula consequat ornare. Nam et nisl eget magna aliquam consectetur. Aliquam quis tristique lacus. Donec eget nibh et quam maximus rutrum eget ut ipsum. Nam fringilla metus id dui sollicitudin, sit amet maximus sapien malesuada.`,
    },
]

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => setValue(newValue)

    return (
        <div className={classes.root}>
            <AppBar position="static" className={cx(classes.appBar, "shadow1")}>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    {texts.map(item => (
                        <Tab key={item.id} label={item.title} {...a11yProps(item.id)} />
                    ))}
                </Tabs>
            </AppBar>
            {texts.map(item => (
                <TabPanel value={value} index={item.id}>
                    <Typography variant="body2">{item.text}</Typography>
                </TabPanel>
            ))}
        </div>
    );
}