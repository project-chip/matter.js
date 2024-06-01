[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [behavior/cluster/export](../../README.md) / ClusterBehavior

# Namespace: ClusterBehavior

## Index

### Interfaces

- [Type](interfaces/Type.md)

## Type Aliases

### Instance\<C, B, I\>

> **Instance**\<`C`, `B`, `I`\>: [`ClusterBehavior`](../../classes/ClusterBehavior.md) & `Omit`\<`InstanceType`\<`B`\>, `"cluster"` \| `"state"` \| `"events"` \| `"initialize"` \| *typeof* `Symbol.asyncDispose` \| keyof [`MethodsOf`](../ClusterInterface/README.md#methodsofic)\<[`InterfaceOf`](../ClusterInterface/README.md#interfaceofb)\<`B`\>, [`ClusterOf`](../../README.md#clusterofb)\<`B`\>\> \| keyof [`ExtensionInterfaceOf`](../../README.md#extensioninterfaceofb)\<`B`\>\> & [`MethodsOf`](../ClusterInterface/README.md#methodsofic)\<`I`, `C`\> & [`ExtensionInterfaceOf`](../../README.md#extensioninterfaceofb)\<`B`\> & `object`

A fully-typed ClusterBehavior.  This type is derived by combining properties of the base type with properties
contributed by the cluster.

#### Type declaration

##### cluster

> **cluster**: `C`

The implemented cluster.

##### events

> **events**: [`ClusterEvents`](../../README.md#clustereventsclustertbaset)\<`C`, `B`\>

Observables for cluster events and attribute changes.

##### features

> **features**: `C`\[`"supportedFeatures"`\]

Supported features as a flag object.

##### state

> **state**: [`ClusterState`](../../README.md#clusterstatecb)\<`C`, `B`\>

State values for the behavior.

##### `[asyncDispose]`()

###### Returns

[`MaybePromise`](../../../../../util/export/README.md#maybepromiset)\<`void`\>

#### Type parameters

| Type parameter |
| :------ |
| `C` *extends* [`ClusterType`](../../../../../cluster/export/interfaces/ClusterType.md) |
| `B` *extends* [`Type`](../../../../export/namespaces/Behavior/interfaces/Type.md) |
| `I` *extends* [`ClusterInterface`](../../README.md#clusterinterfacef) |

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:277](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L277)

## Variables

### ExtensionInterface

> `const` **ExtensionInterface**: `object`

This is an unfortunate kludge required to work around https://github.com/microsoft/TypeScript/issues/27965.  It
allows you to designate extension methods available on behavior instances.

Methods designated in this way make it so you can override methods using the syntax:

    override foo() {}

rather than:

    override foo: () => {}

See [ClusterInterface](../../README.md#clusterinterfacef) for more details.

#### Source

[packages/matter.js/src/behavior/cluster/ClusterBehavior.ts:340](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/cluster/ClusterBehavior.ts#L340)
