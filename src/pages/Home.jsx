
import React from 'react';
import { Hero } from '../components/sections/Hero';
import { TrustedBy } from '../components/sections/TrustedBy';
import { SolutionsPreview } from '../components/sections/SolutionsPreview';
import { ProductsPreview } from '../components/sections/ProductsPreview';
import { SuccessStoriesCarousel } from '../components/sections/SuccessStoriesCarousel';
import { WhyMiraiLabs } from '../components/sections/WhyMiraiLabs';
import { TestimonialsSlider } from '../components/sections/TestimonialsSlider';
import { FinalCTA } from '../components/sections/FinalCTA';

export const Home = () => {
  return (
    <main style={{backgroundColor: 'var(--color-bg-primary)'}}>
      <Hero />
      <TrustedBy />
      <SolutionsPreview />
      <ProductsPreview />
      <SuccessStoriesCarousel />
      <WhyMiraiLabs />
      <TestimonialsSlider />
      <FinalCTA />
    </main>
  );
};
