import React from "react";

export function ServiceCardSkeleton() {
  return (
    <div className="bg-white dark:bg-[#121212] rounded-sm overflow-hidden border border-gray-200 dark:border-[#222222] h-full flex flex-col animate-pulse shadow-xs">
      {/* Top Image Placeholder */}
      <div className="h-60 bg-gray-200 dark:bg-[#1a191c] relative p-6 flex flex-col justify-end">
        <div className="h-6 bg-gray-300 dark:bg-[#262429] rounded-sm w-2/3 mb-2"></div>
        <div className="h-4 bg-gray-300 dark:bg-[#262429] rounded-sm w-1/3"></div>
      </div>
      
      {/* Body Content Placeholder */}
      <div className="p-6 md:p-8 flex flex-col flex-grow justify-between space-y-6">
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 dark:bg-[#1a191c] rounded-sm w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-[#1a191c] rounded-sm w-5/6"></div>
          <div className="h-4 bg-gray-200 dark:bg-[#1a191c] rounded-sm w-4/6"></div>
        </div>
        
        {/* Bottom Link Action Placeholder */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-[#222222]">
          <div className="h-4 bg-gray-200 dark:bg-[#1a191c] rounded-sm w-28"></div>
          <div className="w-8 h-8 rounded-sm bg-gray-200 dark:bg-[#1a191c]"></div>
        </div>
      </div>
    </div>
  );
}

export function DoctorCardSkeleton() {
  return (
    <div className="bg-white dark:bg-[#121212] rounded-sm overflow-hidden border border-gray-200 dark:border-[#222222] animate-pulse shadow-xs">
      {/* Aspect Ratio Image Container Placeholder */}
      <div className="aspect-[4/5] bg-gray-200 dark:bg-[#1a191c] m-3 md:m-4 rounded-sm relative p-6 flex flex-col justify-end">
        <div className="space-y-2">
          <div className="h-6 bg-gray-300 dark:bg-[#262429] rounded-sm w-3/4"></div>
          <div className="h-4 bg-gray-300 dark:bg-[#262429] rounded-sm w-1/2"></div>
        </div>
      </div>
      
      {/* Card Body Placeholder */}
      <div className="p-6 md:p-8 pt-2 space-y-6">
        {/* Qualification Tags */}
        <div className="flex gap-2">
          <div className="h-6 bg-gray-200 dark:bg-[#1a191c] rounded-sm w-20"></div>
          <div className="h-6 bg-gray-200 dark:bg-[#1a191c] rounded-sm w-24"></div>
        </div>

        {/* Bio text lines */}
        <div className="space-y-2.5">
          <div className="h-4 bg-gray-200 dark:bg-[#1a191c] rounded-sm w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-[#1a191c] rounded-sm w-11/12"></div>
        </div>

        {/* Full Profile Button Placeholder */}
        <div className="h-12 bg-gray-200 dark:bg-[#1a191c] rounded-sm w-full"></div>
      </div>
    </div>
  );
}
