[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / SubscriptionOptions

# Interface: SubscriptionOptions

Server options that control subscription handling.

## Properties

### maxIntervalSeconds?

> `optional` **maxIntervalSeconds**: `number`

Optional maximum subscription interval to use for sending subscription reports. It will be used if not too
low and inside the range requested by the connected controller.

#### Source

matter.js/dist/esm/protocol/interaction/SubscriptionOptions.d.ts:14

***

### minIntervalSeconds?

> `optional` **minIntervalSeconds**: `number`

Optional minimum subscription interval to use for sending subscription reports. It will be used when other
calculated values are smaller than it. Use this to make sure your device hardware can handle the load and to
set limits.

#### Source

matter.js/dist/esm/protocol/interaction/SubscriptionOptions.d.ts:20

***

### randomizationWindowSeconds?

> `optional` **randomizationWindowSeconds**: `number`

Optional subscription randomization window to use for sending subscription reports. This specifies a window
in seconds from which a random part is added to the calculated maximum interval to make sure that devices
that get powered on in parallel not all send at the same timepoint.

#### Source

matter.js/dist/esm/protocol/interaction/SubscriptionOptions.d.ts:26
