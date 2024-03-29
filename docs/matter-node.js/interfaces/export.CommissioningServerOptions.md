[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / CommissioningServerOptions

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

• `Optional` **activeSessionsChangedCallback**: (`fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)) => `void`

This callback is called when sessions to the device are established, closed or subscriptions get added or
removed. The provided fabricIndex can be used together with getActiveSessionInformation() to get more details
about the open sessions and their status.

#### Type declaration

▸ (`fabricIndex`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |

##### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:124

___

### additionalBleAdvertisementData

• `Optional` **additionalBleAdvertisementData**: `Uint8Array`

Optional Vendor specific additional BLE Advertisement data.

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:65

___

### basicInformation

• **basicInformation**: \{ `productId`: `number` ; `productName`: `string` ; `vendorId`: `number` ; `vendorName`: `string`  } \| [`AttributeInitialValues`](../modules/exports_cluster.md#attributeinitialvalues)\<[`Merge`](../modules/util_export.md#merge)\<\{ `capabilityMinima`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `caseSessionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `dataModelRevision`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `hardwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](exports_cluster.OptionalWritableAttribute.md)\<`boolean`, `any`\> ; `location`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `nodeLabel`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productAppearance`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `finish`: [`FieldType`](exports_tlv.FieldType.md)\<[`ProductFinish`](../enums/exports_cluster.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| [`Color`](../enums/exports_cluster.BasicInformation.Color.md)\>  }\>, `any`\> ; `productId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `productName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `reachable`: [`OptionalAttribute`](exports_cluster.OptionalAttribute.md)\<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `softwareVersion`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`number`, `any`\> ; `softwareVersionString`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](exports_cluster.OptionalFixedAttribute.md)\<`string`, `any`\> ; `vendorId`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`string`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<{}\>\>\>

Device details to be used for the BasicInformation cluster. Some of the values are initialized with defaults if
not set here.

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:89

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

packages/matter.js/dist/esm/CommissioningServer.d.ts:99

___

### commissioningChangedCallback

• `Optional` **commissioningChangedCallback**: (`fabricIndex`: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)) => `void`

This callback is called when the device is commissioned or decommissioned to a fabric/controller. The provided
fabricIndex can be used together with getCommissionedFabricInformation() to get more details about the fabric
(or if this fabricIndex is missing it was deleted).

#### Type declaration

▸ (`fabricIndex`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../modules/exports_datatype.md#fabricindex) |

##### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:118

___

### delayedAnnouncement

• `Optional` **delayedAnnouncement**: `boolean`

Should the device directly be announced automatically by the MatterServer of manually via announce().

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:67

___

### deviceName

• **deviceName**: `string`

The device name to be used for the BasicInformation cluster.

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:53

___

### deviceType

• **deviceType**: `number`

The device type to be used for the BasicInformation cluster.

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:55

___

### discriminator

• `Optional` **discriminator**: `number`

The Discriminator to use for initial commissioning.

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:61

___

### flowType

• `Optional` **flowType**: [`CommissioningFlowType`](../enums/exports_schema.CommissioningFlowType.md)

The Flow type of the Commissioning flow used in announcements.

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:63

___

### generalCommissioning

• `Optional` **generalCommissioning**: `Partial`\<[`AttributeInitialValues`](../modules/exports_cluster.md#attributeinitialvalues)\<[`Merge`](../modules/util_export.md#merge)\<\{ `basicCommissioningInfo`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `failSafeExpiryLengthSeconds`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\> ; `maxCumulativeFailsafeSeconds`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>, `any`\> ; `breadcrumb`: [`WritableAttribute`](exports_cluster.WritableAttribute.md)\<`number` \| `bigint`, `any`\> ; `locationCapability`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<[`RegulatoryLocationType`](../enums/exports_cluster.GeneralCommissioning.RegulatoryLocationType.md), `any`\> ; `regulatoryConfig`: [`Attribute`](exports_cluster.Attribute.md)\<[`RegulatoryLocationType`](../enums/exports_cluster.GeneralCommissioning.RegulatoryLocationType.md), `any`\> ; `supportsConcurrentConnection`: [`FixedAttribute`](exports_cluster.FixedAttribute.md)\<`boolean`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes)\<{}\>\>\>\> & \{ `allowCountryCodeChange?`: `boolean` ; `countryCodeWhitelist?`: `string`[]  }

Optional configuration for the GeneralCommissioning cluster. If not set the default values are used.
Use these options to limit the allowed countries for regulatory configuration.

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:109

___

### listeningAddressIpv4

• `Optional` **listeningAddressIpv4**: `string`

IPv4 listener address, defaults to all interfaces.

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:49

___

### listeningAddressIpv6

• `Optional` **listeningAddressIpv6**: `string`

IPv6 listener address, defaults to all interfaces.

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:51

___

### nextEndpointId

• `Optional` **nextEndpointId**: `number`

The next endpoint ID to be assigned to a new endpoint.

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:57

___

### passcode

• `Optional` **passcode**: `number`

The passcode/pin of the device to use for initial commissioning.

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:59

___

### port

• `Optional` **port**: `number`

Port of the server, normally automatically managed.

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:47

___

### subscriptionMaxIntervalSeconds

• `Optional` **subscriptionMaxIntervalSeconds**: `number`

Optional maximum subscription interval to use for sending subscription reports. It will be used if not too low
and inside the range requested by the connected controller.

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:72

___

### subscriptionMinIntervalSeconds

• `Optional` **subscriptionMinIntervalSeconds**: `number`

Optional minimum subscription interval to use for sending subscription reports. It will be used when other
calculated values are smaller than it. Use this to make sure your device hardware can handle the load and to set
limits.

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:78

___

### subscriptionRandomizationWindowSeconds

• `Optional` **subscriptionRandomizationWindowSeconds**: `number`

Optional subscription randomization window to use for sending subscription reports. This specifies a window in
seconds from which a random part is added to the calculated maximum interval to make sure that devices that get
powered on in parallel not all send at the same timepoint.

#### Defined in

packages/matter.js/dist/esm/CommissioningServer.d.ts:84
