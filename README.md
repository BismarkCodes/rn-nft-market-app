# React Native NFT Marktet App

Just an NFT Market Application concept built using react native. I initially developed this to test Shopify's FlashList component compared to the react-native FlatList component.

To my surprise, FlashList is far more performant as compared to FlatList.

These are the screens available in this app as of now. Authentication and Payment screens will be added soon.

1. Main Screens

- Home: `marketplace showcasing trending and all other NFTs available`
- Saved NFTs: `a collection of the users favorite NFTs`
- Auction: `users can take part in live bidding of NFTs`
- Profile: `includes user settings, transactions, stats, etc`

2. Sub Screens

- Search: `live search feature that allows the user to search for NFTs`
- Notification: `Alerts and Inbox messages for the user`
- NFT Detail: `View detailed info about an NFT`

Feel free to Clone or Fork this repository and check out the source code, there's plenty of good stuff in there I'm sure you'd find helpful in your next react-native project.

## Screenshots

Ligh Mode

![Home Loading](https://raw.githubusercontent.com/BismarkCodes/rn-nft-market-app/main/assets/images/screenshots/loading_light.png)
![Home](https://raw.githubusercontent.com/BismarkCodes/rn-nft-market-app/main/assets/images/screenshots/home_light.png)
![NFT Detial](https://raw.githubusercontent.com/BismarkCodes/rn-nft-market-app/main/assets/images/screenshots/nft_2_light.png)
![Empty State](https://raw.githubusercontent.com/BismarkCodes/rn-nft-market-app/main/assets/images/screenshots/empty_light.png)
![Saved NFTs](https://raw.githubusercontent.com/BismarkCodes/rn-nft-market-app/main/assets/images/screenshots/saved_light.png)
![Auction](https://raw.githubusercontent.com/BismarkCodes/rn-nft-market-app/main/assets/images/screenshots/auction_light.png)
![Profile](https://raw.githubusercontent.com/BismarkCodes/rn-nft-market-app/main/assets/images/screenshots/profile_light.png)
![Search](https://raw.githubusercontent.com/BismarkCodes/rn-nft-market-app/main/assets/images/screenshots/search_light.png)
![Search Filter](https://raw.githubusercontent.com/BismarkCodes/rn-nft-market-app/main/assets/images/screenshots/search_filter_light.png)
![Notification](https://raw.githubusercontent.com/BismarkCodes/rn-nft-market-app/main/assets/images/screenshots/notification_light.png)


Dark Mode

![Home Loading](https://raw.githubusercontent.com/BismarkCodes/rn-nft-market-app/main/assets/images/screenshots/loading_drk.png)
![Home](https://raw.githubusercontent.com/BismarkCodes/rn-nft-market-app/main/assets/images/screenshots/home_drk.png)
![NFT Detial](https://raw.githubusercontent.com/BismarkCodes/rn-nft-market-app/main/assets/images/screenshots/nft_drk.png)
![Empty State](https://raw.githubusercontent.com/BismarkCodes/rn-nft-market-app/main/assets/images/screenshots/empty_drk.png)
![Saved NFTs](https://raw.githubusercontent.com/BismarkCodes/rn-nft-market-app/main/assets/images/screenshots/saved_drk.png)
![Auction](https://raw.githubusercontent.com/BismarkCodes/rn-nft-market-app/main/assets/images/screenshots/auction_drk.png)
![Profile](https://raw.githubusercontent.com/BismarkCodes/rn-nft-market-app/main/assets/images/screenshots/profile_dark.png)
![Search](https://raw.githubusercontent.com/BismarkCodes/rn-nft-market-app/main/assets/images/screenshots/search_drk.png)
![Search Filter](https://raw.githubusercontent.com/BismarkCodes/rn-nft-market-app/main/assets/images/screenshots/search_filter_drk.png)
![Notification](https://raw.githubusercontent.com/BismarkCodes/rn-nft-market-app/main/assets/images/screenshots/notification_drk.png)

## Installation

Clone or Fork the repository and then run the following code.

```bash
yarn install
```

## Dependencies

Most of the dependencies installed have not yet been used but will be used in future features as the app is being improved upon.

The dependencies installed in this repository include;

1. [@react-native-async-storage/async-storage](https://react-native-async-storage.github.io/async-storage/docs/install/)
2. [@react-navigation/bottom-tabs](https://reactnavigation.org/docs/bottom-tab-navigator/)
3. [@react-navigation/native](https://reactnavigation.org/docs/getting-started)
4. [@react-navigation/native-stack](https://reactnavigation.org/docs/hello-react-navigation)
5. [@reduxjs/toolkit](https://redux-toolkit.js.org/)
6. [@shopify/flash-list](https://shopify.github.io/flash-list/docs/)
7. [axios](https://axios-http.com/docs/intro)
8. [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv)
9. [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image/issues)
10. [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)
11. [react-native-navigation-bar-color](https://github.com/thebylito/react-native-navigation-bar-color)
12. [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)
13. [react-native-screens](https://github.com/software-mansion/react-native-screens)
14. [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
15. [react-redux](https://react-redux.js.org/introduction/getting-started)

## Note To Developers

The current version of this app has been tested and developed for Android Devices as I don't use an iPhone yet and my MacBook is a little old to run Xcode on.

But hey, it's still open for you to make a few `pod-installs` and Xcode configs and you are good to go on iOS.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

MIT License

Copyright (c) [2023] [Bismark Okletey Amanor]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
