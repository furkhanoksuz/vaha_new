import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { CrisisSection } from './components/Crisis';
import { SolutionsSection } from './components/Solutions';
import { DashboardMockup } from './components/DashboardMockup';
import { PricingSection } from './components/Pricing';

export default function App() {
  return (
    <Layout>
      <Hero />
      <Metrics />
      <CrisisSection />
      <SolutionsSection />
      <DashboardMockup />
      <PricingSection />
    </Layout>
  );
}
