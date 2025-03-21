import { z } from "zod";

export const UserAccountSchema = z.object({
  account_uuid: z.string(),
  account_legal_name: z.string(),
  account_username: z.string(),
  account_division_designation: z.string().nullable(),
  account_last_authentication_timestamp: z.string().nullable(),
  account_created_timestamp: z.string(),
  account_updated_timestamp: z.string(),
  profile_image_data: z.string().nullable(),
});

export type UserAccount = z.infer<typeof UserAccountSchema>;
