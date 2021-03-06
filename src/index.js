import "@logseq/libs"
import { setup, t } from "logseq-l10n"
import zhCN from "./translations/zh-CN.json"

const Tag = /(^|\s)#\.ol\S*/g

async function main() {
  const l10nSetup = setup({
    urlTemplate:
      "https://raw.githubusercontent.com/sethyuan/logseq-plugin-ol/master/src/translations/${locale}.json",
    builtinTranslations: { "zh-CN": zhCN },
  })

  logseq.provideStyle(`
    a[data-ref|='.ol'] {
      display: none !important;
    }
    a[data-ref|='.ul'] {
      display: none !important;
    }
    .ls-block[data-refs-self*='".ol'] .block-children {
      counter-reset: kef-ol;
    }
    .ls-block[data-refs-self*='".ol-nested'] .block-children {
      counter-reset: kef-ol kef-ol-nested;
    }

    .ls-block[data-refs-self*='".ol'] > .block-children-container > .block-children > .ls-block > div > div > a + a:hover > .bullet-container:not(.bullet-closed) {
      background-color: transparent;
    }
    .ls-block[data-refs-self*='".ol'] > .block-children-container > .block-children > .ls-block > div > div > a + a > .bullet-container {
      min-width: 20px;
      width: auto !important;
      height: auto !important;
      background-color: var(--ls-primary-background-color) !important;
      z-index: 1 !important;
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
      min-width: 20px;
      width: auto !important;
      height: auto !important;
      background-color: var(--ls-primary-background-color) !important;
      z-index: 1 !important;
    }
    .ls-block[data-refs-self*='".ol-nested'] .ls-block > div > div > a + a > .bullet-container::before {
      display: block;
      counter-increment: kef-ol-nested;
      content: counters(kef-ol-nested, ".") ". ";
      font-family: "Tahoma", sans-serif;
      font-size: 0.85em;
      min-width: max-content;
    }
    .ls-block[data-refs-self*='".ol-nested'] .bullet-container > .bullet {
      display: none;
    }
    .ls-block[data-refs-self*='".ol-nested'] > div > div > a + a > .bullet-container > .bullet {
      display: block;
    }

    .ls-block[data-refs-self*='".ol'] .ls-block[data-refs-self*='".ul'] > div > div > a + a > .bullet-container > .bullet {
      display: none;
    }
    .ls-block[data-refs-self*='".ol'] .ls-block[data-refs-self*='".ul'] .ls-block > div > div > a + a:hover > .bullet-container {
      background-color: var(--ls-block-bullet-border-color, #ced9e0);
    }
    .ls-block[data-refs-self*='".ol'] .ls-block[data-refs-self*='".ul'] .ls-block > div > div > a + a > .bullet-container {
      width: 20px;
      height: 20px;
    }
    .ls-block[data-refs-self*='".ol'] .ls-block[data-refs-self*='".ul'] .ls-block > div > div > a + a > .bullet-container::before {
      display: none;
    }
    .ls-block[data-refs-self*='".ol'] .ls-block[data-refs-self*='".ul'] .bullet-container > .bullet {
      display: flex;
    }

    .ls-block[data-refs-self*='".ol-paren'] > .block-children-container > .block-children > .ls-block > div > div > a + a > .bullet-container::before {
      content: "(" counter(kef-ol) ") ";
    }
    .ls-block[data-refs-self*='".ol-right-paren'] > .block-children-container > .block-children > .ls-block > div > div > a + a > .bullet-container::before {
      content: counter(kef-ol) ") ";
    }
    .ls-block[data-refs-self*='".ol-dun'] > .block-children-container > .block-children > .ls-block > div > div > a + a > .bullet-container::before {
      content: counter(kef-ol) "???";
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

  await l10nSetup

  logseq.Editor.registerBlockContextMenuItem(
    t("Show as ordered list"),
    async ({ uuid }) => {
      const block = await logseq.Editor.getBlock(uuid)
      await logseq.Editor.updateBlock(
        uuid,
        `${block.content.replace(Tag, "").trimStart()} #.ol`,
      )
    },
  )
  logseq.Editor.registerBlockContextMenuItem(
    t("Show as nested ordered list"),
    async ({ uuid }) => {
      const block = await logseq.Editor.getBlock(uuid)
      await logseq.Editor.updateBlock(
        uuid,
        `${block.content.replace(Tag, "").trimStart()} #.ol-nested`,
      )
    },
  )

  console.log("#ol loaded")
}

logseq.ready(main).catch(console.error)
