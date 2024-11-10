import { z } from "zod";

export const clientSchema = z.object({
  name: z.string(),
  companyValue: z.number(),
  salary: z.number()
})

export type INewClient = z.infer<typeof clientSchema>