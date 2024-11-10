import { z } from "zod";

export const clientSchema = z.object({
  name: z.string().min(1, "Nome não informado"),
  companyValue: z.preprocess(
    (value) => (isNaN(Number(value)) ? 0 : Number(value)),
    z.number().min(1, "Valor da empresa não informado")
  ),
  salary: z.preprocess(
    (value) => (isNaN(Number(value)) ? 0 : Number(value)),
    z.number().min(1, "Salário não informado")
  ),
});

export type INewClient = z.infer<typeof clientSchema>;
