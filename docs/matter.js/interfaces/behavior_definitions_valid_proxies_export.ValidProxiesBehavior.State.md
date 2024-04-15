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

MatterSpecification.v11.Core § 9.15.15.5.1

#### Inherited from

StateType.validProxyList

#### Defined in

[packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts#L48)
