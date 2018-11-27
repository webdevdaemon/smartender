import React from 'react'
import {withBaseIcon /*, Icon*/} from 'react-icons-kit'

import {userCircleO as user} from 'react-icons-kit/fa/userCircleO'
import {chevronLeft as back} from 'react-icons-kit/fa/chevronLeft'

import {plus} from 'react-icons-kit/icomoon/plus'
import {search} from 'react-icons-kit/icomoon/search'
import {dice} from 'react-icons-kit/icomoon/dice'
import {listAlt} from 'react-icons-kit/fa/listAlt'
import {infoCircle} from 'react-icons-kit/fa/infoCircle'

/*Icon Base Styles*/
const FooterIcon = withBaseIcon({size: '8vh', style: {color: '#000000'}})
const HeaderIcon = withBaseIcon({size: '8vh', style: {color: '#efefef'}})

/* Header Base */
const Add = <FooterIcon icon={plus} />
const Find = <FooterIcon icon={search} />
const Randomize = <FooterIcon icon={dice} />
const Browse = <FooterIcon icon={listAlt} />
const About = <FooterIcon icon={infoCircle} />

/*Footer Base*/
const Back = <HeaderIcon icon={back} />
const User = <HeaderIcon icon={user} />

const Ico = {
  Header: {
    Back,
    User,
  },
  Footer: {
    Add,
    Find,
    Randomize,
    Browse,
    About,
  },
}

export default Ico
