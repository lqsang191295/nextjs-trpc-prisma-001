import { z } from "zod";
import { procedure, router } from "../trpc";
import { prisma } from "@/db";

export const userRouter = router({
    getUsers: procedure.query(() => {
        return prisma.user.findMany()
    }),
    addUser: procedure.input(z.object({name: z.string(), race: z.string()}))
    .mutation(() => {
        // const {input} = opts
    })
})