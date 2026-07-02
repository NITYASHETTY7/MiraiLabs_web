import React from 'react';
import { ProductsHero } from '../components/products/ProductsHero';
import { ProductsShowcase } from '../components/products/ProductsShowcase';
import { ProductComparison } from '../components/products/ProductComparison';
import { CustomerSuccess } from '../components/products/CustomerSuccess';
import { ProductsFAQ } from '../components/products/ProductsFAQ';
import { ProductsCTA } from '../components/products/ProductsCTA';

export const Products = () => {
  return (
    <main style={{backgroundColor: 'var(--color-bg-primary)'}}>
      <ProductsHero />
      <ProductsShowcase />
      <ProductComparison />
      <CustomerSuccess />
      <ProductsFAQ />
      <ProductsCTA />
    </main>
  );
};
