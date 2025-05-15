
import { createRoot } from 'react-dom/client'
import AppOptimized from './AppOptimized.tsx'
import './index.css'

// Create a performance measurement
performance.mark('app-start');

// Use createRoot for React 18
const root = createRoot(document.getElementById("root")!);

// Render the app
root.render(<AppOptimized />);

// Measure rendering performance
performance.mark('app-end');
performance.measure('app-rendering', 'app-start', 'app-end');

// Report performance to console for debugging
console.log('App rendering performance:', performance.getEntriesByName('app-rendering')[0].duration, 'ms');

// Clear unused resources
performance.clearMarks();
performance.clearMeasures();
