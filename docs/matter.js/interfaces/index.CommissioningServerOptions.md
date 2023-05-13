[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / CommissioningServerOptions

# Interface: CommissioningServerOptions

[index](../modules/index.md).CommissioningServerOptions

Constructor options for a CommissioningServer device
Beside the general options it also contains the data for the BasicInformation cluster which is added automatically
and allows to override the certificates used for the OperationalCredentials cluster

## Table of contents

### Properties

- [basicInformation](index.CommissioningServerOptions.md#basicinformation)
- [certificates](index.CommissioningServerOptions.md#certificates)
- [delayedAnnouncement](index.CommissioningServerOptions.md#delayedannouncement)
- [deviceName](index.CommissioningServerOptions.md#devicename)
- [deviceType](index.CommissioningServerOptions.md#devicetype)
- [disableIpv4](index.CommissioningServerOptions.md#disableipv4)
- [discriminator](index.CommissioningServerOptions.md#discriminator)
- [flowType](index.CommissioningServerOptions.md#flowtype)
- [listeningAddressIpv4](index.CommissioningServerOptions.md#listeningaddressipv4)
- [listeningAddressIpv6](index.CommissioningServerOptions.md#listeningaddressipv6)
- [nextEndpointId](index.CommissioningServerOptions.md#nextendpointid)
- [passcode](index.CommissioningServerOptions.md#passcode)
- [port](index.CommissioningServerOptions.md#port)

## Properties

### basicInformation

• **basicInformation**: { `productId`: `number` ; `productName`: `string` ; `vendorId`: [`VendorId`](../classes/datatype.VendorId.md) ; `vendorName`: `string`  } \| [`AttributeInitialValues`](../modules/cluster.md#attributeinitialvalues)<[`Merge`](../modules/util.md#merge)<{ `capabilityMinima`: [`Attribute`](../modules/cluster.md#attribute)<[`TypeFromFields`](../modules/tlv.md#typefromfields)<{ `caseSessionsPerFabric`: [`FieldType`](tlv.FieldType.md)<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](tlv.FieldType.md)<`number`\>  }\>\> ; `dataModelRevision`: [`Attribute`](../modules/cluster.md#attribute)<`number`\> ; `hardwareVersion`: [`Attribute`](../modules/cluster.md#attribute)<`number`\> ; `hardwareVersionString`: [`Attribute`](../modules/cluster.md#attribute)<`string`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](../modules/cluster.md#optionalwritableattribute)<`boolean`\> ; `location`: [`WritableAttribute`](../modules/cluster.md#writableattribute)<`string`\> ; `manufacturingDate`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `nodeLabel`: [`WritableAttribute`](../modules/cluster.md#writableattribute)<`string`\> ; `partNumber`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `productId`: [`Attribute`](../modules/cluster.md#attribute)<`number`\> ; `productLabel`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `productName`: [`Attribute`](../modules/cluster.md#attribute)<`string`\> ; `productURL`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `reachable`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`boolean`\> ; `serialNumber`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `softwareVersion`: [`Attribute`](../modules/cluster.md#attribute)<`number`\> ; `softwareVersionString`: [`Attribute`](../modules/cluster.md#attribute)<`string`\> ; `uniqueId`: [`OptionalAttribute`](../modules/cluster.md#optionalattribute)<`string`\> ; `vendorId`: [`Attribute`](../modules/cluster.md#attribute)<[`VendorId`](../classes/datatype.VendorId.md)\> ; `vendorName`: [`Attribute`](../modules/cluster.md#attribute)<`string`\>  }, [`GlobalAttributes`](../modules/cluster.md#globalattributes-1)<[`BitSchema`](../modules/schema.md#bitschema)\>\>\>

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:78](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L78)

___

### certificates

• `Optional` **certificates**: [`OperationalCredentialsServerConf`](cluster.OperationalCredentialsServerConf.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:86](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L86)

___

### delayedAnnouncement

• `Optional` **delayedAnnouncement**: `boolean`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:76](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L76)

___

### deviceName

• **deviceName**: `string`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:68](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L68)

___

### deviceType

• **deviceType**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:69](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L69)

___

### disableIpv4

• `Optional` **disableIpv4**: `boolean`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:65](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L65)

___

### discriminator

• **discriminator**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:73](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L73)

___

### flowType

• `Optional` **flowType**: [`CommissionningFlowType`](../enums/schema.CommissionningFlowType.md)

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:74](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L74)

___

### listeningAddressIpv4

• `Optional` **listeningAddressIpv4**: `string`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:66](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L66)

___

### listeningAddressIpv6

• `Optional` **listeningAddressIpv6**: `string`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:67](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L67)

___

### nextEndpointId

• `Optional` **nextEndpointId**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:70](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L70)

___

### passcode

• **passcode**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:72](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L72)

___

### port

• **port**: `number`

#### Defined in

[packages/matter.js/src/CommissioningServer.ts:64](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/CommissioningServer.ts#L64)
