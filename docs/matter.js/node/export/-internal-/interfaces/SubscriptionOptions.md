[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [node/export](../../README.md) / [\<internal\>](../README.md) / SubscriptionOptions

# Interface: SubscriptionOptions

Server options that control subscription handling.

## Properties

### maxIntervalSeconds?

> `optional` **maxIntervalSeconds**: `number`

Optional maximum subscription interval to use for sending subscription reports. It will be used if not too
low and inside the range requested by the connected controller.

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionOptions.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionOptions.ts#L26)

***

### minIntervalSeconds?

> `optional` **minIntervalSeconds**: `number`

Optional minimum subscription interval to use for sending subscription reports. It will be used when other
calculated values are smaller than it. Use this to make sure your device hardware can handle the load and to
set limits.

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionOptions.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionOptions.ts#L33)

***

### randomizationWindowSeconds?

> `optional` **randomizationWindowSeconds**: `number`

Optional subscription randomization window to use for sending subscription reports. This specifies a window
in seconds from which a random part is added to the calculated maximum interval to make sure that devices
that get powered on in parallel not all send at the same timepoint.

#### Source

[packages/matter.js/src/protocol/interaction/SubscriptionOptions.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/SubscriptionOptions.ts#L40)
