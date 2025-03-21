import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Users, LightbulbIcon, CodeIcon } from 'lucide-react'
import { ReactNode } from 'react'

export default function ServicesSection() {
    return (
        <section id="services" className="py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Services We Offer</h2>
                    <p className="mt-4">Libero sapiente aliquam quibusdam aspernatur, praesentium iusto repellendus.</p>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 md:mt-16">
                    <Card className="group relative overflow-hidden border border-border bg-card transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Users className="size-6 text-primary" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Offshore Team Extension</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Seamlessly integrate our skilled developers into your existing team structure. Scale up or down based on project demands without the overhead of full-time hiring.</p>
                        </CardContent>
                        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    </Card>

                    <Card className="group relative overflow-hidden border border-border bg-card transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <LightbulbIcon className="size-6 text-primary" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Strategic IT Consultancy</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Leverage our expertise to make informed technology decisions aligned with your business objectives. Our consultants provide roadmaps that balance innovation with practicality.</p>
                        </CardContent>
                        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    </Card>

                    <Card className="group relative overflow-hidden border border-border bg-card transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <CodeIcon className="size-6 text-primary" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">End-to-End Development</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">From concept to deployment, we handle the complete software development lifecycle with dedicated project managers ensuring smooth execution.</p>
                        </CardContent>
                        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-primary)15%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-primary)30%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-primary)20%,transparent)] dark:group-hover:bg-primary/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-primary)40%,transparent)]">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
        <div className="absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t border-primary/30 bg-card shadow-sm">{children}</div>
    </div>
)
