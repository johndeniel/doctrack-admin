import * as z from "zod";

export const createUserSchema = z.object({
    account_legal_name: z.string()
    .min(8, { message: 'Legal name must be at least 8 characters long' })
    .max(32, { message: 'Legal name must be at most 32 characters long' }),

    account_username: z.string()
    .min(8, { message: 'Username must be at least 8 characters long' })
    .max(32, { message: 'Username must be at most 32 characters long' })
    .regex(/^[a-zA-Z0-9_]+$/, { message: 'Username can only contain alphanumeric characters and underscores' })
    .refine(val => !val.startsWith('_') && !val.endsWith('_'), {
      message: 'Username cannot start or end with an underscore'
    }),
  
    account_password: z.string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(32, { message: 'Password must be at most 32 characters long' })
    .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
    .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
    .regex(/\d/, { message: 'Password must contain at least one numeric character' }),

    account_division_designation: z.string()
    .min(1, { message: 'Division designation is required' })
    .max(32, { message: 'Division designation must be at most 32 characters long' }),

    users_profile_image: z.instanceof(File, { message: 'Invalid file type' })
    .refine(file => file.size > 0, { message: 'File is required' })
    .refine(
        file => ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type),
        { message: 'Only JPEG and PNG files are allowed' }
    ),

    users_profile_image_name: z.string(),
    users_profile_image_data: z.string(),
    users_profile_image_type: z.string(),
    users_profile_image_size: z.string()
});

// Export type for form values based on the schema
export type AccountFormValues = z.infer<typeof createUserSchema>;

// Default values for the form
export const accountDefaultValues: AccountFormValues = {
  account_legal_name: "",
  account_username: "",
  account_password: "",
  account_division_designation: "",
  users_profile_image: new File([], ""),
  users_profile_image_name: "",
  users_profile_image_data: "",
  users_profile_image_type: "",
  users_profile_image_size: ""
};