/**
 * Signal Manager - manages signal deduplication and history
 */
export class SignalManager {
  private signalRecords: Map<string,  {
    signalTitle: string;
    time: number;
  }>;
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
    signalTitle: string ,
    currentTime: number = Date.now()
  ): boolean {

    console.log(`check signal: ${marketId}, ${signalTitle}`)
    const lastSignal = this.signalRecords.get(marketId);


    if (!lastSignal) {
      return true
    }

    console.log(`Last signal ===>`, lastSignal)

    let duplicateWindow = this.duplicateWindow


    const {
      signalTitle: lastSiganelTitle,
      time: lastSignalTime
    }  = lastSignal

    if (duplicateWindow === 0) {
      return lastSiganelTitle !== signalTitle;
    }


    const timeDelta = currentTime - lastSignalTime;
    console.log(`timeDelta: ${timeDelta} `)
    console.log(`duplicateWindow:  ${duplicateWindow}`)

      if (timeDelta < duplicateWindow) {
        return false;
      }

    return true;
  }

  /**
   * Record a signal
   */
  recordSignal(
    marketId: string,
    signalTitle: string  ,
    currentTime: number = Date.now()
  ): void {
      this.signalRecords.set(marketId, {
        signalTitle,
        time: currentTime,
      });
  }

  /**
   * Get signal history for a market
   */
  getSignalHistory(marketId: string): {
    signalTitle: string;
    time: number;
  } | undefined{
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
  getAllSignals(): Map<string, {
    signalTitle: string;
    time: number;
  }> {
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
