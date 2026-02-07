# 🔧 启动错误修复说明

## 问题总结

在运行 `pnpm dev` 时遇到以下错误：

1. ⚠️ **Invalid next.config.ts**: `swcMinify` 选项已过时
2. ❌ **Cannot find module '@tailwindcss/postcss'**: 缺少 Tailwind CSS v4 的 PostCSS 插件包
3. ❌ **Cannot apply unknown utility class**: Tailwind CSS v4 不支持 `@apply` 指令处理自定义变量

## 已修复的问题

### 1. Tailwind CSS v4 PostCSS 插件缺失 ✅

**文件**: `package.json` 和 `postcss.config.js`

**问题**: 
- Tailwind CSS v4 将 PostCSS 插件分离到了独立的包 `@tailwindcss/postcss`
- 该包未在 package.json 中安装

**修复**:

`package.json`:
```json
{
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",  // ✅ 新增
    "tailwindcss": "^4",
    // ...
  }
}
```

`postcss.config.js`:
```js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},  // ✅ 正确的 v4 配置
  },
};
```

### 2. Tailwind CSS v4 语法更新 ✅

**文件**: `app/globals.css` 和 `tailwind.config.ts`

**问题**: 
- Tailwind v4 移除了 `@tailwind` 指令，改用 `@import "tailwindcss"`
- 不再支持使用 `@apply` 处理自定义 CSS 变量
- 配置方式从 JS 文件改为 CSS 中的 `@theme` 指令

**修复**:

`app/globals.css`:
```css
/* v4 新语法 */
@import "tailwindcss";

@theme {
  --color-background: hsl(0 0% 100%);
  --color-foreground: hsl(222.2 84% 4.9%);
  /* ... 其他颜色定义 */
}

@media (prefers-color-scheme: dark) {
  @theme {
    /* 深色模式颜色 */
  }
}

@layer base {
  * {
    border-color: var(--color-border);  /* 直接使用 CSS */
  }
  
  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
  }
}
```

`tailwind.config.ts`:
```ts
// v4 主要通过 CSS 配置，JS 配置文件简化
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};
```

**说明**: 
- Tailwind CSS v4 采用 CSS-first 配置方式
- 自定义颜色使用 `--color-*` 前缀在 `@theme` 中定义
- 不再需要在 JS 配置中扩展主题

### 2. Next.js 配置过时选项 ✅

**文件**: `next.config.ts`

**问题**:
- `swcMinify` 在 Next.js 13+ 中默认启用，在 15.4 中已被移除

**修复**:
```ts
// 修复前
const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,  // ❌ 已过时
  // ...
};

// 修复后
const nextConfig: NextConfig = {
  reactStrictMode: true,
  // swcMinify 已移除，默认启用
  // ...
};
```

### 3. 依赖包位置错误 ✅

**文件**: `package.json`

**问题**:
- `@prisma/client` 被错误地放在 `devDependencies` 中
- 缺少 `@prisma/extension-accelerate`
- `prisma` CLI 应该在 `devDependencies` 中

**修复**:
```json
{
  "dependencies": {
    "@prisma/client": "^7.1.0",
    "@prisma/adapter-pg": "^7.1.0",
    "@prisma/extension-accelerate": "^2.0.2",
    // ...
  },
  "devDependencies": {
    "prisma": "^7.1.0",  // CLI 工具
    // ...
  }
}
```

## 执行步骤

修复完成后，请按以下步骤操作：

### 1. 重新安装依赖

```bash
# 删除旧的依赖
rm -rf node_modules pnpm-lock.yaml

# 重新安装
pnpm install
```

### 2. 生成 Prisma Client

```bash
pnpm prisma:generate
```

### 3. 启动开发服务器

```bash
pnpm dev
```

## 预期结果

现在应该能够看到：

```bash
▲ Next.js 15.4.10
- Local:        http://localhost:3000
- Network:      http://192.168.3.2:3000

✓ Ready in 2.4s
```

不再有警告或错误信息。

## 其他说明

### Tailwind CSS 版本说明

项目使用 **Tailwind CSS v4**，这是最新版本，配置方式与 v3 有所不同：

- ✅ 使用标准的 `tailwindcss` 插件
- ✅ 自动处理 `@tailwind` 指令
- ✅ 支持新的 CSS 功能

### Next.js 15 变化

Next.js 15.4 的主要变化：

- `swcMinify` 默认启用且不可配置
- 改进的 Turbopack 支持
- React 19 支持
- 更快的开发服务器

## 故障排查

如果仍然遇到问题：

### 问题 1: 端口占用

```bash
# 检查端口 3000 是否被占用
lsof -ti:3000 | xargs kill -9

# 或使用其他端口
pnpm dev -- -p 3001
```

### 问题 2: 缓存问题

```bash
# 清理所有缓存
pnpm clean
rm -rf .next node_modules pnpm-lock.yaml

# 重新安装
pnpm install
pnpm dev
```

### 问题 3: Prisma 问题

```bash
# 重新生成 Prisma Client
pnpm prisma:generate

# 如果数据库未创建，运行迁移
pnpm prisma:migrate
```

## 完成 ✅

所有配置问题已修复，项目现在应该可以正常启动了！

如果还有其他问题，请查看：
- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS v4 文档](https://tailwindcss.com/docs)
- [Prisma 文档](https://www.prisma.io/docs)
