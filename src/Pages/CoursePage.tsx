import React, { useEffect } from 'react';
import styled from 'styled-components';
import { coursesApi } from '../api';

const Container = styled.div``;


function CoursePage() {

    useEffect(() => {
        const text = "파이썬";

        async function getCourseList(text:string) {
            const test = await coursesApi.list(text);
            console.log(test);
        }

        getCourseList(text);
    }, []);

    return (
        <Container>hi</Container>
    )
}

export default CoursePage;