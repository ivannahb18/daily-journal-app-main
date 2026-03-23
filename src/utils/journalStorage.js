const STORAGE_KEY = "journalEntries";

export function getEntries() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveEntries(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

export function addEntry(entryData) {
  const newEntry = {
    id: crypto.randomUUID(),
    title: entryData.title?.trim() || "",
    body: entryData.body?.trim() || "",
    date: entryData.date || new Date().toLocaleString(),
  };

  const entries = getEntries();
  const updatedEntries = [newEntry, ...entries];
  saveEntries(updatedEntries);
  return updatedEntries;
}

export function updateEntry(id, updates) {
  const entries = getEntries();
  const updatedEntries = entries.map((entry) =>
    entry.id === id
      ? {
          ...entry,
          ...updates,
          title:
            updates.title !== undefined
              ? updates.title.trim()
              : entry.title,
          body:
            updates.body !== undefined
              ? updates.body.trim()
              : entry.body,
        }
      : entry
  );

  saveEntries(updatedEntries);
  return updatedEntries;
}

export function deleteEntry(id) {
  const entries = getEntries();
  const updatedEntries = entries.filter((entry) => entry.id !== id);
  saveEntries(updatedEntries);
  return updatedEntries;
}
