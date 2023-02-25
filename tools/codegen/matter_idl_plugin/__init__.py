"""Plugin module to matter_idl for auto-generation of .proto files.

This module provides a plugin to the matter_idl tool from the Matter SDK
(https://github.com/project-chip/connectedhomeip/tree/master/scripts/py_matter_idl)
to assist auto-generating matter.js TLV schema definitions from the
Matter SDK XML schema.
"""

import os
from typing import List

import jinja2
from matter_idl.generators import CodeGenerator
from matter_idl.generators import GeneratorStorage
from matter_idl.matter_idl_types import Attribute
from matter_idl.matter_idl_types import Cluster
from matter_idl.matter_idl_types import ClusterSide
from matter_idl.matter_idl_types import Command
from matter_idl.matter_idl_types import Field
from matter_idl.matter_idl_types import Idl


def toUpperCamelCase(s: str) -> str:
  """ Converts a lowerCamelCase string to UpperCamelCase."""
  return s[0].upper() + s[1:]

def toLowerCamelCase(s: str) -> str:
  """ Lower the first character of the given string."""
  return s[0].lower() + s[1:]

def toTlvSchemaType(zap_type: str) -> str:
  """Convert zap type to protobuf type."""
  u8_types = [
      "int8u",
      "enum8",
      "bitmap8",
  ]

  u16_types = [
      "int16u",
      "enum16",
      "bitmap16",
      "group_id",
  ]

  u32_types = [
      "int32u",
      "int24u",
      "uint32",
      "enum32",
      "bitmap32",
      "cluster_id",
      "attrib_id",
      "event_id",
      "command_id",
      "endpoint_no",
      "devtype_id",
      "fabric_idx",
      "vendor_id",
      "status_code",
      "faulttype",
      "levelcontroloptions",
      "percent100ths",
      "percent",
      "epoch_s",
  ]
  u64_types = [
      "uint64",
      "enum64",
      "bitmap64",
      "node_id",
      "fabric_id",
      "int40u",
      "int48u",
      "int56u",
      "int64u",
      "epoch_us",
  ]
  i8_types = ["int8s"]
  i16_types = ["int16s"]
  i32_types = ["int32", "int24s", "int32s"]
  i64_types = ["int64", "int40s", "int48s", "int56s", "int64s"]
  float_types = ["float", "single"]
  string_types = ["char_string", "long_char_string"]
  bytes_types = ["octet_string", "long_octet_string"]

  zap_type_lower = zap_type.lower()
  if zap_type_lower in u8_types:
    return "TlvUInt8"
  if zap_type_lower in u16_types:
    return "TlvUInt16"
  if zap_type_lower in u32_types:
    return "TlvUInt32"
  if zap_type_lower in u64_types:
    return "TlvUInt64"
  if zap_type_lower in i8_types:
    return "TlvInt8"
  if zap_type_lower in i16_types:
    return "TlvInt16"
  if zap_type_lower in i32_types:
    return "TlvInt32"
  if zap_type_lower in i64_types:
    return "TlvInt64"
  if zap_type_lower in float_types:
    return "TlvFloat"
  if zap_type_lower == "double":
    return "TlvDouble"
  if zap_type_lower == "boolean":
    return "TlvBoolean"
  if zap_type_lower in string_types:
    return "TlvString"
  if zap_type_lower in bytes_types:
    return "TlvBbytes"

  # If no match, return the original type name for the Struct, Enum, or Bitmap.
  return zap_type

def toTlvSchemaFullType(field: Field) -> str:
  """Return the full protobuf type for the given field, including repeated and optional specifiers."""
  return toTlvSchemaType(field.data_type.name)

def CommandArgs(command: Command, cluster: Cluster) -> List[Field]:
  """Return the list of fields for the command request for the given command and cluster."""
  for struct in cluster.structs:
    if struct.name == command.input_param:
      return struct.fields

  # If the command has no input parameters, just return an empty list.
  return []


def CommandResponseArgs(command: Command, cluster: Cluster) -> List[Field]:
  """Return the list of fields for the command response for the given command and cluster."""
  for struct in cluster.structs:
    if struct.name == command.output_param:
      return struct.fields

  return []

class CustomGenerator(CodeGenerator):
  """Example of a custom generator.

  Outputs protobuf representation of Matter clusters.
  """

  def __init__(self, storage: GeneratorStorage, idl: Idl, **kargs):
    """Inintialization is specific for java generation and will add filters as required by the java .jinja templates to function."""
    super().__init__(storage, idl)

    # Override the template path to use local templates within this plugin
    # directory.
    self.jinja_env = jinja2.Environment(
        loader=jinja2.FileSystemLoader(searchpath=os.path.dirname(__file__)),
        keep_trailing_newline=True,
    )

    # String helpers
    self.jinja_env.filters["toLowerCamelCase"] = toLowerCamelCase
    self.jinja_env.filters["toUpperCamelCase"] = toUpperCamelCase

    # Type helpers
    self.jinja_env.filters["toTlvSchemaType"] = toTlvSchemaType
    self.jinja_env.filters["toTlvSchemaFullType"] = toTlvSchemaFullType

    # Command helpers
    self.jinja_env.filters["commandArgs"] = CommandArgs
    self.jinja_env.filters["commandResponseArgs"] = CommandResponseArgs

  def internal_render_all(self):
    """Renders the given custom template to the given output filename."""

    # Every cluster has its own impl, to avoid
    # very large compilations (running out of RAM)
    for cluster in self.idl.clusters:
      if cluster.side != ClusterSide.CLIENT:
        continue

      filename = "out/%sCluster.ts" % toUpperCamelCase(cluster.name)

      # Header containing a macro to initialize all cluster plugins
      self.internal_render_one_output(
          template_path="./matter_js_schema.jinja",
          output_file_name=filename,
          vars={
              "cluster": cluster,
          },
      )
