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

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `activeModeInterval`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `activeModeThreshold`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `expectedClients`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `idleModeInterval`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\>  } ; `commands`: \{ `registerClientMonitoring`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stayAwakeRequest`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `unregisterClientMonitoring`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `id`: ``4166`` ; `name`: ``"ClientMonitoring"`` ; `revision`: ``1``  }\>

Client Monitoring

Client Monitoring allows for ensuring that listed clients meet the required monitoring conditions on the server.

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:33

___

### TlvMonitoringRegistration

• `Const` **TlvMonitoringRegistration**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:10

___

### TlvRegisterClientMonitoringRequest

• `Const` **TlvRegisterClientMonitoringRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ClientMonitoring registerClientMonitoring command

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:17

___

### TlvUnregisterClientMonitoringRequest

• `Const` **TlvUnregisterClientMonitoringRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ClientMonitoring unregisterClientMonitoring command

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:24
