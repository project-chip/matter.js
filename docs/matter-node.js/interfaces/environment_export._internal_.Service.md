[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [environment/export](../modules/environment_export.md) / [\<internal\>](../modules/environment_export._internal_.md) / Service

# Interface: Service

[environment/export](../modules/environment_export.md).[\<internal\>](../modules/environment_export._internal_.md).Service

An "environmental service" is an object available via [Environment.get](../classes/environment_export._internal_.Environment.md#get).

Any object may be an environmental service.  This methods in this interface are optional.

## Table of contents

### Properties

- [[asyncDispose]](environment_export._internal_.Service.md#[asyncdispose])
- [[presentation]](environment_export._internal_.Service.md#[presentation])
- [[value]](environment_export._internal_.Service.md#[value])
- [construction](environment_export._internal_.Service.md#construction)

## Properties

### [asyncDispose]

• `Optional` **[asyncDispose]**: () => `Promise`\<`any`\>

Asynchronous destruction.  Invoked by the environment when it is destroyed.

#### Type declaration

▸ (): `Promise`\<`any`\>

##### Returns

`Promise`\<`any`\>

#### Defined in

packages/matter.js/dist/esm/environment/Environmental.d.ts:24

___

### [presentation]

• `Optional` **[presentation]**: [`Presentation`](../enums/log_export.Diagnostic.Presentation.md)

Standard diagnostic presentation.

#### Defined in

packages/matter.js/dist/esm/environment/Environmental.d.ts:28

___

### [value]

• `Optional` **[value]**: `unknown`

Standard diagnostic value.

#### Defined in

packages/matter.js/dist/esm/environment/Environmental.d.ts:32

___

### construction

• `Optional` **construction**: `Promise`\<`any`\>

Asynchronous construction, respected by [Environment.load](../classes/environment_export._internal_.Environment.md#load).

#### Defined in

packages/matter.js/dist/esm/environment/Environmental.d.ts:20
