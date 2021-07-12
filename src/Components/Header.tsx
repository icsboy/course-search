import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0px 24px;
    background-color: rgb(83, 78, 162);
`;

const Search = styled.input`
    width: 1232px;
    height: 48px;
    background-color: rgba(255, 255, 255, 0.3);
`;

function Header(): JSX.Element {
    return (
        <Container>
            <Search />
        </Container>
    )
}

export default Header;