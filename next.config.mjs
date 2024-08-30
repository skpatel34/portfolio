import { withSentryConfig } from '@sentry/nextjs';

const nextConfig = {
  // Your Next.js config options
};

const sentryWebpackPluginOptions = {
  // Sentry options
  project: 'portfolio-slug', // Replace with your actual project slug
  telemetry: false,
};



export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
