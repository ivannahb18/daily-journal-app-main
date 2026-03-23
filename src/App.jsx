// src/App.jsx
import React, { useState } from "react";
import "./App.css";
import {
  getEntries,
  addEntry as addStoredEntry,
  updateEntry as updateStoredEntry,
  deleteEntry as deleteStoredEntry,
} from "./utils/journalStorage";

function App() {
  const [entries, setEntries] = useState(() => getEntries());
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const isFormEmpty = !title.trim() && !body.trim();
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredEntries = entries.filter((entry) => {
    if (!normalizedSearchTerm) return true;
    const titleText = entry.title.toLowerCase();
    const bodyText = entry.body.toLowerCase();
    return (
      titleText.includes(normalizedSearchTerm) ||
      bodyText.includes(normalizedSearchTerm)
    );
  });

  const clearForm = () => {
    setTitle("");
    setBody("");
    setEditingId(null);
  };

  const addEntry = () => {
    if (isFormEmpty) return;

    if (editingId) {
      const updated = updateStoredEntry(editingId, { title, body });
      setEntries(updated);
    } else {
      const updated = addStoredEntry({ title, body });
      setEntries(updated);
    }
    clearForm();
  };

  const deleteEntry = (id) => {
    const updated = deleteStoredEntry(id);
    setEntries(updated);
    if (editingId === id) clearForm();
  };

  const editEntry = (entry) => {
    setTitle(entry.title);
    setBody(entry.body);
    setEditingId(entry.id);
  };

  return (
    <div className="app-container">
      <h1>Daily Journal App</h1>
      <p>A simple web app to log your daily journal entries.</p>

      <div className="input-section">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Entry title..."
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write your journal entry body here..."
        />
        <button onClick={addEntry} disabled={isFormEmpty}>
          {editingId ? "Save Changes" : "Add Entry"}
        </button>
        {editingId ? (
          <button type="button" onClick={clearForm}>
            Cancel Edit
          </button>
        ) : null}
      </div>

      <div className="search-section">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search entries by title or body..."
        />
      </div>

      <div className="entries-section">
        {entries.length === 0 ? (
          <div className="empty-state">
            <p>No entries yet.</p>
            <p>Start by adding a title or a short reflection above.</p>
          </div>
        ) : filteredEntries.length === 0 ? (
          <div className="empty-state">
            <p>No matching entries found.</p>
            <p>Try a different keyword.</p>
          </div>
        ) : (
          filteredEntries.map((entry) => (
            <div key={entry.id} className="entry">
              <div className="entry-header">
                <span>{entry.date}</span>
                <div>
                  <button className="edit" onClick={() => editEntry(entry)}>
                    Edit
                  </button>
                  <button className="delete" onClick={() => deleteEntry(entry.id)}>
                    Delete
                  </button>
                </div>
              </div>
              <h3>{entry.title || "Untitled Entry"}</h3>
              <p>{entry.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;