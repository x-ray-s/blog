# Preload FloatingDogPet sprites

## Goal

Avoid blank/flashing pet on first paint and stutter when switching to run animations by ensuring both spritesheets are loaded before the pet is shown.

## Context

`FloatingDogPet` uses CSS `backgroundImage` with two unique spritesheets:

- `/pet/dog-direction-loop96-v3-spritesheet-256.webp` (idleLook)
- `/pet/dog-action-spritesheet.webp` (sitToRun, running)

Today the idle sheet loads when the sprite mounts; the action sheet often loads only after the first arrow-key state change.

## Decision

**Approach:** Preload inside `FloatingDogPet.vue` with `Image()` + `ready` gate.

Rejected alternatives:

- Preload in `enhanceAppFile` before `$mount` — splits URL config from animations
- `<link rel="preload">` in VuePress head — limited benefit for a client-injected pet; extra global config

## Behavior

1. Collect unique `image` URLs from the `animations` config (`Set` dedupe).
2. On `mounted`, preload those URLs via `new Image()` / `Promise.all`.
3. On success: set `ready = true`, then attach listeners and start `requestAnimationFrame`.
4. On failure: leave `ready = false`, do not attach listeners or start rAF; page remains unaffected.
5. Template root uses `v-if="ready"` so the pet DOM appears only when both sheets are ready.

## Scope

- Change only `docs/.vuepress/components/FloatingDogPet.vue`
- Do not change `enhanceAppFile.js` or VuePress head config

## Verification

- Refresh: pet appears as a whole (no half-loaded flash)
- Arrow left/right: run frames appear immediately (no first-press hitch from image fetch)
- Broken/unreachable image URL: page works normally with no pet
