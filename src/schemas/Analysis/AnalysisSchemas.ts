import z from 'zod'

// Validacion formulario AnalysisForm
export const AnalysisFormSchema = z.object({

    GoalIndicator: z
    .string()
    .min(2, 'Campo obligatorio')
    .max(10, 'Solo puede escribir un limite de 10 caracteres')
    .regex(/^(\d+(\.\d{1,2})?|\d+(\.\d{1,2})?%)$/),

    IndicatorReal: z
    .string()
    .min(2, 'Campo obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres')
    .regex(/^(\d+(\.\d{1,2})?|\d+(\.\d{1,2})?%)$/),

    Gap: z
    .string()
    .min(2, 'Campo obligatorio')
    .max(10, 'Solo puede escribir un limite de 10 caracteres')
    .regex(/^(\d+(\.\d{1,2})?|\d+(\.\d{1,2})?%)$/),

    PunctualProblem: z
    .string()
    .min(2, 'Campo obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres')
    .regex(/^[A-Za-z]+$/),

    DescriptionProblem: z
    .string()
    .min(2, 'Campo obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres')
    .regex(/^[A-Za-z]+$/)
})

export type AnalysisForm = z.infer<typeof AnalysisFormSchema>