# Truffle Next Recoil Box

This Truffle box provides a quick setup for a minimal Next.js project configured with Truffle and utilizing the lightweight state management tool called Recoil.

## Installation

To get started, make sure you have Truffle installed globally. You can then run the following commands to unbox and set up the project:

### Install Truffle Globally and Run `truffle unbox`

```bash
npm install -g truffle
truffle unbox truffle-next-recoil
```

Alternatively, you can use npx to unbox the project:

```
npx truffle unbox truffle-next-recoil
```

After unboxing the project and installing the necessary packages, follow the instructions below to set up your development environment.

## Getting Started
1. Start a local Ganache server either by opening the Ganache desktop application or running `ganache` in the terminal.
2. Navigate to the `client` directory in the project.
3. Run the following command to start the local NextJS development server:
    ```
    cd client
    npm run dev
    ```
4. Open up the local server at localhost:3000 and follow the on-screen instructions.

## FAQ
- **Does the project run on Ganache?** <br/>
Yes, the project runs on Ganache and is configured to use localhost:8545 as the default network. You can modify network properties by editing the truffle-config.js file. For more details, refer to the [Truffle Configuration Documentation](https://www.trufflesuite.com/docs/truffle/reference/configuration).

- **How do I learn more?**  <br/>
This project is built using [Next.js](https://nextjs.org/) for the frontend, [Truffle](https://www.trufflesuite.com/docs/truffle/overview) for the blockchain integration, and [Recoil](https://recoiljs.org/) for state management. Feel free to explore their respective documentation to learn more about each technology.
