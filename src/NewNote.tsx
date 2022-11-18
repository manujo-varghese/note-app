import { NoteData, Tag } from "./App";
import { NoteForm } from "./NoteForm";


type NewNoteProps = {
    onSubmit: (data: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
}
/* eslint-disable react/react-in-jsx-scope */
export function NewNote({onSubmit, onAddTag, availableTags}: NewNoteProps){
    return (
        <>
        <h1 className="mb-4">New Node</h1>
        <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
        </>
    )
}