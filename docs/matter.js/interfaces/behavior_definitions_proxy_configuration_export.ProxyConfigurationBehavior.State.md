[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/definitions/proxy-configuration/export](../modules/behavior_definitions_proxy_configuration_export.md) / [ProxyConfigurationBehavior](../modules/behavior_definitions_proxy_configuration_export.ProxyConfigurationBehavior.md) / State

# Interface: State

[behavior/definitions/proxy-configuration/export](../modules/behavior_definitions_proxy_configuration_export.md).[ProxyConfigurationBehavior](../modules/behavior_definitions_proxy_configuration_export.ProxyConfigurationBehavior.md).State

## Hierarchy

- [`StateType`](../modules/behavior_definitions_proxy_configuration_export._internal_.md#statetype)

  ↳ **`State`**

## Table of contents

### Properties

- [configurationList](behavior_definitions_proxy_configuration_export.ProxyConfigurationBehavior.State.md#configurationlist)

## Properties

### configurationList

• **configurationList**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `proxyAllNodes`: [`FieldType`](tlv_export.FieldType.md)\<`boolean`\> ; `sourceList`: [`FieldType`](tlv_export.FieldType.md)\<[`NodeId`](../modules/datatype_export.md#nodeid)[]\>  }\>[]

List of proxy configurations. There shall NOT be multiple entries in this list for the same fabric.

**`See`**

MatterSpecification.v11.Core § 9.15.14.5.1

#### Inherited from

StateType.configurationList

#### Defined in

[packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts:67](https://github.com/project-chip/matter.js/blob/5f71eedebdb9fa54338bde320c311bb359b7455d/packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts#L67)
