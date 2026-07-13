/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Page1Cover } from './pages/Page1Cover';
import { Page2About } from './pages/Page2About';
import { Page3AtAGlance } from './pages/Page3AtAGlance';
import { Page4Comparison } from './pages/Page4Comparison';
import { Page5Creator } from './pages/Page5Creator';
import { Page6Brand } from './pages/Page6Brand';
import { Page7Terms } from './pages/Page7Terms';
import { Page8ThankYou } from './pages/Page8ThankYou';
import { Navigation } from './components/Navigation';
import { NavratriPattern } from './components/NavratriPattern';

export default function App() {
  return (
    <div className="w-full bg-gradient-to-br from-rose-950 via-[#31061e] to-orange-950 min-h-screen text-amber-50 print:bg-white overflow-hidden relative">
      <NavratriPattern />
      <Navigation />
      <div className="relative z-10">
        <Page1Cover />
        <Page2About />
        <Page3AtAGlance />
        <Page4Comparison />
        <Page5Creator />
        <Page6Brand />
        <Page7Terms />
        <Page8ThankYou />
      </div>
    </div>
  );
}
