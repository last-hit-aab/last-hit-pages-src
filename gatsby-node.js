/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions
	const docTemplate = path.resolve(`src/templates/docs.js`)
	const zhDocTemplate = path.resolve(`src/templates/zh-docs.js`)

	const result = await graphql(`
		{
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
				limit: 1000
			) {
				edges {
					node {
						frontmatter {
							path
						}
					}
				}
			}
		}
	`)
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		if (node.frontmatter.path.startsWith("/zh")) {
			createPage({
				path: node.frontmatter.path,
				component: zhDocTemplate,
				context: {}, // additional data can be passed via context
			})
		} else {
			createPage({
				path: node.frontmatter.path,
				component: docTemplate,
				context: {}, // additional data can be passed via context
			})
		}
	})
}
