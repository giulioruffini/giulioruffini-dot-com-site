import { createFileRoute } from '@tanstack/react-router'
import { ReferencePage } from '@/components/ReferencePage'

export const Route = createFileRoute('/neuroscience')({
  component: () => <ReferencePage slug="neuroscience" />,
})
