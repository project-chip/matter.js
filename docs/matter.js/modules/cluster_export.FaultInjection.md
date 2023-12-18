[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / FaultInjection

# Namespace: FaultInjection

[cluster/export](cluster_export.md).FaultInjection

## Table of contents

### Enumerations

- [FaultType](../enums/cluster_export.FaultInjection.FaultType.md)

### Variables

- [Cluster](cluster_export.FaultInjection.md#cluster)
- [TlvFailAtFaultRequest](cluster_export.FaultInjection.md#tlvfailatfaultrequest)
- [TlvFailRandomlyAtFaultRequest](cluster_export.FaultInjection.md#tlvfailrandomlyatfaultrequest)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `commands`: \{ `failAtFault`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `numCallsToFail`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `numCallsToSkip`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `takeMutex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FaultType`](../enums/cluster_export.FaultInjection.FaultType.md)\>  }\>, `void`, `any`\> ; `failRandomlyAtFault`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `percentage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FaultType`](../enums/cluster_export.FaultInjection.FaultType.md)\>  }\>, `void`, `any`\>  } ; `id`: ``4294048774`` = 0xfff1fc06; `name`: ``"FaultInjection"`` = "FaultInjection"; `revision`: ``1`` = 1 }\>

Fault Injection

The Fault Injection Cluster provide a means for a test harness to configure faults(for example triggering a
fault in the system).

#### Defined in

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:50](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L50)

___

### TlvFailAtFaultRequest

• `Const` **TlvFailAtFaultRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `numCallsToFail`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `numCallsToSkip`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `takeMutex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FaultType`](../enums/cluster_export.FaultInjection.FaultType.md)\>  }\>

Input to the FaultInjection failAtFault command

#### Defined in

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:27](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L27)

___

### TlvFailRandomlyAtFaultRequest

• `Const` **TlvFailRandomlyAtFaultRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `percentage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`FaultType`](../enums/cluster_export.FaultInjection.FaultType.md)\>  }\>

Input to the FaultInjection failRandomlyAtFault command

#### Defined in

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:38](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L38)
