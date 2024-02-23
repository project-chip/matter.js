[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / GeneralDiagnostics

# Namespace: GeneralDiagnostics

[cluster/export](cluster_export.md).GeneralDiagnostics

## Table of contents

### Enumerations

- [BootReason](../enums/cluster_export.GeneralDiagnostics.BootReason.md)
- [HardwareFault](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)
- [InterfaceType](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)
- [NetworkFault](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)
- [RadioFault](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)
- [StatusCode](../enums/cluster_export.GeneralDiagnostics.StatusCode.md)

### Variables

- [Cluster](cluster_export.GeneralDiagnostics.md#cluster)
- [TlvBootReasonEvent](cluster_export.GeneralDiagnostics.md#tlvbootreasonevent)
- [TlvHardwareFaultChangeEvent](cluster_export.GeneralDiagnostics.md#tlvhardwarefaultchangeevent)
- [TlvNetworkFaultChangeEvent](cluster_export.GeneralDiagnostics.md#tlvnetworkfaultchangeevent)
- [TlvNetworkInterface](cluster_export.GeneralDiagnostics.md#tlvnetworkinterface)
- [TlvRadioFaultChangeEvent](cluster_export.GeneralDiagnostics.md#tlvradiofaultchangeevent)
- [TlvTestEventTriggerRequest](cluster_export.GeneralDiagnostics.md#tlvtesteventtriggerrequest)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `enableKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `bootReason`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` = 0x33; `name`: ``"GeneralDiagnostics"`` = "GeneralDiagnostics"; `revision`: ``1`` = 1 }\>

General Diagnostics

The General Diagnostics Cluster, along with other diagnostics clusters, provide a means to acquire standardized
diagnostics metrics that may be used by a Node to assist a user or Administrator in diagnosing potential
problems. The General Diagnostics Cluster attempts to centralize all metrics that are broadly relevant to the
majority of Nodes.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.11

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:428](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L428)

___

### TlvBootReasonEvent

• `Const` **TlvBootReasonEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `bootReason`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)\>  }\>

Body of the GeneralDiagnostics bootReason event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.11.8.4

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:400](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L400)

___

### TlvHardwareFaultChangeEvent

• `Const` **TlvHardwareFaultChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\>  }\>

Body of the GeneralDiagnostics hardwareFaultChange event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.11.8.1

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:356](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L356)

___

### TlvNetworkFaultChangeEvent

• `Const` **TlvNetworkFaultChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\>  }\>

Body of the GeneralDiagnostics networkFaultChange event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.11.8.3

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:390](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L390)

___

### TlvNetworkInterface

• `Const` **TlvNetworkInterface**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `hardwareAddress`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)\>  }\>

This structure describes a network interface supported by the Node, as provided in the NetworkInterfaces
attribute.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.11.4.6

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:65](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L65)

___

### TlvRadioFaultChangeEvent

• `Const` **TlvRadioFaultChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\>  }\>

Body of the GeneralDiagnostics radioFaultChange event

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.11.8.2

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:380](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L380)

___

### TlvTestEventTriggerRequest

• `Const` **TlvTestEventTriggerRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `enableKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>

Input to the GeneralDiagnostics testEventTrigger command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.11.7.1

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:303](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L303)
