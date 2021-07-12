import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { coursesApi } from '../api';
import CourseCard from '../Components/CourseCard';
import { useSearchTerm } from '../context';

const Container = styled.div`
    height: calc(100vh - 100px);
    padding: 20px;
    positon:relative;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-gap: 5px;
`;

interface ICourseProps {
    key: number;
    id: number;
    title: string;
    logo_file_url: string;
};

function CoursePage() {
    const [courseList, setCourseList] = useState<ICourseProps[]>([]);

    const searchTerm = useSearchTerm();

    useEffect(() => {
        async function getCourseList(text:string) {
            const { data: { courses }} = await coursesApi.list(text);
            setCourseList(courses);
        }

        getCourseList(searchTerm);
    }, [searchTerm]);

    return (
        <Container>
            {
                courseList && courseList.length > 0 && (
                    <Grid>
                        {
                            courseList.map((course:ICourseProps, index) => (
                                <CourseCard 
                                    key={index}
                                    id={course.id}
                                    title={course.title}
                                    logo_file_url={course.logo_file_url}
                                />
                            ))
                        }
                    </Grid>
                )
            }
        </Container>
    )
}

export default CoursePage;