import ShallowRenderer from 'react-test-renderer/shallow'

export function render (node, theme = 'default') {
  const renderer = new ShallowRenderer()
  renderer.render(node)
  return renderer.getRenderOutput()
}
