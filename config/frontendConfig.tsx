import ThirdPartyEmailPasswordReact from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import SessionReact from "supertokens-auth-react/recipe/session";
import { appInfo } from "./appInfo";
import Router from "next/router";

export let frontendConfig = () => {
    return {
        appInfo,
        // recipeList contains all the modules that you want to
        // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
        recipeList: [
            ThirdPartyEmailPasswordReact.init({
                signInAndUpFeature: {
                    providers: [
                        ThirdPartyEmailPasswordReact.Google.init(),
                        //ThirdPartyEmailPasswordReact.Github.init(),
                        ThirdPartyEmailPasswordReact.Apple.init(),
                    ],
                },
            }),
            SessionReact.init(),
        ],
        // this is so that the SDK uses the next router for navigation
        windowHandler: (oI) => {
            return {
                ...oI,
                location: {
                    ...oI.location,
                    setHref: (href) => {
                        Router.push(href);
                    },
                },
            };
        },
        languageTranslations: { 
            translations: { 
                pt_BR: {
                    EMAIL_PASSWORD_SIGN_IN_HEADER_TITLE: "Conectar",
                    EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_START: "Não é inscrito ainda?",
                    EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_SIGN_UP_LINK: "Inscreva-se",
                    EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_END: "!",                
                    THIRD_PARTY_PROVIDER_DEFAULT_BTN_START : "Prossiga com ",
                    THIRD_PARTY_PROVIDER_DEFAULT_BTN_END : ".",
                    THIRD_PARTY_EMAIL_PASSWORD_SIGN_IN_AND_UP_DIVIDER_OR : "ou",
                    EMAIL_PASSWORD_EMAIL_LABEL : "E-mail",
                    EMAIL_PASSWORD_EMAIL_PLACEHOLDER : "Informa seu e-mail",
                    EMAIL_PASSWORD_PASSWORD_LABEL : "Senha",
                    EMAIL_PASSWORD_PASSWORD_PLACEHOLDER : "crie sua senha",
                    EMAIL_PASSWORD_SIGN_IN_SUBMIT_BTN : "Entrar",
                    EMAIL_PASSWORD_SIGN_IN_FOOTER_FORGOT_PW_LINK : "Esqueceu a sua senha?",
                    BRANDING_POWERED_BY_END : " ❤️ ",
                    BRANDING_POWERED_BY_START: "Criado por",
                    MY_CUSTOM_LABEL: "Age",
                    EMAIL_PASSWORD_SIGN_UP_SUBMIT_BTN : "Inscrever",
                    EMAIL_PASSWORD_SIGN_UP_HEADER_TITLE: "Inscrever-se",
                    EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_START: "Já tem uma conta?",
                    EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_SIGN_IN_LINK: "Entrar",
                    EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_END : "",
                },
              },
            defaultLanguage: "pt_BR", 
        },
    };
};
