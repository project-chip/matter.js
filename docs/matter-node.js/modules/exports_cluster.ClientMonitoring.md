[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ClientMonitoring

# Namespace: ClientMonitoring

[exports/cluster](exports_cluster.md).ClientMonitoring

## Table of contents

### Interfaces

- [Cluster](../interfaces/exports_cluster.ClientMonitoring.Cluster.md)
- [MonitoringRegistration](../interfaces/exports_cluster.ClientMonitoring.MonitoringRegistration.md)
- [RegisterClientMonitoringRequest](../interfaces/exports_cluster.ClientMonitoring.RegisterClientMonitoringRequest.md)
- [UnregisterClientMonitoringRequest](../interfaces/exports_cluster.ClientMonitoring.UnregisterClientMonitoringRequest.md)

### Variables

- [Cluster](exports_cluster.ClientMonitoring.md#cluster)
- [ClusterInstance](exports_cluster.ClientMonitoring.md#clusterinstance)
- [Complete](exports_cluster.ClientMonitoring.md#complete)
- [TlvMonitoringRegistration](exports_cluster.ClientMonitoring.md#tlvmonitoringregistration)
- [TlvRegisterClientMonitoringRequest](exports_cluster.ClientMonitoring.md#tlvregisterclientmonitoringrequest)
- [TlvUnregisterClientMonitoringRequest](exports_cluster.ClientMonitoring.md#tlvunregisterclientmonitoringrequest)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.ClientMonitoring.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:75

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:77

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `activeModeInterval`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `activeModeThreshold`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\> ; `expectedClients`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `idleModeInterval`: [`WritableAttribute`](../interfaces/exports_cluster.WritableAttribute.md)\<`number`, `any`\>  } ; `commands`: \{ `registerClientMonitoring`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `stayAwakeRequest`: [`OptionalCommand`](../interfaces/exports_cluster.OptionalCommand.md)\<`void`, `void`, `any`\> ; `unregisterClientMonitoring`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `id`: ``4166`` ; `name`: ``"ClientMonitoring"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.ClientMonitoring.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:45

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.ClientMonitoring.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:78

___

### TlvMonitoringRegistration

• `Const` **TlvMonitoringRegistration**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:12

___

### TlvRegisterClientMonitoringRequest

• `Const` **TlvRegisterClientMonitoringRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ClientMonitoring registerClientMonitoring command

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:21

___

### TlvUnregisterClientMonitoringRequest

• `Const` **TlvUnregisterClientMonitoringRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the ClientMonitoring unregisterClientMonitoring command

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ClientMonitoringCluster.d.ts:33
