# App Store Screenshot Downloader
This is node.js script to download iOS(iPhone/iPad) app Screenshot on App Store.

## How to use.
1. Resolve dependencies and compile typescript
```
yarn install && yarn webpack
```

1. Run script
```
node dist/bundle.js
```

1. Input iOS app AppleID.  
For example, AppleID is `991205655` in below url.  
https://itunes.apple.com/app/id991205655?mt=8

1. You can confirm folder which include screenshots at `~/Desktop/<APP_NAME>`.
