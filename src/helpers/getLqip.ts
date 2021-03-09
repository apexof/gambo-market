import got from "got"
import sharp from "sharp"
import { ProductImg, } from "../types"

sharp.cache(false)

export const getLqip = async (src: string): Promise<ProductImg> => {
    const { body, } = await got(src, { responseType: "buffer", })
    const sharpImage = sharp(body)
    const { width, height, format, } = await sharpImage.metadata()
    const lqipBuf = await sharpImage
        .resize({
            width: 30, height: 30, fit: "inside",
        })
        .toBuffer()

    return {
        src,
        aspectRatio: width / height,
        preSrc: `data:image/${format};base64,${lqipBuf.toString("base64")}`,
    }
}

export const getLqipForArray = async (productArray) => {
    const newItems = await Promise.all(productArray.map(async (item) => {
        const newItem = { ...item, }
        const img = [await getLqip(newItem.images[0].url)]
        newItem.images = img

        return newItem
    }))

    return newItems
}

export const getLqipManyImgs = async (imgArray) => {
    const newImgs = await Promise.all(imgArray.map(async (img) => {
        const newImg = await getLqip(img.url)

        return newImg
    }))

    return newImgs
}
