"use client";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

const MultiSelect = ({
  placeholder,
  options: values,
  selectedOptions: selectedItems,
  setSelectedOptions: setSelectedItems,
  className,
}) => {
  const handleSelectChange = (value) => {
    if (!selectedItems.includes(value)) {
      setSelectedItems((prev) => [...prev, value]);
    } else {
      const referencedArray = [...selectedItems];
      const indexOfItemToBeRemoved = referencedArray.indexOf(value);
      referencedArray.splice(indexOfItemToBeRemoved, 1);
      setSelectedItems(referencedArray);
    }
  };

  const isOptionSelected = (value) => {
    return selectedItems.includes(value) ? true : false;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="w-full">
        <Button
          variant="outline"
          className={cn(
            "w-full flex items-center justify-between rounded-[2rem] border border-gray-200 px-6 h-[56px]",
            className
          )}
        >
          <div className="flex-1 text-left overflow-hidden">
            <span className="truncate block">
              {selectedItems.length > 0
                ? values
                    .filter((opt) => selectedItems.includes(opt.value))
                    .map((opt) => opt.label)
                    .join(", ")
                : placeholder}
            </span>
          </div>
          <ChevronDown className="h-4 w-4 opacity-50 shrink-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-[var(--radix-dropdown-menu-trigger-width)] max-w-[300px] bg-white"
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        {values.map((value, index) => {
          return (
            <DropdownMenuCheckboxItem
              onSelect={(e) => e.preventDefault()}
              key={index}
              checked={isOptionSelected(value.value)}
              onCheckedChange={() => handleSelectChange(value.value)}
            >
              {value.label}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MultiSelect;
