
# Quote application with blockchain

*A project for blockchain beginners.*

This **Quote Application** is built with **solidity, python and react typescript**.
By using this application one can *upload a quote*, which will be visible to all the users.

The **smart contract** which is built with **solidity** has capabilities of **adding a new user**, **uploading a quote** and **catching new quotes uploaded at that time**.

The python script `deploy_app.py` is the main script to deploy a new contract to a network like `kovan`, `rinkeby`, etc.
To run this script you will need [brownie](https://eth-brownie.readthedocs.io/en/stable/) python pakage installed.

The **Web UI** is built with **React Typescript**. One should have [NodeJs](https://nodejs.org/en/) and [npm](https://www.npmjs.com/package/npm) installed to run this application.

By using **MetaMask** and some **kovan chain faucets**, one can **interact** with the smart contract.

- [@useDApp/core](https://www.npmjs.com/package/@usedapp/core) is used here to **call the functions** of the **smart contract** deployed on the live chain.

- [@material-ui/core](https://www.npmjs.com/package/@material-ui/core) is used here to **style** the **Web UI** within the **typescript** file.

- [react-toastify](https://www.npmjs.com/package/react-toastify) npm package is used here to **show notifications** in the **Web UI**.

**Here's the guide to run this application :**
- Setup
    - Add **MetaMask** extension for your **web browser**.
    - **Create** a new wallet or **import** one.
    - Click on **Ethereum mainnet** next to the icon.
    - Click **Show/Hide** Test networks.
    - Turn on that feature.
    - Switch the network to **Kovan Test Network**.
    - Now go to this [website](https://faucets.chain.link/).
    - **Connect** the wallet by choosing metamask, then select connect.
    - **Uncheck** the `20 test LINK` because the application works only on `ETH`.
    - **Verify** that you are a human.
    - Click **Send Request** button.
    - Install [**NodeJs**](https://nodejs.org/en/) and [**npm**](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

- Running application
    - Execute the command `npm install --force`
    - Now execute the command `npm start`
- Application usage
    - Once the app is opened in the web browser, **Connect** the wallet by clicking connect button.
    - After connecting, Click **SignIn** button. Fill your username in the input feild and press proceed.
    - Click on the **confirm** button in the metamask that has been poped up.
    - After SignIn you can **post** any quote on the website.
    - Get a quote and type it in the input feild on the bottom.
    - Then click the **send** button. After a few seconds the quote will be posted.



## Authors

- [@Tanay-ErrorCode](https://github.com/Tanay-ErrorCode/)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/MY_YOUTUBE-000?style=for-the-badge&logo=youtube&logoColor=red)](https://www.youtube.com/channel/UCN7Lo2yjOFomJLDpAxxcSMw)
[![StackOverfow](https://img.shields.io/badge/Stack_Overflow-fff?style=for-the-badge&logo=stackoverflow&logoColor=orange)](https://stackoverflow.com/users/17675859/tanay)

