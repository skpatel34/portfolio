import { withSentryConfig } from '@sentry/nextjs';

const moduleExports = {
  // Your Next.js config
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin.
};

export default withSentryConfig(moduleExports, sentryWebpackPluginOptions);
