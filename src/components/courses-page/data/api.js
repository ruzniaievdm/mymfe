import { ensureConfig, getConfig } from "@edx/frontend-platform";
import {
  getHttpClient,
  getAuthenticatedHttpClient,
} from "@edx/frontend-platform/auth";

ensureConfig(["LMS_BASE_URL"], "library API service");

export async function getCourseList() {
  const client = getHttpClient();
  const baseUrl = getConfig().LMS_BASE_URL;

  const apiUrl = `${baseUrl}/api/courses/v1/courses`;
  const request = await client.get(apiUrl);

  const response = (await request).data;
  const data = response.results;

  return {
    data,
    count: response.pagination.count,
  };
}

export async function courseEnrollment(courseId) {
  const client = getAuthenticatedHttpClient();
  const baseUrl = getConfig().LMS_BASE_URL;

  const apiUrl = `${baseUrl}/api/enrollment/v1/enrollment`;
  const response = await client.post(apiUrl, {
    course_details: { course_id: courseId },
  });

  console.log(response.statusText);
}
