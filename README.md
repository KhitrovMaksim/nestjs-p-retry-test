# NestJS with p-retry
Testing p-retry npm package in the NestJS project

## Commands I used
```shell
# New NestJS project
nest new .

# Generate app (monorepo)
nest generate app handler

# Generate folder for shared modules
nest generate library shared

# Generate first shared module
nest generate module some-api-client --project shared
nest generate module retry-request --project shared

npm i p-retry
npm i --save @nestjs/axios axios
```

## Run project locally
```shell
git clone https://github.com/KhitrovMaksim/nestjs-p-retry-test.git
cd nestjs-p-retry-test
npm i

nest start nestjs-p-retry-test
```
