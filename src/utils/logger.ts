import chalk from 'chalk';
import dayjs from 'dayjs';
import { ActionType } from '../types';

export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  SUCCESS = 4,
}

interface LogStats {
  totalLogs: number;
  errorCount: number;
  warnCount: number;
  infoCount: number;
  debugCount: number;
  successCount: number;
  startTime: Date;
}

class Logger {
  private level: LogLevel = LogLevel.INFO;
  private logStats: LogStats = {
    totalLogs: 0,
    errorCount: 0,
    warnCount: 0,
    infoCount: 0,
    debugCount: 0,
    successCount: 0,
    startTime: new Date(),
  };

  constructor() {
    // Disable color in non-TTY environments
    if (!process.stdout.isTTY) {
      chalk.level = 0;
    }
  }

  setLevel(level: LogLevel): void {
    this.level = level;
  }

  private getTimestamp(): string {
    return dayjs().format('HH:mm:ss.SSS');
  }

  private formatMessage(level: LogLevel, message: string, ...args: any[]): string {
    const timestamp = chalk.gray(`[${this.getTimestamp()}]`);
    let levelTag = '';
    let formattedMessage = message;

    switch (level) {
      case LogLevel.DEBUG:
        levelTag = chalk.magenta('⚙ DEBUG');
        formattedMessage = chalk.gray(message);
        break;
      case LogLevel.INFO:
        levelTag = chalk.cyan('ℹ INFO ');
        formattedMessage = chalk.white(message);
        break;
      case LogLevel.WARN:
        levelTag = chalk.yellow('⚠ WARN ');
        formattedMessage = chalk.yellowBright(message);
        break;
      case LogLevel.ERROR:
        levelTag = chalk.red('✖ ERROR');
        formattedMessage = chalk.redBright(message);
        break;
      case LogLevel.SUCCESS:
        levelTag = chalk.green('✓ OK   ');
        formattedMessage = chalk.greenBright(message);
        break;
    }

    const argsStr = args.length > 0 ? ' ' + args.map(arg => {
      if (typeof arg === 'object') {
        return JSON.stringify(arg, null, 2);
      }
      return String(arg);
    }).join(' ') : '';

    return `${timestamp} ${levelTag} ${formattedMessage}${argsStr}`;
  }

  private log(level: LogLevel, message: string, ...args: any[]): void {
    if (level < this.level) return;

    this.logStats.totalLogs++;
    
    switch (level) {
      case LogLevel.DEBUG:
        this.logStats.debugCount++;
        break;
      case LogLevel.INFO:
        this.logStats.infoCount++;
        break;
      case LogLevel.WARN:
        this.logStats.warnCount++;
        break;
      case LogLevel.ERROR:
        this.logStats.errorCount++;
        break;
      case LogLevel.SUCCESS:
        this.logStats.successCount++;
        break;
    }

    const formatted = this.formatMessage(level, message, ...args);
    console.log(formatted);
  }

  debug(message: string, ...args: any[]): void {
    this.log(LogLevel.DEBUG, message, ...args);
  }

  info(message: string, ...args: any[]): void {
    this.log(LogLevel.INFO, message, ...args);
  }

  warn(message: string, ...args: any[]): void {
    this.log(LogLevel.WARN, message, ...args);
  }

  error(message: string, ...args: any[]): void {
    this.log(LogLevel.ERROR, message, ...args);
  }

  success(message: string, ...args: any[]): void {
    this.log(LogLevel.SUCCESS, message, ...args);
  }

  // 特殊格式化方法
  
  /**
   * 打印分隔线
   */
  divider(char: string = '─', length: number = 60): void {
    console.log(chalk.gray(char.repeat(length)));
  }

  /**
   * 打印标题
   */
  title(text: string): void {
    const line = '═'.repeat(text.length + 4);
    console.log(chalk.cyanBright(`\n╔${line}╗`));
    console.log(chalk.cyanBright(`║  ${text}  ║`));
    console.log(chalk.cyanBright(`╚${line}╝\n`));
  }

  /**
   * 打印表格数据
   */
  table(title: string, data: Record<string, any>): void {
    console.log(chalk.cyan(`\n┌─ ${title} ─┐`));
    Object.entries(data).forEach(([key, value]) => {
      const formattedKey = chalk.gray(`│ ${key.padEnd(20)}`);
      const formattedValue = chalk.white(`: ${value}`);
      console.log(`${formattedKey}${formattedValue}`);
    });
    console.log(chalk.cyan('└' + '─'.repeat(60) + '┘\n'));
  }

  /**
   * 打印进度信息
   */
  progress(current: number, total: number, message: string): void {
    const percentage = Math.round((current / total) * 100);
    const barLength = 30;
    const filledLength = Math.round((barLength * current) / total);
    const bar = '█'.repeat(filledLength) + '░'.repeat(barLength - filledLength);
    
    const progressBar = chalk.cyan(`[${bar}]`);
    const percentageText = chalk.yellow(`${percentage}%`);
    const countText = chalk.gray(`(${current}/${total})`);
    
    process.stdout.write(`\r${progressBar} ${percentageText} ${countText} ${message}`);
    
    if (current === total) {
      console.log(); // 换行
    }
  }

  /**
   * 打印统计信息
   */
  printStats(): void {
    const uptime = Math.round((Date.now() - this.logStats.startTime.getTime()) / 1000);
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = uptime % 60;
    const uptimeStr = `${hours}h ${minutes}m ${seconds}s`;

    this.table('Runtime Statistics', {
      'Uptime': uptimeStr,
      'Total Logs': this.logStats.totalLogs,
      'Success': chalk.green(this.logStats.successCount),
      'Info': chalk.cyan(this.logStats.infoCount),
      'Warnings': chalk.yellow(this.logStats.warnCount),
      'Errors': chalk.red(this.logStats.errorCount),
      'Debug': chalk.magenta(this.logStats.debugCount),
    });
  }

  /**
   * 打印交易信号
   */
  signal(data: {
    market: string;
    action: ActionType
    price: number;
    indicator: string;
    confidence?: number;
  }): void {
    const { market, action, price, indicator, confidence } = data;
    
    const actionColor = action === 'Buy' ? chalk.green : chalk.red;
    const actionIcon = action === 'Buy' ? '📈' : '📉';
    const actionText = actionColor.bold(`${actionIcon} ${action.toUpperCase()}`);
    
    console.log(chalk.cyan('\n╔════════════════════════════════════════════════════════════╗'));
    console.log(chalk.cyan('║') + chalk.bold.white('  TRADING SIGNAL  ').padEnd(59) + chalk.cyan('║'));
    console.log(chalk.cyan('╠════════════════════════════════════════════════════════════╣'));
    console.log(chalk.cyan('║') + `  Market     : ${chalk.yellow(market)}`.padEnd(71) + chalk.cyan('║'));
    console.log(chalk.cyan('║') + `  Action     : ${actionText}`.padEnd(79) + chalk.cyan('║'));
    console.log(chalk.cyan('║') + `  Price      : ${chalk.white(price.toFixed(2))}`.padEnd(71) + chalk.cyan('║'));
    console.log(chalk.cyan('║') + `  Indicator  : ${chalk.gray(indicator)}`.padEnd(71) + chalk.cyan('║'));
    if (confidence !== undefined) {
      const confidenceBar = '█'.repeat(Math.round(confidence / 10)) + '░'.repeat(10 - Math.round(confidence / 10));
      console.log(chalk.cyan('║') + `  Confidence : ${chalk.cyan(confidenceBar)} ${confidence}%`.padEnd(71) + chalk.cyan('║'));
    }
    console.log(chalk.cyan('╚════════════════════════════════════════════════════════════╝\n'));
  }

  /**
   * 打印市场概览
   */
  marketOverview(data: {
    name: string;
    totalMarkets: number;
    activeMarkets: number;
    signals: number;
    status: 'running' | 'stopped' | 'error';
  }): void {
    const { name, totalMarkets, activeMarkets, signals, status } = data;
    
    let statusIcon = '';
    let statusText = '';
    
    switch (status) {
      case 'running':
        statusIcon = '●';
        statusText = chalk.green('RUNNING');
        break;
      case 'stopped':
        statusIcon = '●';
        statusText = chalk.gray('STOPPED');
        break;
      case 'error':
        statusIcon = '●';
        statusText = chalk.red('ERROR');
        break;
    }

    console.log(chalk.cyan('\n┌─ ' + chalk.bold(name) + ' ─┐'));
    console.log(chalk.cyan('│') + ` ${statusIcon} Status        : ${statusText}`.padEnd(59));
    console.log(chalk.cyan('│') + ` ${chalk.yellow('📊')} Total Markets : ${chalk.white(totalMarkets)}`.padEnd(68));
    console.log(chalk.cyan('│') + ` ${chalk.green('✓')} Active        : ${chalk.white(activeMarkets)}`.padEnd(68));
    console.log(chalk.cyan('│') + ` ${chalk.blue('📡')} Signals       : ${chalk.white(signals)}`.padEnd(68));
    console.log(chalk.cyan('└' + '─'.repeat(60) + '┘\n'));
  }

  /**
   * 打印 Banner
   */
  banner(version: string = '1.0.0'): void {
    console.log(chalk.cyan(`
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║   ████████╗██████╗  █████╗ ██████╗ ██╗███╗   ██╗ ██████╗    ║
║   ╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗██║████╗  ██║██╔════╝    ║
║      ██║   ██████╔╝███████║██║  ██║██║██╔██╗ ██║██║  ███╗   ║
║      ██║   ██╔══██╗██╔══██║██║  ██║██║██║╚██╗██║██║   ██║   ║
║      ██║   ██║  ██║██║  ██║██████╔╝██║██║ ╚████║╚██████╔╝   ║
║      ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝╚═╝  ╚═══╝ ╚═════╝    ║
║                                                               ║
║            ${chalk.white('TradingView Signal Bot')} ${chalk.gray(`v${version}`)}                 ║
║          ${chalk.gray('Real-time trading signals powered by AI')}           ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
    `));
  }

  /**
   * 打印加载动画
   */
  spinner(message: string): { stop: (success?: boolean, finalMessage?: string) => void } {
    const frames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    let i = 0;
    let intervalId: NodeJS.Timeout | null = null;

    const start = () => {
      intervalId = setInterval(() => {
        const frame = frames[i++ % frames.length];
        process.stdout.write(`\r${chalk.cyan(frame)} ${message}`);
      }, 80);
    };

    const stop = (success: boolean = true, finalMessage?: string) => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
      const icon = success ? chalk.green('✓') : chalk.red('✖');
      const msg = finalMessage || message;
      process.stdout.write(`\r${icon} ${msg}\n`);
    };

    start();

    return { stop };
  }

  /**
   * 重置统计
   */
  resetStats(): void {
    this.logStats = {
      totalLogs: 0,
      errorCount: 0,
      warnCount: 0,
      infoCount: 0,
      debugCount: 0,
      successCount: 0,
      startTime: new Date(),
    };
  }
}

export const logger = new Logger();
