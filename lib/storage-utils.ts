/**
 * Enhanced localStorage utilities with fallbacks and error handling
 */

// Get item from localStorage with fallback
export function getStorageItem<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") {
    return fallback
  }

  try {
    const item = localStorage.getItem(key)
    if (item === null) {
      return fallback
    }

    // Try to parse as JSON first
    try {
      return JSON.parse(item) as T
    } catch {
      // If not valid JSON, return as is
      return item as unknown as T
    }
  } catch (error) {
    console.error(`Error reading "${key}" from localStorage:`, error)
    return fallback
  }
}

// Set item in localStorage with error handling
export function setStorageItem(key: string, value: unknown): boolean {
  if (typeof window === "undefined") {
    return false
  }

  try {
    // Convert objects to JSON
    const valueToStore = typeof value === "object" ? JSON.stringify(value) : String(value)
    localStorage.setItem(key, valueToStore)
    return true
  } catch (error) {
    console.error(`Error saving "${key}" to localStorage:`, error)
    return false
  }
}

// Get game high score with proper typing
export function getGameHighScore(gameKey: string): number {
  return getStorageItem<number>(`${gameKey}HighScore`, 0)
}

// Set game high score with validation
export function setGameHighScore(gameKey: string, score: number, mode: string): boolean {
  const currentHighScore = getGameHighScore(gameKey)

  // Only update if new score is higher
  if (score > currentHighScore) {
    setStorageItem(`${gameKey}HighScore`, score)
    setStorageItem(`${gameKey}HighScoreMode`, mode)
    return true
  }

  return false
}

// Update house points
export function addHousePoints(points: number): void {
  const currentPoints = getStorageItem<number>("housePoints", 0)
  setStorageItem("housePoints", currentPoints + points)
}

