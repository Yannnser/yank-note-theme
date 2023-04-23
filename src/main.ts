// import { registerPlugin } from '@yank-note/runtime-api'

// const extensionName = __EXTENSION_ID__

// registerPlugin({
//   name: extensionName,
//   register: ctx => {
//     ctx.registerHook('MONACO_BEFORE_INIT', ({ monaco }) => {
//       monaco.editor.defineTheme('vs', {
//         base: 'vs',
//         inherit: true,
//         rules: [
//           { token: 'keyword', foreground: '#0062d1' },
//           { token: 'attribute.name.html', foreground: '#0062d1' },
//           { token: 'attribute.value.html', foreground: '#e52a24' }
//         ],
//         colors: {
//           'editor.background': '#ffffff',
//           'minimap.background': '#f2f2f2',
//         }
//       })

//       monaco.editor.defineTheme('vs-dark', {
//         base: 'vs-dark',
//         inherit: true,
//         rules: [],
//         colors: {
//           'diffEditor.insertedTextBackground': '#4a7c82',
//           'diffEditor.removedTextBackground': '#8d5b5e',
//           'editor.background': '#303446',
//           'editorWidget.background': '#303446',
//           'input.background': '#303446',
//           'panelSectionHeader.background': '#303446',
//           'peekViewEditor.background': '#303446',
//           'peekViewEditor.matchHighlightBackground': '#384767',
//           'peekViewResult.background': '#303446',
//           descriptionForeground: '#c6d0f5',
//           'quickInput.foreground': '#c6d0f5',
//           'keybindingLabel.foreground': '#c6d0f5',
//           'keybindingLabel.background': '#485060',
//           'textSeparator.foreground': '#c6d0f5',
//           'dropdown.background': '#373c4c',
//           'dropdown.border': '#5c6178',
//           'menu.separatorBackground': '#5c6178',
//           'dropdown.foreground': '#c6d0f5',
//           'list.activeSelectionBackground': '#414559',
//           'list.activeSelectionForeground': '#c6d0f5',
//         }
//       })
//     })
//   }
// })
