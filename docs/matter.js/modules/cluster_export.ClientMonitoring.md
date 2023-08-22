[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ClientMonitoring

# Namespace: ClientMonitoring

[cluster/export](cluster_export.md).ClientMonitoring

## Table of contents

### Variables

- [Cluster](cluster_export.ClientMonitoring.md#cluster)
- [TlvMonitoringRegistration](cluster_export.ClientMonitoring.md#tlvmonitoringregistration)
- [TlvRegisterClientMonitoringRequest](cluster_export.ClientMonitoring.md#tlvregisterclientmonitoringrequest)
- [TlvUnregisterClientMonitoringRequest](cluster_export.ClientMonitoring.md#tlvunregisterclientmonitoringrequest)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `activeModeInterval`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `activeModeThreshold`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\> ; `expectedClients`: [`Attribute`](cluster_export.md#attribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clientNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](datatype_export.md#nodeid)\> ; `iCid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>[], `any`\> ; `idleModeInterval`: [`Attribute`](cluster_export.md#attribute)<`number`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, { `registerClientMonitoring`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clientNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](datatype_export.md#nodeid)\> ; `iCid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>, `void`, `any`\> ; `stayAwakeRequest`: [`OptionalCommand`](cluster_export.md#optionalcommand)<`void`, `void`, `any`\> ; `unregisterClientMonitoring`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `clientNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](datatype_export.md#nodeid)\> ; `iCid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>, `void`, `any`\>  }, {}\>

Client Monitoring

Client Monitoring allows for ensuring that listed clients meet the required monitoring conditions on the server.

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:43](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L43)

___

### TlvMonitoringRegistration

• `Const` **TlvMonitoringRegistration**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `clientNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](datatype_export.md#nodeid)\> ; `iCid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:17](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L17)

___

### TlvRegisterClientMonitoringRequest

• `Const` **TlvRegisterClientMonitoringRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `clientNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](datatype_export.md#nodeid)\> ; `iCid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>

Input to the ClientMonitoring registerClientMonitoring command

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:25](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L25)

___

### TlvUnregisterClientMonitoringRequest

• `Const` **TlvUnregisterClientMonitoringRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `clientNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](datatype_export.md#nodeid)\> ; `iCid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\>  }\>

Input to the ClientMonitoring unregisterClientMonitoring command

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:33](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L33)
