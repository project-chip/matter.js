[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/valid-proxies/export](../modules/behavior_definitions_valid_proxies_export.md) / [ValidProxiesBehavior](../modules/behavior_definitions_valid_proxies_export.ValidProxiesBehavior.md) / State

# Interface: State

[behavior/definitions/valid-proxies/export](../modules/behavior_definitions_valid_proxies_export.md).[ValidProxiesBehavior](../modules/behavior_definitions_valid_proxies_export.ValidProxiesBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_valid_proxies_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [validProxyList](behavior_definitions_valid_proxies_export.ValidProxiesBehavior.State.md#validproxylist)

## Properties

### validProxyList

• **validProxyList**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `nodeId`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)\>  }\>[]

List of valid proxies that can proxy this Node. Each entry in this list is fabric-scoped.

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 9.15.15.5.1

#### Inherited from

StateType.validProxyList

#### Defined in

[packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts:49](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts#L49)
