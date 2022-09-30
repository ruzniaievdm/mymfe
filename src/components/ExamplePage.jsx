import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import { ensureConfig, mergeConfig, getConfig } from '@edx/frontend-platform';
import messages from './messages';

mergeConfig({
  EXAMPLE_VAR: process.env.EXAMPLE_VAR,
});

ensureConfig([
  'EXAMPLE_VAR',
], 'ExamplePage');

const ExamplePage = ({ intl }) => {
  const { config, authenticatedUser } = useContext(AppContext);

  const renderAuthenticatedUser = () => {
    if (authenticatedUser === null) {
      return null;
    }
    return (
      <div>
        <p>Authenticated Username: <strong>{authenticatedUser.username}</strong></p>
        <p>
          Authenticated user&apos;s name: 
          <strong>{authenticatedUser.username}</strong>
          (Only available if user account has been fetched)
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>{config.SITE_NAME} example page.</h1>
      <p>{intl.formatMessage(messages['example.message'])}</p>
      {renderAuthenticatedUser()}
      <p>EXAMPLE_VAR env var came through: <strong>{getConfig().EXAMPLE_VAR}</strong></p>
      <p>Visit <Link to="/dashboard">dashboard page</Link>.</p>
      <p>Visit <Link to="/error_example">error page</Link>.</p>
      <p>Visit <Link to="/courses">courses</Link>.</p>
    </div>
  );
}

ExamplePage.contextType = AppContext;

ExamplePage.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(ExamplePage);
