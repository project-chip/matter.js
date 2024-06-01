[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [endpoint/export](../../README.md) / Endpoint

# Namespace: Endpoint

## Index

### Interfaces

- [EndpointOptions](interfaces/EndpointOptions.md)

## Type Aliases

### BehaviorOptions\<T, O\>

> **BehaviorOptions**\<`T`, `O`\>: `{ -readonly [K in keyof T["behaviors"] as K extends keyof O ? never : K]?: Options<T["behaviors"][K]> }`

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`EndpointType`](../../../../behavior/cluster/export/-internal-/interfaces/EndpointType.md) | [`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md) |
| `O` *extends* [`EndpointOptions`](interfaces/EndpointOptions.md) | [`EndpointOptions`](interfaces/EndpointOptions.md) |

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:729](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L729)

***

### Configuration\<T, O\>

> **Configuration**\<`T`, `O`\>: [`Options`](README.md#optionsto)\<`T`, `O` & `object`\> & `object`

#### Type declaration

##### type

> **type**: `T`

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`EndpointType`](../../../../behavior/cluster/export/-internal-/interfaces/EndpointType.md) | [`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md) |
| `O` *extends* [`EndpointOptions`](interfaces/EndpointOptions.md) | [`EndpointOptions`](interfaces/EndpointOptions.md) |

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:748](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L748)

***

### Definition\<T\>

> **Definition**\<`T`\>: `T` \| [`Configuration`](README.md#configurationto)\<`T`\> \| [`Endpoint`](../../classes/Endpoint.md)\<`T`\>

Definition of an endpoint.  May be an [EndpointType](../../../../behavior/cluster/export/-internal-/README.md#endpointtype), [Configuration](README.md#configurationto), or a [Endpoint](../../classes/Endpoint.md)
instance.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`EndpointType`](../../../../behavior/cluster/export/-internal-/interfaces/EndpointType.md) | [`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md) |

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:757](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L757)

***

### Options\<T, O\>

> **Options**\<`T`, `O`\>: [`BehaviorOptions`](README.md#behavioroptionsto)\<`T`, `O`\> & `O`

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`EndpointType`](../../../../behavior/cluster/export/-internal-/interfaces/EndpointType.md) | [`Empty`](../../../../behavior/cluster/export/-internal-/interfaces/Empty.md) |
| `O` *extends* [`EndpointOptions`](interfaces/EndpointOptions.md) | [`EndpointOptions`](interfaces/EndpointOptions.md) |

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:743](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L743)

## Functions

### configurationFor()

> **configurationFor**\<`T`\>(`definition`, `options`?): [`Configuration`](README.md#configurationto)\<`T`, [`EndpointOptions`](interfaces/EndpointOptions.md)\>

Obtain a configuration from constructor parameters.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EndpointType`](../../../../behavior/cluster/export/-internal-/interfaces/EndpointType.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | `T` \| [`Configuration`](README.md#configurationto)\<`T`, [`EndpointOptions`](interfaces/EndpointOptions.md)\> |
| `options`? | [`Options`](README.md#optionsto)\<`T`, [`EndpointOptions`](interfaces/EndpointOptions.md)\> |

#### Returns

[`Configuration`](README.md#configurationto)\<`T`, [`EndpointOptions`](interfaces/EndpointOptions.md)\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:762](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L762)

***

### partFor()

> **partFor**\<`T`\>(`definition`): [`Endpoint`](../../classes/Endpoint.md)\<`T`\>

Obtain an endpoint for the given [Definition](README.md#definitiont).

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EndpointType`](../../../../behavior/cluster/export/-internal-/interfaces/EndpointType.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Definition`](README.md#definitiont)\<`T`\> |

#### Returns

[`Endpoint`](../../classes/Endpoint.md)\<`T`\>

#### Source

[packages/matter.js/src/endpoint/Endpoint.ts:778](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/endpoint/Endpoint.ts#L778)
