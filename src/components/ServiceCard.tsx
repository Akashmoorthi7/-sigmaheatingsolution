// src/components/ServiceCard.tsx
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default">
      {/* Icon circle */}
      <div className="w-14 h-14 bg-[#0B1F3A] group-hover:bg-[#F97316] rounded-full flex items-center justify-center mb-6 transition-colors duration-300 shadow-md">
        <Icon className="w-7 h-7 text-white" />
      </div>

      {/* Title with orange underline animation */}
      <h3 className="font-['Oswald'] text-xl font-semibold text-[#0B1F3A] mb-3 relative inline-block hover-underline-orange group-hover:text-[#F97316] transition-colors duration-300">
        {title}
      </h3>

      {/* Orange accent line */}
      <div className="w-0 group-hover:w-12 h-0.5 bg-[#F97316] transition-all duration-300 mb-3" />

      <p className="font-['DM_Sans'] text-sm text-gray-500 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
