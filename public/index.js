import "@logseq/libs"

async function main() {
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

    .ls-block[data-refs-self*='".ol'] .ls-block > div > div > a + a::before {
      display: none;
    }
    .ls-block[data-refs-self*='".ol'] > .block-children-container > .block-children > .ls-block > div > div > a + a::before {
      display: block;
      counter-increment: kef-ol;
      content: counter(kef-ol) ". ";
      font-family: "Tahoma", sans-serif;
      font-size: 0.85em;
      min-width: max-content;
    }
    .ls-block[data-refs-self*='".ol'] .bullet-container {
      display: flex;
    }
    .ls-block[data-refs-self*='".ol'] > .block-children-container > .block-children > .ls-block > div > div > a + a > .bullet-container {
      display: none;
    }

    .ls-block[data-refs-self*='".ol-nested'] .ls-block > div > div > a + a::before {
      display: block;
      counter-increment: kef-ol;
      content: counters(kef-ol, ".") ". ";
      font-family: "Tahoma", sans-serif;
      font-size: 0.85em;
      min-width: max-content;
    }
    .ls-block[data-refs-self*='".ol-nested'] .bullet-container {
      display: none;
    }

    .ls-block[data-refs-self*='".ul'] .ls-block > div > div > a + a::before {
      display: none;
    }
    .ls-block[data-refs-self*='".ul'] .bullet-container {
      display: flex;
    }

    .ls-block[data-refs-self*='".ol-paren'] > .block-children-container > .block-children > .ls-block > div > div > a + a::before {
      content: "(" counter(kef-ol) ") ";
    }
    .ls-block[data-refs-self*='".ol-right-paren'] > .block-children-container > .block-children > .ls-block > div > div > a + a::before {
      content: counter(kef-ol) ") ";
    }
    .ls-block[data-refs-self*='".ol-nested-right-paren'] > .block-children-container > .block-children > .ls-block > div > div > a + a::before,
    .ls-block[data-refs-self*='".ol-nested-right-paren'] .ls-block > div > div > a + a::before {
      content: counters(kef-ol, ".") ") ";
    }
  `)

  console.log("#ol loaded")
}

logseq.ready(main).catch(console.error)
