import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { getConfig } from "@edx/frontend-platform";

import { AppContext } from "@edx/frontend-platform/react";
import { connect, useDispatch } from "react-redux";
import { fetchEnrolledCourseList, selectEnrolledCourseList } from "./data";
import { ActionRow, Button, Card, Container } from "@edx/paragon";

const DashboardPage = ({ courses }) => {
  const { authenticatedUser } = useContext(AppContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEnrolledCourseList());
  }, []);

  const goToCourseDetail = (courseId) => {
    window.location.href = `${
      getConfig().LEARNING_BASE_URL
    }/course/${courseId}/home`;
  };

  const renderCourses = () => {
    return (
      <div className="list">
        {courses.data.map((course) => (
          <Card
            isClickable
            key={course.course_details.course_id}
            classame="item"
          >
            <Card.ImageCap srcAlt="Card image" />
            <Card.Header title={course.course_details.course_name} />
            <Card.Footer>
              <ActionRow>
                <Button
                  onClick={() => goToCourseDetail(course.course_details.course_id)}
                >
                  View course
                </Button>
              </ActionRow>
            </Card.Footer>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <Container fluid>
      <div className="content">
        <h1 className="h1">Dashboard page</h1>
        <p>Hi there, {authenticatedUser.username}.</p>
        <p>
          Visit <Link to="/">public page</Link>.
        </p>
        <p>
          Visit <Link to="/courses">courses page</Link>.
        </p>

        {courses.count > 0 && renderCourses()}
      </div>
      <a href={getConfig().LOGOUT_URL}>Sign out</a>
    </Container>
  );
};

export default connect(selectEnrolledCourseList, { fetchEnrolledCourseList })(
  DashboardPage
);
