[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/export](behavior_export.md) / AccessControl

# Namespace: AccessControl

[behavior/export](behavior_export.md).AccessControl

## Table of contents

### Interfaces

- [Limits](../interfaces/behavior_export.AccessControl.Limits.md)
- [Location](../interfaces/behavior_export.AccessControl.Location.md)
- [Session](../interfaces/behavior_export.AccessControl.Session.md)

### Type Aliases

- [Assertion](behavior_export.AccessControl.md#assertion)
- [Verification](behavior_export.AccessControl.md#verification)

## Type Aliases

### Assertion

Ƭ **Assertion**: (`session`: [`Session`](../interfaces/behavior_export.AccessControl.Session.md), `location`: [`Location`](../interfaces/behavior_export.AccessControl.Location.md)) => `void`

A function that asserts access control requirements are met.

#### Type declaration

▸ (`session`, `location`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](../interfaces/behavior_export.AccessControl.Session.md) |
| `location` | [`Location`](../interfaces/behavior_export.AccessControl.Location.md) |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:97](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L97)

___

### Verification

Ƭ **Verification**: (`session`: [`Session`](../interfaces/behavior_export.AccessControl.Session.md), `location`: [`Location`](../interfaces/behavior_export.AccessControl.Location.md)) => `boolean`

A function that returns true iff access control requirements are met.

#### Type declaration

▸ (`session`, `location`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](../interfaces/behavior_export.AccessControl.Session.md) |
| `location` | [`Location`](../interfaces/behavior_export.AccessControl.Location.md) |

##### Returns

`boolean`

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:102](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L102)
