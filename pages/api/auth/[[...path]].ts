// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { superTokensNextWrapper } from "supertokens-node/nextjs";
import supertokens from "supertokens-node";
import { middleware } from "supertokens-node/framework/express";
import { backendConfig } from "../../../config/backendConfig";

supertokens.init(backendConfig());

export default async function superTokens(req: any, res: any) {
    await superTokensNextWrapper(
        async (next: any) => {
            res.setHeader("Cache-Control", "no-cache, no-store, max-age=0, must-revalidate");
            await middleware()(req, res, next);
        },
        req,
        res
    );
    if (!res.writableEnded) {
        res.status(404).send("Not found");
    }
}
