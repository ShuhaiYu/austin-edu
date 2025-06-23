// components/subjects/AMCSubject.jsx
"use client";

import { BaseSubject } from "./BaseSubject";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const AMCSubject = ({ data, onLearnMore }) => (
  <BaseSubject
    title={data.title}
    compactContent={
      <div className="flex items-center justify-center w-full">
        <div className="text-center text-lg leading-8 max-w-2xl">
          {data.compactStats}
        </div>
      </div>
    }
    expandedContent={
      <div className="text-center mt-12">
        <Button
          className="mx-auto px-10 py-4 text-lg bg-austin-red hover:bg-austin-red/80 leading-6"
          onClick={onLearnMore}
        >
          <span className="mr-2">{data.buttonText}</span>
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    }
    onLearnMore={onLearnMore}
  />
);
