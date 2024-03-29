[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [environment/export](../modules/environment_export.md) / [\<internal\>](../modules/environment_export._internal_.md) / ServiceEvents

# Interface: ServiceEvents\<T\>

[environment/export](../modules/environment_export.md).[\<internal\>](../modules/environment_export._internal_.md).ServiceEvents

Events related to service lifecycle.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`[]) => `T` |

## Table of contents

### Properties

- [added](environment_export._internal_.ServiceEvents.md#added)
- [deleted](environment_export._internal_.ServiceEvents.md#deleted)

## Properties

### added

• **added**: [`Observable`](util_export.Observable.md)\<[instance: InstanceType\<T\>], `void`\>

#### Defined in

packages/matter.js/dist/esm/environment/Environmental.d.ts:48

___

### deleted

• **deleted**: [`Observable`](util_export.Observable.md)\<[instance: InstanceType\<T\>], `void`\>

#### Defined in

packages/matter.js/dist/esm/environment/Environmental.d.ts:49
