# Smarteras コーポレートサイト

株式会社Smarterasの公式Webサイトです。

- **本番URL**: https://smarteras-hp.netlify.app/
- **リポジトリ**: [Smarteras/Smarteras-HP](https://github.com/Smarteras/Smarteras-HP)
- **ホスティング**: Netlify（`main` への push で自動デプロイ）

---

## 技術スタック

| 分類 | 使用技術 |
|---|---|
| フレームワーク | Next.js 15（App Router） |
| 言語 | TypeScript |
| UI | React 19 / Tailwind CSS 3 / shadcn/ui |
| フォーム | react-hook-form + zod |
| 問い合わせ受付 | Netlify Forms |
| ホスティング | Netlify |

---

## セットアップ

Node.js 18.18 以上が必要です（20以上を推奨）。

```bash
git clone git@github.com:Smarteras/Smarteras-HP.git
cd Smarteras-HP
npm install
npm run dev
```

http://localhost:3000 で起動します。ポートが使用中の場合は自動的に3001以降が割り当てられます。

### コマンド

| コマンド | 内容 |
|---|---|
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 本番ビルド（デプロイ前の動作確認に使用） |
| `npm run start` | ビルド済みの成果物をローカルで起動 |
| `npm run lint` | ESLint を実行 |

環境変数の設定は不要です。`.env` ファイルは使用していません。

---

## ディレクトリ構成

```
app/
  layout.tsx          全ページ共通のレイアウト（フォント・metadata）
  page.tsx            トップページ
  contact/page.tsx    お問い合わせページ
  globals.css         グローバルスタイル
components/
  contact-form.tsx    お問い合わせフォーム本体
  site-header.tsx     共通ヘッダー
  site-footer.tsx     共通フッター
  eyebrow.tsx         セクション見出しの小ラベル
  ui/                 shadcn/ui のコンポーネント群
public/
  __forms.html        Netlify Forms の検出用ファイル（後述・削除禁止）
  images/             画像アセット
```

ページを追加する際は、ヘッダーとフッターに `SiteHeader` / `SiteFooter` を使ってください。これらは各ページに直書きせず共通コンポーネントに集約しています。

---

## 開発フロー

**`main` ブランチへの直接 push は行いません。** `main` は本番環境に直結しており、push した内容がそのまま公開されます。

```
main から作業ブランチを作成
  ↓
実装・コミット
  ↓
ブランチを push
  ↓
main に向けて Pull Request を作成
  ↓
Deploy Preview で動作確認
  ↓
マージ → 本番へ自動デプロイ
```

### 手順

```bash
# 1. main を最新にして作業ブランチを作成
git checkout main
git pull origin main
git checkout -b feature/xxxxx

# 2. 実装したらコミット
git add .
git commit -m "変更内容を日本語で簡潔に"

# 3. push して PR を作成
git push -u origin feature/xxxxx
gh pr create --base main   # またはGitHubの画面から作成
```

### ブランチ名の付け方

| 接頭辞 | 用途 | 例 |
|---|---|---|
| `feature/` | 機能追加・コンテンツ変更 | `feature/contact-page` |
| `fix/` | 不具合修正・依存関係の更新 | `fix/nextjs-security-update` |
| `docs/` | ドキュメントのみの変更 | `docs/readme` |

### PR作成前に確認すること

```bash
npm run build
```

**必ずローカルでビルドを通してから PR を作成してください。** Netlify のビルドが失敗すると、その間サイトの更新が止まります。

### Deploy Preview

PRを作成すると、Netlifyが自動的にプレビュー環境を生成し、PRにURLをコメントします。本番に影響しないため、マージ前の確認はここで行ってください。

---

## デプロイ

`main` への push（PRのマージを含む）をトリガーに、Netlifyが自動的にビルドとデプロイを行います。**手動での操作は不要です。**

### Netlify のビルド設定

| 項目 | 値 |
|---|---|
| Base directory | （空欄） |
| Build command | `npm run build` |
| Publish directory | `.next` |
| Environment variables | なし |

### 手動でデプロイし直したい場合

設定変更を反映させる場合など、コードを変えずに再デプロイしたいときは、Netlifyの **Deploys → Trigger deploy → Clear cache and deploy site** を実行します。

---

## お問い合わせフォームの仕組み

⚠️ **この節は、フォームを変更する前に必ず読んでください。壊れても画面上はエラーが出ず、送信内容が消えます。**

問い合わせの受け付けには **Netlify Forms** を使用しています。専用のバックエンドやAPIキーは不要ですが、Next.js App Router と組み合わせるために特殊な構成を取っています。

### なぜ `public/__forms.html` があるのか

Netlifyは**デプロイ時に静的HTMLを解析**してフォームを検出します。しかしApp Routerのフォームはブラウザ側でReactが描画するため、ビルド成果物にHTMLとして現れず、検出できません。

そこで `public/__forms.html` に、実際のフォームと**同じフィールド名を持つ静的なフォーム定義**を置いて検出させ、送信は `components/contact-form.tsx` から `/__forms.html` へ fetch で POST しています。

```
public/__forms.html          ← Netlifyに「contactというフォームがある」と認識させる
components/contact-form.tsx  ← 実際にユーザーが入力する画面。ここから上記へPOSTする
```

### 変更時の必須ルール

**フォームの項目を追加・削除・リネームするときは、必ず2つのファイルを同時に修正してください。**

1. `components/contact-form.tsx` — 実際の入力欄
2. `public/__forms.html` — Netlify検出用の定義

**片方だけ変更すると、送信は成功したように見えるのに、Netlifyには何も記録されません。**エラーも出ないため気づけません。過去に最も事故が起きやすいのがこの箇所です。

修正後は、両ファイルのフィールド名が一致していることを確認してください。

- `public/__forms.html` の `<form name="contact">` と、`contact-form.tsx` の `FORM_NAME` も一致させる必要があります
- `public/__forms.html` は削除しないでください。削除するとフォームが機能しなくなります

### ローカルでのテストについて

**Netlify Forms は仕様上、ローカルでは実送信できません。** 開発環境（`npm run dev`）では送信処理をモックしてあり、入力内容はブラウザのコンソールに出力されます。バリデーションや送信完了画面の確認はローカルで可能です。

実際の送信テストは、PRのDeploy PreviewまたはNetlify上の環境で行ってください。

⚠️ **テスト送信は実在しそうなデータで行ってください。** `test` や `aaa@aaa.com` のようなダミーは Netlify のスパムフィルタ（Akismet）に弾かれ、**Verified submissions に表示されません**。届かない場合は、一覧上部のメニューから **Spam submissions** を確認してください。

### 問い合わせの確認場所

Netlify管理画面の **Forms → contact** に送信内容が蓄積されます。通知メールは **Forms → Notifications** で設定しています。

---

## 注意事項

### Next.js のバージョンを下げないこと

`package.json` では `next` のバージョンを固定指定しています。

過去に **CVE-2025-55182（React2Shell / CVSS 10.0 のRCE脆弱性）** の影響で、Netlifyがデプロイをブロックした経緯があります。脆弱性のあるバージョンに戻すと**デプロイができなくなります**。バージョンを変更する際は、必ず修正済みのバージョンを選んでください。

### `components/ui/` について

shadcn/ui から導入したコンポーネント群です。サイトで実際に使用しているのはごく一部ですが、未使用のものにもビルドを止めるエラーが含まれていた経緯があるため、削除や変更を行った場合は `npm run build` で確認してください。
