import React from 'react'
import Ico from './ProjectIcons'

const topLevelRoutes = [
  {
    to: '/browser',
    label: 'Browser',
    icon: props => <Ico.Footer.Browser {...props} />,
  },
  {
    to: '/search',
    label: 'Search',
    icon: props => <Ico.Footer.Search {...props} />,
  },
  {
    to: '/randomizer',
    label: 'Randomizer',
    icon: props => <Ico.Footer.Randomizer {...props} />,
  },
  {
    to: '/add',
    label: 'Add',
    icon: props => <Ico.Footer.Add {...props} />,
  },
  {
    to: '/about',
    label: 'About',
    icon: props => <Ico.Footer.About {...props} />,
  },
]

export default [...topLevelRoutes]
