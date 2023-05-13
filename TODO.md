# TODO List

The matter.js package is still in huge development phase and a lot of details are still missing or needs to be optimized.
It basically can already be used, but there will be (also potentially breaking) changes in the near future until anything 
stabilizes.

The following are things on my (@Apollon77) TODO list for the project right now (and not complete). If someone wuld like to take over such a topic just open an issue and describe what you plan and I'm happy to support!

## Cluster Definitions
* Complete all missing cluster definitions
* How to get all attributes/commands for automatic usage and generation? AllCLusterMap -> AllAttributeMap?

## Generic Cluster Handlers
* Add generic cluster handlers for all clusters that are not yet covered

## Core topics
* (!) Return correct error in read/write/invoke when endpoint/cluster is unknown (in comparism to attributes)
* (!) Make sure to always return correct responses for requests and not have "dead return" states
* (!) Refactor throw in command handler to be catched per command and converted correctly to response
* Monitor subscriptions and remove/resubscribe them when the device did not answered withing maxInterval, how notify device?
* DataReport chunking when sending too long arrays
* Add support for group casts and groups in general (after Multicast refactor)
* Refactor MDNS; try to find out maybe why multicast receiving issue exists
  * Think about logging of "new" relevant matter data (just these)
  * _matterc support - right now mdnsscanner only checks matter
* Adjust Fabric storage with sub contexts
* 

## New API

### General
* The storage is not yet changed to allow a Multi-Node structure. Add Sub-Context-Structure This will come as breaking change soon.
* The storage also needs to be used for more internal node data (e.g. endpoint composition, etc.)
* How to generically get default command handlers for cluster?
* How to generically get Clusters by Feature Combination? Also Handlers?
* Restructure everything to get rid of MatterDevice and MatterController classes and use the new API instead
* Add Ansi Logging and allow to CLI specify Loglevel
* ts-node and project references - try other ts-config

### Device usage
* Use storage to remember endpoint composition (e.g. by serialnumber/unique-id field) and correctly structure endpoints on restarts (incl. saving highes last used endpoint id to not reuse ids)
* Experiment with Bindung cluster and add logic
* check TODOs in the device classes and adjust accordingly
* Investigate/Check specs on how to add new devices to a bridge (check Matter Core specs) to enhance bridge "on the fly"
* Unique IDs vs endpoint id - idea: dev defined endpoint ids themself or we urge him to always set unique unique serialnumbers or other unique ID
* Check bridge and composed devices with tuya, smartthings and Alexa again; and test composed device with google

### Controller usage
* The new Controller (pairable node) API is still WIP in some places to optimize again
  * Automatic subscribe to anything
  * Instantiate correct device classes based on features
  * use more attribute infos to create paired device objects with correct features/commands/attributes
* check TODOs in the device classes and adjust accordingly
* Add pairing using MDNS discovery

### Multi Node feature
* Restructure and combine InteractionClient/Server
* Restructure MdnsScanner to be able to scan for multiple nodes and spread the traffic to the node instances
* Restructure MdnsBroadcaster to announce multiple nodes (port must not be hard coded)

