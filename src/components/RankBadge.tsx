"use client"

import { Crown } from "lucide-react"
import { cn } from "../lib/utils"

type Rank = "Gold" | "Silver" | "Bronze" | (string & {})

interface RankBadgeProps {
  rank: Rank
  className?: string
}

const rankColors: Record<Rank, { bg: string; text: string }> = {
  Gold: { bg: "bg-yellow-400", text: "text-yellow-900" },
  Silver: { bg: "bg-gray-300", text: "text-gray-800" },
  Bronze: { bg: "bg-amber-700", text: "text-amber-100" },
}

export default function RankBadge({ rank, className }: RankBadgeProps) {
  const colors = rankColors[rank] || { bg: "bg-gray-200", text: "text-gray-700" }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold shadow",
        colors.bg,
        colors.text,
        className,
      )}
    >
      <Crown className="h-4 w-4" aria-hidden="true" />
      {rank}
    </span>
  )
}
