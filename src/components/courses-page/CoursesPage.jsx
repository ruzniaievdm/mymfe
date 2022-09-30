import React from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { fetchCourseList, selectCourseList, postCourseEnrollment } from "./data";
import { getConfig, mergeConfig } from '@edx/frontend-platform';
import {
  Button, Card, Container, ActionRow
} from '@edx/paragon';

mergeConfig({
  LEARNING_BASE_URL: process.env.LEARNING_BASE_URL,
});

const CoursesPage = ({ courses }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCourseList());
  }, [])

  const handleFetchCourseList = () => {
    dispatch(fetchCourseList());
  };

  const handleCourseEnrollment = (courseId) => {
    postCourseEnrollment(courseId);
  };

  const goToCourseDetail = (courseId) => {
    window.location.href = `${getConfig().LEARNING_BASE_URL}/course/${courseId}/home`
  }

  const renderCourses = () => {
    return (
      <div className="list">
        {courses.data.map((course) => (
          <Card 
            isClickable
            key={course.id}
            classame="item"
          >
              <Card.ImageCap 
                srcAlt="Card image"
              />
              <Card.Header
                title={course.name}
              />
              <Card.Footer>
                <ActionRow>
                  <Button variant="primary" onClick={() => handleCourseEnrollment(course.id)}>Enroll</Button>
                  <Button variant="outline-primary" onClick={() => goToCourseDetail(course.id)}>View course</Button>
                </ActionRow>
              </Card.Footer>
          </Card>
        ))}
      </div>
    )
  };

  return (
    <Container fluid>
      <div className="content">
        <h1 className="h1">Courses page</h1>
        <ActionRow>
          <Link to='/'>
            <Button variant="outline-primary">Home</Button>
          </Link>
          <Button variant="primary" onClick={handleFetchCourseList}>Fetch</Button>
        </ActionRow>
        {courses.count > 0 && renderCourses()}
      </div>
    </Container>
  );
};

export default connect(
  selectCourseList,
  { fetchCourseList })(CoursesPage);
