"use client";

import { BaseSubject } from "./BaseSubject";

export const AMCSubject = ({ data }) => (
  <BaseSubject
    title={data.title}
    compactContent={
      <div className="flex items-center justify-center w-full">
        <div className="text-center text-lg leading-8 max-w-2xl">
          {data.compactStats}
        </div>
      </div>
    }
    expandedContent={null}
  />
);