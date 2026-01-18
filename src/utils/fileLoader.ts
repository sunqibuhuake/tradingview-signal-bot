import * as fs from 'fs';
import * as path from 'path';

/**
 * Load JSON file with type safety
 */
export function loadJsonFile<T>(filePath: string): T {
  try {
    const absolutePath = path.isAbsolute(filePath) 
      ? filePath 
      : path.resolve(process.cwd(), filePath);
    
    const content = fs.readFileSync(absolutePath, 'utf-8');
    return JSON.parse(content) as T;
  } catch (error) {
    throw new Error(`Failed to load JSON file: ${filePath}. ${error}`);
  }
}

/**
 * Check if file exists
 */
export function fileExists(filePath: string): boolean {
  try {
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}

/**
 * Load file with retry
 */
export async function loadFileWithRetry<T>(
  filePath: string,
  maxRetries: number = 3,
  delayMs: number = 1000
): Promise<T> {
  let lastError: Error | null = null;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return loadJsonFile<T>(filePath);
    } catch (error) {
      lastError = error as Error;
      if (i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, delayMs));
      }
    }
  }

  throw new Error(`Failed to load file after ${maxRetries} retries: ${lastError?.message}`);
}
