# NestJS demo

A tour of common NestJS building blocks, using a small `cats` module as the example.

## What it contains

- `src/cats`: controller, service, module and DTOs (`create-cat`, `update-cat`, `list-all-entities`)
- `src/common/guards`: an auth guard, a roles guard and a roles decorator
- `src/common/interceptor`: cache, errors, exclude-null, logging, timeout and transform interceptors
- `src/common/pipe`: a validation pipe (`class-validator` and `class-transformer`)
- `src/common/filter`: an all-exceptions filter
- `src/common/middleware`: a logger middleware
- Unit tests next to the code and an e2e test in `test/`

## Stack

NestJS 10, TypeScript, `class-validator` 0.14, `class-transformer` 0.5, RxJS 7.

## Run

```sh
npm install
npm run start:dev
npm test
```

## License

MIT. See [LICENSE](LICENSE).
