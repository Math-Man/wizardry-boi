import {ModUpgraded} from "isaacscript-common";
import {PostRenderInit} from "./mod/callback/CallbackPostRender";
import {PostPerfectUpdateInit} from "./mod/callback/CallbackPostPerfectUpdate";
import {PostUseItemInit} from "./mod/callback/CallbackPostUseItem";
import {PrePickupCollision} from "./mod/callback/CallbackPrePickupCollision";
import {mod, MOD_NAME} from "./Mod";
import {PostPlayerCollectibleAdded} from "./mod/callback/CallbackPostPlayerCollectibleAdded";
import {PostPlayerCollectibleRemoved} from "./mod/callback/CallbackPostPlayerCollectibleRemoved";
import {PostPlayerInputAction} from "./mod/callback/CallbackInputActionPlayer";


main();

function main() {
  registerCallbacks(mod);
  Isaac.DebugString(`${MOD_NAME} initialized.`);
}

function registerCallbacks(mod: ModUpgraded) {
  PostPerfectUpdateInit(mod);
  PostUseItemInit(mod);
  PostRenderInit(mod);
  PrePickupCollision(mod);
  PostPlayerCollectibleAdded(mod);
  PostPlayerCollectibleRemoved(mod);
  // PostPlayerInputAction(mod);
}

