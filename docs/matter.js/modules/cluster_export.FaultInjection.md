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

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{}, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, { `failAtFault`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `numCallsToFail`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `numCallsToSkip`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `takeMutex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FaultType`](../enums/cluster_export.FaultInjection.FaultType.md)\>  }\>, `void`, `any`\> ; `failRandomlyAtFault`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `percentage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FaultType`](../enums/cluster_export.FaultInjection.FaultType.md)\>  }\>, `void`, `any`\>  }, {}\>

Fault Injection

The Fault Injection Cluster provide a means for a test harness to configure faults(for example triggering a
fault in the system).

#### Defined in

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:49](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L49)

___

### TlvFailAtFaultRequest

• `Const` **TlvFailAtFaultRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `numCallsToFail`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `numCallsToSkip`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `takeMutex`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FaultType`](../enums/cluster_export.FaultInjection.FaultType.md)\>  }\>

Input to the FaultInjection failAtFault command

#### Defined in

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:26](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L26)

___

### TlvFailRandomlyAtFaultRequest

• `Const` **TlvFailRandomlyAtFaultRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `id`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `percentage`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`FaultType`](../enums/cluster_export.FaultInjection.FaultType.md)\>  }\>

Input to the FaultInjection failRandomlyAtFault command

#### Defined in

[packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts:37](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/FaultInjectionCluster.ts#L37)
