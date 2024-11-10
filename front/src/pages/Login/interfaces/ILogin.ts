import { z } from "zod";

export const loginSchema = z.object({
  name: z.string()
})

export type ILogin = z.infer<typeof loginSchema>