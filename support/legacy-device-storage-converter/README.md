# Legacy device storage converter

Converts the storage of a device built with the legacy matter.js device API (`CommissioningServer`, `MatterServer`,
`Device`, `Aggregator`; matter.js 0.8 to 0.12) into the storage of a `ServerNode`. After the conversion the device
stays commissioned in all its fabrics, and every bridged or composed endpoint keeps its endpoint number, so
controllers see the same endpoints as before.

The matter.js 0.8 migration guide says that a device moving to the new API must be recommissioned. The example
`LegacyStorageConverter` that shipped with matter.js 0.8 to 0.12 copied only fabrics, resumption records and the
event number. It kept no endpoint numbers and no attribute values, so bridged devices showed up as new devices. This
converter keeps both.

It was tested with storage written by matter.js 0.9.5.

## What is converted

| Legacy (`<node key>.<context>.<key>`)            | New (`<storage.path>/<node id>/…`)                                 |
|--------------------------------------------------|--------------------------------------------------------------------|
| `FabricManager.fabrics`, `.nextFabricIndex`      | `fabrics.fabrics`, `fabrics.nextFabricIndex`                       |
| fabric certificates and descriptors              | `root.operationalCredentials.{fabrics,nocs,trustedRootCertificates,commissionedFabrics}` |
| `acl`, `extension` in each fabric's `scopedClusterData` | `root.accessControl.{acl,extension}`                        |
| `SessionManager.resumptionRecords`               | `sessions.resumptionRecords`                                       |
| `EventHandler.lastEventNumber` (last used)       | `events.lastEventNumber` (next to use, so legacy value + 1)        |
| `EndpointStructure.<key>` (endpoint number)      | `root.parts.<id>….__number__`, `root.__nextNumber__`               |
| `Cluster-<endpoint>-<cluster>.<attribute>`       | `root[.parts.<id>…].<behavior>.<attribute>` if still persisted     |

`GeneralDiagnostics.totalOperationalHours` (hours) becomes `totalOperationalHoursCounter` (milliseconds). An
attribute is converted when the standard cluster model still has it and the node's persistence rule (non-volatile,
writable or fabric-scoped) applies to it; the others are logged and skipped. Legacy session interval names
(`idleIntervalMs`, …) are renamed to the current names, which use the same unit.

Other fabric-scoped data is logged and skipped:

- Bindings and other fabric-scoped attributes outside the root endpoint: the legacy storage does not record on which
  endpoint they lived.
- Group key maps and group memberships: the legacy API rejected `KeySetWrite`, so no group key set besides the IPK
  existed and no group could receive messages.

The legacy directory is only read. The target directory must not exist or must be empty. If the conversion fails
after it started writing, the target directory is removed again.

## Endpoint ids

The legacy API identified an endpoint by a key built from its position in the tree; the new API uses the `id` the
application gives each `Endpoint`. The converter rebuilds the legacy tree and asks a mapping function for the new id
of each endpoint (`endpointIdFor`). An endpoint the function does not map is left out together with its children;
the application then gets a new number for it when it adds it.

The CLI uses the mapping of a window-shade bridge (`ShadeBridgeEndpointIds.ts`):

```
legacy key                                   new endpoint id
<root>                                       (root)
└─ index_0                  Aggregator       hd-aggregator
   └─ unique_<ble>:<shade>  Bridged shade    <shade>-node
      ├─ index_0            primary surface  <shade>-primary
      ├─ index_1            secondary / aura <shade>-secondary | <shade>-aura
      └─ index_2            aura             <shade>-aura
```

Children are created in the order primary, secondary, aura. With two children the second one is the aura if the
legacy storage holds OnOff or LevelControl values for it, otherwise the secondary surface. If it holds no values at
all, the converter assumes a secondary surface and logs a warning.

Known limitation: the new id uses only the shade id from the legacy unique id `<ble>:<shade>`. If the legacy storage
holds two entries with the same shade id and different BLE names, both map to the same endpoint and the conversion
stops with "mapped twice" before it writes anything. Whoever uses this converter needs to check whether their gateway
can reuse a shade id for a different shade, for example after re-pairing.

Legacy entries of devices that were removed earlier are converted as well. Their numbers stay reserved, as they did
in the legacy storage, unless the application creates an endpoint with that number explicitly.

## Usage

Stop the legacy application first.

In this repository, after `npm install` and `npm run build`:

```bash
npx nacho-run support/legacy-device-storage-converter/src/ConvertLegacyStorage.ts \
    --legacy-path=<legacy storage directory> \
    --storage-path=<storage.path of the new application> \
    --node-id="<id of the new ServerNode>"
```

In an application project that has `@matter/main` installed: copy the four `.js` files from
`build/esm/src/` of this package into one directory of the project and run
`node ConvertLegacyStorage.js` there with the same options.

Options:

- `--legacy-node-key` — the legacy node context, default `0` (the first `CommissioningServer`)
- `--aggregator-id` — the id of the Aggregator endpoint, default `hd-aggregator`

The CLI prints the legacy endpoint number, the new endpoint path and the legacy key for each endpoint.

To use the conversion from code, call `convertLegacyDeviceStorage()` from `convertLegacyDeviceStorage.ts` with your
own `endpointIdFor`.

## After the conversion

- Start the new application with the same `storage.path` and node id. It must create its endpoints with the mapped
  ids, in any order.
- Stored attribute values override the defaults the application passes when it creates an endpoint, exactly as with
  storage the new API wrote itself.
- Controllers resume their CASE sessions with the converted resumption records. If a record does not match, the
  controller falls back to a full CASE handshake.
