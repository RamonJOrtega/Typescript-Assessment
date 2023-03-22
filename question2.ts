// QUESTION 2: Programming Task
// ----------------

// Write classes that implements the following interfaces, assuming that all methods
// are used with approximately the same frequency.
// Explain why you chose the data structures you used.

//typescript
export interface Item {
    id: string
    tag: string
}

export interface ItemStore {
    /**
     * Adds an {@link Item} to the store, replacing any existing item with the
     * same {@link Item#id} value.
     */
    put: (item: Item) => void

    /**
     * Retrieves the {@link Item} with the given {@link Item#id} value, or
     * null if no such {@link Item} exists in the store.
     */
    get: (id: string) => Item | null

    /**
     * Delete all {@link Item}s with the specified tag.
     */
    dropAllByTag: (tag: string) => void

    /**
     * Returns the number of Items in the store
     */
    size: () => number
}





