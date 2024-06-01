[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / ClientMonitoring

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

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:75

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

> `readonly` **expectedClients**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

##### attributes.idleModeInterval

> `readonly` **idleModeInterval**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<`number`, `any`\>

##### commands

> `readonly` **commands**: `object`

##### commands.registerClientMonitoring

> `readonly` **registerClientMonitoring**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

##### commands.stayAwakeRequest

> `readonly` **stayAwakeRequest**: [`OptionalCommand`](../../interfaces/OptionalCommand.md)\<`void`, `void`, `any`\>

##### commands.unregisterClientMonitoring

> `readonly` **unregisterClientMonitoring**: [`Command`](../../interfaces/Command.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md), `void`, `any`\>

##### id

> `readonly` **id**: `4166`

##### name

> `readonly` **name**: `"ClientMonitoring"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:45

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:78

***

### TlvMonitoringRegistration

> `const` **TlvMonitoringRegistration**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:12

***

### TlvRegisterClientMonitoringRequest

> `const` **TlvRegisterClientMonitoringRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ClientMonitoring registerClientMonitoring command

#### Source

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:21

***

### TlvUnregisterClientMonitoringRequest

> `const` **TlvUnregisterClientMonitoringRequest**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Input to the ClientMonitoring unregisterClientMonitoring command

#### Source

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:33
