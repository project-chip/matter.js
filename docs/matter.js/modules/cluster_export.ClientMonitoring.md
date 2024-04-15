[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ClientMonitoring

# Namespace: ClientMonitoring

[cluster/export](cluster_export.md).ClientMonitoring

## Table of contents

### Interfaces

- [Cluster](../interfaces/cluster_export.ClientMonitoring.Cluster.md)
- [MonitoringRegistration](../interfaces/cluster_export.ClientMonitoring.MonitoringRegistration.md)
- [RegisterClientMonitoringRequest](../interfaces/cluster_export.ClientMonitoring.RegisterClientMonitoringRequest.md)
- [UnregisterClientMonitoringRequest](../interfaces/cluster_export.ClientMonitoring.UnregisterClientMonitoringRequest.md)

### Variables

- [Cluster](cluster_export.ClientMonitoring.md#cluster)
- [ClusterInstance](cluster_export.ClientMonitoring.md#clusterinstance)
- [Complete](cluster_export.ClientMonitoring.md#complete)
- [TlvMonitoringRegistration](cluster_export.ClientMonitoring.md#tlvmonitoringregistration)
- [TlvRegisterClientMonitoringRequest](cluster_export.ClientMonitoring.md#tlvregisterclientmonitoringrequest)
- [TlvUnregisterClientMonitoringRequest](cluster_export.ClientMonitoring.md#tlvunregisterclientmonitoringrequest)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.ClientMonitoring.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:104](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L104)

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:106](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L106)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `activeModeInterval`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `activeModeThreshold`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\> ; `expectedClients`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\> ; `iCid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>[], `any`\> ; `idleModeInterval`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `registerClientMonitoring`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\> ; `iCid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\> ; `stayAwakeRequest`: [`OptionalCommand`](../interfaces/cluster_export.OptionalCommand.md)\<`void`, `void`, `any`\> ; `unregisterClientMonitoring`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `clientNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\> ; `iCid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `id`: ``4166`` = 0x1046; `name`: ``"ClientMonitoring"`` = "ClientMonitoring"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.ClientMonitoring.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L56)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.ClientMonitoring.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:107](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L107)

___

### TlvMonitoringRegistration

• `Const` **TlvMonitoringRegistration**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `clientNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\> ; `iCid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L21)

___

### TlvRegisterClientMonitoringRequest

• `Const` **TlvRegisterClientMonitoringRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `clientNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\> ; `iCid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>

Input to the ClientMonitoring registerClientMonitoring command

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L30)

___

### TlvUnregisterClientMonitoringRequest

• `Const` **TlvUnregisterClientMonitoringRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `clientNodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\> ; `iCid`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>

Input to the ClientMonitoring unregisterClientMonitoring command

#### Defined in

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L43)
