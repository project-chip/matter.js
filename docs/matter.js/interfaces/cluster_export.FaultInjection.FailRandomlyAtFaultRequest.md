[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [FaultInjection](../modules/cluster_export.FaultInjection.md) / FailRandomlyAtFaultRequest

# Interface: FailRandomlyAtFaultRequest

[cluster/export](../modules/cluster_export.md).[FaultInjection](../modules/cluster_export.FaultInjection.md).FailRandomlyAtFaultRequest

Input to the FaultInjection failRandomlyAtFault command

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvFailRandomlyAtFaultRequest`](../modules/cluster_export.FaultInjection.md#tlvfailrandomlyatfaultrequest)\>

  ↳ **`FailRandomlyAtFaultRequest`**

## Table of contents

### Properties

- [id](cluster_export.FaultInjection.FailRandomlyAtFaultRequest.md#id)
- [percentage](cluster_export.FaultInjection.FailRandomlyAtFaultRequest.md#percentage)
- [type](cluster_export.FaultInjection.FailRandomlyAtFaultRequest.md#type)

## Properties

### id

• **id**: `number`

#### Inherited from

TypeFromSchema.id

#### Defined in

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L48)

___

### percentage

• **percentage**: `number`

#### Inherited from

TypeFromSchema.percentage

#### Defined in

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L49)

___

### type

• **type**: [`FaultType`](../enums/cluster_export.FaultInjection.FaultType.md)

#### Inherited from

TypeFromSchema.type

#### Defined in

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L47)
