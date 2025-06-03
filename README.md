# Magic Website ✨

> 未来的なデザインと 3D インタラクションを組み合わせた革新的なウェブサイト

## 🌟 特徴

このプロジェクトは、3 つの美しいレイヤーで構成された没入感のあるウェブ体験を提供します：

- **🔢 Matrix Code Background**: 50%透過のマトリックスレインアニメーション
- **🤖 3D Interactive Robot**: Spline で作成されたインタラクティブな 3D ロボット「Whobee」
- **⚡ Hero Odyssey Interface**: ライトニングエフェクトと洗練された UI

## 🚀 技術スタック

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **3D Graphics**: Spline (@splinetool/react-spline)
- **Effects**: WebGL Shaders

## 🎨 デザイン要素

### Layer Structure

```
Layer 3: Hero Odyssey (前面)
├── ナビゲーション
├── ライトニングエフェクト (WebGL)
├── インタラクティブUI要素
└── カスタマイズ可能な色調整

Layer 2: 3D Robot (中間層)
├── インタラクティブ3Dロボット
├── リアルタイム操作
└── Spline統合

Layer 1: Matrix Code (背景)
├── バイナリー & 日本語文字
├── 50%透過アニメーション
└── カスタマイズ可能な速度
```

## 🛠️ セットアップ

### 前提条件

- Node.js 18+
- npm または yarn

### インストール

```bash
git clone <repository-url>
cd magic-website
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

## 📁 プロジェクト構造

```
magic-website/
├── src/
│   ├── app/
│   │   ├── globals.css          # カスタムスタイル
│   │   └── page.tsx             # メインページ
│   ├── components/
│   │   └── ui/
│   │       ├── hero-odyssey.tsx     # Hero Odysseyコンポーネント
│   │       ├── interactive-3d-robot.tsx # 3Dロボットコンポーネント
│   │       ├── matrix-code.tsx      # Matrix Rainコンポーネント
│   │       └── card.tsx             # shadcn/uiカードコンポーネント
│   └── lib/
│       └── utils.ts             # ユーティリティ関数
├── components.json              # shadcn/ui設定
└── package.json
```

## 🎮 インタラクティブ機能

- **🎨 ライトニング色調整**: リアルタイムでライトニングエフェクトの色を変更
- **🤖 3D ロボット操作**: マウスやタッチでロボットと相互作用
- **📱 レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- **🌈 アニメーション**: 滑らかな Freamer Motion アニメーション

## 🛡️ デプロイ

### Vercel (推奨)

```bash
npm install -g vercel
vercel
```

### その他のプラットフォーム

- Netlify
- AWS Amplify
- GitHub Pages

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 🙏 謝辞

- **Spline**: 素晴らしい 3D デザインツール
- **21st.dev**: Hero Odyssey と Matrix Code コンポーネント
- **shadcn/ui**: 美しい UI コンポーネントライブラリ
- **Vercel**: Next.js の開発チーム

---

✨ **Magic Website** - 未来を照らす技術で創造された体験 ✨
