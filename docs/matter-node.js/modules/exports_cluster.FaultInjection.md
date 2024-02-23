[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / FaultInjection

# Namespace: FaultInjection

[exports/cluster](exports_cluster.md).FaultInjection

## Table of contents

### Enumerations

- [FaultType](../enums/exports_cluster.FaultInjection.FaultType.md)

### Variables

- [Cluster](exports_cluster.FaultInjection.md#cluster)
- [TlvFailAtFaultRequest](exports_cluster.FaultInjection.md#tlvfailatfaultrequest)
- [TlvFailRandomlyAtFaultRequest](exports_cluster.FaultInjection.md#tlvfailrandomlyatfaultrequest)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `commands`: \{ `failAtFault`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\> ; `failRandomlyAtFault`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `id`: ``4294048774`` ; `name`: ``"FaultInjection"`` ; `revision`: ``1``  }\>

Fault Injection

The Fault Injection Cluster provide a means for a test harness to configure faults(for example triggering a
fault in the system).

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:41

___

### TlvFailAtFaultRequest

• `Const` **TlvFailAtFaultRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the FaultInjection failAtFault command

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:20

___

### TlvFailRandomlyAtFaultRequest

• `Const` **TlvFailRandomlyAtFaultRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the FaultInjection failRandomlyAtFault command

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/FaultInjectionCluster.d.ts:30
