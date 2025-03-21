import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarClock, CalendarDays, LogIn, User } from "lucide-react";
import { UserAccount } from "@/schema/all-user-account-schema";
import { formatDate, getInitials } from '@/lib/formatters';

interface UserAccountsProps {
  accounts: UserAccount[];
}

export function UserAccountCard({ accounts }: UserAccountsProps) {
  return (
    <div className="container mx-auto py-8 px-4">
      {(!accounts || accounts.length === 0) ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No user accounts found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accounts.map(account => {
            // Skip invalid accounts
            if (!account?.account_uuid) return null;
            
            // Generate a truncated UUID for display purposes
            const displayUuid = account.account_uuid.length > 8 
              ? `${account.account_uuid.slice(0, 8)}...` 
              : account.account_uuid;
            
            return (
              <Card key={account.account_uuid} className="w-full max-w-md mx-auto border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                {/* Header with Avatar and User Info */}
                <CardHeader className="bg-gray-50 p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16 border-2 border-gray-200">
                      <AvatarImage 
                        src={account.profile_image_data || ""} 
                        alt={account.account_legal_name || "User"} 
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-gray-100 text-gray-700 font-medium">
                        {getInitials(account.account_legal_name || "")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {account.account_legal_name || "Unknown User"}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {account.account_username ? `@${account.account_username}` : "No username"}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                {/* Account Details Content */}
                <CardContent className="p-6 space-y-5">
                  {/* Division Information */}
                  <div className="flex items-center space-x-4">
                    <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
                      <User className="h-5 w-5 text-gray-600" />
                    </div>
                    <span className="text-sm text-gray-700">Division: {account.account_division_designation || "No division assigned"}</span>
                  </div>

                  {/* Authentication and Timestamp Information */}
                  <div className="space-y-4 text-gray-600">
                    {/* Login info */}
                    <div className="flex items-center space-x-4">
                      <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
                        <LogIn className="h-5 w-5 text-gray-600" />
                      </div>
                      <span className="text-sm text-gray-700">
                        {account.account_last_authentication_timestamp 
                          ? `Last Login: ${formatDate(account.account_last_authentication_timestamp)}`
                          : "Login History: No login history"}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
                        <CalendarDays className="h-5 w-5 text-gray-600" />
                      </div>
                      <span className="text-sm text-gray-700">Created: {formatDate(account.account_created_timestamp || "")}</span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
                        <CalendarClock className="h-5 w-5 text-gray-600" />
                      </div>
                      <span className="text-sm text-gray-700">Updated: {formatDate(account.account_updated_timestamp || "")}</span>
                    </div>
                  </div>
                </CardContent>

                {/* Footer with Partial Account UUID */}
                <CardFooter className="p-6 pt-2 flex justify-between items-center border-t border-gray-100">
                  <div className="text-xs text-gray-400">
                    Account ID: {displayUuid}
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
