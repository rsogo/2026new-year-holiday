# Slidev Boilerplate

## Slidevとは?

Markdown記法でスライドを作成できるツールです。

詳しくは https://sli.dev/ とビルド後のslides.mdを参照してください。

## このリポジトリの使い方

1. GitHubのUse this templateメニューからCreate a repositoryを選択してリポジトリを作成
2. 作成されたリポジトリをcloneする
3. ```
   npm install
   ```
4. ```
   npm run dev
   ```
   で開発サーバーを起動
5. `slides.md`を編集してスライドを作成

## 読まなくていいMEMO

- ncdcテーマをgithub private repositoryを指定する形でnpm packageとしている
- npm iする際にgithubのauth権限が必要である
- githubの認証がgh authを使っている環境での動作確認はできていますが、source treeなど特定clientにのみ認証設定を行っている場合はエラーになるかも
