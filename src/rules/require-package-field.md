# require-package-field

Require specific fields in `package.json`

## Rule Details

<!-- eslint-skip -->

```json
// 👎 bad
{
  "name": "my-package"
}
```

<!-- eslint-skip -->

```json
// 👍 good
{
  "name": "my-package"
  "description": "My package",
  "type": "module",
  "license": "MIT",
  "homepage": "https://example.com",
  "bugs": {
    "url": "https://example.com/issues"
  },
  "repository": {
    "type": "git",
    "url": "https://example.com/repo.git"
  },
  "author": "Someone",
  "funding": "https://example.com/sponsor"
}
```

## Options

### `fields`

An array of field names to require.

Default value:

```json
[
  "description",
  "type",
  "license",
  "homepage",
  "bugs",
  "repository",
  "author",
  "funding"
]
```
