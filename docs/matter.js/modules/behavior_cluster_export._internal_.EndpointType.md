[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](behavior_cluster_export.md) / [\<internal\>](behavior_cluster_export._internal_.md) / EndpointType

# Namespace: EndpointType

[behavior/cluster/export](behavior_cluster_export.md).[\<internal\>](behavior_cluster_export._internal_.md).EndpointType

## Table of contents

### References

- [Empty](behavior_cluster_export._internal_.EndpointType.md#empty)

### Interfaces

- [Options](../interfaces/behavior_cluster_export._internal_.EndpointType.Options.md)
- [Requirements](../interfaces/behavior_cluster_export._internal_.EndpointType.Requirements.md)

### Type Aliases

- [For](behavior_cluster_export._internal_.EndpointType.md#for)

## References

### Empty

Re-exports [Empty](../interfaces/behavior_cluster_export._internal_.Empty.md)

## Type Aliases

### For

Ƭ **For**\<`T`\>: `Object`

A fully typed [EndpointType](behavior_cluster_export._internal_.md#endpointtype) defined by [EndpointType.Options](../interfaces/behavior_cluster_export._internal_.EndpointType.Options.md).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Options`](../interfaces/behavior_cluster_export._internal_.EndpointType.Options.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `behaviors` | `T`[``"behaviors"``] extends [`SupportedBehaviors`](behavior_cluster_export._internal_.md#supportedbehaviors) ? `T`[``"behaviors"``] : {} |
| `deviceClass` | [`DeviceClasses`](../enums/device_export.DeviceClasses.md) |
| `deviceRevision` | `number` |
| `deviceType` | [`DeviceTypeId`](datatype_export.md#devicetypeid) |
| `name` | `T`[``"name"``] |
| `requirements` | `T`[``"requirements"``] extends [`Requirements`](../interfaces/behavior_cluster_export._internal_.EndpointType.Requirements.md) ? `T`[``"requirements"``] : {} |

#### Defined in

[packages/matter.js/src/endpoint/type/EndpointType.ts:47](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/endpoint/type/EndpointType.ts#L47)
