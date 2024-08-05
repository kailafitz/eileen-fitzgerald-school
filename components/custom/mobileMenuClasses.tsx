"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

const MobileMenuClasses = () => {
  const [value, setValue] = useState("");
  const router = useRouter();

  useEffect(() => {
    router.push(`#${value}`);
  }, [value]);

  return (
    <Select
      onValueChange={(value) => {
        setValue(value);
      }}
    >
      <SelectTrigger className="md:hidden bg-secondary h-8 text-secondary-foreground border-t-0 border-l-0 border-r-0 border-b border-primary p-0 text-base rounded-none">
        <SelectValue placeholder={value === "" ? "Contents" : value} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="what-is-speech-and-drama">
          What is Speech and Drama?
        </SelectItem>
        <SelectItem value="benefits">Benefits of Speech and Drama</SelectItem>
        <SelectItem value="class-schedules">Class Schedules</SelectItem>
        <SelectItem value="activities">Activities</SelectItem>
        <SelectItem value="yearly-events">Yearly Events</SelectItem>
        <SelectItem value="public-speaking">Public Speaking</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default MobileMenuClasses;
