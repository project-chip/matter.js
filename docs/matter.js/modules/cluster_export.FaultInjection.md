[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / FaultInjection

# Namespace: FaultInjection

[cluster/export](cluster_export.md).FaultInjection

## Table of contents

### Enumerations

- [FaultType](../enums/cluster_export.FaultInjection.FaultType.md)

### Interfaces

- [Cluster](../interfaces/cluster_export.FaultInjection.Cluster.md)
- [FailAtFaultRequest](../interfaces/cluster_export.FaultInjection.FailAtFaultRequest.md)
- [FailRandomlyAtFaultRequest](../interfaces/cluster_export.FaultInjection.FailRandomlyAtFaultRequest.md)

### Variables

- [Cluster](cluster_export.FaultInjection.md#cluster)
- [ClusterInstance](cluster_export.FaultInjection.md#clusterinstance)
- [Complete](cluster_export.FaultInjection.md#complete)
- [TlvFailAtFaultRequest](cluster_export.FaultInjection.md#tlvfailatfaultrequest)
- [TlvFailRandomlyAtFaultRequest](cluster_export.FaultInjection.md#tlvfailrandomlyatfaultrequest)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.FaultInjection.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L84)

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:86](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L86)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `commands`: \{ `failAtFault`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `numCallsToFail`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `numCallsToSkip`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `takeMutex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FaultType`](../enums/cluster_export.FaultInjection.FaultType.md)\>  }\>, `void`, `any`\> ; `failRandomlyAtFault`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `percentage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FaultType`](../enums/cluster_export.FaultInjection.FaultType.md)\>  }\>, `void`, `any`\>  } ; `id`: ``4294048774`` = 0xfff1fc06; `name`: ``"FaultInjection"`` = "FaultInjection"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.FaultInjection.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L60)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.FaultInjection.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L87)

___

### TlvFailAtFaultRequest

• `Const` **TlvFailAtFaultRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `numCallsToFail`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `numCallsToSkip`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `takeMutex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FaultType`](../enums/cluster_export.FaultInjection.FaultType.md)\>  }\>

Input to the FaultInjection failAtFault command

#### Defined in

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L30)

___

### TlvFailRandomlyAtFaultRequest

• `Const` **TlvFailRandomlyAtFaultRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `percentage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FaultType`](../enums/cluster_export.FaultInjection.FaultType.md)\>  }\>

Input to the FaultInjection failRandomlyAtFault command

#### Defined in

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L46)
