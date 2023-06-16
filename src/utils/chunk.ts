// Takes an array of items and chunk the items into a matrix.
// Useful for offset based pagination.

export function chunk<T>(items: T[], chunk: number): T[][] {
    // Initializes the matris
    const chunks: T[][] = []

    // For loop; Loop unitl i is more than our items available; Increment by the given chunk;
    // Each iteraction copy push targeted chunk from the passed items to the chunks array

    for (let i = 0; i < items.length; i += chunk) {
        chunks.push(items.slice(i, i + chunk))
    }

    return chunks
}