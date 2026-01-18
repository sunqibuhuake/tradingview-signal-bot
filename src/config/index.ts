import * as path from 'path';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

export const config = {
  // TradingView credentials
  tradingView: {
    session: process.env.SESSION || '',
    signature: process.env.SIGNATURE || '',
    indicatorId: process.env.INDICATOR_ID || 'USER;d442347285584c9da91f3b74d7875057',
  },

  // DingTalk webhook
  dingTalk: {
    webhookUrl: process.env.DINGTALK_WEBHOOK || 'https://oapi.dingtalk.com/robot/send?access_token=df90937ff64be9e62b8a02d9696a57e4382764e3dbc8a4e664f108e255e18383',
  },

  // Bot configurations
  bot: {
    // A-share bot config
    cn: {
      timeframe: '1D' as const,
      range: 500,
      timeout: 10 * 1000,
      checkInterval: 24 * 60 * 60 * 1000, // 24 hours
    },

    // Crypto bot config
    crypto: {
      timeframe: '5' as const,
      range: 500,
      duplicateWindow: 20 * 60 * 1000, // 20 minutes
    },
  },
} as const;

// Validate required environment variables
export function validateConfig(): void {
  if (!config.tradingView.session) {
    throw new Error('SESSION environment variable is required');
  }
  if (!config.tradingView.signature) {
    throw new Error('SIGNATURE environment variable is required');
  }
}
