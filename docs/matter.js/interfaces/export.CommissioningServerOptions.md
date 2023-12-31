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

#### Type declaration

▸ (`fabricIndex`): `void`

This callback is called when sessions to the device are established, closed or subscriptions get added or
removed. The provided fabricIndex can be used together with getActiveSessionInformation() to get more details
about the open sessions and their status.

##### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:195](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/CommissioningServer.ts#L195)

___

### additionalBleAdvertisementData

• `Optional` **additionalBleAdvertisementData**: `Uint8Array`

Optional Vendor specific additional BLE Advertisement data.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:130](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/CommissioningServer.ts#L130)

___

### basicInformation

• **basicInformation**: \{ `productId`: `number` ; `productName`: `string` ; `vendorId`: `number` ; `vendorName`: `string`  } \| [`AttributeInitialValues`](../modules/cluster_export.md#attributeinitialvalues)\<[`Merge`](../modules/util_export.md#merge)\<\{ `capabilityMinima`: [`FixedAttribute`](../modules/cluster_export.md#fixedattribute)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `dataModelRevision`: [`FixedAttribute`](../modules/cluster_export.md#fixedattribute)\<`number`, `any`\> ; `hardwareVersion`: [`FixedAttribute`](../modules/cluster_export.md#fixedattribute)\<`number`, `any`\> ; `hardwareVersionString`: [`FixedAttribute`](../modules/cluster_export.md#fixedattribute)\<`string`, `any`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](../modules/cluster_export.md#optionalwritableattribute)\<`boolean`, `any`\> ; `location`: [`WritableAttribute`](../modules/cluster_export.md#writableattribute)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](../modules/cluster_export.md#optionalfixedattribute)\<`string`, `any`\> ; `nodeLabel`: [`WritableAttribute`](../modules/cluster_export.md#writableattribute)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](../modules/cluster_export.md#optionalfixedattribute)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](../modules/cluster_export.md#optionalfixedattribute)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `finish`: [`FieldType`](tlv_export.FieldType.md)\<[`ProductFinish`](../enums/cluster_export.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| [`Color`](../enums/cluster_export.BasicInformation.Color.md)\>  }\>, `any`\> ; `productId`: [`FixedAttribute`](../modules/cluster_export.md#fixedattribute)\<`number`, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](../modules/cluster_export.md#optionalfixedattribute)\<`string`, `any`\> ; `productName`: [`FixedAttribute`](../modules/cluster_export.md#fixedattribute)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](../modules/cluster_export.md#optionalfixedattribute)\<`string`, `any`\> ; `reachable`: [`OptionalAttribute`](../modules/cluster_export.md#optionalattribute)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](../modules/cluster_export.md#optionalfixedattribute)\<`string`, `any`\> ; `softwareVersion`: [`FixedAttribute`](../modules/cluster_export.md#fixedattribute)\<`number`, `any`\> ; `softwareVersionString`: [`FixedAttribute`](../modules/cluster_export.md#fixedattribute)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](../modules/cluster_export.md#optionalfixedattribute)\<`string`, `any`\> ; `vendorId`: [`FixedAttribute`](../modules/cluster_export.md#fixedattribute)\<[`VendorId`](../modules/datatype_export.md#vendorid), `any`\> ; `vendorName`: [`FixedAttribute`](../modules/cluster_export.md#fixedattribute)\<`string`, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes-1)\<{}\>\>\>

Device details to be used for the BasicInformation cluster. Some of the values are initialized with defaults if
not set here.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:159](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/CommissioningServer.ts#L159)

___

### certificates

• `Optional` **certificates**: [`OperationalCredentialsServerConf`](cluster_export.OperationalCredentialsServerConf.md)

Vendor specific certificates to be used for the OperationalCredentials cluster. If not set Test certificates
(official Chip tool test Root certificate is used) are generated automatically.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:172](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/CommissioningServer.ts#L172)

___

### commissioningChangedCallback

• `Optional` **commissioningChangedCallback**: (`fabricIndex`: [`FabricIndex`](../modules/datatype_export.md#fabricindex)) => `void`

#### Type declaration

▸ (`fabricIndex`): `void`

This callback is called when the device is commissioned or decommissioned to a fabric/controller. The provided
fabricIndex can be used together with getCommissionedFabricInformation() to get more details about the fabric
(or if this fabricIndex is missing it was deleted).

##### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/datatype_export.md#fabricindex) |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:188](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/CommissioningServer.ts#L188)

___

### delayedAnnouncement

• `Optional` **delayedAnnouncement**: `boolean`

Should the device directly be announced automatically by the MatterServer of manually via announce().

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:133](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/CommissioningServer.ts#L133)

___

### deviceName

• **deviceName**: `string`

The device name to be used for the BasicInformation cluster.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:112](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/CommissioningServer.ts#L112)

___

### deviceType

• **deviceType**: `number`

The device type to be used for the BasicInformation cluster.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:115](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/CommissioningServer.ts#L115)

___

### discriminator

• `Optional` **discriminator**: `number`

The Discriminator to use for initial commissioning.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:124](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/CommissioningServer.ts#L124)

___

### flowType

• `Optional` **flowType**: [`CommissionningFlowType`](../enums/schema_export.CommissionningFlowType.md)

The Flow type of the Commissioning flow used in announcements.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:127](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/CommissioningServer.ts#L127)

___

### generalCommissioning

• `Optional` **generalCommissioning**: `Partial`\<[`AttributeInitialValues`](../modules/cluster_export.md#attributeinitialvalues)\<[`Merge`](../modules/util_export.md#merge)\<\{ `basicCommissioningInfo`: [`FixedAttribute`](../modules/cluster_export.md#fixedattribute)\<[`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `failSafeExpiryLengthSeconds`: [`FieldType`](tlv_export.FieldType.md)\<`number`\> ; `maxCumulativeFailsafeSeconds`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>, `any`\> ; `breadcrumb`: [`WritableAttribute`](../modules/cluster_export.md#writableattribute)\<`number` \| `bigint`, `any`\> ; `locationCapability`: [`FixedAttribute`](../modules/cluster_export.md#fixedattribute)\<[`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md), `any`\> ; `regulatoryConfig`: [`Attribute`](../modules/cluster_export.md#attribute)\<[`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md), `any`\> ; `supportsConcurrentConnection`: [`FixedAttribute`](../modules/cluster_export.md#fixedattribute)\<`boolean`, `any`\>  }, [`GlobalAttributes`](../modules/cluster_export.md#globalattributes-1)\<{}\>\>\>\> & \{ `allowCountryCodeChange?`: `boolean` ; `countryCodeWhitelist?`: `string`[]  }

Optional configuration for the GeneralCommissioning cluster. If not set the default values are used.
Use these options to limit the allowed countries for regulatory configuration.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:178](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/CommissioningServer.ts#L178)

___

### listeningAddressIpv4

• `Optional` **listeningAddressIpv4**: `string`

IPv4 listener address, defaults to all interfaces.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:106](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/CommissioningServer.ts#L106)

___

### listeningAddressIpv6

• `Optional` **listeningAddressIpv6**: `string`

IPv6 listener address, defaults to all interfaces.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:109](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/CommissioningServer.ts#L109)

___

### nextEndpointId

• `Optional` **nextEndpointId**: `number`

The next endpoint ID to be assigned to a new endpoint.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:118](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/CommissioningServer.ts#L118)

___

### passcode

• `Optional` **passcode**: `number`

The passcode/pin of the device to use for initial commissioning.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:121](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/CommissioningServer.ts#L121)

___

### port

• `Optional` **port**: `number`

Port of the server, normally automatically managed.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:103](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/CommissioningServer.ts#L103)

___

### subscriptionMaxIntervalSeconds

• `Optional` **subscriptionMaxIntervalSeconds**: `number`

Optional maximum subscription interval to use for sending subscription reports. It will be used if not too low
and inside the range requested by the connected controller.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:139](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/CommissioningServer.ts#L139)

___

### subscriptionMinIntervalSeconds

• `Optional` **subscriptionMinIntervalSeconds**: `number`

Optional minimum subscription interval to use for sending subscription reports. It will be used when other
calculated values are smaller than it. Use this to make sure your device hardware can handle the load and to set
limits.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:146](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/CommissioningServer.ts#L146)

___

### subscriptionRandomizationWindowSeconds

• `Optional` **subscriptionRandomizationWindowSeconds**: `number`

Optional subscription randomization window to use for sending subscription reports. This specifies a window in
seconds from which a random part is added to the calculated maximum interval to make sure that devices that get
powered on in parallel not all send at the same timepoint.

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:153](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/CommissioningServer.ts#L153)
