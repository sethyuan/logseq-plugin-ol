import "@logseq/libs"

async function main() {
  logseq.provideStyle(`
  `)

  console.log("#ol loaded")
}

logseq.ready(main).catch(console.error)
