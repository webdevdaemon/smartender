import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from '../../Pages/Home'
import SearchWrapper from '../../Components/SearchWrapper'

const Page = () => (
  <div className="Page">
    <Route path="/" component={Home} />
    <Route path="/search" component={SearchWrapper} />
    <Route path="/random" component={Home} />
    <Route path="/by-ingredients" component={Home} />
  </div>
)

export default Page
