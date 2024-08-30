import { withSentryConfig } from '@sentry/nextjs';

const nextConfig = {
  // Your Next.js configuration here
};

const sentryWebpackPluginOptions = {
  // Replace these with your actual Sentry project settings
  org: "your-org",
  project: "your-project",
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: { enabled: true },
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
