import { useState } from 'react'

import useScreenSize from '@/hooks/useScreenSize'

import Hamburger from './Hamburger'
import NavWrapper from './NavWrapper'
import SectionList from './SectionList'

function NavBar(props) {
    const [isListActive, setIsListActive] = useState(false)
    const [{ width }, { mobile, tablet, desktop }] = useScreenSize()

    if (width <= mobile || (width > mobile && width < tablet)) {
        return (
            <NavWrapper active={isListActive}>
                <Hamburger
                    isListActive={isListActive}
                    onClick={setIsListActive}
                />
            </NavWrapper>
        )
    }

    if (width >= tablet) {
        return (
            <NavWrapper>
                <SectionList />
            </NavWrapper>
        )
    }
}

export default NavBar
