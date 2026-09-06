import React from "react";

export function ServiceCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 h-full flex flex-col shadow-sm animate-pulse">
      {/* Top Image Placeholder */}
      <div className="h-64 bg-gray-200 dark:bg-gray-800 relative p-6 flex flex-col justify-end">
        <div className="h-7 bg-gray-300 dark:bg-gray-700 rounded-lg w-2/3 mb-2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md w-1/3"></div>
      </div>
      
      {/* Body Content Placeholder */}
      <div className="p-8 flex flex-col flex-grow justify-between space-y-6">
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-md w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-md w-5/6"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-md w-4/6"></div>
        </div>
        
        {/* Bottom Link Action Placeholder */}
        <div className="flex items-center justify-between pt-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-md w-28"></div>
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800"></div>
        </div>
      </div>
    </div>
  );
}

export function DoctorCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm animate-pulse">
      {/* Aspect Ratio Image Container Placeholder */}
      <div className="aspect-[4/5] bg-gray-200 dark:bg-gray-800 m-3 md:m-4 rounded-2xl relative p-6 flex flex-col justify-between">
        {/* Rating Badge Top Right */}
        <div className="self-end w-16 h-8 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        
        {/* Doctor Name & Spec Bottom Left */}
        <div className="space-y-2">
          <div className="h-7 bg-gray-300 dark:bg-gray-700 rounded-lg w-3/4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md w-1/2"></div>
        </div>
      </div>
      
      {/* Card Body Placeholder */}
      <div className="p-8 pt-4 space-y-6">
        {/* Qualification Tags */}
        <div className="flex gap-2">
          <div className="h-7 bg-gray-200 dark:bg-gray-800 rounded-full w-24"></div>
          <div className="h-7 bg-gray-200 dark:bg-gray-800 rounded-full w-28"></div>
        </div>

        {/* Bio text lines */}
        <div className="space-y-2.5">
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-md w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-md w-11/12"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-md w-3/4"></div>
        </div>

        {/* Full Profile Button Placeholder */}
        <div className="h-14 bg-gray-200 dark:bg-gray-800 rounded-2xl w-full"></div>
      </div>
    </div>
  );
}
