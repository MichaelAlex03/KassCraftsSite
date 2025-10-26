import type { LucideIcon } from "lucide-react";

interface AboutCardProps {
    icon: LucideIcon
    title: string
    text: string
}

const Card = ({ icon, title, text }: AboutCardProps) => {
    return (
        <div>Card</div>
    )
}

export default Card