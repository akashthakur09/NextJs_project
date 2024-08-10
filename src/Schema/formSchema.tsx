import { z } from 'zod';

export const formSchema = z.object({
    full_name: z.string().min(3, 'Full name contain atleast 3 character'),
    email_id: z.string().email('Invalid email address'),
    phone_number: z.string().min(10, 'Enter valid phone mobile number'),
    country_of_residence: z.string().min(2, 'Country of residence is required'),
    message: z.string().optional(),
});