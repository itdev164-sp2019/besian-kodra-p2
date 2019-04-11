import React from 'react'

import { Content } from '../components/Scaffold'
import Layout from '../components/Layout'
import Lorem from '../components/Lorem'

export default () => (
  <Layout>
    <Content>
      <h1>Mobile Navigation</h1>
      <h3>
        This navbar drawer works on mobile sites as well.
      </h3>
      <Lorem />
    </Content>
  </Layout>
)