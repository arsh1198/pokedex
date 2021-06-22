import * as React from 'react'
import styled from "styled-components";
import Search from "./Search";
import ThemeToggle from './ThemeToggle';

const Container = styled.header `
display: flex;
align-items: center;
justify-content: space-around;
width: 100%auto;
padding: 1.25em;
background: #a9e4ff
`

const Header = () => {
    return <Container>
        <Search/>
        <ThemeToggle/>
    </Container>
}

export default Header
