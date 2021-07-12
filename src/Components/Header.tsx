import React, { useContext } from "react";
import styled from "styled-components";
import { SearchTermContext } from "../context";

const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 24px;
    background-color: rgb(83, 78, 162);
`;

const Search = styled.input`
    width: 1232px;
    height: 48px;
    background-color: rgba(255, 255, 255, 0.3);
    ::placeholder,
    ::-webkit-input-placeholder {
        color: white;
    }
    :-ms-input-placeholder {
        color: white;
    }
`;

function Header(): JSX.Element {
    const { searchTerm, setSearchTerm } = useContext(SearchTermContext);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Container>
            <Search value={searchTerm} onChange={onChange} placeholder="배우고 싶은 언어, 기술을 검색해 보세요"/>
        </Container>
    )
}

export default Header;