[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / [export](../README.md) / CommissioningServerOptions

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
| `fabricIndex` | [`FabricIndex`](../../datatype/export/README.md#fabricindex) |

#### Returns

`void`

#### Source

[packages/matter.js/src/CommissioningServer.ts:201](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L201)

***

### additionalBleAdvertisementData?

> `optional` **additionalBleAdvertisementData**: `Uint8Array`

Optional Vendor specific additional BLE Advertisement data.

#### Source

[packages/matter.js/src/CommissioningServer.ts:136](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L136)

***

### basicInformation

> **basicInformation**: `object` \| [`AttributeInitialValues`](../../cluster/export/README.md#attributeinitialvaluesa)\<[`Merge`](../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../cluster/export/README.md#globalattributesf)\<`object`\>\>\>

Device details to be used for the BasicInformation cluster. Some of the values are initialized with defaults if
not set here.

#### Source

[packages/matter.js/src/CommissioningServer.ts:165](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L165)

***

### certificates?

> `optional` **certificates**: [`Definition`](../../behavior/definitions/operational-credentials/export/-internal-/namespaces/DeviceCertification/README.md#definition)

Vendor specific certificates to be used for the OperationalCredentials cluster. If not set Test certificates
(official Chip tool test Root certificate is used) are generated automatically.

#### Source

[packages/matter.js/src/CommissioningServer.ts:178](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L178)

***

### commissioningChangedCallback()?

> `optional` **commissioningChangedCallback**: (`fabricIndex`) => `void`

This callback is called when the device is commissioned or decommissioned to a fabric/controller. The provided
fabricIndex can be used together with getCommissionedFabricInformation() to get more details about the fabric
(or if this fabricIndex is missing it was deleted).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabricIndex` | [`FabricIndex`](../../datatype/export/README.md#fabricindex) |

#### Returns

`void`

#### Source

[packages/matter.js/src/CommissioningServer.ts:194](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L194)

***

### delayedAnnouncement?

> `optional` **delayedAnnouncement**: `boolean`

Should the device directly be announced automatically by the MatterServer of manually via announce().

#### Source

[packages/matter.js/src/CommissioningServer.ts:139](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L139)

***

### deviceName

> **deviceName**: `string`

The device name to be used for the BasicInformation cluster.

#### Source

[packages/matter.js/src/CommissioningServer.ts:118](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L118)

***

### deviceType

> **deviceType**: `number`

The device type to be used for the BasicInformation cluster.

#### Source

[packages/matter.js/src/CommissioningServer.ts:121](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L121)

***

### discriminator?

> `optional` **discriminator**: `number`

The Discriminator to use for initial commissioning.

#### Source

[packages/matter.js/src/CommissioningServer.ts:130](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L130)

***

### flowType?

> `optional` **flowType**: [`CommissioningFlowType`](../../schema/export/enumerations/CommissioningFlowType.md)

The Flow type of the Commissioning flow used in announcements.

#### Source

[packages/matter.js/src/CommissioningServer.ts:133](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L133)

***

### generalCommissioning?

> `optional` **generalCommissioning**: `Partial`\<[`AttributeInitialValues`](../../cluster/export/README.md#attributeinitialvaluesa)\<[`Merge`](../../util/export/README.md#mergeab)\<`object`, [`GlobalAttributes`](../../cluster/export/README.md#globalattributesf)\<`object`\>\>\>\> & `object`

Optional configuration for the GeneralCommissioning cluster. If not set the default values are used.
Use these options to limit the allowed countries for regulatory configuration.

#### Type declaration

##### allowCountryCodeChange?

> `optional` **allowCountryCodeChange**: `boolean`

##### countryCodeWhitelist?

> `optional` **countryCodeWhitelist**: `string`[]

#### Source

[packages/matter.js/src/CommissioningServer.ts:184](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L184)

***

### listeningAddressIpv4?

> `optional` **listeningAddressIpv4**: `string`

IPv4 listener address, defaults to all interfaces.

#### Source

[packages/matter.js/src/CommissioningServer.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L112)

***

### listeningAddressIpv6?

> `optional` **listeningAddressIpv6**: `string`

IPv6 listener address, defaults to all interfaces.

#### Source

[packages/matter.js/src/CommissioningServer.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L115)

***

### nextEndpointId?

> `optional` **nextEndpointId**: `number`

The next endpoint ID to be assigned to a new endpoint.

#### Source

[packages/matter.js/src/CommissioningServer.ts:124](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L124)

***

### passcode?

> `optional` **passcode**: `number`

The passcode/pin of the device to use for initial commissioning.

#### Source

[packages/matter.js/src/CommissioningServer.ts:127](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L127)

***

### port?

> `optional` **port**: `number`

Port of the server, normally automatically managed.

#### Source

[packages/matter.js/src/CommissioningServer.ts:109](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L109)

***

### subscriptionMaxIntervalSeconds?

> `optional` **subscriptionMaxIntervalSeconds**: `number`

Optional maximum subscription interval to use for sending subscription reports. It will be used if not too low
and inside the range requested by the connected controller.

#### Source

[packages/matter.js/src/CommissioningServer.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L145)

***

### subscriptionMinIntervalSeconds?

> `optional` **subscriptionMinIntervalSeconds**: `number`

Optional minimum subscription interval to use for sending subscription reports. It will be used when other
calculated values are smaller than it. Use this to make sure your device hardware can handle the load and to set
limits.

#### Source

[packages/matter.js/src/CommissioningServer.ts:152](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L152)

***

### subscriptionRandomizationWindowSeconds?

> `optional` **subscriptionRandomizationWindowSeconds**: `number`

Optional subscription randomization window to use for sending subscription reports. This specifies a window in
seconds from which a random part is added to the calculated maximum interval to make sure that devices that get
powered on in parallel not all send at the same timepoint.

#### Source

[packages/matter.js/src/CommissioningServer.ts:159](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/CommissioningServer.ts#L159)
