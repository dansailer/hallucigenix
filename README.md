# hallucigenix

This npm package serves as an example of how a package name could be hallucinated by a large language model (LLM). A threat actor could exploit this by creating a malicious package with a similar name, designed to trick users into installing it. For instance, if a developer mistakenly installs a package like `@dansailer/hallucigenix` instead of the intended package, the malicious package could execute code to extract sensitive information, such as Azure access tokens, from the developer's environment. This highlights the importance of verifying package names and sources before installation.

## Run example

1. Start the local demo api endpoint in separate shell:

   ```sh
   node run server
   ```

2. Create new NodeJS project

   ```sh
   mkdir test-project
   cd test-project
   node init -y
   ```

3. Login to the GitHub registry

   ```sh
   npm login --registry=https://npm.pkg.github.com
   ```

4. Install dependency:

   ```sh
   npm i @dansailer/hallucigenix --registry=https://npm.pkg.github.com
   ```
