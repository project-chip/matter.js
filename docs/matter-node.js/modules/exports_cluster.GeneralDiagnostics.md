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

• `Const` **Cluster**: [`Definition`](exports_cluster.ClusterFactory.md#definition)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `rebootCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `networkFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `radioFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``51`` ; `name`: ``"GeneralDiagnostics"`` ; `revision`: ``1``  }\>

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

• `Const` **TlvBootReasonEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the GeneralDiagnostics bootReason event

**`See`**

MatterCoreSpecificationV1_1 § 11.11.8.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:333

___

### TlvHardwareFaultChangeEvent

• `Const` **TlvHardwareFaultChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the GeneralDiagnostics hardwareFaultChange event

**`See`**

MatterCoreSpecificationV1_1 § 11.11.8.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:293

___

### TlvNetworkFaultChangeEvent

• `Const` **TlvNetworkFaultChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the GeneralDiagnostics networkFaultChange event

**`See`**

MatterCoreSpecificationV1_1 § 11.11.8.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:324

___

### TlvNetworkInterface

• `Const` **TlvNetworkInterface**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This structure describes a network interface supported by the Node, as provided in the NetworkInterfaces
attribute.

**`See`**

MatterCoreSpecificationV1_1 § 11.11.4.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:41

___

### TlvRadioFaultChangeEvent

• `Const` **TlvRadioFaultChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the GeneralDiagnostics radioFaultChange event

**`See`**

MatterCoreSpecificationV1_1 § 11.11.8.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:315

___

### TlvTestEventTriggerRequest

• `Const` **TlvTestEventTriggerRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the GeneralDiagnostics testEventTrigger command

**`See`**

MatterCoreSpecificationV1_1 § 11.11.7.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:242
