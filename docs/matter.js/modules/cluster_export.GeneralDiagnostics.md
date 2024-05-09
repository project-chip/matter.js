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

### Interfaces

- [BootReasonEvent](../interfaces/cluster_export.GeneralDiagnostics.BootReasonEvent.md)
- [Cluster](../interfaces/cluster_export.GeneralDiagnostics.Cluster.md)
- [HardwareFaultChangeEvent](../interfaces/cluster_export.GeneralDiagnostics.HardwareFaultChangeEvent.md)
- [NetworkFaultChangeEvent](../interfaces/cluster_export.GeneralDiagnostics.NetworkFaultChangeEvent.md)
- [NetworkInterface](../interfaces/cluster_export.GeneralDiagnostics.NetworkInterface.md)
- [RadioFaultChangeEvent](../interfaces/cluster_export.GeneralDiagnostics.RadioFaultChangeEvent.md)
- [TestEventTriggerRequest](../interfaces/cluster_export.GeneralDiagnostics.TestEventTriggerRequest.md)

### Variables

- [Cluster](cluster_export.GeneralDiagnostics.md#cluster)
- [ClusterInstance](cluster_export.GeneralDiagnostics.md#clusterinstance)
- [Complete](cluster_export.GeneralDiagnostics.md#complete)
- [TlvBootReasonEvent](cluster_export.GeneralDiagnostics.md#tlvbootreasonevent)
- [TlvHardwareFaultChangeEvent](cluster_export.GeneralDiagnostics.md#tlvhardwarefaultchangeevent)
- [TlvNetworkFaultChangeEvent](cluster_export.GeneralDiagnostics.md#tlvnetworkfaultchangeevent)
- [TlvNetworkInterface](cluster_export.GeneralDiagnostics.md#tlvnetworkinterface)
- [TlvRadioFaultChangeEvent](cluster_export.GeneralDiagnostics.md#tlvradiofaultchangeevent)
- [TlvTestEventTriggerRequest](cluster_export.GeneralDiagnostics.md#tlvtesteventtriggerrequest)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.GeneralDiagnostics.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:663](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L663)

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:665](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L665)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `activeHardwareFaults`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[], `any`\> ; `activeNetworkFaults`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[], `any`\> ; `activeRadioFaults`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[], `any`\> ; `bootReason`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md), `any`\> ; `networkInterfaces`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `hardwareAddress`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)\>  }\>[], `any`\> ; `rebootCount`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`number`, `any`\> ; `testEventTriggersEnabled`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`boolean`, `any`\> ; `totalOperationalHours`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number`, `any`\> ; `upTime`: [`OptionalAttribute`](../interfaces/cluster_export.OptionalAttribute.md)\<`number` \| `bigint`, `any`\>  } ; `commands`: \{ `testEventTrigger`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `enableKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>, `void`, `any`\>  } ; `events`: \{ `bootReason`: [`Event`](../interfaces/cluster_export.Event.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `bootReason`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)\>  }\>, `any`\> ; `hardwareFaultChange`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\>  }\>, `any`\> ; `networkFaultChange`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\>  }\>, `any`\> ; `radioFaultChange`: [`OptionalEvent`](../interfaces/cluster_export.OptionalEvent.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\>  }\>, `any`\>  } ; `id`: ``51`` = 0x33; `name`: ``"GeneralDiagnostics"`` = "GeneralDiagnostics"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.GeneralDiagnostics.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:466](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L466)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.GeneralDiagnostics.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:666](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L666)

___

### TlvBootReasonEvent

• `Const` **TlvBootReasonEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `bootReason`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`BootReason`](../enums/cluster_export.GeneralDiagnostics.BootReason.md)\>  }\>

Body of the GeneralDiagnostics bootReason event

**`See`**

MatterSpecification.v11.Core § 11.11.8.4

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:438](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L438)

___

### TlvHardwareFaultChangeEvent

• `Const` **TlvHardwareFaultChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`HardwareFault`](../enums/cluster_export.GeneralDiagnostics.HardwareFault.md)[]\>  }\>

Body of the GeneralDiagnostics hardwareFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.11.8.1

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:373](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L373)

___

### TlvNetworkFaultChangeEvent

• `Const` **TlvNetworkFaultChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NetworkFault`](../enums/cluster_export.GeneralDiagnostics.NetworkFault.md)[]\>  }\>

Body of the GeneralDiagnostics networkFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.11.8.3

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:421](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L421)

___

### TlvNetworkInterface

• `Const` **TlvNetworkInterface**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `hardwareAddress`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `iPv4Addresses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `iPv6Addresses`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`[]\> ; `isOperational`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `name`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `offPremiseServicesReachableIPv4`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `offPremiseServicesReachableIPv6`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `boolean`\> ; `type`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`InterfaceType`](../enums/cluster_export.GeneralDiagnostics.InterfaceType.md)\>  }\>

This structure describes a network interface supported by the Node, as provided in the NetworkInterfaces
attribute.

**`See`**

MatterSpecification.v11.Core § 11.11.4.6

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L67)

___

### TlvRadioFaultChangeEvent

• `Const` **TlvRadioFaultChangeEvent**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `current`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\> ; `previous`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`RadioFault`](../enums/cluster_export.GeneralDiagnostics.RadioFault.md)[]\>  }\>

Body of the GeneralDiagnostics radioFaultChange event

**`See`**

MatterSpecification.v11.Core § 11.11.8.2

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:404](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L404)

___

### TlvTestEventTriggerRequest

• `Const` **TlvTestEventTriggerRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `enableKey`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`Uint8Array`\> ; `eventTrigger`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\>  }\>

Input to the GeneralDiagnostics testEventTrigger command

**`See`**

MatterSpecification.v11.Core § 11.11.7.1

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts:313](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralDiagnosticsCluster.ts#L313)
