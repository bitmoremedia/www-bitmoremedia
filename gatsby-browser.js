/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import objectFitImages from 'object-fit-images'

const onInitialClientRender = () => {
  objectFitImages()
}

export { onInitialClientRender }
