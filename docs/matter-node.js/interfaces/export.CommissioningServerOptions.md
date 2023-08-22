[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / CommissioningServerOptions

# Interface: CommissioningServerOptions

[export](../modules/export.md).CommissioningServerOptions

Constructor options for a CommissioningServer device
Beside the general options it also contains the data for the BasicInformation cluster which is added automatically
and allows to override the certificates used for the OperationalCredentials cluster

## Table of contents

### Properties

- [additionalBleAdvertisementData](export.CommissioningServerOptions.md#additionalbleadvertisementdata)
- [basicInformation](export.CommissioningServerOptions.md#basicinformation)
- [certificates](export.CommissioningServerOptions.md#certificates)
- [delayedAnnouncement](export.CommissioningServerOptions.md#delayedannouncement)
- [deviceName](export.CommissioningServerOptions.md#devicename)
- [deviceType](export.CommissioningServerOptions.md#devicetype)
- [disableIpv4](export.CommissioningServerOptions.md#disableipv4)
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

### additionalBleAdvertisementData

• `Optional` **additionalBleAdvertisementData**: `Uint8Array`

Optional Vendor specific additional BLE Advertisement data.

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:57

___

### basicInformation

• **basicInformation**: { `productId`: `number` ; `productName`: `string` ; `vendorId`: `number` ; `vendorName`: `string`  } \| [`AttributeInitialValues`](../modules/exports_cluster.md#attributeinitialvalues)<[`Merge`](../modules/util_export.md#merge)<{ `capabilityMinima`: [`FixedAttribute`](../modules/exports_cluster.md#fixedattribute)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `caseSessionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)<`number`\>  }\>, `any`\> ; `dataModelRevision`: [`FixedAttribute`](../modules/exports_cluster.md#fixedattribute)<`number`, `any`\> ; `hardwareVersion`: [`FixedAttribute`](../modules/exports_cluster.md#fixedattribute)<`number`, `any`\> ; `hardwareVersionString`: [`FixedAttribute`](../modules/exports_cluster.md#fixedattribute)<`string`, `any`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](../modules/exports_cluster.md#optionalwritableattribute)<`boolean`, `any`\> ; `location`: [`WritableAttribute`](../modules/exports_cluster.md#writableattribute)<`string`, `any`\> ; `manufacturingDate`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `nodeLabel`: [`WritableAttribute`](../modules/exports_cluster.md#writableattribute)<`string`, `any`\> ; `partNumber`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `productAppearance`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `finish`: [`FieldType`](exports_tlv.FieldType.md)<[`ProductFinish`](../enums/exports_cluster.BasicInformation.ProductFinish.md)\> ; `primaryColor`: [`FieldType`](exports_tlv.FieldType.md)<``null`` \| [`Color`](../enums/exports_cluster.BasicInformation.Color.md)\>  }\>, `any`\> ; `productId`: [`FixedAttribute`](../modules/exports_cluster.md#fixedattribute)<`number`, `any`\> ; `productLabel`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `productName`: [`FixedAttribute`](../modules/exports_cluster.md#fixedattribute)<`string`, `any`\> ; `productUrl`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `reachable`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`boolean`, `any`\> ; `serialNumber`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `softwareVersion`: [`FixedAttribute`](../modules/exports_cluster.md#fixedattribute)<`number`, `any`\> ; `softwareVersionString`: [`FixedAttribute`](../modules/exports_cluster.md#fixedattribute)<`string`, `any`\> ; `uniqueId`: [`OptionalFixedAttribute`](../modules/exports_cluster.md#optionalfixedattribute)<`string`, `any`\> ; `vendorId`: [`FixedAttribute`](../modules/exports_cluster.md#fixedattribute)<[`VendorId`](../modules/exports_datatype.md#vendorid), `any`\> ; `vendorName`: [`FixedAttribute`](../modules/exports_cluster.md#fixedattribute)<`string`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes-1)<[`BitSchema`](../modules/exports_schema.md#bitschema)\>\>\>

Device details to be used for the BasicInformation cluster. Some of the values are initialized with defaults if
not set here.

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:81

___

### certificates

• `Optional` **certificates**: [`OperationalCredentialsServerConf`](exports_cluster.OperationalCredentialsServerConf.md)

Vendor specific certificates to be used for the OperationalCredentials cluster. If not set Test certificates
(official Chip tool test Root certificate is used) are generated automatically.

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:91

___

### delayedAnnouncement

• `Optional` **delayedAnnouncement**: `boolean`

Should the device directly be announced automatically by the MatterServer of manually via announce().

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:59

___

### deviceName

• **deviceName**: `string`

The device name to be used for the BasicInformation cluster.

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:45

___

### deviceType

• **deviceType**: `number`

The device type to be used for the BasicInformation cluster.

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:47

___

### disableIpv4

• `Optional` **disableIpv4**: `boolean`

If set to true no IPv4 socket listener is sed and only IPv6 is supported.

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:39

___

### discriminator

• **discriminator**: `number`

The Discriminator to use for initial commissioning.

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:53

___

### flowType

• `Optional` **flowType**: [`CommissionningFlowType`](../enums/exports_schema.CommissionningFlowType.md)

The Flow type of the Commissioning flow used in announcements.

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:55

___

### generalCommissioning

• `Optional` **generalCommissioning**: `Partial`<[`AttributeInitialValues`](../modules/exports_cluster.md#attributeinitialvalues)<[`Merge`](../modules/util_export.md#merge)<{ `basicCommissioningInfo`: [`FixedAttribute`](../modules/exports_cluster.md#fixedattribute)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `failSafeExpiryLengthSeconds`: [`FieldType`](exports_tlv.FieldType.md)<`number`\> ; `maxCumulativeFailsafeSeconds`: [`FieldType`](exports_tlv.FieldType.md)<`number`\>  }\>, `any`\> ; `breadcrumb`: [`WritableAttribute`](../modules/exports_cluster.md#writableattribute)<`number` \| `bigint`, `any`\> ; `locationCapability`: [`FixedAttribute`](../modules/exports_cluster.md#fixedattribute)<[`RegulatoryLocationType`](../enums/exports_cluster.GeneralCommissioning.RegulatoryLocationType.md), `any`\> ; `regulatoryConfig`: [`Attribute`](../modules/exports_cluster.md#attribute)<[`RegulatoryLocationType`](../enums/exports_cluster.GeneralCommissioning.RegulatoryLocationType.md), `any`\> ; `supportsConcurrentConnection`: [`FixedAttribute`](../modules/exports_cluster.md#fixedattribute)<`boolean`, `any`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes-1)<[`BitSchema`](../modules/exports_schema.md#bitschema)\>\>\>\> & { `allowCountryCodeChange?`: `boolean` ; `countryCodeWhitelist?`: `string`[]  }

Optional configuration for the GeneralCommissioning cluster. If not set the default values are used.
Use these options to limit the allowed countries for regulatory configuration.

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:96

___

### listeningAddressIpv4

• `Optional` **listeningAddressIpv4**: `string`

IPv4 listener address, defaults to all interfaces.

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:41

___

### listeningAddressIpv6

• `Optional` **listeningAddressIpv6**: `string`

IPv6 listener address, defaults to all interfaces.

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:43

___

### nextEndpointId

• `Optional` **nextEndpointId**: `number`

The next endpoint ID to be assigned to a new endpoint.

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:49

___

### passcode

• **passcode**: `number`

The passcode/pin of the device to use for initial commissioning.

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:51

___

### port

• **port**: `number`

Port of the server, normally automatically managed.

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:37

___

### subscriptionMaxIntervalSeconds

• `Optional` **subscriptionMaxIntervalSeconds**: `number`

Optional maximum subscription interval to use for sending subscription reports. It will be used if not too low
and inside the range requested by the connected controller.

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:64

___

### subscriptionMinIntervalSeconds

• `Optional` **subscriptionMinIntervalSeconds**: `number`

Optional minimum subscription interval to use for sending subscription reports. It will be used when other
calculated values are smaller than it. Use this to make sure your device hardware can handle the load and to set
limits.

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:70

___

### subscriptionRandomizationWindowSeconds

• `Optional` **subscriptionRandomizationWindowSeconds**: `number`

Optional subscription randomization window to use for sending subscription reports. This specifies a window in
seconds from which a random part is added to the calculated maximum interval to make sure that devices that get
powered on in parallel not all send at the same timepoint.

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:76
