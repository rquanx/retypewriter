import { Range, Selection, commands, window } from 'vscode'
import { simpleAnimator } from '../../core/src'
const json = [
  { content: '', time: 1648235120982 },
  { content: 'import { React } from \'react\'\n', time: 1648235136758 },
  { content: 'import { React } from \'react\'\nconst App = () => <div></div>\n', time: 1648235145833 },
  { content: 'import { React } from \'react\'\nconst App = () => <c></c>\n', time: 1648235149827 },
  { content: 'import { React } from \'react\'\nconst App = () => <div></div>\n', time: 1648235152018 }]
interface Snapshot {
  content: string
  time: number
}

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
export function activate() {
  window.showInformationMessage('Hi')
  const snapMap = new Map<string, Snapshot[]>()

  commands.registerCommand('retypewriter.snap', () => {
    const doc = window.activeTextEditor?.document
    if (!doc) return
    const path = doc.uri.fsPath
    if (!snapMap.has(path))
      snapMap.set(path, [])
    const snaps = snapMap.get(path)
    snaps!.push({
      content: doc.getText(),
      time: Date.now(),
    })
    window.showInformationMessage(`reTypewriter: snapshot added (${snaps?.length})`)
  })
  commands.registerCommand('retypewriter.play', async() => {
    const editor = window.activeTextEditor
    const doc = editor?.document
    if (!doc || !editor) return
    const path = doc.uri.fsPath
    const snaps = snapMap.get(path)
    if (!snaps?.length) {
      window.showInformationMessage('reTypewriter: No snapshots found')
      return
    }
    const lastSnap = snaps[snaps.length - 1]
    if (lastSnap.content !== doc.getText()) {
      snaps.push({
        content: doc.getText(),
        time: Date.now(),
      })
    }

    window.showInformationMessage('reTypewriter: reTypewriter: Playing...')

    let lastContent: string | undefined
    for (const snap of snaps) {
      if (!lastContent) {
        lastContent = snap.content
        // clear doc
        await editor.edit((edit) => {
          edit.replace(new Range(0, 0, Infinity, Infinity), lastContent!)
        })
        continue
      }
      const animator = simpleAnimator(lastContent, snap.content)

      let lastIndex = -1
      for (const result of animator) {
        if (lastIndex !== result.patchIndex)
          await sleep(900)
        const pos = doc.positionAt(result.cursor)
        await editor.edit((edit) => {
          if (result.char != null)
            edit.insert(doc.positionAt(result.cursor - 1), result.char)
          else
            edit.delete(new Range(pos, doc.positionAt(result.cursor + 1)))
        })
        editor.selection = new Selection(pos, pos)
        await sleep(Math.random() * 200)
        lastIndex = result.patchIndex
      }
      lastContent = snap.content
    }
    window.showInformationMessage('reTypewriter: reTypewriter: Finished...')
  })
}

export function deactivate() {

}
