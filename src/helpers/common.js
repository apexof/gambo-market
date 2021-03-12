export function isObject(item) {
    return (item && typeof item === "object" && !Array.isArray(item))
}

export function mergeDeep(target, source) {
    const output = { ...target, }
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((key) => {
            if (isObject(source[key])) {
                if (!(key in target)) { Object.assign(output, { [key]: source[key], }) } else { output[key] = mergeDeep(target[key], source[key]) }
            } else {
                Object.assign(output, { [key]: source[key], })
            }
        })
    }

    return output
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const slugToTitle = (slug) => {
    const capitalizeSlug = capitalizeFirstLetter(slug)
    const replacedSlug = capitalizeSlug.replace(/-/g, " ")

    return replacedSlug
}
