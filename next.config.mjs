import { withSentryConfig } from '@sentry/nextjs';

const moduleExports = {
  // Your existing Next.js configuration
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin.
};

export default withSentryConfig(moduleExports, sentryWebpackPluginOptions);
