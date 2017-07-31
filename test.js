import test from 'ava'
import sao from 'sao'

const template = __dirname

test('defaults', async t => {
  const stream = await sao.mockPrompt(template)

  t.deepEqual(stream.fileList, [
    '.editorconfig',
    '.gitattributes',
    '.gitignore',
    'App.vue',
    'LICENSE',
    'README.md',
    'index.js',
    'package.json',
    'poi.config.js'
  ])
})
