'use client'

import React, { useState, useEffect } from 'react'
import { fetchAllUserAccount } from '@/server/queries/fetch-all-user-account'
import { UserAccount } from "@/schema/all-user-account-schema"
import { UserAccountCard } from '@/components/user-account-card'
import { UserAccountCardSkeleton } from '@/components/user-account-card-skeleton'

export default function UsersAccountPage() {
  const [accounts, setAccounts] = useState<UserAccount[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadAccounts() {
      try {
        setIsLoading(true);
        const fetchedAccounts = await fetchAllUserAccount();
        setAccounts(Array.isArray(fetchedAccounts) ? fetchedAccounts : []);
        setError(null);
      } catch (err) {
        console.error('Error fetching user accounts:', err);
        setError('Failed to load user accounts. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }

    loadAccounts();
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <UserAccountCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return <UserAccountCard accounts={accounts} />;
}
