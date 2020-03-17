import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

export function Run() {
    registerApplication(
        "@company/react-instagram",
        () => System.import("@company/react-instagram"),
        isActive.react_instagram
    );

    registerApplication(
        "@company/react-twitter",
        () => System.import("@company/react-twitter"),
        isActive.react_twitter
    );

    registerApplication(
        "@company/react-facebook",
        () => System.import("@company/react-facebook"),
        isActive.react_facebook
    );

    registerApplication(
        "@company/react-pinterest",
        () => System.import("@company/react-pinterest"),
        isActive.react_pinterest
    );

    registerApplication(
        "@company/react-google",
        () => System.import("@company/react-google"),
        isActive.react_google
    );

    registerApplication(
        "@company/react-github",
        () => System.import("@company/react-github"),
        isActive.react_github
    );

    start();
}