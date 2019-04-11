import React from 'react'

import { Content } from '../components/Scaffold'
import Layout from '../components/Layout'
import Lorem from '../components/Lorem'

export default () => (
  <Layout>
    <Content>
      <h1>You're Back</h1>
      <h3>
        Try shrinking the size of this page and slide the navbar drawer out.
      </h3>
      <Lorem />
    </Content>
  </Layout>
)