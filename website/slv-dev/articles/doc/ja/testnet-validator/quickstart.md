---
id: testnet-validator-quickstart
title: Solana テストネット バリデータ - クイックスタート
description: SLV - Solana テストネット バリデータ - クイックスタート
---

## Installation & Validator Launch

```bash
curl -fsSL https://storage.slv.dev/slv/install | sh
slv validator init
slv validator deploy
```


## Solana テストネットに Firedancer バリデータをデプロイ

🚀 事前準備
Ubuntu 24.04 LTS のクリーンインストール済みサーバーを準備してください。

🔑 キーの取り扱いについて
Firedancerの新規SLVデプロイでは、安全確保のため最初は常に **unstaked-keypair.json** がアイデンティティキーとして使用されます。

これは二重投票など重大な問題を防止するためのベストプラクティスです。

SLV は「キーレスオペレーション」をサポートしており、バリデータのノード内には機密キーなどの重要な情報を一切保存しません。

✅ デプロイ後のアイデンティティ設定
デプロイ後は必ず次のコマンドで認証済みのアイデンティティキーを設定してください:

```bash
slv v set:identity -n testnet --pubkey <your-identity-pubkey>
```

### ベアメタルサーバーの準備

Solana公式はベアメタルサーバーでの使用を推奨しています。
ベアメタルサーバーは、他の仮想化された環境よりも高いパフォーマンスを提供します。
Solana のノードは高い CPU とメモリの要件があります。
テストネットバリデーターでは通常、最低でも 16 コアの CPU と 128 GB のメモリが必要です。

`slv v init` コマンドを実行すると、ベアメタルがすでにセットアップされているかどうかを確認するための質問が表示されます。

```bash
➜ slv v init
? Select Solana Network (testnet) › mainnet
? 🛡️ Do you have a Solana Node Compatabile Server? (no)
❯ yes
  no
```

ここでは `yes` のチュートリアルを進めます。
まだベアメタルサーバーがセットアップされていない場合は、`no` を選択してください。
こちらの[ガイド](/ja/doc/metal/quickstart)を参考に、
ベアメタルサーバーを確保してください。

### デフォルトのユーザー名を入力

通常、デフォルトのユーザー名は `ubuntu` です。

```bash
slv v init
? What's the user for the server? (ubuntu) › ubuntu
```

### サーバーの IP アドレスを入力

サーバーの IP アドレスを入力します。

```bash
? What's the IP address of the server? ›
```

### SSH 用の RSA キーを設定

※ ご自身の RSA キーのパスを設定してください。デフォルトのパスは `~/.ssh/id_rsa` です。
現在はデフォルトパスのみサポートされているため、そのまま設定してください。

```bash
? What's the path to your RSA key? (~/.ssh/id_rsa) › ~/.ssh/id_rsa
🔍 Checking SSH connection...
✔︎ SSH connection succeeded
```

その後、SLV がサーバーへの接続をチェックします。接続が成功すると、次のステップへ進みます。

### Solana バリデータのアイデンティティキーを生成または設定

新しいアイデンティティキーを生成するか、既存のアイデンティティキーを設定できます。
ここでは既存のアイデンティティキーを設定する例を示します。

```bash
? Do you want to create a new identity key now? (Y/n) › No
? Please Enter Your Identity Public Key › EjDwu2Czy8eWEYRuNwtjniYks47Du3KNJ6JY9rs3aFSV
⚠️ Please place your identity key in

  ~/.slv/keys/EjDwu2Czy8eWEYRuNwtjniYks47Du3KNJ6JY9rs3aFSV.json
.
.
✔︎ Success
✔ Inventory updated to ~/.slv/inventory.yml
✔ Successfully created solv user on x.x.x.x
```

アイデンティティキーを `~/.slv/keys/<your-pubkey>.json` に配置してください。その後、SLV がパスワードを用いて `solv` ユーザーを作成します。

### Solana バリデータの投票アカウントキーを生成または設定

新しい投票アカウントキーを生成するか、既存の投票アカウントキーを設定できます。
ここでは既存の投票アカウントキーを設定する例を示します。

```bash
? Do you want to create a new vote account key now? (Y/n) › No
? Please Enter Your Vote Account Public Key > <your-vote-account>
⚠️ Please place your voteAccount pubkey in

  ~/.slv/keys/<your-vote-account>.json
```

投票アカウントキーを `~/.slv/keys/<your-vote-account>.json` に配置してください。

### 投票アカウントの Authority キーを入力

投票アカウントから報酬を引き出すために使用する Authority の PublicKey を入力してください。

```bash
? Please Enter Your Vote Account's Authority Key › <your-authority-pubkey>
✔︎ Validator testnet config saved to ~/.slv/inventory.testnet.validators.yml

Now you can deploy with:

$ slv v deploy -n testnet
```

これで設定内容が `~/.slv/inventory.testnet.validators.yml` に保存されました。

### バリデータのデプロイ

設定を確認したら、デプロイを開始します。

```bash
slv v deploy -n testnet
Your Testnet Validators Settings:
┌────────────────┬──────────────────────────────────────────────┐
│ Identity Key   │ EjDwu2Czy8eWEYRuNwtjniYks47Du3KNJ6JY9rs3aFSV │
├────────────────┼──────────────────────────────────────────────┤
│ Vote Key       │ EwoVPLUhdhm722e7QWk8GMQ43917qRXiC9HFyefEMiSV │
├────────────────┼──────────────────────────────────────────────┤
│ Authority Key  │ EcT4NsMPwxanusdy3dza5nznqwuKo9Pz3GzW5GPD32SV │
├────────────────┼──────────────────────────────────────────────┤
│ IP             │ x.x.x.x                                      │
├────────────────┼──────────────────────────────────────────────┤
│ Validator Type │ firedancer                                   │
├────────────────┼──────────────────────────────────────────────┤
│ Version        │ 0.302.20104                                  │
└────────────────┴──────────────────────────────────────────────┘
? Do you want to continue? (Y/n) › Yes
```

完了です！Solana バリデータがデプロイされました。Solana ネットワークとの同期には少し時間がかかります。

### デバッグ・モニタリング

デプロイ後、Solana RPC ノード内でデバッグとモニタリングを行うことができます。
以下のコマンドを使用して、Solana RPC ノードの状態を確認できます。

```bash
$ solv m
```

`solv` は `agave-validator -l /mnt/ledger` のエイリアスです。
RPCノードデプロイ時に この設定が `~/.profile` に追加されています。


### アイデンティティキーの変更

デプロイ後、アンステーク済みのキーを認証済みのアイデンティティキーに変更する必要があります。

```bash
slv v set:identity -n testnet --pubkey <your-identity-pubkey>
```

このコマンドを実行すると、ローカルコンピューターにある以下のアイデンティティキーがバリデータノードに設定されます。

`~/.slv/keys/<your-identity-pubkey>.json`

セキュリティ保護のため、鍵に関する情報はバリデータノード内には一切保存されません。🛡️

### Firedancer の再起動

バリデータに問題がある場合は、以下のコマンドで firedancer を再起動できます。

`--rm` オプションを使用すると、バリデータが停止し、ledger と snapshot ディレクトリが削除された後、snapshot finder でスナップショットをダウンロードしてからバリデータを起動します。

```bash
slv v restart -n testnet --pubkey <your-identity-pubkey> --rm
```

### SLV Validator コマンド

```bash
Usage:   slv validator
Version: 0.8.2        

Description:

  Manage Solana Validator Nodes

Options:

  -h, --help  - Show this help.  

Commands:

  init                - Initialize a new validator                                       
  deploy              - Deploy Validators                                                
  list                - List validators                                                  
  set:identity        - Set Validator Identity                                           
  set:unstaked        - Set Validator Identity to Unstaked Key Stop/Change Identity/Start
  restart             - Stop and Start Validator                                         
  setup:firedancer    - Setup Firedancer Validator - Testnet Only                        
  setup:relayer       - Setup Jito Relayer - Mainnet Only                                
  deploy:relayer      - Setup Jito Relayer - Mainnet Only                                
  update:version      - Update Validator Version                                         
  update:script       - Update Validator Startup Config                                  
  apply               - Apply Ansiible Playbook                                          
  update:allowed-ips  - Update allowed IPs for mainnet validator nodes                   
  switch              - Switch Validator Identity - No DownTime Migration 
```
