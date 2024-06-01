[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / ClientMonitoring

# Namespace: ClientMonitoring

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [MonitoringRegistration](interfaces/MonitoringRegistration.md)
- [RegisterClientMonitoringRequest](interfaces/RegisterClientMonitoringRequest.md)
- [UnregisterClientMonitoringRequest](interfaces/UnregisterClientMonitoringRequest.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:104](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L104)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.activeModeInterval

> `readonly` **activeModeInterval**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

##### attributes.activeModeThreshold

> `readonly` **activeModeThreshold**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

##### attributes.expectedClients

> `readonly` **expectedClients**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

##### attributes.idleModeInterval

> `readonly` **idleModeInterval**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

##### commands

> `readonly` **commands**: `object`

##### commands.registerClientMonitoring

> `readonly` **registerClientMonitoring**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

##### commands.stayAwakeRequest

> `readonly` **stayAwakeRequest**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\>

##### commands.unregisterClientMonitoring

> `readonly` **unregisterClientMonitoring**: [`Command`](../../interfaces/Command.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>, `void`, `any`\>

##### id

> `readonly` **id**: `4166` = `0x1046`

##### name

> `readonly` **name**: `"ClientMonitoring"` = `"ClientMonitoring"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L56)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:107](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L107)

***

### TlvMonitoringRegistration

> `const` **TlvMonitoringRegistration**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

#### Type declaration

##### clientNodeId

> **clientNodeId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`NodeId`](../../../../datatype/export/README.md#nodeid)\>

##### iCid

> **iCid**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number` \| `bigint`\>

#### Source

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L21)

***

### TlvRegisterClientMonitoringRequest

> `const` **TlvRegisterClientMonitoringRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ClientMonitoring registerClientMonitoring command

#### Type declaration

##### clientNodeId

> **clientNodeId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`NodeId`](../../../../datatype/export/README.md#nodeid)\>

##### iCid

> **iCid**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number` \| `bigint`\>

#### Source

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L30)

***

### TlvUnregisterClientMonitoringRequest

> `const` **TlvUnregisterClientMonitoringRequest**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Input to the ClientMonitoring unregisterClientMonitoring command

#### Type declaration

##### clientNodeId

> **clientNodeId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`NodeId`](../../../../datatype/export/README.md#nodeid)\>

##### iCid

> **iCid**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`number` \| `bigint`\>

#### Source

[packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ClientMonitoringCluster.ts#L43)
