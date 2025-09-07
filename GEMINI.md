
# Gemini カスタマイズファイル

このファイルは、Geminiの応答をカスタマイズするために、プロジェクトに関するコンテキストを提供します。

## プロジェクト概要

- **目的と種類**: Sanity.ioをバックエンドとして使用するブログ用のコンテンツ管理システム（CMS）。
- **主要な機能**: ブログ記事（Post）、著者（Author）、カテゴリ（Category）の作成・編集・管理。リアルタイムでのコンテンツ編集機能。

## 技術スタック

- **言語**: TypeScript
- **フレームワーク/ライブラリ**: Sanity, React, styled-components
- **パッケージ管理**: npm
- **データベース**: Sanity
- **環境**: Node.js

## コーディング規約

- **スタイルガイド**: @sanity/eslint-config-studio
- **フォーマッター**: Prettier
- **リンター**: ESLint
- **型チェック**: TypeScript
- **命名規則**: ファイル名やスキーマ定義においてキャメルケースが使用されています。
- **コメント/ドキュメンテーション**: 特筆すべき規約はありません。

## よく使うコマンド

- **依存関係のインストール**: `npm install`
- **開発サーバーの起動**: `npm run dev`
- **テストの実行**: (テストスクリプトは定義されていません)
- **ビルド/コンパイル**: `npm run build`
- **デプロイ**: `npm run deploy`
- **コードのフォーマット/リンティング**: `npx prettier --write .` / `npx eslint .`

## プロジェクト構造

- **主要なディレクトリ**: 
  - `sanity-studio/`: Sanity Studioのソースコード全体を格納します。
  - `sanity-studio/schemaTypes/`: `post`や`author`など、コンテンツのデータ構造（スキーマ）を定義するファイルが置かれています。
  - `sanity-studio/static/`: 静的ファイルを配置するディレクトリです。
- **設定ファイル**: 
  - `sanity.config.ts`: Sanity Studioの主要な設定ファイルです。
  - `package.json`: プロジェクトの依存関係やスクリプトを定義します。
  - `tsconfig.json`: TypeScriptのコンパイラ設定です。
  - `eslint.config.mjs`: ESLintのリンティングルールを設定します。

## 特定の指示/注意事項

- **開発ワークフロー**: `npm install`で依存関係を導入後、`npm run dev`で開発サーバーを起動します。コンテンツモデルの変更は`schemaTypes`ディレクトリ内のファイルを編集して行います。
- **セキュリティの考慮事項**: 特筆すべき事項はありません。

# GEMINI.md

This file provides guidance for development work. Please follow the guidelines and requirements below when proceeding with development.

## Conversation Guidelines
常に日本語で会話する

## AI Security Guidelines

### Secure Coding Principles

#### 1. Environment Variables and Secret Management
- **Absolutely Prohibited**: Hardcoding API keys, DB connections, or secrets
- **Client-side Exposure**: Handle sensitive information and personal data only on the server side
- **Service Role Keys, Secret Keys, Admin Keys** must be used only on the server side
- **Production Environment Credentials** must never be written directly in code

#### 2. Database Security
- Always enable Row Level Security
- Implement least privilege policies
- Use server-side validation for all database operations
- **Never perform SQL operations from frontend**, implement safe DB operations in backend
- Avoid direct SQL query concatenation, thoroughly implement SQL injection countermeasures

#### 3. API Implementation Security
- Mandatory input validation using schema validation
- Implement rate limiting
  - Per user: 100 requests/minute
  - Per IP: 1000 requests/hour
- Safe error handling that doesn't expose internal details
- Protection from user enumeration attacks
- Implement authentication for all API endpoints
- Filter unnecessary data with output filtering

#### 4. Authentication and Account Security
- Client secrets must be used only on the server side
- Implement CSRF protection
- Use cryptographically secure token generation
- Prohibit storing unencrypted passwords

#### 5. Authorization Management
- Implement Role-Based Access Control (RBAC)
- Protect admin actions
- Prevent privilege escalation
- Apply need-to-know principle

#### 6. Security Headers
- Implement strict security headers
- Implement CSP headers (must add if not implemented)
- Prevent clickjacking
- Control content type options
- Set referrer policy
- Restrict permissions policy

#### 7. XSS Prevention
- Always sanitize user-generated content
- Use libraries like DOMPurify
- Never insert HTML directly without sanitization
- Thoroughly apply SafeText component

#### 8. Log Management
- **Production Environment**: Remove console.log containing personal or sensitive information
- **Development Environment**: Display only necessary logs
- Never output API keys or passwords to logs
- Prohibit displaying debug information containing user personal data

#### 9. Data Protection and Privacy
- **Minimize Collection**: Collect only necessary minimum data
- **Encryption**: Encrypt at rest and in transit
- **Access Control**: Apply need-to-know principle
- **Retention Period**: Securely delete data when no longer needed

### Development Build Workflow

When implementing features or making major adjustments, always execute the following steps:

1. **After Code Changes**
   - Run `npm run build` to check for build errors

2. **If Errors Occur**
   - Report error details
   - Implement fixes
   - Check build again

3. **After Confirming Build Success**
   - Report "Build succeeded. Ready for deployment"

**Required Checks for**:
- After new feature implementation
- After multiple file changes
- After type definition changes
- After import/export changes
- After removing unnecessary code

### Secure Development Practices

#### Code Review Checklist
- [ ] Confirm input validation implementation
- [ ] Proper authentication and authorization implementation
- [ ] No sensitive information in error messages
- [ ] No personal information output to logs
- [ ] SQL injection countermeasures
- [ ] XSS countermeasures implemented
- [ ] CSRF countermeasures implemented
- [ ] Admin privilege takeover countermeasures
- [ ] Prevention of important information leaks from server

#### Implementation Checklist
- [ ] Use environment variables
- [ ] Enable RLS and set policies
- [ ] Validate all inputs
- [ ] Implement rate limiting
- [ ] Secure error messages
- [ ] Protect sensitive user data
- [ ] Server-side permission checks

### Prohibited Actions

#### Security - Things You Must Never Do
- ❌ Write production environment credentials directly in code
- ❌ Output API keys or passwords to logs
- ❌ Display debug information containing user personal data
- ❌ Direct SQL query concatenation (causes SQL injection)
- ❌ Store unencrypted passwords
- ❌ Ignore or work around security warnings
- ❌ Copy production data to development environment

#### Denied Command Permissions
- Strict security measures to prevent destructive bash commands
- Denied Commands:
  - `Bash(rm -rf /)`
  - `Bash(rm -rf ~)`
  - `Bash(rm -rf ~/*)`
  - `Bash(rm -rf /*)`

#### Code Quality - Things Not to Do
- ❌ Swallow errors (catch and do nothing)
- ❌ Meaningless try-catch abuse
- ❌ Easy use of 'any' in TypeScript
- ❌ Abuse of eslint-disable
- ❌ Implementation ignoring existing design patterns

#### Destructive Operations - Things Not to Execute Without Confirmation
- ❌ Database deletion or reset
- ❌ Direct deployment to production
- ❌ Bulk update/deletion of large amounts of data
- ❌ Migration without backup
- ❌ Major dependency changes (major version upgrades, etc.)

#### Performance - Implementations to Avoid
- ❌ Code with possibility of infinite loops
- ❌ Leaving N+1 query problems
- ❌ Loading huge data into memory at once
- ❌ Executing synchronous heavy processing on UI thread
- ❌ React implementations causing unnecessary re-renders

#### UX - Things Not to Do
- ❌ Delete data without user consent
- ❌ Discard unsaved changes
- ❌ Display nothing on error
- ❌ No progress display for long processes
- ❌ Implementation ignoring mobile compatibility
- ❌ Implementation not considering accessibility

#### Automation - Things Requiring Human Judgment
- ❌ Fully automated production deployment (approval process required)
- ❌ Automatic deletion of user data
- ❌ Automatic execution of billing or payments
- ❌ Automatic delivery of important notifications (content verification required)
- ❌ Automation of processes with legal implications

#### AI Behavior
- ❌ State uncertain things definitively
- ❌ Statements that downplay security risks
- ❌ Vague assurances like "probably okay"
- ❌ Hide errors or bugs
- ❌ Ignore user concerns

### Recommended Responses

#### Security Focus
- ✅ Always use environment variables
- ✅ Always validate input values
- ✅ Handle errors appropriately

#### Confirmation and Communication
- ✅ Always confirm destructive operations
- ✅ Ask questions when uncertain
- ✅ Explain risks in advance

#### Things to Always Confirm
- "Delete production database?"
- "This operation cannot be undone. Continue?"
- "X records will be affected. Execute?"

### Examples of Absolutely Bad Code

```javascript
// ❌ Absolutely Bad - Hardcoding
const apiKey = "sk-123example90abcdef";

// ❌ Absolutely Bad - Password logging
console.log(`Password: ${user.password}`);

// ❌ Absolutely Bad - SQL Injection
const query = `SELECT * FROM users WHERE id = ${userId}`;

// ❌ Swallowing errors
try {
  await someFunction();
} catch (error) {
  // Do nothing - Absolutely bad
}

// ❌ Abuse of any
const data: any = await fetchData(); // Should be typed

// ❌ N+1 Problem
users.forEach(async (user) => {
  const posts = await db.query(`SELECT * FROM posts WHERE user_id = ${user.id}`);
});

// ❌ Bulk processing of huge arrays
const hugeArray = await fetchAllRecords(); // 1 million records
const processed = hugeArray.map(item => complexProcess(item));
```

**Security is not an afterthought but a core design principle integrated from the beginning.**
