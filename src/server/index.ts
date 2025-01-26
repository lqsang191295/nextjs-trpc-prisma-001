import { appRouter } from './routers/_app';
import { userRouter } from './routers/user';
import { router } from './trpc';

export const rootRouter  = router({
    appRouter,
    user: userRouter
})

export type RootRouter = typeof rootRouter;