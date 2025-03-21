import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="mx-auto max-w-md">
        <CheckCircle className="mx-auto mb-6 h-16 w-16 text-primary" />
        <h1 className="text-3xl font-bold">Thank You!</h1>
        <p className="mt-4 text-muted-foreground">
          We've received your email address and will be in touch soon.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  )
}
