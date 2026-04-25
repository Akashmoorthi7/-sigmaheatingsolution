// src/hooks/useFadeIn.ts
import { useEffect, useRef } from 'react'

export function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    // Observe the element itself and all .fade-in-section children
    const targets = el.querySelectorAll<HTMLElement>('.fade-in-section')
    targets.forEach((t) => observer.observe(t))
    if (el.classList.contains('fade-in-section')) observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return ref
}
