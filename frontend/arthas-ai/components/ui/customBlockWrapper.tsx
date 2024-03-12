"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown, Settings2 } from "lucide-react";

import { cn } from "@/lib/utils";

const CustomBlockRoot = AccordionPrimitive.Root;

const CustomBlockItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
CustomBlockItem.displayName = "AccordionItem";

const CustomBlockTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex bg-blue-50 ">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <div className="flex space-x-2">
        <Settings2 size={16} />
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
CustomBlockTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const CustomBlockContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

CustomBlockContent.displayName = AccordionPrimitive.Content.displayName;

export {
  CustomBlockRoot as BlockAccordion,
  CustomBlockItem as BlockAccordionItem,
  CustomBlockTrigger as BlockAccordionTrigger,
  CustomBlockContent as BlockAccordionContent,
};
