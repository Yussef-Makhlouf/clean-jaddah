import { Metric } from 'web-vitals';

export type WebVitalsMetric = Metric;

/**
 * Send Web Vitals metrics to analytics endpoint
 */
export function sendWebVitals(metric: WebVitalsMetric) {
  // Simple console logging for development
  if (process.env.NODE_ENV !== 'production') {
    console.log('Web Vitals:', metric);
    return;
  }

  // In production, you can send to your analytics service
  console.log('Web Vitals:', {
    name: metric.name,
    value: metric.value,
    page: window.location.pathname,
  });
}

// Function to report web vitals
export function reportWebVitals(metric: Metric) {
  // We import it dynamically to reduce the main bundle size
  import('@/lib/web-vitals').then(({ sendWebVitals }) => sendWebVitals(metric));
}

// Function to send web vitals to analytics
export function sendWebVitalsToAnalytics(metric: Metric) {
  const body = {
    id: metric.id,
    name: metric.name,
    value: metric.value,
    page: window.location.pathname,
  };
  console.log('Web Vitals:', body);
  // Send to analytics server when ready
} 