import React from 'react'
import App, {Container} from 'next/app'
import {Layout} from 'mdx-docs'
import Octicon, {iconsByName} from '@githubprimer/octicons-react'
import * as primerComponents from '../src'
import * as docComponents from './doc-components'

const {SideNav, Header, customTheme} = docComponents
const {Box, FlexContainer} = primerComponents

const iconsObject = Object.keys(iconsByName).reduce((map, key) => {
  map[iconsByName[key].name] = iconsByName[key]
  return map
}, {})

const components = {...primerComponents, ...docComponents, Octicon, ...iconsObject}

export default class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let page = {}

    if (Component.getInitialProps) {
      page = await Component.getInitialProps(ctx)
    }

    return {page}
  }

  render() {
    const {Component, page} = this.props
    return (
      <Container>
        <Layout components={components} routes={[]} theme={customTheme}>
          <Header />
          <FlexContainer>
            <SideNav />
            <Box maxWidth={1012} my={6} mx={'auto'} px={6} className="markdown-body">
              <Component {...page} />
            </Box>
          </FlexContainer>
        </Layout>
      </Container>
    )
  }
}