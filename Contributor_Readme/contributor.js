import {read} from 'to-vfile'
import {remark} from 'remark'
import remarkGfm from 'remark-gfm'
import remarkGitContributors from 'remark-git-contributors'

main()

async function main() {
  const file = await remark()
    .use(remarkGfm) // Required: add support for tables (a GFM feature).
    .use(remarkGitContributors)
    .process(await read('example.md'))

  console.log(String(file))
}