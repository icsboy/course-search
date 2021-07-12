import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 296px;
    height: 240px;
    border: 2px solid #ddd;
    border-radius: 4px;
    margin: 10px;
`;

const CourseHeader = styled.div`
    height: 176p;
    background-color: #1A1A3A;
    text-align: center;
`;

const Image = styled.img`
    width: 120px;
    height: 120px;
    background-position: center center;
`;

const CourseBody = styled.div`
    font-size: 16px;
    font-weight: bold;
    padding: 16px;
`;

interface ICourseProps {
    key: number;
    id: number;
    title: string;
    logo_file_url: string;
};

const CourseCard: React.FC<ICourseProps> = (data: ICourseProps) => {
    return (
        <Container>
            <CourseHeader>
                <Image src={data.logo_file_url} />
            </CourseHeader>
            <CourseBody>{data.title}</CourseBody>
        </Container>
    )
}

export default CourseCard;