[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/export](../modules/behavior_export.md) / AccessControl

# Interface: AccessControl

[behavior/export](../modules/behavior_export.md).AccessControl

Enforces access control for a specific schema.

## Table of contents

### Constructors

- [constructor](behavior_export.AccessControl-1.md#constructor)

### Properties

- [authorizeInvoke](behavior_export.AccessControl-1.md#authorizeinvoke)
- [authorizeRead](behavior_export.AccessControl-1.md#authorizeread)
- [authorizeWrite](behavior_export.AccessControl-1.md#authorizewrite)
- [limits](behavior_export.AccessControl-1.md#limits)
- [mayInvoke](behavior_export.AccessControl-1.md#mayinvoke)
- [mayRead](behavior_export.AccessControl-1.md#mayread)
- [mayWrite](behavior_export.AccessControl-1.md#maywrite)

## Constructors

### constructor

• **constructor**: `Object`

## Properties

### authorizeInvoke

• **authorizeInvoke**: [`Assertion`](../modules/behavior_export.AccessControl.md#assertion)

Assert invoke is authorized.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L53)

___

### authorizeRead

• **authorizeRead**: [`Assertion`](../modules/behavior_export.AccessControl.md#assertion)

Assert read is authorized.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L33)

___

### authorizeWrite

• **authorizeWrite**: [`Assertion`](../modules/behavior_export.AccessControl.md#assertion)

Assert write is authorized.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L43)

___

### limits

• **limits**: [`Limits`](behavior_export.AccessControl.Limits.md)

Operational access control metadata.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L28)

___

### mayInvoke

• **mayInvoke**: [`Verification`](../modules/behavior_export.AccessControl.md#verification)

Determine if invoke is authorized.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L58)

___

### mayRead

• **mayRead**: [`Verification`](../modules/behavior_export.AccessControl.md#verification)

Determine if read is authorized.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L38)

___

### mayWrite

• **mayWrite**: [`Verification`](../modules/behavior_export.AccessControl.md#verification)

Determine if write is authorized.

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L48)
