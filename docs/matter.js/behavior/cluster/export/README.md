[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / behavior/cluster/export

# behavior/cluster/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [ClusterBehavior](namespaces/ClusterBehavior/README.md)
- [ClusterEvents](namespaces/ClusterEvents/README.md)
- [ClusterInterface](namespaces/ClusterInterface/README.md)
- [ClusterState](namespaces/ClusterState/README.md)

### Classes

- [ClusterBehavior](classes/ClusterBehavior.md)
- [ValidatedElements](classes/ValidatedElements.md)

## Type Aliases

### ClusterEvents\<ClusterT, BaseT\>

> **ClusterEvents**\<`ClusterT`, `BaseT`\>: `Omit`\<`InstanceType`\<`BaseT`\[`"Events"`\]\>, keyof [`Properties`](namespaces/ClusterEvents/README.md#propertiesc)\<[`ClusterOf`](README.md#clusterofb)\<`BaseT`\>\>\> & [`Properties`](namespaces/ClusterEvents/README.md#propertiesc)\<`ClusterT`\>

Event instance type for ClusterBehaviors.

#### Type parameters

| Type parameter |
| :------ |
| `ClusterT` *extends* [`ClusterType`](../../../cluster/export/interfaces/ClusterType.md) |
| `BaseT` *extends* [`Type`](../../export/namespaces/Behavior/interfaces/Type.md) |

#### Source

[packages/matter.js/src/behavior/cluster/ClusterEvents.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterEvents.ts#L17)

***

### ClusterInterface\<F\>

> **ClusterInterface**\<`F`\>: `object`

This type defines methods for a behavior grouped by named cluster component.

Ideally we would do this using a simple mapped type.  Unfortunately as of TypeScript 5.2 there is no way to define a
method using a mapped type. Instead the mapped type defines function properties.

Function properties work identically to methods semantically but TypeScript doesn't allow you to override them with
standard methods (see error TS2425).

Thus we are forced to generate an interface for every cluster component and assemble based on selected features using
logic that mirrors [ClusterComposer.Of](../../../cluster/export/namespaces/ClusterComposer/README.md#ofclustertfeaturest).

Note that we only need to do this for commands.  The public interface for attributes and events consists solely of
properties so we generate using mapped types.  This is handled by ClusterState and ClusterEvents respectively.

If TS team ever fixes:

  https://github.com/microsoft/TypeScript/issues/27965

...then we can remove the interface and just use [ClusterInterface.MappedMethodsOf](namespaces/ClusterInterface/README.md#mappedmethodsofc).

This appears to be a duplicate (but is still open):

  https://github.com/microsoft/TypeScript/issues/27689

Proposed solution is to just remove the error:

  https://github.com/microsoft/TypeScript/issues/48125

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) | `object` |

#### Type declaration

##### components

> **components**: [`Component`](namespaces/ClusterInterface/interfaces/Component.md)\<`F`\>[]

#### Source

[packages/matter.js/src/behavior/cluster/ClusterInterface.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterInterface.ts#L43)

***

### ClusterOf\<B\>

> **ClusterOf**\<`B`\>: `B` *extends* `object` ? `C` : [`Unknown`](../../../cluster/export/namespaces/ClusterType/README.md#unknown)

The cluster type for a behavior.

#### Type parameters

| Type parameter |
| :------ |
| `B` *extends* [`Type`](../../export/namespaces/Behavior/interfaces/Type.md) |

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehaviorUtil.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehaviorUtil.ts#L87)

***

### ClusterState\<C, B\>

> **ClusterState**\<`C`, `B`\>: [`Type`](namespaces/ClusterState/README.md#typecb)\<`C`, `B`\>

Instance type for complete (endpoint + fabric) state.

#### Type parameters

| Type parameter |
| :------ |
| `C` *extends* [`ClusterType`](../../../cluster/export/interfaces/ClusterType.md) |
| `B` *extends* [`Type`](../../export/namespaces/Behavior/interfaces/Type.md) |

#### Source

[packages/matter.js/src/behavior/cluster/ClusterState.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterState.ts#L15)

***

### ExtensionInterfaceOf\<B\>

> **ExtensionInterfaceOf**\<`B`\>: `B` *extends* `object` ? `I` : `object`

The extension interface for a behavior.

#### Type parameters

| Type parameter |
| :------ |
| `B` *extends* [`Type`](../../export/namespaces/Behavior/interfaces/Type.md) |

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehaviorUtil.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehaviorUtil.ts#L94)

## Functions

### createType()

> **createType**\<`C`\>(`cluster`, `base`, `schema`?): (...`args`) => `any`

This is the actual implementation of ClusterBehavior.for().  The result must match [ClusterBehavior.Type](namespaces/ClusterBehavior/interfaces/Type.md)<C>.

#### Type parameters

| Type parameter |
| :------ |
| `C` *extends* [`ClusterType`](../../../cluster/export/interfaces/ClusterType.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | `C` |
| `base` | [`Type`](../../export/namespaces/Behavior/interfaces/Type.md) |
| `schema`? | [`Schema`](-internal-/README.md#schema) |

#### Returns

`Function`

##### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `any` |

##### Returns

`any`

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehaviorUtil.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehaviorUtil.ts#L30)

***

### introspectionInstanceOf()

> **introspectionInstanceOf**(`type`): `Record`\<`string`, (...`args`) => `any`\>

Create a non-functional instance of a [Behavior](../../export/classes/Behavior.md) for introspection purposes.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | [`Type`](../../export/namespaces/Behavior/interfaces/Type.md) |

#### Returns

`Record`\<`string`, (...`args`) => `any`\>

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehaviorUtil.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehaviorUtil.ts#L23)
