import { createFileRoute } from '@tanstack/react-router'
import { ReferencePage } from '@/components/ReferencePage'

export const Route = createFileRoute('/kt')({
  component: () => <ReferencePage slug="kt" />,
})
