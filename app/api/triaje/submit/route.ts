import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendTriajeResult } from '@/lib/services/email.service';

const SubmitSchema = z.object({
  email: z.string().email(),
  planKey: z.enum(['essencial', 'vital', 'quantum']),
  planName: z.string().min(1),
  headline: z.string().min(1),
  perks: z.array(z.string()).min(1),
  price: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = SubmitSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Input inválido', details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    await sendTriajeResult({ to: parsed.data.email, ...parsed.data });
    return NextResponse.json({ ok: true }, { status: 200 });

  } catch (error) {
    console.error('[POST /api/triaje/submit]', error);
    return NextResponse.json(
      { error: 'Error al enviar el resultado por correo' },
      { status: 500 }
    );
  }
}
