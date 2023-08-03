import "@logseq/libs"
import { setup, t } from "logseq-l10n"
import zhCN from "./translations/zh-CN.json"

async function main() {
  await setup({ builtinTranslations: { "zh-CN": zhCN } })

  logseq.provideStyle(`
    a[data-ref|='.ol'],
    a[data-ref|='.ul'] {
      display: none !important;
    }
    .cp__all_pages_table :is(a[data-ref|='.ol'], a[data-ref|='.ul']) {
      display: unset !important;
    }

    .ls-block[data-refs-self*='".ol'] .block-children {
      counter-reset: kef-ol;
    }
    .ls-block[data-refs-self*='".ol-2'] .block-children {
      counter-reset: kef-ol 1;
    }
    .ls-block[data-refs-self*='".ol-3'] .block-children {
      counter-reset: kef-ol 2;
    }
    .ls-block[data-refs-self*='".ol-4'] .block-children {
      counter-reset: kef-ol 3;
    }
    .ls-block[data-refs-self*='".ol-5'] .block-children {
      counter-reset: kef-ol 4;
    }
    .ls-block[data-refs-self*='".ol-6'] .block-children {
      counter-reset: kef-ol 5;
    }
    .ls-block[data-refs-self*='".ol-7'] .block-children {
      counter-reset: kef-ol 6;
    }
    .ls-block[data-refs-self*='".ol-8'] .block-children {
      counter-reset: kef-ol 7;
    }
    .ls-block[data-refs-self*='".ol-9'] .block-children {
      counter-reset: kef-ol 8;
    }
    .ls-block[data-refs-self*='".ol-10'] .block-children {
      counter-reset: kef-ol 9;
    }

    .ls-block[data-refs-self*='".ol-nested'] .block-children {
      counter-reset: kef-ol-nested;
    }
    .ls-block[data-refs-self*='".ol-nested-s2'] > .block-children-container > .block-children {
      counter-reset: kef-ol 1 kef-ol-nested 1;
    }
    .ls-block[data-refs-self*='".ol-nested-s3'] > .block-children-container > .block-children {
      counter-reset: kef-ol 2 kef-ol-nested 2;
    }
    .ls-block[data-refs-self*='".ol-nested-s4'] > .block-children-container > .block-children {
      counter-reset: kef-ol 3 kef-ol-nested 3;
    }
    .ls-block[data-refs-self*='".ol-nested-s5'] > .block-children-container > .block-children {
      counter-reset: kef-ol 4 kef-ol-nested 4;
    }
    .ls-block[data-refs-self*='".ol-nested-s6'] > .block-children-container > .block-children {
      counter-reset: kef-ol 5 kef-ol-nested 5;
    }
    .ls-block[data-refs-self*='".ol-nested-s7'] > .block-children-container > .block-children {
      counter-reset: kef-ol 6 kef-ol-nested 6;
    }
    .ls-block[data-refs-self*='".ol-nested-s8'] > .block-children-container > .block-children {
      counter-reset: kef-ol 7 kef-ol-nested 7;
    }
    .ls-block[data-refs-self*='".ol-nested-s9'] > .block-children-container > .block-children {
      counter-reset: kef-ol 8 kef-ol-nested 8;
    }
    .ls-block[data-refs-self*='".ol-nested-s10'] > .block-children-container > .block-children {
      counter-reset: kef-ol 9 kef-ol-nested 9;
    }

    .ls-block[data-refs-self*='".ol'] > .block-children-container > .block-children > .ls-block > div > div > a + a:hover > .bullet-container:not(.bullet-closed) {
      background-color: transparent;
    }
    .ls-block[data-refs-self*='".ol'] > .block-children-container > .block-children > .ls-block > div > div > a + a > .bullet-container {
      min-width: 16px;
      width: auto !important;
      height: auto !important;
      background-color: var(--ls-primary-background-color) !important;
      z-index: 1 !important;
    }
    .tl-logseq-portal-container .ls-block[data-refs-self*='".ol'] > .block-children-container > .block-children > .ls-block > div > div > a + a > .bullet-container {
      background-color: transparent !important;
    }
    .ls-block[data-refs-self*='".ol'] .ls-block > div > div > a + a > .bullet-container::before {
      display: none;
    }
    .ls-block[data-refs-self*='".ol'] > .block-children-container > .block-children > .ls-block > div > div > a + a > .bullet-container::before {
      display: block;
      counter-increment: kef-ol;
      content: counter(kef-ol) ". ";
      font-family: "Tahoma", sans-serif;
      font-size: 0.85em;
      min-width: max-content;
    }
    .ls-block[data-refs-self*='".ol'] > .block-children-container > .block-children > .ls-block > div:has(:is(.flex-1 > h1, .editor-inner .h1)) > div > a + a > .bullet-container::before {
      font-size: calc(2em * 0.85);
    }
    .ls-block[data-refs-self*='".ol'] > .block-children-container > .block-children > .ls-block > div:has(:is(.flex-1 > h2, .editor-inner .h2)) > div > a + a > .bullet-container::before {
      font-size: calc(1.5em * 0.85);
    }
    .ls-block[data-refs-self*='".ol'] > .block-children-container > .block-children > .ls-block > div:has(:is(.flex-1 > h3, .editor-inner .h3)) > div > a + a > .bullet-container::before {
      font-size: calc(1.2em * 0.85);
    }
    .ls-block[data-refs-self*='".ol'] > .block-children-container > .block-children > .ls-block > div:has(:is(.flex-1 > h4, .editor-inner .h4)) > div > a + a > .bullet-container::before {
      font-size: calc(1em * 0.85);
    }
    .ls-block[data-refs-self*='".ol'] > .block-children-container > .block-children > .ls-block > div:has(:is(.flex-1 > h5, .editor-inner .h5)) > div > a + a > .bullet-container::before {
      font-size: calc(0.83em * 0.85);
    }
    .ls-block[data-refs-self*='".ol'] > .block-children-container > .block-children > .ls-block > div:has(:is(.flex-1 > h6, .editor-inner .h6)) > div > a + a > .bullet-container::before {
      font-size: calc(0.75em * 0.85);
    }
    .ls-block[data-refs-self*='".ol'] .bullet-container > .bullet {
      display: block;
    }
    .ls-block[data-refs-self*='".ol'] > .block-children-container > .block-children > .ls-block > div > div > a + a > .bullet-container > .bullet {
      display: none;
    }

    .ls-block[data-refs-self*='".ol-nested'] > .block-children-container > .block-children > .ls-block > div > div > a + a > .bullet-container::before {
      counter-increment: kef-ol-nested;
      content: counters(kef-ol-nested, ".") ". ";
    }
    .ls-block[data-refs-self*='".ol-nested'] .ls-block > div > div > a + a:hover > .bullet-container:not(.bullet-closed) {
      background-color: transparent;
    }
    .ls-block[data-refs-self*='".ol-nested'] .ls-block > div > div > a + a > .bullet-container {
      min-width: 16px;
      width: auto !important;
      height: auto !important;
      background-color: var(--ls-primary-background-color) !important;
      z-index: 1 !important;
    }
    .tl-logseq-portal-container .ls-block[data-refs-self*='".ol-nested'] .ls-block > div > div > a + a > .bullet-container {
      background-color: transparent !important;
    }
    .ls-block[data-refs-self*='".ol-nested'] .ls-block > div > div > a + a > .bullet-container::before {
      display: block;
      counter-increment: kef-ol-nested;
      content: counters(kef-ol-nested, ".") ". ";
      font-family: "Tahoma", sans-serif;
      font-size: 0.85em;
      min-width: max-content;
    }
    .ls-block[data-refs-self*='".ol-nested'] .ls-block > div:has(:is(.flex-1 > h1, .editor-inner .h1)) > div > a + a > .bullet-container::before {
      font-size: calc(2em * 0.85);
    }
    .ls-block[data-refs-self*='".ol-nested'] .ls-block > div:has(:is(.flex-1 > h2, .editor-inner .h2)) > div > a + a > .bullet-container::before {
      font-size: calc(1.5em * 0.85);
    }
    .ls-block[data-refs-self*='".ol-nested'] .ls-block > div:has(:is(.flex-1 > h3, .editor-inner .h3)) > div > a + a > .bullet-container::before {
      font-size: calc(1.2em * 0.85);
    }
    .ls-block[data-refs-self*='".ol-nested'] .ls-block > div:has(:is(.flex-1 > h4, .editor-inner .h4)) > div > a + a > .bullet-container::before {
      font-size: calc(1em * 0.85);
    }
    .ls-block[data-refs-self*='".ol-nested'] .ls-block > div:has(:is(.flex-1 > h5, .editor-inner .h5)) > div > a + a > .bullet-container::before {
      font-size: calc(0.83em * 0.85);
    }
    .ls-block[data-refs-self*='".ol-nested'] .ls-block > div:has(:is(.flex-1 > h6, .editor-inner .h6)) > div > a + a > .bullet-container::before {
      font-size: calc(0.75em * 0.85);
    }
    .ls-block[data-refs-self*='".ol-nested'] .bullet-container > .bullet {
      display: none;
    }
    .ls-block[data-refs-self*='".ol-nested'] > div > div > a + a > .bullet-container > .bullet {
      display: block;
    }

    .ls-block[data-refs-self*='".ol'] .ls-block[data-refs-self*='".ul'] > div > div > a + a > .bullet-container > .bullet,
    .ls-block[data-refs-self*='".ol-nested-2'] > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block > div > div > a + a > .bullet-container > .bullet,
    .ls-block[data-refs-self*='".ol-nested-3'] > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block > div > div > a + a > .bullet-container > .bullet,
    .ls-block[data-refs-self*='".ol-nested-right-paren-2'] > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block > div > div > a + a > .bullet-container > .bullet,
    .ls-block[data-refs-self*='".ol-nested-right-paren-3'] > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block > div > div > a + a > .bullet-container > .bullet {
      display: none;
    }
    .ls-block[data-refs-self*='".ol'] .ls-block[data-refs-self*='".ul'] .ls-block > div > div > a + a:hover > .bullet-container,
    .ls-block[data-refs-self*='".ol-nested-2'] > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block .ls-block > div > div > a + a:hover > .bullet-container,
    .ls-block[data-refs-self*='".ol-nested-3'] > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block .ls-block > div > div > a + a:hover > .bullet-container,
    .ls-block[data-refs-self*='".ol-nested-right-paren-2'] > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block .ls-block > div > div > a + a:hover > .bullet-container,
    .ls-block[data-refs-self*='".ol-nested-right-paren-3'] > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block .ls-block > div > div > a + a:hover > .bullet-container {
      background-color: var(--ls-block-bullet-border-color, #ced9e0) !important;
    }
    .ls-block[data-refs-self*='".ol'] .ls-block[data-refs-self*='".ul'] .ls-block > div > div > a + a > .bullet-container,
    .ls-block[data-refs-self*='".ol-nested-2'] > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block .ls-block > div > div > a + a > .bullet-container,
    .ls-block[data-refs-self*='".ol-nested-3'] > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block .ls-block > div > div > a + a > .bullet-container,
    .ls-block[data-refs-self*='".ol-nested-right-paren-2'] > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block .ls-block > div > div > a + a > .bullet-container,
    .ls-block[data-refs-self*='".ol-nested-right-paren-3'] > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block .ls-block > div > div > a + a > .bullet-container {
      width: 16px !important;
      height: 16px !important;
    }
    .ls-block[data-refs-self*='".ol'] .ls-block[data-refs-self*='".ul'] .ls-block > div > div > a + a > .bullet-container::before,
    .ls-block[data-refs-self*='".ol-nested-2'] > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block .ls-block > div > div > a + a > .bullet-container::before,
    .ls-block[data-refs-self*='".ol-nested-3'] > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block .ls-block > div > div > a + a > .bullet-container::before,
    .ls-block[data-refs-self*='".ol-nested-right-paren-2'] > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block .ls-block > div > div > a + a > .bullet-container::before,
    .ls-block[data-refs-self*='".ol-nested-right-paren-3'] > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block .ls-block > div > div > a + a > .bullet-container::before {
      display: none;
    }
    .ls-block[data-refs-self*='".ol'] .ls-block[data-refs-self*='".ul'] .bullet-container > .bullet,
    .ls-block[data-refs-self*='".ol-nested-2'] > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block .bullet-container > .bullet,
    .ls-block[data-refs-self*='".ol-nested-3'] > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block .bullet-container > .bullet,
    .ls-block[data-refs-self*='".ol-nested-right-paren-2'] > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block .bullet-container > .bullet,
    .ls-block[data-refs-self*='".ol-nested-right-paren-3'] > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block > .block-children-container > .block-children > .ls-block .bullet-container > .bullet {
      display: flex;
    }

    .ls-block[data-refs-self*='".ol-paren'] > .block-children-container > .block-children > .ls-block > div > div > a + a > .bullet-container::before {
      content: "(" counter(kef-ol) ") ";
    }
    .ls-block[data-refs-self*='".ol-right-paren'] > .block-children-container > .block-children > .ls-block > div > div > a + a > .bullet-container::before {
      content: counter(kef-ol) ") ";
    }
    .ls-block[data-refs-self*='".ol-dun'] > .block-children-container > .block-children > .ls-block > div > div > a + a > .bullet-container::before {
      content: counter(kef-ol) "、";
    }
    .ls-block[data-refs-self*='".ol-circle'] > .block-children-container > .block-children > .ls-block > div > div > a + a > .bullet-container::before {
      content: counter(kef-ol);
      border-radius: 50%;
      border: 1px solid var(--ls-icon-color);
      width: 21px;
      height: 21px;
      text-align: center;
    }
    .ls-block[data-refs-self*='".ol-nested-right-paren'] > .block-children-container > .block-children > .ls-block > div > div > a + a > .bullet-container::before,
    .ls-block[data-refs-self*='".ol-nested-right-paren'] .ls-block > div > div > a + a > .bullet-container::before {
      content: counters(kef-ol-nested, ".") ") ";
    }

    .ls-block[data-refs-self*='".ol'] .ls-block[haschild=true] > div > .block-content-wrapper::before {
      display: none;
    }
  `)

  logseq.Editor.registerSlashCommand(
    "Ordered list",
    async ({ uuid }) => await toggleOrderedList(uuid),
  )
  logseq.Editor.registerSlashCommand(
    "Nested ordered list",
    async ({ uuid }) => await toggleNestedOrderedList(uuid),
  )
  logseq.Editor.registerSlashCommand(
    "Unordered list",
    async ({ uuid }) => await toggleUnorderedList(uuid),
  )

  logseq.Editor.registerBlockContextMenuItem(
    t("Toggle ordered list"),
    async ({ uuid }) => await toggleOrderedList(uuid),
  )
  logseq.Editor.registerBlockContextMenuItem(
    t("Toggle nested ordered list"),
    async ({ uuid }) => await toggleNestedOrderedList(uuid),
  )

  console.log("#ol loaded")
}

async function toggleOrderedList(uuid) {
  await toggle(uuid, "#.ol")
}

async function toggleNestedOrderedList(uuid) {
  await toggle(uuid, "#.ol-nested")
}

async function toggleUnorderedList(uuid) {
  await toggle(uuid, "#.ul")
}

async function toggle(uuid, text) {
  const block = await logseq.Editor.getBlock(uuid)
  const pattern = new RegExp(`(^|\\s)${text.replace(".", "\\.")}\\S*`, "g")
  if (pattern.test(block.content)) {
    await logseq.Editor.updateBlock(
      uuid,
      block.content.replace(pattern, "").trimStart(),
    )
  } else {
    await logseq.Editor.updateBlock(uuid, `${block.content} ${text}`)
  }
}

logseq.ready(main).catch(console.error)
