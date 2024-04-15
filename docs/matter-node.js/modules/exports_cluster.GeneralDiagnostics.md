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

### Interfaces

- [BootReasonEvent](../interfaces/exports_cluster.GeneralDiagnostics.BootReasonEvent.md)
- [Cluster](../interfaces/exports_cluster.GeneralDiagnostics.Cluster.md)
- [HardwareFaultChangeEvent](../interfaces/exports_cluster.GeneralDiagnostics.HardwareFaultChangeEvent.md)
- [NetworkFaultChangeEvent](../interfaces/exports_cluster.GeneralDiagnostics.NetworkFaultChangeEvent.md)
- [NetworkInterface](../interfaces/exports_cluster.GeneralDiagnostics.NetworkInterface.md)
- [RadioFaultChangeEvent](../interfaces/exports_cluster.GeneralDiagnostics.RadioFaultChangeEvent.md)
- [TestEventTriggerRequest](../interfaces/exports_cluster.GeneralDiagnostics.TestEventTriggerRequest.md)

### Variables

- [Cluster](exports_cluster.GeneralDiagnostics.md#cluster)
- [ClusterInstance](exports_cluster.GeneralDiagnostics.md#clusterinstance)
- [Complete](exports_cluster.GeneralDiagnostics.md#complete)
- [TlvBootReasonEvent](exports_cluster.GeneralDiagnostics.md#tlvbootreasonevent)
- [TlvHardwareFaultChangeEvent](exports_cluster.GeneralDiagnostics.md#tlvhardwarefaultchangeevent)
- [TlvNetworkFaultChangeEvent](exports_cluster.GeneralDiagnostics.md#tlvnetworkfaultchangeevent)
- [TlvNetworkInterface](exports_cluster.GeneralDiagnostics.md#tlvnetworkinterface)
- [TlvRadioFaultChangeEvent](exports_cluster.GeneralDiagnostics.md#tlvradiofaultchangeevent)
- [TlvTestEventTriggerRequest](exports_cluster.GeneralDiagnostics.md#tlvtesteventtriggerrequest)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/exports_cluster.GeneralDiagnostics.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:690

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:692

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/exports_cluster.MutableCluster-1.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`HardwareFault`](../enums/exports_cluster.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`NetworkFault`](../enums/exports_cluster.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`RadioFault`](../enums/exports_cluster.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<[`BootReason`](../enums/exports_cluster.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)[], `any`\> ; `rebootCount`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](../interfaces/exports_cluster.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](../interfaces/exports_cluster.Command.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](../interfaces/exports_cluster.Event.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `networkFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\> ; `radioFaultChange`: [`OptionalEvent`](../interfaces/exports_cluster.OptionalEvent.md)\<[`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md), `any`\>  } ; `id`: ``51`` ; `name`: ``"GeneralDiagnostics"`` ; `revision`: ``1``  }\>

**`See`**

[Cluster](exports_cluster.GeneralDiagnostics.md#cluster)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:397

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/exports_cluster.GeneralDiagnostics.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:693

___

### TlvBootReasonEvent

• `Const` **TlvBootReasonEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the GeneralDiagnostics bootReason event

**`See`**

MatterSpecification.v11.Core § 11.11.8.4

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:371

___

### TlvHardwareFaultChangeEvent

• `Const` **TlvHardwareFaultChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the GeneralDiagnostics hardwareFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.11.8.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:310

___

### TlvNetworkFaultChangeEvent

• `Const` **TlvNetworkFaultChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the GeneralDiagnostics networkFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.11.8.3

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:355

___

### TlvNetworkInterface

• `Const` **TlvNetworkInterface**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

This structure describes a network interface supported by the Node, as provided in the NetworkInterfaces
attribute.

**`See`**

MatterSpecification.v11.Core § 11.11.4.6

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:43

___

### TlvRadioFaultChangeEvent

• `Const` **TlvRadioFaultChangeEvent**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Body of the GeneralDiagnostics radioFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.11.8.2

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:339

___

### TlvTestEventTriggerRequest

• `Const` **TlvTestEventTriggerRequest**: [`"/home/runner/work/matter.js/matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](exports_session._internal_.__home_runner_work_matter_js_matter_js_packages_matter_js_dist_esm_tlv_TlvObject_.md)

Input to the GeneralDiagnostics testEventTrigger command

**`See`**

MatterSpecification.v11.Core § 11.11.7.1

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralDiagnosticsCluster.d.ts:252
