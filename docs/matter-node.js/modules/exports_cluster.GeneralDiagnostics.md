[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / GeneralDiagnostics

# Namespace: GeneralDiagnostics

[exports/cluster](exports_cluster.md).GeneralDiagnostics

## Table of contents

### Enumerations

- [BootReason](../enums/exports_cluster.GeneralDiagnostics.BootReason.md)
- [HardwareFault](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)
- [InterfaceType](../enums/exports_cluster.GeneralDiagnostics.InterfaceType.md)
- [NetworkFault](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)
- [RadioFault](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)
- [StatusCode](../enums/exports_cluster.GeneralDiagnostics.StatusCode.md)

### Variables

- [Cluster](exports_cluster.GeneralDiagnostics.md#cluster)
- [TlvBootReasonEvent](exports_cluster.GeneralDiagnostics.md#tlvbootreasonevent)
- [TlvHardwareFaultChangeEvent](exports_cluster.GeneralDiagnostics.md#tlvhardwarefaultchangeevent)
- [TlvNetworkFaultChangeEvent](exports_cluster.GeneralDiagnostics.md#tlvnetworkfaultchangeevent)
- [TlvNetworkInterface](exports_cluster.GeneralDiagnostics.md#tlvnetworkinterface)
- [TlvRadioFaultChangeEvent](exports_cluster.GeneralDiagnostics.md#tlvradiofaultchangeevent)
- [TlvTestEventTriggerRequest](exports_cluster.GeneralDiagnostics.md#tlvtesteventtriggerrequest)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](exports_cluster.md#attribute)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `rebootCount`: [`Attribute`](exports_cluster.md#attribute)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](exports_cluster.md#attribute)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](exports_cluster.md#optionalattribute)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](exports_cluster.md#command)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](exports_cluster.md#event)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](exports_cluster.md#optionalevent)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `networkFaultChange`: [`OptionalEvent`](exports_cluster.md#optionalevent)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `radioFaultChange`: [`OptionalEvent`](exports_cluster.md#optionalevent)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``51`` ; `name`: ``"GeneralDiagnostics"`` ; `revision`: ``1``  }\>

General Diagnostics

The General Diagnostics Cluster, along with other diagnostics clusters, provide a means to acquire standardized
diagnostics metrics that may be used by a Node to assist a user or Administrator in diagnosing potential
problems. The General Diagnostics Cluster attempts to centralize all metrics that are broadly relevant to the
majority of Nodes.

**`See`**

MatterCoreSpecificationV1_1 § 11.11

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:359

___

### TlvBootReasonEvent

• `Const` **TlvBootReasonEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the GeneralDiagnostics bootReason event

**`See`**

MatterCoreSpecificationV1_1 § 11.11.8.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:333

___

### TlvHardwareFaultChangeEvent

• `Const` **TlvHardwareFaultChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the GeneralDiagnostics hardwareFaultChange event

**`See`**

MatterCoreSpecificationV1_1 § 11.11.8.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:293

___

### TlvNetworkFaultChangeEvent

• `Const` **TlvNetworkFaultChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the GeneralDiagnostics networkFaultChange event

**`See`**

MatterCoreSpecificationV1_1 § 11.11.8.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:324

___

### TlvNetworkInterface

• `Const` **TlvNetworkInterface**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This structure describes a network interface supported by the Node, as provided in the NetworkInterfaces
attribute.

**`See`**

MatterCoreSpecificationV1_1 § 11.11.4.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:41

___

### TlvRadioFaultChangeEvent

• `Const` **TlvRadioFaultChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the GeneralDiagnostics radioFaultChange event

**`See`**

MatterCoreSpecificationV1_1 § 11.11.8.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:315

___

### TlvTestEventTriggerRequest

• `Const` **TlvTestEventTriggerRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](export._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the GeneralDiagnostics testEventTrigger command

**`See`**

MatterCoreSpecificationV1_1 § 11.11.7.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:242
