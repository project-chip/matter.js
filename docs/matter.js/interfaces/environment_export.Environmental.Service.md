[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [environment/export](../modules/environment_export.md) / [Environmental](../modules/environment_export.Environmental.md) / Service

# Interface: Service

[environment/export](../modules/environment_export.md).[Environmental](../modules/environment_export.Environmental.md).Service

An "environmental service" is an object available via [Environment.get](../classes/environment_export.Environment.md#get).

Any object may be an environmental service.  This methods in this interface are optional.

## Table of contents

### Properties

- [[asyncDispose]](environment_export.Environmental.Service.md#[asyncdispose])
- [[presentation]](environment_export.Environmental.Service.md#[presentation])
- [[value]](environment_export.Environmental.Service.md#[value])
- [construction](environment_export.Environmental.Service.md#construction)

## Properties

### [asyncDispose]

• `Optional` **[asyncDispose]**: () => `Promise`\<`any`\>

Asynchronous destruction.  Invoked by the environment when it is destroyed.

#### Type declaration

▸ (): `Promise`\<`any`\>

##### Returns

`Promise`\<`any`\>

#### Defined in

[packages/matter.js/src/environment/Environmental.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environmental.ts#L28)

___

### [presentation]

• `Optional` **[presentation]**: [`Presentation`](../enums/log_export.Diagnostic.Presentation.md)

Standard diagnostic presentation.

#### Defined in

[packages/matter.js/src/environment/Environmental.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environmental.ts#L33)

___

### [value]

• `Optional` **[value]**: `unknown`

Standard diagnostic value.

#### Defined in

[packages/matter.js/src/environment/Environmental.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environmental.ts#L38)

___

### construction

• `Optional` **construction**: `Promise`\<`any`\>

Asynchronous construction, respected by [Environment.load](../classes/environment_export.Environment.md#load).

#### Defined in

[packages/matter.js/src/environment/Environmental.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/Environmental.ts#L23)
