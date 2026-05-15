export const productsQuery = `
  *[_type == "product"]{
    _id,
    title,
    "slug": slug.current,
    price,
    category,
    description,
    image,
    newArrival,
    featured
  }
`

export const singleProductQuery = `
  *[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    price,
    category,
    description,
    image,
    newArrival,
    featured
  }
`