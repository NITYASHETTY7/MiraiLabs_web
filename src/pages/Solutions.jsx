
import React from 'react';
import { SolutionsHero } from '../components/solutions/SolutionsHero';
import { ServicesOverview } from '../components/solutions/ServicesOverview';
import { IndividualServices } from '../components/solutions/IndividualServices';
import { DeliveryMethodology } from '../components/solutions/DeliveryMethodology';
import { TechEcosystem } from '../components/solutions/TechEcosystem';
import { Comparison } from '../components/solutions/Comparison';
import { FAQ } from '../components/solutions/FAQ';
import { SolutionsCTA } from '../components/solutions/SolutionsCTA';

export const Solutions = () => {
  return (
    <main style={{backgroundColor: 'var(--color-bg-primary)'}}>
      <SolutionsHero />
      <ServicesOverview />
      <IndividualServices />
      <DeliveryMethodology />
      <TechEcosystem />
      <Comparison />
      <FAQ />
      <SolutionsCTA />
    </main>
  );
};
