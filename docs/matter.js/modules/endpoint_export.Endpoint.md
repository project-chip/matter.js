[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [endpoint/export](endpoint_export.md) / Endpoint

# Namespace: Endpoint

[endpoint/export](endpoint_export.md).Endpoint

## Table of contents

### Interfaces

- [EndpointOptions](../interfaces/endpoint_export.Endpoint.EndpointOptions.md)

### Type Aliases

- [BehaviorOptions](endpoint_export.Endpoint.md#behavioroptions)
- [Configuration](endpoint_export.Endpoint.md#configuration)
- [Definition](endpoint_export.Endpoint.md#definition)
- [Options](endpoint_export.Endpoint.md#options)

### Functions

- [configurationFor](endpoint_export.Endpoint.md#configurationfor)
- [partFor](endpoint_export.Endpoint.md#partfor)

## Type Aliases

### BehaviorOptions

Ƭ **BehaviorOptions**\<`T`, `O`\>: \{ -readonly [K in keyof T["behaviors"] as K extends keyof O ? never : K]?: Options\<T["behaviors"][K]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md) = [`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md) |
| `O` | extends [`EndpointOptions`](../interfaces/endpoint_export.Endpoint.EndpointOptions.md) = [`EndpointOptions`](../interfaces/endpoint_export.Endpoint.EndpointOptions.md) |

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:711](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L711)

___

### Configuration

Ƭ **Configuration**\<`T`, `O`\>: [`Options`](endpoint_export.Endpoint.md#options)\<`T`, `O` & \{ `type`: `T`  }\> & \{ `type`: `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md) = [`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md) |
| `O` | extends [`EndpointOptions`](../interfaces/endpoint_export.Endpoint.EndpointOptions.md) = [`EndpointOptions`](../interfaces/endpoint_export.Endpoint.EndpointOptions.md) |

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:730](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L730)

___

### Definition

Ƭ **Definition**\<`T`\>: `T` \| [`Configuration`](endpoint_export.Endpoint.md#configuration)\<`T`\> \| [`Endpoint`](../classes/endpoint_export.Endpoint-1.md)\<`T`\>

Definition of an endpoint.  May be an [EndpointType](behavior_cluster_export._internal_.md#endpointtype), [Configuration](endpoint_export.Endpoint.md#configuration), or a [Endpoint](../classes/endpoint_export.Endpoint-1.md)
instance.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md) = [`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md) |

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:739](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L739)

___

### Options

Ƭ **Options**\<`T`, `O`\>: [`BehaviorOptions`](endpoint_export.Endpoint.md#behavioroptions)\<`T`, `O`\> & `O`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md) = [`Empty`](../interfaces/behavior_cluster_export._internal_.Empty.md) |
| `O` | extends [`EndpointOptions`](../interfaces/endpoint_export.Endpoint.EndpointOptions.md) = [`EndpointOptions`](../interfaces/endpoint_export.Endpoint.EndpointOptions.md) |

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:725](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L725)

## Functions

### configurationFor

▸ **configurationFor**\<`T`\>(`definition`, `options?`): [`Configuration`](endpoint_export.Endpoint.md#configuration)\<`T`, [`EndpointOptions`](../interfaces/endpoint_export.Endpoint.EndpointOptions.md)\>

Obtain a configuration from constructor parameters.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `T` \| [`Configuration`](endpoint_export.Endpoint.md#configuration)\<`T`, [`EndpointOptions`](../interfaces/endpoint_export.Endpoint.EndpointOptions.md)\> |
| `options?` | [`Options`](endpoint_export.Endpoint.md#options)\<`T`, [`EndpointOptions`](../interfaces/endpoint_export.Endpoint.EndpointOptions.md)\> |

#### Returns

[`Configuration`](endpoint_export.Endpoint.md#configuration)\<`T`, [`EndpointOptions`](../interfaces/endpoint_export.Endpoint.EndpointOptions.md)\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:744](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L744)

___

### partFor

▸ **partFor**\<`T`\>(`definition`): [`Endpoint`](../classes/endpoint_export.Endpoint-1.md)\<`T`\>

Obtain an endpoint for the given [Definition](endpoint_export.Endpoint.md#definition).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`EndpointType`](../interfaces/behavior_cluster_export._internal_.EndpointType-1.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Definition`](endpoint_export.Endpoint.md#definition)\<`T`\> |

#### Returns

[`Endpoint`](../classes/endpoint_export.Endpoint-1.md)\<`T`\>

#### Defined in

[packages/matter.js/src/endpoint/Endpoint.ts:760](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/Endpoint.ts#L760)
