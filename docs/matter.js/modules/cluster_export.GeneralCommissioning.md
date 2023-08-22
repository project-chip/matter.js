[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / GeneralCommissioning

# Namespace: GeneralCommissioning

[cluster/export](cluster_export.md).GeneralCommissioning

## Table of contents

### Enumerations

- [CommissioningError](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)
- [RegulatoryLocationType](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md)

### Variables

- [Cluster](cluster_export.GeneralCommissioning.md#cluster)
- [TlvArmFailSafeRequest](cluster_export.GeneralCommissioning.md#tlvarmfailsaferequest)
- [TlvArmFailSafeResponse](cluster_export.GeneralCommissioning.md#tlvarmfailsaferesponse)
- [TlvBasicCommissioningInfo](cluster_export.GeneralCommissioning.md#tlvbasiccommissioninginfo)
- [TlvCommissioningCompleteResponse](cluster_export.GeneralCommissioning.md#tlvcommissioningcompleteresponse)
- [TlvSetRegulatoryConfigRequest](cluster_export.GeneralCommissioning.md#tlvsetregulatoryconfigrequest)
- [TlvSetRegulatoryConfigResponse](cluster_export.GeneralCommissioning.md#tlvsetregulatoryconfigresponse)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `basicCommissioningInfo`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `failSafeExpiryLengthSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `maxCumulativeFailsafeSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, `any`\> ; `breadcrumb`: [`WritableAttribute`](cluster_export.md#writableattribute)<`number` \| `bigint`, `any`\> ; `locationCapability`: [`FixedAttribute`](cluster_export.md#fixedattribute)<[`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md), `any`\> ; `regulatoryConfig`: [`Attribute`](cluster_export.md#attribute)<[`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md), `any`\> ; `supportsConcurrentConnection`: [`FixedAttribute`](cluster_export.md#fixedattribute)<`boolean`, `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, { `armFailSafe`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `breadcrumb`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `expiryLengthSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `debugText`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `errorCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)\>  }\>, `any`\> ; `commissioningComplete`: [`Command`](cluster_export.md#command)<`void`, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `debugText`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `errorCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)\>  }\>, `any`\> ; `setRegulatoryConfig`: [`Command`](cluster_export.md#command)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `breadcrumb`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `countryCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `newRegulatoryConfig`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md)\>  }\>, [`TypeFromFields`](tlv_export.md#typefromfields)<{ `debugText`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `errorCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)\>  }\>, `any`\>  }, {}\>

General Commissioning

This cluster is used to manage basic commissioning lifecycle.

This cluster also represents responsibilities related to commissioning that don’t well fit other commissioning
clusters, like Section 11.8, “Network Commissioning Cluster”. It also hosts functionalities

those other clusters may depend on.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.9

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:190](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L190)

___

### TlvArmFailSafeRequest

• `Const` **TlvArmFailSafeRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `breadcrumb`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `expiryLengthSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

Input to the GeneralCommissioning armFailSafe command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.9.6.2

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:82](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L82)

___

### TlvArmFailSafeResponse

• `Const` **TlvArmFailSafeResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `debugText`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `errorCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)\>  }\>

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.9.6.3

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:124](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L124)

___

### TlvBasicCommissioningInfo

• `Const` **TlvBasicCommissioningInfo**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `failSafeExpiryLengthSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\> ; `maxCumulativeFailsafeSeconds`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number`\>  }\>

This structure provides some constant values that may be of use to all commissioners.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.9.4.3

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:30](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L30)

___

### TlvCommissioningCompleteResponse

• `Const` **TlvCommissioningCompleteResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `debugText`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `errorCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)\>  }\>

This field shall contain the result of the operation, based on the behavior specified in the functional
description of the CommissioningComplete command.

See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.9.6.7

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:173](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L173)

___

### TlvSetRegulatoryConfigRequest

• `Const` **TlvSetRegulatoryConfigRequest**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `breadcrumb`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`number` \| `bigint`\> ; `countryCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `newRegulatoryConfig`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md)\>  }\>

Input to the GeneralCommissioning setRegulatoryConfig command

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.9.6.4

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:146](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L146)

___

### TlvSetRegulatoryConfigResponse

• `Const` **TlvSetRegulatoryConfigResponse**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `debugText`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`string`\> ; `errorCode`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`CommissioningError`](../enums/cluster_export.GeneralCommissioning.CommissioningError.md)\>  }\>

This field shall contain the result of the operation, based on the behavior specified in the functional
description of the SetRegulatoryConfig command.

See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 11.9.6.5

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:160](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L160)
