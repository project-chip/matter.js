[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / FaultInjection

# Namespace: FaultInjection

[exports/cluster](exports_cluster.md).FaultInjection

## Table of contents

### Enumerations

- [FaultType](../enums/exports_cluster.FaultInjection.FaultType.md)

### Interfaces

- [Cluster](../interfaces/exports_cluster.FaultInjection.Cluster.md)
- [FailAtFaultRequest](../interfaces/exports_cluster.FaultInjection.FailAtFaultRequest.md)
- [FailRandomlyAtFaultRequest](../interfaces/exports_cluster.FaultInjection.FailRandomlyAtFaultRequest.md)

### Variables

- [Cluster](exports_cluster.FaultInjection.md#cluster)
- [ClusterInstance](exports_cluster.FaultInjection.md#clusterinstance)
- [Complete](exports_cluster.FaultInjection.md#complete)
- [TlvFailAtFaultRequest](exports_cluster.FaultInjection.md#tlvfailatfaultrequest)
- [TlvFailRandomlyAtFaultRequest](exports_cluster.FaultInjection.md#tlvfailrandomlyatfaultrequest)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.FaultInjection.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:75

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:77

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `commands`: \{ `failAtFault`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `failRandomlyAtFault`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `id`: ``4294048774`` ; `name`: ``"FaultInjection"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.FaultInjection.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:50

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.FaultInjection.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:78

___

### TlvFailAtFaultRequest

• `Const` **TlvFailAtFaultRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the FaultInjection failAtFault command

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:22

___

### TlvFailRandomlyAtFaultRequest

• `Const` **TlvFailRandomlyAtFaultRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the FaultInjection failRandomlyAtFault command

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:37
