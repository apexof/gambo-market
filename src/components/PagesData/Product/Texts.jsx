import React from "react"
import cx from "clsx"
import { makeStyles, } from "@material-ui/core/styles"
import { Box, Typography, } from "@material-ui/core"
import BlockTitle from "../../Elements/BlockTitle"

const useStyles = makeStyles((theme) => ({
    list: {
        background: theme.palette.background.paper,
        maxHeight: 362,
        overflowY: "scroll",
    },
}))
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
        text: "The peeled, orange segments can be added to the daily fruit bowl, and its juice is a refreshing drink.",
    },
    {
        id: 3,
        title: "Seller",
        text: "Koutt Pvt Ltd, Sks Nagar, Near Mbd Mall, Ludhana, 141001",
    },
    {
        id: 4,
        title: "Disclaimer",
        text: "Phasellus efficitur eu ligula consequat ornare. Nam et nisl eget magna aliquam consectetur. Aliquam quis tristique lacus. Donec eget nibh et quam maximus rutrum eget ut ipsum. Nam fringilla metus id dui sollicitudin, sit amet maximus sapien malesuada.",
    }
]

export default function Texts() {
    const classes = useStyles()

    return (
        <div className={classes.der}>
            <BlockTitle>Product Details</BlockTitle>
            <Box px={2.5} pb={2.5} className={cx(classes.list, "scrollstyle_4")}>
                {texts.map((item) => (
                    <Box key={item.id} pt={2.5}>
                        <Box mb={1}>
                            <Typography variant="h4">{item.title}</Typography>
                        </Box>
                        <Typography variant="body2">{item.text}</Typography>
                    </Box>
                ))}
            </Box>
        </div>
    )
}
