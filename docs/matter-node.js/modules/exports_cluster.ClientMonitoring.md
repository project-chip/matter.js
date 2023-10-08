[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ClientMonitoring

# Namespace: ClientMonitoring

[exports/cluster](exports_cluster.md).ClientMonitoring

## Table of contents

### Variables

- [Cluster](exports_cluster.ClientMonitoring.md#cluster)
- [TlvMonitoringRegistration](exports_cluster.ClientMonitoring.md#tlvmonitoringregistration)
- [TlvRegisterClientMonitoringRequest](exports_cluster.ClientMonitoring.md#tlvregisterclientmonitoringrequest)
- [TlvUnregisterClientMonitoringRequest](exports_cluster.ClientMonitoring.md#tlvunregisterclientmonitoringrequest)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)<{ `attributes`: { `activeModeInterval`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `activeModeThreshold`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\> ; `expectedClients`: [`Attribute`](exports_cluster.md#attribute)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `idleModeInterval`: [`Attribute`](exports_cluster.md#attribute)<`number`, `any`\>  } ; `commands`: { `registerClientMonitoring`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stayAwakeRequest`: [`OptionalCommand`](exports_cluster.md#optionalcommand)<`void`, `void`, `any`\> ; `unregisterClientMonitoring`: [`Command`](exports_cluster.md#command)<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `id`: ``4166`` ; `name`: ``"ClientMonitoring"`` ; `revision`: ``1``  }\>

Client Monitoring

Client Monitoring allows for ensuring that listed clients meet the required monitoring conditions on the server.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:33

___

### TlvMonitoringRegistration

• `Const` **TlvMonitoringRegistration**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:10

___

### TlvRegisterClientMonitoringRequest

• `Const` **TlvRegisterClientMonitoringRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ClientMonitoring registerClientMonitoring command

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:17

___

### TlvUnregisterClientMonitoringRequest

• `Const` **TlvUnregisterClientMonitoringRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ClientMonitoring unregisterClientMonitoring command

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:24
