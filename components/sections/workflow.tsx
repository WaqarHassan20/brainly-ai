"use client";

import { User, FileText, Pencil, Link } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedWrapper } from "@/components/ui/animated-wrapper";
import { BrowserMockup } from "@/components/ui/browser-mockup";
import { WORKFLOW_STEPS } from "@/lib/constants";
import type { WorkflowStep as WorkflowStepType } from "@/types";

function Step01Mockup() {
  return (
    <BrowserMockup url="twitter.com/post/10935...">
      <div className="space-y-3">
        {/* Skeleton content lines */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 shrink-0" />
          <div className="space-y-2 flex-1">
            <div className="h-3 bg-gray-100 rounded-full w-full" />
            <div className="h-3 bg-gray-100 rounded-full w-4/5" />
          </div>
        </div>
        {/* Saved toast */}
        <div className="inline-flex items-center gap-2 bg-gray-50 border border-border-light rounded-lg px-4 py-2 mt-2">
          <div className="w-3 h-3 bg-green-500 rounded-sm" />
          <span className="text-sm font-medium text-foreground">
            Saved to Brainly
          </span>
        </div>
      </div>
    </BrowserMockup>
  );
}

function Step02Mockup() {
  return (
    <BrowserMockup>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div />
          <div className="flex items-center gap-1.5 text-sm">
            <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
            <span className="text-accent font-medium">...AI Indexing Link</span>
            <span className="text-accent ml-1 font-bold">+</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Alex Hormozi", icon: <User className="w-3.5 h-3.5" /> },
            { label: "Video Transcript", icon: <FileText className="w-3.5 h-3.5" /> },
            { label: "B2B Marketing", icon: <Pencil className="w-3.5 h-3.5" /> },
            { label: "Growth Engine", icon: <Link className="w-3.5 h-3.5" /> },
          ].map((tag) => (
            <span
              key={tag.label}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-border-light rounded-lg text-sm text-foreground hover:bg-accent-light hover:border-accent/20 cursor-pointer transition-all duration-200"
            >
              {tag.label}
              <span className="text-muted">{tag.icon}</span>
            </span>
          ))}
        </div>
        <div className="border-t border-border-light mt-2" />
      </div>
    </BrowserMockup>
  );
}

function Step03Mockup() {
  return (
    <BrowserMockup title="Brainly Search Engine">
      <div className="space-y-4">
        {/* Search input */}
        <div className="flex items-center gap-2 border border-border rounded-lg px-4 py-2.5 bg-white">
          <span className="text-muted">🔍</span>
          <span className="text-sm text-muted flex-1">
            What was that growth marketing video...
          </span>
          <span className="animate-cursor-blink text-accent">|</span>
        </div>
        {/* Result card */}
        <div className="bg-gray-50 border border-border-light rounded-xl p-4 hover:shadow-md transition-shadow">
          <span className="text-[10px] font-bold tracking-wider text-red-500 bg-red-50 px-2 py-0.5 rounded">
            YOUTUBE
          </span>
          <h4 className="text-sm font-bold text-foreground mt-2">
            10x B2B Growth Engine Framework
          </h4>
          <div className="flex items-center gap-1.5 mt-1.5">
            <span className="text-accent text-xs animate-spin-slow">✦</span>
            <span className="text-xs text-muted">
              AI Summary: Explains visual B2B marketing loops...
            </span>
          </div>
        </div>
      </div>
    </BrowserMockup>
  );
}

const mockups: Record<string, React.ReactNode> = {
  "01": <Step01Mockup />,
  "02": <Step02Mockup />,
  "03": <Step03Mockup />,
};

function WorkflowStepCard({ step }: { readonly step: WorkflowStepType }) {
  const isLeft = step.layout === "left";
  const mockup = mockups[step.number];

  return (
    <div
      className={`grid lg:grid-cols-2 gap-12 items-center group/step ${!isLeft ? "lg:[direction:rtl]" : ""}`}
    >
      {/* Text side */}
      <AnimatedWrapper direction={isLeft ? "left" : "right"} delay={0.1}>
        <div className={`${!isLeft ? "lg:[direction:ltr]" : ""} group-hover/step:translate-y-[-2px] transition-transform duration-300`}>
          <span className="text-5xl md:text-6xl font-black text-accent-soft/40 tracking-tight group-hover/step:text-accent transition-colors duration-300">
            {step.number}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2 group-hover/step:text-accent transition-colors duration-300">
            {step.title}
          </h3>
          <p className="text-accent font-medium mt-2">{step.subtitle}</p>
          <p className="text-muted mt-4 leading-relaxed">{step.description}</p>
        </div>
      </AnimatedWrapper>

      {/* Mockup side */}
      <AnimatedWrapper
        direction={isLeft ? "right" : "left"}
        delay={0.3}
      >
        <div className={`${!isLeft ? "lg:[direction:ltr]" : ""} hover:scale-[1.02] hover:-rotate-1 hover:shadow-2xl transition-all duration-300 cursor-pointer`}>{mockup}</div>
      </AnimatedWrapper>
    </div>
  );
}

export function Workflow() {
  return (
    <section id="workflow" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="3-STEP WORKFLOW"
          heading="From scattered chaos to absolute recall in 3 steps"
          subtitle="Brainly fits effortlessly into your existing browsing habits. You don't have to build any new database systems."
        />

        <div className="space-y-24 lg:space-y-32 mt-16">
          {WORKFLOW_STEPS.map((step) => (
            <WorkflowStepCard key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
