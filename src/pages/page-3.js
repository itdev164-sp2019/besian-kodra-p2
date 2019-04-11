import React from 'react'

import { Content } from '../components/Scaffold'
import Layout from '../components/Layout'
import Lorem from '../components/Lorem'

export default () => (
  <Layout>
    <Content>
      <h1>You've Made It This Far</h1>
      <h3>
        You might as well learn something interesting: This navbar drawer is gray.
      </h3>
      <Lorem />
    </Content>
  </Layout>
)
