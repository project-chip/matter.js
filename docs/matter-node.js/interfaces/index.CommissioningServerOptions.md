[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / CommissioningServerOptions

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

• **basicInformation**: { `productId`: `number` ; `productName`: `string` ; `vendorId`: [`VendorId`](../classes/exports_datatype.VendorId.md) ; `vendorName`: `string`  } \| [`AttributeInitialValues`](../modules/exports_cluster.md#attributeinitialvalues)<[`Merge`](../modules/util.md#merge)<{ `capabilityMinima`: [`Attribute`](../modules/exports_cluster.md#attribute)<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)<{ `caseSessionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)<`number`\> ; `subscriptionsPerFabric`: [`FieldType`](exports_tlv.FieldType.md)<`number`\>  }\>\> ; `dataModelRevision`: [`Attribute`](../modules/exports_cluster.md#attribute)<`number`\> ; `hardwareVersion`: [`Attribute`](../modules/exports_cluster.md#attribute)<`number`\> ; `hardwareVersionString`: [`Attribute`](../modules/exports_cluster.md#attribute)<`string`\> ; `localConfigDisabled`: [`OptionalWritableAttribute`](../modules/exports_cluster.md#optionalwritableattribute)<`boolean`\> ; `location`: [`WritableAttribute`](../modules/exports_cluster.md#writableattribute)<`string`\> ; `manufacturingDate`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `nodeLabel`: [`WritableAttribute`](../modules/exports_cluster.md#writableattribute)<`string`\> ; `partNumber`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `productId`: [`Attribute`](../modules/exports_cluster.md#attribute)<`number`\> ; `productLabel`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `productName`: [`Attribute`](../modules/exports_cluster.md#attribute)<`string`\> ; `productURL`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `reachable`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`boolean`\> ; `serialNumber`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `softwareVersion`: [`Attribute`](../modules/exports_cluster.md#attribute)<`number`\> ; `softwareVersionString`: [`Attribute`](../modules/exports_cluster.md#attribute)<`string`\> ; `uniqueId`: [`OptionalAttribute`](../modules/exports_cluster.md#optionalattribute)<`string`\> ; `vendorId`: [`Attribute`](../modules/exports_cluster.md#attribute)<[`VendorId`](../classes/exports_datatype.VendorId.md)\> ; `vendorName`: [`Attribute`](../modules/exports_cluster.md#attribute)<`string`\>  }, [`GlobalAttributes`](../modules/exports_cluster.md#globalattributes-1)<[`BitSchema`](../modules/exports_schema.md#bitschema)\>\>\>

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:44

___

### certificates

• `Optional` **certificates**: [`OperationalCredentialsServerConf`](exports_cluster.OperationalCredentialsServerConf.md)

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:50

___

### delayedAnnouncement

• `Optional` **delayedAnnouncement**: `boolean`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:43

___

### deviceName

• **deviceName**: `string`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:37

___

### deviceType

• **deviceType**: `number`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:38

___

### disableIpv4

• `Optional` **disableIpv4**: `boolean`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:34

___

### discriminator

• **discriminator**: `number`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:41

___

### flowType

• `Optional` **flowType**: [`CommissionningFlowType`](../enums/exports_schema.CommissionningFlowType.md)

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:42

___

### listeningAddressIpv4

• `Optional` **listeningAddressIpv4**: `string`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:35

___

### listeningAddressIpv6

• `Optional` **listeningAddressIpv6**: `string`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:36

___

### nextEndpointId

• `Optional` **nextEndpointId**: `number`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:39

___

### passcode

• **passcode**: `number`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:40

___

### port

• **port**: `number`

#### Defined in

packages/matter.js/dist/cjs/CommissioningServer.d.ts:33
