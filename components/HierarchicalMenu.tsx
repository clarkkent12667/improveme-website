"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CourseCategory {
  title: string;
  items: { name: string; href: string }[];
  description?: string;
}

export function HierarchicalMenu({ categories }: { categories: CourseCategory[] }) {
    const [activeCategory, setActiveCategory] = React.useState(categories[0]);

    return (
        <div className="flex w-[600px] h-[320px] bg-background rounded-md overflow-hidden">
            {/* Sidebar */}
            <div className="w-[200px] shrink-0 border-r bg-muted/30 p-3 overflow-y-auto">
                <div className="space-y-1">
                    {categories.map((cat) => (
                        <div
                            key={cat.title}
                            onMouseEnter={() => setActiveCategory(cat)}
                            className={cn(
                                "cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                                activeCategory.title === cat.title
                                    ? "bg-primary text-primary-foreground shadow-sm"
                                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {cat.title}
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 p-4 overflow-y-auto">
                <div className="mb-4">
                    <h3 className="text-lg font-bold text-primary mb-1">{activeCategory.title}</h3>
                    {'description' in activeCategory && (
                        <p className="text-xs text-muted-foreground">{(activeCategory as any).description}</p>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {activeCategory.items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                        >
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
