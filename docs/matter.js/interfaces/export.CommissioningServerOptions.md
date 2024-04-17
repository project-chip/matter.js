[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / CommissioningServerOptions

# Interface: CommissioningServerOptions

[export](../modules/export.md).CommissioningServerOptions

Constructor options for a CommissioningServer device
Beside the general options it also contains the data for the BasicInformation cluster which is added automatically
and allows to override the certificates used for the OperationalCredentials cluster

## Table of contents

### Properties

- [activeSessionsChangedCallback](export.CommissioningServerOptions.md#activesessionschangedcallback)
- [additionalBleAdvertisementData](export.CommissioningServerOptions.md#additionalbleadvertisementdata)
- [basicInformation](export.CommissioningServerOptions.md#basicinformation)
- [certificates](export.CommissioningServerOptions.md#certificates)
- [commissioningChangedCallback](export.CommissioningServerOptions.md#commissioningchangedcallback)
- [delayedAnnouncement](export.CommissioningServerOptions.md#delayedannouncement)
- [deviceName](export.CommissioningServerOptions.md#devicename)
- [deviceType](export.CommissioningServerOptions.md#devicetype)
- [discriminator](export.CommissioningServerOptions.md#discriminator)
- [flowType](export.CommissioningServerOptions.md#flowtype)
- [generalCommissioning](export.CommissioningServerOptions.md#generalcommissioning)
- [listeningAddressIpv4](export.CommissioningServerOptions.md#listeningaddressipv4)
- [listeningAddressIpv6](export.CommissioningServerOptions.md#listeningaddressipv6)
- [nextEndpointId](export.CommissioningServerOptions.md#nextendpointid)
- [passcode](export.CommissioningServerOptions.md#passcode)
- [port](export.CommissioningServerOptions.md#port)
- [subscriptionMaxIntervalSeconds](export.CommissioningServerOptions.md#subscriptionmaxintervalseconds)
- [subscriptionMinIntervalSeconds](export.CommissioningServerOptions.md#subscriptionminintervalseconds)
- [subscriptionRandomizationWindowSeconds](export.CommissioningServerOptions.md#subscriptionrandomizationwindowseconds)

## Properties

### activeSessionsChangedCallback

• `Optional` **activeSessionsChangedCallback**: (`fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex)) => `void`

This callback is called when sessions to the device are established, closed or subscriptions get added or
removed. The provided fabricIndex can be used together with getActiveSessionInformation() to get more details
about the open sessions and their status.

#### Type declaration

▸ (`fabricIndex`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:200](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L200)

___

### additionalBleAdvertisementData

• `Optional` **additionalBleAdvertisementData**: `Uint8Array`

Optional Vendor specific additional BLE Advertisement data.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:130](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L130)

___

### basicInformation

• **basicInformation**: \{ `productId`: `number` ; `productName`: `string` ; `vendorId`: `number` ; `vendorName`: `string`  } \| [`AttributeInitialValues`](../modules/cluster_export.md#attributeinitialvalues)\<[`Merge`](../modules/util_export.md#merge)\<\{ `capabilityMinima`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `dataModelRevision`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersion`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](cluster_export.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `location`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BasicInformation.Color.md)\>  }\>, `any`\> ; `productId`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`OptionalAttribute`](cluster_export.OptionalAttribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](cluster_export.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `vendorName`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`string`, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<{}\>\>\>

Device details to be used for the BasicInformation cluster. Some of the values are initialized with defaults if
not set here.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:159](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L159)

___

### certificates

• `Optional` **certificates**: `Object`

Vendor specific certificates to be used for the OperationalCredentials cluster. If not set Test certificates
(official Chip tool test Root certificate is used) are generated automatically.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `certificationDeclaration` | `Uint8Array` |
| `deviceCertificate` | `Uint8Array` |
| `deviceIntermediateCertificate` | `Uint8Array` |
| `devicePrivateKey` | `Uint8Array` |

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:172](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L172)

___

### commissioningChangedCallback

• `Optional` **commissioningChangedCallback**: (`fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex)) => `void`

This callback is called when the device is commissioned or decommissioned to a fabric/controller. The provided
fabricIndex can be used together with getCommissionedFabricInformation() to get more details about the fabric
(or if this fabricIndex is missing it was deleted).

#### Type declaration

▸ (`fabricIndex`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:193](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L193)

___

### delayedAnnouncement

• `Optional` **delayedAnnouncement**: `boolean`

Should the device directly be announced automatically by the MatterServer of manually via announce().

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:133](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L133)

___

### deviceName

• **deviceName**: `string`

The device name to be used for the BasicInformation cluster.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:112](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L112)

___

### deviceType

• **deviceType**: `number`

The device type to be used for the BasicInformation cluster.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:115](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L115)

___

### discriminator

• `Optional` **discriminator**: `number`

The Discriminator to use for initial commissioning.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:124](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L124)

___

### flowType

• `Optional` **flowType**: [`CommissioningFlowType`](../enums/schema_export.CommissioningFlowType.md)

The Flow type of the Commissioning flow used in announcements.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L127)

___

### generalCommissioning

• `Optional` **generalCommissioning**: `Partial`\<[`AttributeInitialValues`](../modules/cluster_export.md#attributeinitialvalues)\<[`Merge`](../modules/util_export.md#merge)\<\{ `basicCommissioningInfo`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `failSafeExpiryLengthSeconds`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `maxCumulativeFailsafeSeconds`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `breadcrumb`: [`WritableAttribute`](cluster_export.WritableAttribute.md)\<`number` \| `bigint`, `any`\> ; `locationCapability`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<[`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md), `any`\> ; `regulatoryConfig`: [`Attribute`](cluster_export.Attribute.md)\<[`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md), `any`\> ; `supportsConcurrentConnection`: [`FixedAttribute`](cluster_export.FixedAttribute.md)\<`boolean`, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes)\<{}\>\>\>\> & \{ `allowCountryCodeChange?`: `boolean` ; `countryCodeWhitelist?`: `string`[]  }

Optional configuration for the GeneralCommissioning cluster. If not set the default values are used.
Use these options to limit the allowed countries for regulatory configuration.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:183](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L183)

___

### listeningAddressIpv4

• `Optional` **listeningAddressIpv4**: `string`

IPv4 listener address, defaults to all interfaces.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:106](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L106)

___

### listeningAddressIpv6

• `Optional` **listeningAddressIpv6**: `string`

IPv6 listener address, defaults to all interfaces.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:109](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L109)

___

### nextEndpointId

• `Optional` **nextEndpointId**: `number`

The next endpoint ID to be assigned to a new endpoint.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:118](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L118)

___

### passcode

• `Optional` **passcode**: `number`

The passcode/pin of the device to use for initial commissioning.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:121](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L121)

___

### port

• `Optional` **port**: `number`

Port of the server, normally automatically managed.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:103](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L103)

___

### subscriptionMaxIntervalSeconds

• `Optional` **subscriptionMaxIntervalSeconds**: `number`

Optional maximum subscription interval to use for sending subscription reports. It will be used if not too low
and inside the range requested by the connected controller.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:139](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L139)

___

### subscriptionMinIntervalSeconds

• `Optional` **subscriptionMinIntervalSeconds**: `number`

Optional minimum subscription interval to use for sending subscription reports. It will be used when other
calculated values are smaller than it. Use this to make sure your device hardware can handle the load and to set
limits.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:146](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L146)

___

### subscriptionRandomizationWindowSeconds

• `Optional` **subscriptionRandomizationWindowSeconds**: `number`

Optional subscription randomization window to use for sending subscription reports. This specifies a window in
seconds from which a random part is added to the calculated maximum interval to make sure that devices that get
powered on in parallel not all send at the same timepoint.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:153](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/CommissioningServer.ts#L153)
