import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@company/react-navbar",
  () => System.import("@company/react-navbar"),
  isActive.navbar
);

registerApplication(
  "@company/social-media",
  () => System.import("@company/social-media"),
  isActive.social_media
);

registerApplication(
  "@company/agile_manifesto",
  () => System.import("@company/agile-manifesto"),
  isActive.agile_manifesto
);

start();