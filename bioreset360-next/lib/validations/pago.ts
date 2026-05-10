import { z } from 'zod';

export const CreatePreferenceSchema = z.object({
  planId: z.enum(['essencial', 'vital', 'premium'], {
    message: 'Plan inválido',
  }),
});

export type CreatePreferenceInput = z.infer<typeof CreatePreferenceSchema>;
