import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Placeholder from '@tiptap/extension-placeholder'
import CharacterCount from '@tiptap/extension-character-count'
import {Toolbar} from './toolbar'
import { get, customToast } from "../utility/toolbox";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './editor.css'

/*************  ✨ Windsurf Command ⭐  *************/
/*******  a5dd8f9d-3973-4eb4-ba1a-417aed844c3f  *******/

export default function NovelEditor({ initialContent, onSave }) {
  const [draftContent, setDraftContent] = useState(null)
  const { id } = useParams();
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      CharacterCount,
      Placeholder.configure({
        placeholder: 'Start writing your chapter...',
      }),
    ],
    content: initialContent,
    autofocus: true,
    editorProps: {
      attributes: {
        class: 'novel-editor',
      },
    },
    onUpdate: ({ editor }) => {
      autosave(editor)
    },
  })

  let saveTimeout = null


  function autosave(ededitoritor) {
    clearTimeout(saveTimeout)
    saveTimeout = setTimeout(() => {
      onSave({
        content: editor.getHTML(),
        word_count: editor.storage.characterCount.words(),
      })
    }, 2500)
  }

  useEffect(() => {
    const fetchDraft = async () => {
      try {
        const res = await get(`/v2/novels/${id}/chapters/retrieve_draft`)
        if (res?.data?.draft?.content) {
          editor?.commands.setContent(res?.data?.draft?.content) // false to prevent history reset
        }
      } catch {
        customToast("Failed to load draft", "error")
      }
    }

    fetchDraft()
  }, [id])

  return (
    <>
      <Toolbar editor={editor} onSave={onSave} />
      <EditorContent editor={editor} />
      <div className="editor-footer">
        Words: {editor?.storage.characterCount.words()}
      </div>
    </>
  )
}function normalizeTipTapContent(content) {
  if (!content) return content

  // Fix doc.content being an object instead of array
  if (
    content.type === 'doc' &&
    content.content &&
    !Array.isArray(content.content)
  ) {
    content = {
      ...content,
      content: Object.values(content.content),
    }
  }

  return content
}
