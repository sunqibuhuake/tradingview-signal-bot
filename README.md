# TradingView Signal Bot

A TypeScript-based bot for monitoring TradingView signals and sending notifications via DingTalk webhook.

## ✨ Features

- 🔄 **Real-time Monitoring**: Monitor A-share stocks and crypto markets
- 📊 **Custom Indicators**: Support for TradingView custom indicators
- 🔔 **DingTalk Notifications**: Send trading signals via DingTalk webhook
- 🛡️ **Type Safety**: Built with TypeScript for better code quality
- 🏗️ **Modular Architecture**: Clean separation of concerns
- 📝 **Beautiful Logging**: Enhanced logging system with colors and animations
- 🔄 **Signal Deduplication**: Prevent duplicate signal notifications
- 🎨 **Sci-Fi UI**: Modern terminal UI with progress bars and spinners

## 📸 Screenshots

### Trading Signal Display
```
╔════════════════════════════════════════════════════════════╗
║  TRADING SIGNAL                                            ║
╠════════════════════════════════════════════════════════════╣
║  Market     : BTCUSDT                                      ║
║  Action     : 📈 BUY                                       ║
║  Price      : 45000.00                                     ║
║  Indicator  : Custom EMA                                   ║
╚════════════════════════════════════════════════════════════╝
```

### Progress Display
```
[████████████████░░░░░░░░░░░░░░] 60% (30/50) 正在扫描: 招商银行 600036
```

## Prerequisites

- Node.js >= 16
- pnpm (recommended) or npm
- TradingView account with API access

## Installation

```bash
pnpm install
```

## Configuration

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Fill in your credentials in `.env`:
```env
# Required
SESSION=your_session_token_here
SIGNATURE=your_signature_here

# Optional
INDICATOR_ID=USER;your_indicator_id_here
DINGTALK_WEBHOOK=https://oapi.dingtalk.com/robot/send?access_token=your_token
```

3. Configure stocks (for bot-cn):
Edit `config/stocks-bank.json` with your stock list.

## Project Structure

```
src/
├── bot-cn/              # A-share stock bot
│   └── index.ts
├── bot-crypto/          # Crypto trading bot
│   └── index.ts
├── config/              # Configuration management
│   └── index.ts
├── services/            # Business logic services
│   ├── TradingViewService.ts      # TradingView API wrapper
│   ├── NotificationService.ts     # DingTalk notification
│   └── SignalManager.ts           # Signal deduplication
├── utils/               # Utility functions
│   ├── logger.ts        # Logging system
│   └── fileLoader.ts    # File operations
└── types/               # TypeScript type definitions
    ├── index.ts
    └── tradingview.d.ts
```

## Build

```bash
pnpm run build
```

## Usage

### Development Mode (with auto-reload)

```bash
# Run A-share bot
pnpm run dev:cn

# Run crypto bot
pnpm run dev:crypto
```

### Production Mode

```bash
# Build first
pnpm run build

# Run A-share bot
pnpm run start:cn

# Run crypto bot
pnpm run start:crypto
```

## Architecture

### Services

#### TradingViewService
Handles all TradingView API interactions:
- Get indicators
- Search markets
- Read indicator data
- Create chart sessions

#### NotificationService
Manages DingTalk webhook notifications:
- Send A-share stock signals
- Send crypto signals
- Custom notifications

#### SignalManager
Manages signal deduplication:
- Track signal history
- Prevent duplicate notifications
- Configurable duplicate window

### Utilities

#### Logger
Structured logging with levels:
- DEBUG, INFO, WARN, ERROR
- Timestamp formatting
- Configurable log level

#### FileLoader
Safe file operations:
- Type-safe JSON loading
- File existence checks
- Retry mechanism

## Configuration

All configuration is centralized in `src/config/index.ts`:

```typescript
export const config = {
  tradingView: {
    session: string,
    signature: string,
    indicatorId: string,
  },
  dingTalk: {
    webhookUrl: string,
  },
  bot: {
    cn: {
      timeframe: '1D',
      range: 500,
      timeout: 10000,
      checkInterval: 24 * 60 * 60 * 1000,
    },
    crypto: {
      timeframe: '5',
      range: 500,
      duplicateWindow: 20 * 60 * 1000,
    },
  },
};
```

## Scripts

- `pnpm run build` - Compile TypeScript to JavaScript
- `pnpm run dev:cn` - Run A-share bot in dev mode
- `pnpm run dev:crypto` - Run crypto bot in dev mode
- `pnpm run start:cn` - Run compiled A-share bot
- `pnpm run start:crypto` - Run compiled crypto bot
- `pnpm run lint` - Run ESLint
- `pnpm run lint:fix` - Fix ESLint errors automatically
- `pnpm run clean` - Remove dist folder
- `pnpm run test` - Run tests with Vitest

## Bot Behavior

### A-Share Bot (bot-cn)
- **Mode**: Scheduled scanning
- **Interval**: 24 hours
- **Timeframe**: Daily (1D)
- **Markets**: SSE stocks from config file
- **Deduplication**: Simple (by action only)

### Crypto Bot (bot-crypto)
- **Mode**: Real-time monitoring
- **Interval**: Continuous
- **Timeframe**: 5 minutes
- **Markets**: All USDT pairs on Binance
- **Deduplication**: 20-minute window

## Error Handling

Both bots implement:
- Graceful shutdown on SIGINT/SIGTERM
- Automatic retry on failure
- Comprehensive error logging
- Resource cleanup

## Development

### Adding a New Service

1. Create service file in `src/services/`
2. Import config from `src/config/`
3. Use logger from `src/utils/logger`
4. Export typed class

### Adding a New Bot

1. Create bot directory in `src/`
2. Import required services
3. Implement main loop
4. Add graceful shutdown
5. Update package.json scripts

## License

ISC
