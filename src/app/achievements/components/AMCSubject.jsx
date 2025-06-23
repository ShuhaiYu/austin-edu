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
        <div className="text-center text-base sm:text-lg lg:text-xl leading-6 sm:leading-7 lg:leading-8 max-w-2xl">
          {data.compactStats}
        </div>
      </div>
    }
    expandedContent={
      <div className="text-center mt-8 sm:mt-10 lg:mt-12">
        <Button
          className="mx-auto px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg bg-austin-red hover:bg-austin-red/80 leading-6"
          onClick={onLearnMore}
        >
          <span className="mr-2">{data.buttonText}</span>
          <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>
    }
    onLearnMore={onLearnMore}
  />
);