import { superTokensNextWrapper } from "supertokens-node/nextjs";
import { verifySession } from "supertokens-node/recipe/session/framework/express";
import supertokens from "supertokens-node";
import { backendConfig } from "../../config/backendConfig";
import NextCors from "nextjs-cors";

supertokens.init(backendConfig());

export default async function user(req, res) {
     // NOTE: We need CORS only if we are querying the APIs from a different origin
     await NextCors(req, res, {
        methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
        origin: "https://rifa.comofazer.net.br",
        credentials: true,
        allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    });

    await superTokensNextWrapper(
        async (next) => {
            return await verifySession()(req, res, next);
        },
        req,
        res
    );

    return res.json({
        note: "Fetch any data from your application for authenticated user after using verifySession middleware",
        userId: req.session.getUserId(),
        sessionHandle: req.session.getHandle(),
        accessTokenPayload: req.session.getAccessTokenPayload(),
    });
}
