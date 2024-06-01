[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [behavior/export](../../README.md) / Behavior

# Namespace: Behavior

## Index

### Interfaces

- [Type](interfaces/Type.md)

## Type Aliases

### EventsOf\<B\>

> **EventsOf**\<`B`\>: `InstanceType`\<`B`\[`"Events"`\]\>

The events type of a behavior [Type](interfaces/Type.md).

#### Type parameters

| Type parameter |
| :------ |
| `B` *extends* [`Type`](interfaces/Type.md) |

#### Source

[packages/matter.js/src/behavior/Behavior.ts:364](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L364)

***

### InitializationOptionsOf\<B\>

> **InitializationOptionsOf**\<`B`\>: `Parameters`\<`InstanceType`\<`B`\>\[`"initialize"`\]\> *extends* [infer P] ? `P` : `object`

Initialization options.

#### Type parameters

| Type parameter |
| :------ |
| `B` *extends* [`Type`](interfaces/Type.md) |

#### Source

[packages/matter.js/src/behavior/Behavior.ts:369](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L369)

***

### InputStateOf\<B\>

> **InputStateOf**\<`B`\>: `Partial`\<[`RelaxTypes`](../../../../cluster/export/namespaces/ClusterType/README.md#relaxtypesv)\<[`StateOf`](README.md#stateofb)\<`B`\>\>\>

Input variant of StateOf.

#### Type parameters

| Type parameter |
| :------ |
| `B` *extends* [`Type`](interfaces/Type.md) |

#### Source

[packages/matter.js/src/behavior/Behavior.ts:354](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L354)

***

### Options\<T\>

> **Options**\<`T`\>: [`InputStateOf`](README.md#inputstateofb)\<`T`\> & [`InitializationOptionsOf`](README.md#initializationoptionsofb)\<`T`\>

Configuration options you may set when adding a [Behavior](../../classes/Behavior.md) to an endpoint.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`Type`](interfaces/Type.md) | [`Type`](interfaces/Type.md) |

#### Source

[packages/matter.js/src/behavior/Behavior.ts:375](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L375)

***

### PatchStateOf\<B\>

> **PatchStateOf**\<`B`\>: [`PatchType`](../../../../cluster/export/namespaces/ClusterType/README.md#patchtypev)\<[`StateOf`](README.md#stateofb)\<`B`\>\>

Patch variant of StateOf.

#### Type parameters

| Type parameter |
| :------ |
| `B` *extends* [`Type`](interfaces/Type.md) |

#### Source

[packages/matter.js/src/behavior/Behavior.ts:359](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L359)

***

### StateOf\<B\>

> **StateOf**\<`B`\>: `InstanceType`\<`B`\[`"State"`\]\>

The state type of a behavior [Type](interfaces/Type.md).

#### Type parameters

| Type parameter |
| :------ |
| `B` *extends* [`Type`](interfaces/Type.md) |

#### Source

[packages/matter.js/src/behavior/Behavior.ts:349](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L349)

## Functions

### unimplemented()

> **unimplemented**(...`_args`): `Promise`\<`any`\>

This function simply throws NotImplementedError.  More importantly, its presence in any command implementation
method informs the endpoint that the command is not implemented.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`_args` | `any`[] |

#### Returns

`Promise`\<`any`\>

#### Source

[packages/matter.js/src/behavior/Behavior.ts:342](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Behavior.ts#L342)
