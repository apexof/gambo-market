import React, { FC, } from "react"
import { Box, Typography, } from "@material-ui/core"
import { makeStyles, } from "@material-ui/core/styles"
import Loader from "../../../Elements/Loader"
import SwrError from "../../../Elements/SwrError"
import { sortFN, } from "./sort"
import ProductCard from "../../ProductCards/MainProductCard"
import { Product, SortType, } from "../../../../types"

const useStyles = makeStyles((theme) => ({
    notFound: {
        position: "absolute",
        top: "calc(50% - 10px)",
        left: "calc(50% - 90px)",
        whiteSpace: "nowrap",
    },
}))

interface IProps {
    error: any,
    products: Product[]
    sortType: SortType
}

const CategoryPageList: FC<IProps> = ({ error, products, sortType, }) => {
    const classes = useStyles()
    if (error) return <SwrError error={error} />
    const ratio = { xs: 0.813, sm: 1.565, md: 2.302, lg: 2.874, }
    if (!products) return <Loader w="100%" ratio={ratio} s={50} />
    if (products.length) products.sort(sortFN[sortType])

    return (
        <Box m={-1.5} display="flex" flexWrap="wrap">
            {!products.length && (
                <Box
                    position="relative"
                    width="100%"
                    pb={{
                        xs: `${100 / ratio.xs}%`,
                        sm: `${100 / ratio.sm}%`,
                        md: `${100 / ratio.md}%`,
                        lg: `${100 / ratio.lg}%`,
                    }}
                >
                    <Typography variant="h2" color="secondary" className={classes.notFound}>
                        No products found
                    </Typography>
                </Box>
            )}
            {products.length > 0 && products.map((item) => (
                <Box
                    p={1.5}
                    width={{ xs: "100%", sm: "50%", md: "33.333%", lg: "25%", }}
                    key={item.id}
                >
                    <ProductCard
                        product={item}
                        shadow="shadow2"
                    />
                </Box>
            ))}
        </Box>
    )
}

export default CategoryPageList
