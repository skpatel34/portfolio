import * as Sentry from "@sentry/react";


Sentry.init({
  dsn: "https://96cb1ddce9983ceaf5ddfdc8c7c410e3@o4507854524252160.ingest.us.sentry.io/4507854768046080",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});