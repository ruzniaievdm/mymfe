import { ensureConfig, getConfig } from '@edx/frontend-platform';
import { getHttpClient, getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';

ensureConfig(['LMS_BASE_URL'], 'library API service');

export async function getEnrolledCourseList() {
  const client = getAuthenticatedHttpClient();
  const baseUrl = getConfig().LMS_BASE_URL;

  const apiUrl = `${baseUrl}/api/enrollment/v1/enrollment`;
  const { data } = await client.get(apiUrl);
  console.log(data);

  return {
    data,
    count: data.length,
  };
}
