[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [behavior/export](../../README.md) / AccessControl

# Namespace: AccessControl

## Index

### Interfaces

- [Limits](interfaces/Limits.md)
- [Location](interfaces/Location.md)
- [Session](interfaces/Session.md)

## Type Aliases

### Assertion()

> **Assertion**: (`session`, `location`) => `void`

A function that asserts access control requirements are met.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`Session`](interfaces/Session.md) |
| `location` | [`Location`](interfaces/Location.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:97](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L97)

***

### Verification()

> **Verification**: (`session`, `location`) => `boolean`

A function that returns true if access control requirements are met.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`Session`](interfaces/Session.md) |
| `location` | [`Location`](interfaces/Location.md) |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L102)
