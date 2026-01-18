import type { ActionType, SignalRecord } from '../types';

/**
 * Signal Manager - manages signal deduplication and history
 */
export class SignalManager {
  private signalRecords: Map<string, SignalRecord | ActionType>;
  private duplicateWindow: number;

  constructor(duplicateWindow: number = 0) {
    this.signalRecords = new Map();
    this.duplicateWindow = duplicateWindow;
  }

  /**
   * Check if a signal should be processed (not a duplicate)
   */
  shouldProcessSignal(
    marketId: string,
    action: ActionType,
    currentTime: number = Date.now()
  ): boolean {
    const lastSignal = this.signalRecords.get(marketId);

    // No duplicate window, check only action change
    if (this.duplicateWindow === 0) {
      return lastSignal !== action;
    }

    // With duplicate window, check both action and time
    if (typeof lastSignal === 'object' && lastSignal.action === action) {
      const timeDelta = currentTime - lastSignal.time;
      if (timeDelta < this.duplicateWindow) {
        return false;
      }
    }

    return true;
  }

  /**
   * Record a signal
   */
  recordSignal(
    marketId: string,
    action: ActionType,
    currentTime: number = Date.now()
  ): void {
    if (this.duplicateWindow === 0) {
      this.signalRecords.set(marketId, action);
    } else {
      this.signalRecords.set(marketId, {
        action,
        time: currentTime,
      });
    }
  }

  /**
   * Get signal history for a market
   */
  getSignalHistory(marketId: string): SignalRecord | ActionType | undefined {
    return this.signalRecords.get(marketId);
  }

  /**
   * Clear all signal history
   */
  clear(): void {
    this.signalRecords.clear();
  }

  /**
   * Get all recorded signals
   */
  getAllSignals(): Map<string, SignalRecord | ActionType> {
    return new Map(this.signalRecords);
  }

  /**
   * Get statistics
   */
  getStats(): {
    totalMarkets: number;
    totalSignals: number;
  } {
    return {
      totalMarkets: this.signalRecords.size,
      totalSignals: this.signalRecords.size,
    };
  }
}
