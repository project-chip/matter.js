[**@project-chip/matter-node.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../modules.md) / [export](../README.md) / CommissioningServerOptions

# Interface: CommissioningServerOptions

Constructor options for a CommissioningServer device
Beside the general options it also contains the data for the BasicInformation cluster which is added automatically
and allows to override the certificates used for the OperationalCredentials cluster

## Properties

### activeSessionsChangedCallback()?

> `optional` **activeSessionsChangedCallback**: (`fabricIndex`) => `void`

This callback is called when sessions to the device are established, closed or subscriptions get added or
removed. The provided fabricIndex can be used together with getActiveSessionInformation() to get more details
about the open sessions and their status.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../../exports/datatype/README.md#fabricindex) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:120

***

### additionalBleAdvertisementData?

> `optional` **additionalBleAdvertisementData**: `Uint8Array`

Optional Vendor specific additional BLE Advertisement data.

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:66

***

### basicInformation

> **basicInformation**: `object` \| [`AttributeInitialValues`](../../exports/cluster/README.md#attributeinitialvaluesa)\<[`Merge`](../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../exports/cluster/README.md#globalattributesf)\<`object`\>\>\>

Device details to be used for the BasicInformation cluster. Some of the values are initialized with defaults if
not set here.

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:90

***

### certificates?

> `optional` **certificates**: [`Definition`](../-internal-/README.md#definition)

Vendor specific certificates to be used for the OperationalCredentials cluster. If not set Test certificates
(official Chip tool test Root certificate is used) are generated automatically.

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:100

***

### commissioningChangedCallback()?

> `optional` **commissioningChangedCallback**: (`fabricIndex`) => `void`

This callback is called when the device is commissioned or decommissioned to a fabric/controller. The provided
fabricIndex can be used together with getCommissionedFabricInformation() to get more details about the fabric
(or if this fabricIndex is missing it was deleted).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../../exports/datatype/README.md#fabricindex) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:114

***

### delayedAnnouncement?

> `optional` **delayedAnnouncement**: `boolean`

Should the device directly be announced automatically by the MatterServer of manually via announce().

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:68

***

### deviceName

> **deviceName**: `string`

The device name to be used for the BasicInformation cluster.

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:54

***

### deviceType

> **deviceType**: `number`

The device type to be used for the BasicInformation cluster.

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:56

***

### discriminator?

> `optional` **discriminator**: `number`

The Discriminator to use for initial commissioning.

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:62

***

### flowType?

> `optional` **flowType**: [`CommissioningFlowType`](../../exports/schema/enumerations/CommissioningFlowType.md)

The Flow type of the Commissioning flow used in announcements.

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:64

***

### generalCommissioning?

> `optional` **generalCommissioning**: `Partial`\<[`AttributeInitialValues`](../../exports/cluster/README.md#attributeinitialvaluesa)\<[`Merge`](../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../exports/cluster/README.md#globalattributesf)\<`object`\>\>\>\> & `object`

Optional configuration for the GeneralCommissioning cluster. If not set the default values are used.
Use these options to limit the allowed countries for regulatory configuration.

#### Type declaration

##### allowCountryCodeChange?

> `optional` **allowCountryCodeChange**: `boolean`

##### countryCodeWhitelist?

> `optional` **countryCodeWhitelist**: `string`[]

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:105

***

### listeningAddressIpv4?

> `optional` **listeningAddressIpv4**: `string`

IPv4 listener address, defaults to all interfaces.

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:50

***

### listeningAddressIpv6?

> `optional` **listeningAddressIpv6**: `string`

IPv6 listener address, defaults to all interfaces.

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:52

***

### nextEndpointId?

> `optional` **nextEndpointId**: `number`

The next endpoint ID to be assigned to a new endpoint.

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:58

***

### passcode?

> `optional` **passcode**: `number`

The passcode/pin of the device to use for initial commissioning.

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:60

***

### port?

> `optional` **port**: `number`

Port of the server, normally automatically managed.

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:48

***

### subscriptionMaxIntervalSeconds?

> `optional` **subscriptionMaxIntervalSeconds**: `number`

Optional maximum subscription interval to use for sending subscription reports. It will be used if not too low
and inside the range requested by the connected controller.

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:73

***

### subscriptionMinIntervalSeconds?

> `optional` **subscriptionMinIntervalSeconds**: `number`

Optional minimum subscription interval to use for sending subscription reports. It will be used when other
calculated values are smaller than it. Use this to make sure your device hardware can handle the load and to set
limits.

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:79

***

### subscriptionRandomizationWindowSeconds?

> `optional` **subscriptionRandomizationWindowSeconds**: `number`

Optional subscription randomization window to use for sending subscription reports. This specifies a window in
seconds from which a random part is added to the calculated maximum interval to make sure that devices that get
powered on in parallel not all send at the same timepoint.

#### Source

packages/matter.js/dist/esm/CommissioningServer.d.ts:85
