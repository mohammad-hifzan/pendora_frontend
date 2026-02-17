import {
  Bold,
  Italic,
  Underline,
  Heading2,
  Undo,
  Redo,
  Save,
} from 'lucide-react'

export function Toolbar({ editor, onSave }) {
  if (!editor) return null

  const handleSave = () => {
    if (!onSave) return

    onSave({
      content: editor.getHTML(),
      word_count: editor.storage.characterCount.words(),
    })
  }

  return (
    <div className="toolbar">
      <ToolbarButton
        active={editor.isActive('bold')}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold size={18} />
      </ToolbarButton>

      <ToolbarButton
        active={editor.isActive('italic')}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic size={18} />
      </ToolbarButton>

      <ToolbarButton
        active={editor.isActive('underline')}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <Underline size={18} />
      </ToolbarButton>

      <ToolbarButton
        active={editor.isActive('heading', { level: 2 })}
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading2 size={18} />
      </ToolbarButton>

      <div className="toolbar-separator" />

      <ToolbarButton onClick={() => editor.chain().focus().undo().run()}>
        <Undo size={18} />
      </ToolbarButton>

      <ToolbarButton onClick={() => editor.chain().focus().redo().run()}>
        <Redo size={18} />
      </ToolbarButton>

      <div className="toolbar-separator" />

      {/* ✅ SAVE BUTTON */}
      <ToolbarButton onClick={handleSave}>
        <Save size={18} />
      </ToolbarButton>
    </div>
  )
}

function ToolbarButton({ active, onClick, children }) {
  return (
    <button
      className={`toolbar-btn ${active ? 'active' : ''}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}
