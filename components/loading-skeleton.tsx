"use client";

import { motion } from 'framer-motion';

interface LoadingSkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: boolean;
}

export function LoadingSkeleton({ 
  className = "", 
  height = "h-4", 
  width = "w-full", 
  rounded = true 
}: LoadingSkeletonProps) {
  return (
    <motion.div
      className={`bg-gray-200 ${height} ${width} ${rounded ? 'rounded' : ''} ${className}`}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      style={{
        background: "linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 50%, #f3f4f6 75%)",
        backgroundSize: "200% 100%",
      }}
    />
  );
}

export function SectionSkeleton() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <LoadingSkeleton height="h-8" width="w-64" className="mx-auto mb-4" />
        <LoadingSkeleton height="h-4" width="w-96" className="mx-auto mb-12" />
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <motion.div 
              key={i} 
              className="bg-white p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <LoadingSkeleton height="h-32" width="w-full" className="mb-4" />
              <LoadingSkeleton height="h-4" width="w-full" className="mb-2" />
              <LoadingSkeleton height="h-4" width="w-3/4" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}