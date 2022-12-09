# CSV to Files
CSVからファイルを作成するスクリプトです。

## 環境構築
```shell
cd csv-to-files
npm install
```

## 利用方法

1. プロジェクトルートフォルダに`index.csv`を作成します。

参考）
```csv
file,body
greeting/hello.txt,Hello!!
```

2. csvが作成できたらコマンド実行します。

```shell
npm start
```

3. [`/dist`](./dist/)に作成されたファイルが格納されます。

## 動作推奨環境
| dependency | version |
| - | - |
| Node.js | 16.18.1 |