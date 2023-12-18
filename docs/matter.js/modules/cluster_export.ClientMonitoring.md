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

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `activeModeInterval`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\> ; `activeModeThreshold`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\> ; `expectedClients`: [`Attribute`](cluster_export.md#attribute)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\> ; `iCid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> ; `idleModeInterval`: [`Attribute`](cluster_export.md#attribute)\<`number`, `any`\>  } ; `commands`: \{ `registerClientMonitoring`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\> ; `iCid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\> ; `stayAwakeRequest`: [`OptionalCommand`](cluster_export.md#optionalcommand)\<`void`, `void`, `any`\> ; `unregisterClientMonitoring`: [`Command`](cluster_export.md#command)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\> ; `iCid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `id`: ``4166`` = 0x1046; `name`: ``"ClientMonitoring"`` = "ClientMonitoring"; `revision`: ``1`` = 1 }\>

Client Monitoring

Client Monitoring allows for ensuring that listed clients meet the required monitoring conditions on the server.

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:44](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L44)

___

### TlvMonitoringRegistration

• `Const` **TlvMonitoringRegistration**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `clientNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\> ; `iCid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:18](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L18)

___

### TlvRegisterClientMonitoringRequest

• `Const` **TlvRegisterClientMonitoringRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `clientNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\> ; `iCid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>

Input to the ClientMonitoring registerClientMonitoring command

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:26](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L26)

___

### TlvUnregisterClientMonitoringRequest

• `Const` **TlvUnregisterClientMonitoringRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `clientNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\> ; `iCid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>

Input to the ClientMonitoring unregisterClientMonitoring command

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:34](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L34)
