
"use client"
import { Suspense, lazy } from 'react';
import omniFund from './omni-fund.json';

const Lottie = lazy(() => import('lottie-react'));

export default function LOTTIE() {
  return (
    <Suspense fallback={<img className="w-[344px] h-[694.38px]" src="/omni-fund-poster.webp" />}>
      <Lottie animationData={omniFund} loop={true} />
    </Suspense>
  );
}
