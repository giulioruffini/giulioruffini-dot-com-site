import { createFileRoute } from '@tanstack/react-router'
import { ReferencePage } from '@/components/ReferencePage'

export const Route = createFileRoute('/stimulation')({
  component: () => <ReferencePage slug="stimulation" />,
})
