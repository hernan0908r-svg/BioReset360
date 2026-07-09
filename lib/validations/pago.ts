import { z } from 'zod';

export const CreatePreferenceSchema = z.object({
  planId: z.enum(['essencial', 'vital', 'quantum'], {
    message: 'Plan inválido',
  }),
});

export type CreatePreferenceInput = z.infer<typeof CreatePreferenceSchema>;
