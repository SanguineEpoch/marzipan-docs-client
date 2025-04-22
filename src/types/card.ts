// src/types/card.ts

export interface Button {
  text: string
  url: string
  prependIcon?: string
  appendIcon?: string
  variant?: 'flat' | 'outlined' | 'text' | 'tonal'
  color?: string
}

export interface Card {
  title: string
  description: string | string[]
  icon: string
  code?: string
  button?: Button[]
}
