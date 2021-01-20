# Brilliant Audio Visualizer

## Development

```sh
# Terminal 1
$ docker-compose up

# Terminal 2
# To use scss yarn add node-sass@4.14.1 because Node Sass version 5.0.0 is incompatible with ^4.0.0. this error comes from sass-loader. There is a semver mismatch since node-sass @latest is v5.0.0 and sass-loader expects ^4.0.0.
$ docker-compose exec app bash
$ > yarn start
```
