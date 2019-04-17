// Buffer class
type BufferEncoding =
  | 'ascii'
  | 'utf8'
  | 'utf-8'
  | 'utf16le'
  | 'ucs2'
  | 'ucs-2'
  | 'base64'
  | 'latin1'
  | 'binary'
  | 'hex'
  | 'nsdata'

interface Buffer extends Uint8Array {
  constructor: typeof Buffer
  write(string: string, encoding?: BufferEncoding): number
  write(string: string, offset: number, encoding?: BufferEncoding): number
  write(
    string: string,
    offset: number,
    length: number,
    encoding?: BufferEncoding
  ): number
  toString(encoding?: string, start?: number, end?: number): string
  toJSON(): { type: 'Buffer'; data: number[] }
  toNSData(): NSData
  equals(otherBuffer: Uint8Array): boolean
  compare(
    otherBuffer: Uint8Array,
    targetStart?: number,
    targetEnd?: number,
    sourceStart?: number,
    sourceEnd?: number
  ): number
  copy(
    targetBuffer: Uint8Array,
    targetStart?: number,
    sourceStart?: number,
    sourceEnd?: number
  ): number
  slice(start?: number, end?: number): Buffer
  subarray(begin: number, end?: number): Buffer
  writeUIntLE(value: number, offset: number, byteLength: number): number
  writeUIntBE(value: number, offset: number, byteLength: number): number
  writeIntLE(value: number, offset: number, byteLength: number): number
  writeIntBE(value: number, offset: number, byteLength: number): number
  readUIntLE(offset: number, byteLength: number): number
  readUIntBE(offset: number, byteLength: number): number
  readIntLE(offset: number, byteLength: number): number
  readIntBE(offset: number, byteLength: number): number
  readUInt8(offset: number): number
  readUInt16LE(offset: number): number
  readUInt16BE(offset: number): number
  readUInt32LE(offset: number): number
  readUInt32BE(offset: number): number
  readInt8(offset: number): number
  readInt16LE(offset: number): number
  readInt16BE(offset: number): number
  readInt32LE(offset: number): number
  readInt32BE(offset: number): number
  readFloatLE(offset: number): number
  readFloatBE(offset: number): number
  readDoubleLE(offset: number): number
  readDoubleBE(offset: number): number
  reverse(): this
  swap16(): Buffer
  swap32(): Buffer
  swap64(): Buffer
  writeUInt8(value: number, offset: number): number
  writeUInt16LE(value: number, offset: number): number
  writeUInt16BE(value: number, offset: number): number
  writeUInt32LE(value: number, offset: number): number
  writeUInt32BE(value: number, offset: number): number
  writeInt8(value: number, offset: number): number
  writeInt16LE(value: number, offset: number): number
  writeInt16BE(value: number, offset: number): number
  writeInt32LE(value: number, offset: number): number
  writeInt32BE(value: number, offset: number): number
  writeFloatLE(value: number, offset: number): number
  writeFloatBE(value: number, offset: number): number
  writeDoubleLE(value: number, offset: number): number
  writeDoubleBE(value: number, offset: number): number
  fill(value: any, offset?: number, end?: number): this
  indexOf(
    value: string | number | Uint8Array,
    byteOffset?: number,
    encoding?: BufferEncoding
  ): number
  lastIndexOf(
    value: string | number | Uint8Array,
    byteOffset?: number,
    encoding?: BufferEncoding
  ): number
  entries(): IterableIterator<[number, number]>
  includes(
    value: string | number | Buffer,
    byteOffset?: number,
    encoding?: BufferEncoding
  ): boolean
  keys(): IterableIterator<number>
  values(): IterableIterator<number>
}

/**
 * Raw data is stored in instances of the Buffer class.
 * A Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.  A Buffer cannot be resized.
 * Valid string encodings: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
 */
declare const Buffer: {
  prototype: Buffer
  /**
   * When passed a reference to the .buffer property of a TypedArray instance,
   * the newly created Buffer will share the same allocated memory as the TypedArray.
   * The optional {byteOffset} and {length} arguments specify a memory range
   * within the {arrayBuffer} that will be shared by the Buffer.
   *
   * @param arrayBuffer The .buffer property of any TypedArray or a new ArrayBuffer()
   */
  from(
    arrayBuffer: ArrayBuffer | NSData,
    byteOffset?: number,
    length?: number
  ): Buffer
  /**
   * Creates a new Buffer using the passed {data}
   * @param data data to create a new Buffer
   */
  from(data: number[]): Buffer
  from(data: Uint8Array): Buffer
  /**
   * Creates a new Buffer containing the given JavaScript string {str}.
   * If provided, the {encoding} parameter identifies the character encoding.
   * If not provided, {encoding} defaults to 'utf8'.
   */
  from(str: string, encoding?: BufferEncoding): Buffer
  /**
   * Creates a new Buffer using the passed {data}
   * @param values to create a new Buffer
   */
  of(...items: number[]): Buffer
  /**
   * Returns true if {obj} is a Buffer
   *
   * @param obj object to test.
   */
  isBuffer(obj: any): obj is Buffer
  /**
   * Returns true if {encoding} is a valid encoding argument.
   * Valid string encodings in Node 0.12: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'
   *
   * @param encoding string to test.
   */
  isEncoding(encoding: string): encoding is BufferEncoding
  /**
   * Gives the actual byte length of a string. encoding defaults to 'utf8'.
   * This is not the same as String.prototype.length since that returns the number of characters in a string.
   *
   * @param string string to test.
   * @param encoding encoding used to evaluate (defaults to 'utf8')
   */
  byteLength(
    string: string | DataView | ArrayBuffer,
    encoding?: BufferEncoding
  ): number
  /**
   * Returns a buffer which is the result of concatenating all the buffers in the list together.
   *
   * If the list has no items, or if the totalLength is 0, then it returns a zero-length buffer.
   * If the list has exactly one item, then the first item of the list is returned.
   * If the list has more than one item, then a new Buffer is created.
   *
   * @param list An array of Buffer objects to concatenate
   * @param totalLength Total length of the buffers when concatenated.
   *   If totalLength is not provided, it is read from the buffers in the list. However, this adds an additional loop to the function, so it is faster to provide the length explicitly.
   */
  concat(list: Uint8Array[], totalLength?: number): Buffer
  /**
   * The same as buf1.compare(buf2).
   */
  compare(buf1: Uint8Array, buf2: Uint8Array): number
  /**
   * Allocates a new buffer of {size} octets.
   *
   * @param size count of octets to allocate.
   * @param fill if specified, buffer will be initialized by calling buf.fill(fill).
   *    If parameter is omitted, buffer will be filled with zeros.
   * @param encoding encoding used for call to buf.fill while initalizing
   */
  alloc(
    size: number,
    fill?: string | Buffer | number,
    encoding?: BufferEncoding
  ): Buffer
  /**
   * Allocates a new buffer of {size} octets, leaving memory not initialized, so the contents
   * of the newly created Buffer are unknown and may contain sensitive data.
   *
   * @param size count of octets to allocate
   */
  allocUnsafe(size: number): Buffer
  /**
   * Allocates a new non-pooled buffer of {size} octets, leaving memory not initialized, so the contents
   * of the newly created Buffer are unknown and may contain sensitive data.
   *
   * @param size count of octets to allocate
   */
  allocUnsafeSlow(size: number): Buffer
  /**
   * This is the number of bytes used to determine the size of pre-allocated, internal Buffer instances used for pooling. This value may be modified.
   */
  poolSize: number
}

declare module 'buffer' {
  export const INSPECT_MAX_BYTES: number
  const BuffType: typeof Buffer

  export type TranscodeEncoding =
    | 'ascii'
    | 'utf8'
    | 'utf16le'
    | 'ucs2'
    | 'latin1'
    | 'binary'

  export function transcode(
    source: Buffer | Uint8Array,
    fromEnc: TranscodeEncoding,
    toEnc: TranscodeEncoding
  ): Buffer

  export const SlowBuffer: {
    /** @deprecated since v6.0.0, use Buffer.allocUnsafeSlow() */
    new (size: number): Buffer
    prototype: Buffer
  }

  export { BuffType as Buffer }
}
