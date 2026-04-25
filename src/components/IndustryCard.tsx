// src/components/IndustryCard.tsx
import { LucideIcon } from 'lucide-react'

interface IndustryCardProps {
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
}

export default function IndustryCard({ icon: Icon, title, subtitle, description }: IndustryCardProps) {
  return (
    <div className="group relative bg-white rounded-xl border border-gray-100 p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-default">
      {/* Orange left border reveal */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F97316] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom rounded-l-xl" />

      {/* Icon */}
      <div className="w-12 h-12 bg-[#F97316]/10 group-hover:bg-[#F97316]/20 rounded-lg flex items-center justify-center mb-5 transition-colors duration-300">
        <Icon className="w-6 h-6 text-[#F97316]" />
      </div>

      {/* Content */}
      <h3 className="font-['Oswald'] text-xl font-semibold text-[#0B1F3A] mb-1 group-hover:text-[#F97316] transition-colors duration-300">
        {title}
      </h3>
      <p className="font-['DM_Sans'] text-xs font-semibold text-[#F97316] uppercase tracking-wider mb-3">
        {subtitle}
      </p>
      <p className="font-['DM_Sans'] text-sm text-gray-500 leading-relaxed">
        {description}
      </p>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#F97316]/5 group-hover:bg-[#F97316]/10 rounded-tl-full transition-colors duration-300" />
    </div>
  )
}
