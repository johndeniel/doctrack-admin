import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function UserAccountCardSkeleton() {
  return (
    <Card className="w-full max-w-md mx-auto border border-gray-200 rounded-lg shadow-sm overflow-hidden">
      {/* Header Skeleton */}
      <CardHeader className="bg-gray-50 p-6 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-16 w-16 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-36" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </CardHeader>

      {/* Content Skeleton */}
      <CardContent className="p-6 space-y-5">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-9 w-9 rounded-full" />
          <Skeleton className="h-4 w-full max-w-[250px]" />
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-9 w-9 rounded-full" />
            <Skeleton className="h-4 w-full max-w-[200px]" />
          </div>
          
          <div className="flex items-center space-x-4">
            <Skeleton className="h-9 w-9 rounded-full" />
            <Skeleton className="h-4 w-full max-w-[220px]" />
          </div>
          
          <div className="flex items-center space-x-4">
            <Skeleton className="h-9 w-9 rounded-full" />
            <Skeleton className="h-4 w-full max-w-[180px]" />
          </div>
        </div>
      </CardContent>

      {/* Footer Skeleton */}
      <CardFooter className="p-6 pt-2 flex justify-between items-center border-t border-gray-100">
        <Skeleton className="h-3 w-32" />
      </CardFooter>
    </Card>
  );
}