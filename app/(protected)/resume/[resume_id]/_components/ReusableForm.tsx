"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/components/shared/ui/Form";
import { Input } from "@/app/components/shared/ui/input";
import { Textarea } from "@/app/components/shared/ui/textarea";
import { Button } from "@/app/components/shared/ui/button";
import { cn } from "@/lib/utils";
import { FormFieldConfig } from "@/app/types/Form.type";
import LoadingSpinner from "@/app/components/shared/ui/loadingSpinner";

interface ReusableFormProps {
  inputs: FormFieldConfig[];
  onSubmit: (data: any) => void;
  isPending?: boolean;
  className?: string;
  form: any;
  buttonText: string;
}

export function ReusableForm({ form, inputs, onSubmit, isPending = false, className, buttonText }: ReusableFormProps) {
  return (
    <Form {...form}>
      <form onSubmit={form?.handleSubmit(onSubmit)} className={cn("space-y-6", className)}>
        <div className={"grid gap-4"}>
          {inputs?.map((input) => (
            <FormField
              disabled={isPending}
              key={input.name}
              control={form.control}
              name={input.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">{input.label}</FormLabel>
                  <FormControl>
                    {input.type === "textarea" ? (
                      <Textarea placeholder={input.placeholder} {...field} value={field.value ?? ""} className="min-h-[100px]" />
                    ) : (
                      <Input placeholder={input.placeholder} {...field} value={field.value ?? ""} type={input.type || "text"} />
                    )}
                  </FormControl>
                  <FormMessage className="text-sm font-medium text-red-500" />
                </FormItem>
              )}
            />
          ))}
        </div>

        <Button type="submit" disabled={isPending} className="w-full md:w-auto">
          {isPending ? (
            <>
              Submitting... <LoadingSpinner />
            </>
          ) : (
            buttonText
          )}
        </Button>
      </form>
    </Form>
  );
}
