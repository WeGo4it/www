import { Card, CardContent } from '@/components/ui/card'
import { Building, Globe, Users } from 'lucide-react'

export default function WhoWeAreSection() {
    return (
        <section id="who-we-are" className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Who We Are</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Bridging innovation with implementation through world-class offshore development
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left column with main content */}
                    <div className="space-y-6">
                        <p className="text-foreground text-lg">
                            WeGo4it is a premier offshore software development center based in the vibrant tech hub of Ho Chi Minh City, Vietnam. Founded by seasoned entrepreneur Werner Goeminne, we bridge the gap between innovative ideas and expert implementation through end-to-end operational software development services.
                        </p>
                        <p className="text-foreground text-lg">
                            Our mission is to empower small and medium businesses to leverage the benefits of offshore development—previously accessible only to large enterprises. We democratize access to world-class software development talent, helping you accelerate growth while optimizing costs.
                        </p>
                        
                        {/* Founder signature/quote */}
                        <div className="pt-6 border-t">
                            <blockquote className="italic text-muted-foreground">
                                "We're committed to making offshore development accessible, transparent, and effective for businesses of all sizes."
                            </blockquote>
                            <div className="mt-2 flex items-center">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-primary font-medium">WG</span>
                                </div>
                                <div className="ml-3">
                                    <p className="font-medium">Werner Goeminne</p>
                                    <p className="text-sm text-muted-foreground">Founder & CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right column with cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card className="group relative overflow-hidden border border-border bg-card transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                            <CardContent className="p-6">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                    <Building className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="mb-2 font-medium">Based in Vietnam</h3>
                                <p className="text-sm text-muted-foreground">
                                    Operating from Vietnam's dynamic tech center with access to exceptional talent
                                </p>
                            </CardContent>
                            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        </Card>
                        
                        <Card className="group relative overflow-hidden border border-border bg-card transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10">
                            <CardContent className="p-6">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                    <Users className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="mb-2 font-medium">SMB Focused</h3>
                                <p className="text-sm text-muted-foreground">
                                    Tailored solutions specifically designed for small and medium businesses
                                </p>
                            </CardContent>
                            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        </Card>
                        
                        <Card className="group relative overflow-hidden border border-border bg-card transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 sm:col-span-2">
                            <CardContent className="p-6">
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                    <Globe className="h-5 w-5 text-primary" />
                                </div>
                                <h3 className="mb-2 font-medium">Global Standards, Local Advantage</h3>
                                <p className="text-sm text-muted-foreground">
                                    We combine international best practices with the cost advantages and talent pool of Vietnam
                                </p>
                            </CardContent>
                            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        </Card>
                    </div>
                </div>
                
                {/* Stats section */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="p-6 rounded-lg bg-card border border-border">
                        <p className="text-3xl font-semibold text-primary">2024</p>
                        <p className="text-sm text-muted-foreground mt-1">Founded</p>
                    </div>
                    <div className="p-6 rounded-lg bg-card border border-border">
                        <p className="text-3xl font-semibold text-primary">50+</p>
                        <p className="text-sm text-muted-foreground mt-1">Team Members</p>
                    </div>
                    <div className="p-6 rounded-lg bg-card border border-border">
                        <p className="text-3xl font-semibold text-primary">100+</p>
                        <p className="text-sm text-muted-foreground mt-1">Projects Delivered</p>
                    </div>
                    <div className="p-6 rounded-lg bg-card border border-border">
                        <p className="text-3xl font-semibold text-primary">8+</p>
                        <p className="text-sm text-muted-foreground mt-1">Countries Served</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
