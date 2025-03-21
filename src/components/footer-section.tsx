import { Logo } from '@/components/logo'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

const links = [
    {
        title: 'Services',
        href: '#services',
    },
    {
        title: 'Why Us',
        href: '#why-us',
    },
    {
        title: 'Who We Are',
        href: '#who-we-are',
    },
]

export default function FooterSection() {
    return (
        <footer className="border-t bg-muted/40 py-12 md:py-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Logo and company info */}
                    <div className="space-y-4">
                        <Link href="/" aria-label="go home" className="block size-fit">
                            <Logo />
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Premier offshore software development center based in Ho Chi Minh City, Vietnam.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter" className="text-muted-foreground hover:text-primary">
                                <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
                                </svg>
                            </Link>
                            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
                                <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Navigation links */}
                    <div>
                        <h3 className="mb-4 text-sm font-medium">Navigation</h3>
                        <ul className="space-y-2">
                            {links.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm duration-150">
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div>
                        <h3 className="mb-4 text-sm font-medium">Contact</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Ho Chi Minh City, Vietnam</li>
                            <li>
                                <Link href="mailto:info@wego4it.com" className="hover:text-primary">
                                    info@wego4it.com
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter/Contact form */}
                    <div>
                        <h3 className="mb-4 text-sm font-medium">Get in touch</h3>
                        <p className="mb-4 text-sm text-muted-foreground">Have a project in mind? Let's discuss how we can help.</p>
                        <Button variant="outline" size="sm" className="w-full">
                            <Mail className="mr-2 h-4 w-4" />
                            Contact Us
                        </Button>
                    </div>
                </div>

                <div className="mt-12 border-t pt-6">
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <p className="text-center text-sm text-muted-foreground">
                            © {new Date().getFullYear()} WeGo4it. All rights reserved.
                        </p>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
                            <Link href="#" className="hover:text-primary">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
