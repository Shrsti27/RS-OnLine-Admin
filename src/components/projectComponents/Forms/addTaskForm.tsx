"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {CalendarIcon, PlusIcon} from "@radix-ui/react-icons";

import {Input} from "@/components/ui/input";
import {Label} from "@radix-ui/react-label";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
// import {format} from "date-fns";
import {addDays, format} from "date-fns";
import {DateRange} from "react-day-picker";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Calendar} from "@/components/ui/calendar";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

export default function AddTaskForm({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="default" className="ml-auto">
          Asign Task <PlusIcon className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Asign New Task</DialogTitle>
          <DialogDescription>
            <form action="#" className="mt-5">
              <div className="mb-5 gap-3 flex-col flex">
                <Label>Title</Label>
                <Input placeholder="Task Title" required />
              </div>

              <div className="mb-5 gap-3 flex flex-col">
                <Label>Discreption</Label>
                <Input placeholder="Task Discreption" required />
              </div>

              <div className="mb-5 gap-3 flex flex-col">
                <Label>Select Date</Label>
                <div className={cn("grid gap-2", className)}>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                          "w-[300px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                          date.to ? (
                            <>
                              {format(date.from, "LLL dd, y")} -{" "}
                              {format(date.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(date.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="mb-5 gap-3 flex flex-col">
                <Label>Select Team</Label>

                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Team Leader" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employee">Sachin</SelectItem>
                    <SelectItem value="head">Manish</SelectItem>
                    <SelectItem value="manager">Sandip</SelectItem>
                    <SelectItem value="new">Aman</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Team Member" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employee">Sachin</SelectItem>
                    <SelectItem value="head">Manish</SelectItem>
                    <SelectItem value="manager">Sandip</SelectItem>
                    <SelectItem value="new">Aman</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-3">
                <Button variant="destructive" className="w-full">
                  Cancel
                </Button>
                <Button variant="default" className="w-full">
                  Add
                </Button>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
