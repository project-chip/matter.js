# Changelog for matter.js

## 0.4.0 (WIP)
* Matter-Core functionality:
  * Generate global Attributes attributeList, acceptedCommandList and generatedCommandList when generating cluster servers (when used with New API!)
* matter.js API:
  * Introduce new High level API, see [API.md](./packages/matter.js/API.md) for details!
  * Breaking: Move DeviceTypes.ts from common to device directory and rename DEVICE to "DeviceTypes"
  * Breaking: ClusterClient interface names changed to get/set/subscribeNAMEAttribute to prevent overlapping with commands
  * Breaking: Revamp internal APIs and convert ClusterServer into an object approach to allow dynamic methods to be defined for get/set/subscribe and streamline the API between ClusterClient and ClusterServer
  * Introduce NamedHandler util class for an event style typed and named handler/callback approach
  * Use NamedHandler as commandHandler to forward command calls like identify to the Device classes and testEvenTriggered for commissionable node class
  * Add constructor value to hand over initial values of the onoff Cluster when initialing the default cluster
  * make sure BridgedBasicInformation cluster is always set when adding a bridged device and no data parameters were provided
* matter-node.js:
  * Autoregister Crypto, Time and Network in their Node.js variants when including packages from @project-chip/matter-node.js root package but only if not yet registered (so can be overridden by the developer)
  * Examples/Reference implementations:
    * The reference implementations are moved to example directory and details moved into own [README_EXAMPLES.md](./packages/matter-node.js/README_EXAMPLES.md) file
    * the "npm run matter" command got renamed to "npm run matter-device" (same for binary usage
    * Add hints for all imports in the examples to show what the corresponding "matter-node.js" import would be (because they can not be used directly for build reasons)
    * Added the "npm run matter-*" commands also to the base package.json

## 0.3.0 (2023-05-03)
* Initial release of matter.js and matter-node.js packages after the code merge
* From now on we will add a changelog for each release

## < 0.3.0
* Releases of matter.js with initial Logic
