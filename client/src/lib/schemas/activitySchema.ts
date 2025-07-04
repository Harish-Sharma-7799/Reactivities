import { z } from 'zod';
import { requiredString } from '../utils/util';

export const activitySchema = z.object({
    title: requiredString('Title'),
    description: requiredString('Description'),
    date: z.coerce.date({ message: 'Date is required' }),
    location: z.object({
        venue: requiredString('Venue'),
        city: z.string().optional(),
        latitude: z.coerce.number(),
        longitude: z.coerce.number(),
    }),
    category: requiredString('Category')
})

export type ActivitySchema = z.infer<typeof activitySchema>;