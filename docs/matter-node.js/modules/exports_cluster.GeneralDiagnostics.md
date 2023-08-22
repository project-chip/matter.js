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

• `Const` **Cluster**: [`Cluster`](exports_cluster.md#cluster)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/schema/BitmapSchema"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_schema_BitmapSchema_.md), [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/util/Type"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_util_Type_.md), { `testEventTrigger`: [`Command`](exports_cluster.md#command)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `void`, `any`\>  }, { `bootReason`: [`Event`](exports_cluster.md#event)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `networkFaultChange`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\> ; `radioFaultChange`: [`OptionalEvent`](exports_cluster.md#optionalevent)<[`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md), `any`\>  }\>

General Diagnostics

The General Diagnostics Cluster, along with other diagnostics clusters, provide a means to acquire standardized
diagnostics metrics that may be used by a Node to assist a user or Administrator in diagnosing potential
problems. The General Diagnostics Cluster attempts to centralize all metrics that are broadly relevant to the
majority of Nodes.

**`See`**

MatterCoreSpecificationV1_1 § 11.11

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:350

___

### TlvBootReasonEvent

• `Const` **TlvBootReasonEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the GeneralDiagnostics bootReason event

**`See`**

MatterCoreSpecificationV1_1 § 11.11.8.4

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:332

___

### TlvHardwareFaultChangeEvent

• `Const` **TlvHardwareFaultChangeEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the GeneralDiagnostics hardwareFaultChange event

**`See`**

MatterCoreSpecificationV1_1 § 11.11.8.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:292

___

### TlvNetworkFaultChangeEvent

• `Const` **TlvNetworkFaultChangeEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the GeneralDiagnostics networkFaultChange event

**`See`**

MatterCoreSpecificationV1_1 § 11.11.8.3

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:323

___

### TlvNetworkInterface

• `Const` **TlvNetworkInterface**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

This structure describes a network interface supported by the Node, as provided in the NetworkInterfaces
attribute.

**`See`**

MatterCoreSpecificationV1_1 § 11.11.4.6

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:40

___

### TlvRadioFaultChangeEvent

• `Const` **TlvRadioFaultChangeEvent**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Body of the GeneralDiagnostics radioFaultChange event

**`See`**

MatterCoreSpecificationV1_1 § 11.11.8.2

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:314

___

### TlvTestEventTriggerRequest

• `Const` **TlvTestEventTriggerRequest**: [`"/Users/ingof/Dev/GitHub/matter.js/packages/matter.js/dist/cjs/tlv/TlvObject"`](export._internal_.__Users_ingof_Dev_GitHub_matter_js_packages_matter_js_dist_cjs_tlv_TlvObject_.md)

Input to the GeneralDiagnostics testEventTrigger command

**`See`**

MatterCoreSpecificationV1_1 § 11.11.7.1

#### Defined in

packages/matter.js/dist/cjs/cluster/definitions/GeneralDiagnosticsCluster.d.ts:241
