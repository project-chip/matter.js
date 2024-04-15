[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / GeneralCommissioning

# Namespace: GeneralCommissioning

[cluster/export](cluster_export.md).GeneralCommissioning

## Table of contents

### Enumerations

- [CommissioningError](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)
- [RegulatoryLocationType](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md)

### Interfaces

- [ArmFailSafeRequest](../interfaces/cluster_export.GeneralCommissioning.ArmFailSafeRequest.md)
- [ArmFailSafeResponse](../interfaces/cluster_export.GeneralCommissioning.ArmFailSafeResponse.md)
- [BasicCommissioningInfo](../interfaces/cluster_export.GeneralCommissioning.BasicCommissioningInfo.md)
- [Cluster](../interfaces/cluster_export.GeneralCommissioning.Cluster.md)
- [CommissioningCompleteResponse](../interfaces/cluster_export.GeneralCommissioning.CommissioningCompleteResponse.md)
- [SetRegulatoryConfigRequest](../interfaces/cluster_export.GeneralCommissioning.SetRegulatoryConfigRequest.md)
- [SetRegulatoryConfigResponse](../interfaces/cluster_export.GeneralCommissioning.SetRegulatoryConfigResponse.md)

### Variables

- [Cluster](cluster_export.GeneralCommissioning.md#cluster)
- [ClusterInstance](cluster_export.GeneralCommissioning.md#clusterinstance)
- [Complete](cluster_export.GeneralCommissioning.md#complete)
- [TlvArmFailSafeRequest](cluster_export.GeneralCommissioning.md#tlvarmfailsaferequest)
- [TlvArmFailSafeResponse](cluster_export.GeneralCommissioning.md#tlvarmfailsaferesponse)
- [TlvBasicCommissioningInfo](cluster_export.GeneralCommissioning.md#tlvbasiccommissioninginfo)
- [TlvCommissioningCompleteResponse](cluster_export.GeneralCommissioning.md#tlvcommissioningcompleteresponse)
- [TlvSetRegulatoryConfigRequest](cluster_export.GeneralCommissioning.md#tlvsetregulatoryconfigrequest)
- [TlvSetRegulatoryConfigResponse](cluster_export.GeneralCommissioning.md#tlvsetregulatoryconfigresponse)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.GeneralCommissioning.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:550](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L550)

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:552](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L552)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `basicCommissioningInfo`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `failSafeExpiryLengthSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `maxCumulativeFailsafeSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `breadcrumb`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<`number` \| `bigint`, `any`\> ; `locationCapability`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md), `any`\> ; `regulatoryConfig`: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<[`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md), `any`\> ; `supportsConcurrentConnection`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<`boolean`, `any`\>  } ; `commands`: \{ `armFailSafe`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `expiryLengthSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `errorCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)\>  }\>, `any`\> ; `commissioningComplete`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `errorCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)\>  }\>, `any`\> ; `setRegulatoryConfig`: [`Command`](../interfaces/cluster_export.Command.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `breadcrumb`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `countryCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `newRegulatoryConfig`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `debugText`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `errorCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)\>  }\>, `any`\>  } ; `id`: ``48`` = 0x30; `name`: ``"GeneralCommissioning"`` = "GeneralCommissioning"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.GeneralCommissioning.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:223](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L223)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.GeneralCommissioning.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:553](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L553)

___

### TlvArmFailSafeRequest

• `Const` **TlvArmFailSafeRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `breadcrumb`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `expiryLengthSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

Input to the GeneralCommissioning armFailSafe command

**`See`**

MatterSpecification.v11.Core § 11.9.6.2

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L85)

___

### TlvArmFailSafeResponse

• `Const` **TlvArmFailSafeResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `debugText`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `errorCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)\>  }\>

**`See`**

MatterSpecification.v11.Core § 11.9.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:134](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L134)

___

### TlvBasicCommissioningInfo

• `Const` **TlvBasicCommissioningInfo**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `failSafeExpiryLengthSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\> ; `maxCumulativeFailsafeSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

This structure provides some constant values that may be of use to all commissioners.

**`See`**

MatterSpecification.v11.Core § 11.9.4.3

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L26)

___

### TlvCommissioningCompleteResponse

• `Const` **TlvCommissioningCompleteResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `debugText`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `errorCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)\>  }\>

This field shall contain the result of the operation, based on the behavior specified in the functional
description of the CommissioningComplete command.

See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.

**`See`**

MatterSpecification.v11.Core § 11.9.6.7

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:205](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L205)

___

### TlvSetRegulatoryConfigRequest

• `Const` **TlvSetRegulatoryConfigRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `breadcrumb`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number` \| `bigint`\> ; `countryCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `newRegulatoryConfig`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md)\>  }\>

Input to the GeneralCommissioning setRegulatoryConfig command

**`See`**

MatterSpecification.v11.Core § 11.9.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:161](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L161)

___

### TlvSetRegulatoryConfigResponse

• `Const` **TlvSetRegulatoryConfigResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `debugText`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`string`\> ; `errorCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)\>  }\>

This field shall contain the result of the operation, based on the behavior specified in the functional
description of the SetRegulatoryConfig command.

See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.

**`See`**

MatterSpecification.v11.Core § 11.9.6.5

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:182](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L182)
