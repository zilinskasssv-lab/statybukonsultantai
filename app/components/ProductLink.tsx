'use client'

import type { AnchorHTMLAttributes } from 'react'
import { track } from '@vercel/analytics'

export type Produktas = 'aktavimas' | 'knyga' | 'prosamata'

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick'> & {
  produktas: Produktas
}

// Išorinė produkto nuoroda, kuri paspaudus siunčia Vercel statistikos įvykį.
// Nuoroda atsidaro naujame skirtuke, todėl puslapis lieka atidarytas ir įvykis spėja išsisiųsti.
export default function ProductLink({ produktas, children, ...rest }: Props) {
  return (
    <a {...rest} onClick={() => track('produkto_paspaudimas', { produktas })}>
      {children}
    </a>
  )
}
