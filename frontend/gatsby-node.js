

exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions

    const result = await graphql(
        `
        {
            products: allStrapiProduct {
              edges {
                node {
                  name
                  strapi_id
                  description
                  category {
                    name
                  }
                  variants {
                    id
                    color
                    size
                    style
                    price
                    images {
                      url
                    }
                  }
                }
              }
            }
            categories: allStrapiCategory {
              edges {
                node {
                  strapi_id
                  name
                  id
                  description
                  filterOptions {
                    Size {
                      checked
                      label
                    }
                    Style {
                      checked
                      label
                    }
                    Color {
                      checked
                      label
                    }
                  }
                }
              }
            }
          }
        `
    )

    if(result.errors) {
        throw result.errors
    }

    const products = result.data.products.edges
    const categories = result.data.categories.edges 

   products.forEach(product => {
    createPage({
        path: `/${product.node.category.name.toLowerCase()}/${product.node.name.toLowerCase()}`,
        component: require.resolve('./src/templates/ProductDetail.js'),
        context: {
            name: product.node.name,
            id: product.node.strapiId,
            category: product.node.category.name,
            description: product.node.description,
            variants: product.node.variants
        }
    })
   })

   categories.forEach(category => {
    createPage({
        path: `/${category.node.name.toLowerCase()}`,
        component: require.resolve("./src/templates/ProductList.js"),
        context: {
            name: category.node.name,
            description: category.node.description,
            strapiId: category.node.strapi_id,
            id: category.node.id,
            filterOptions: category.node.filterOptions
        }
    })
   })
}