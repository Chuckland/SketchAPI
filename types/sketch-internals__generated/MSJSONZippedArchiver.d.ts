interface MSJSONZippedArchiverUninitialized<InitializedType = MSJSONZippedArchiver> extends MSJSONArchiverUninitialized<MSJSONZippedArchiver> {
  initWithURL(url: NSURL): InitializedType;
}

interface MSJSONZippedArchiver extends MSJSONArchiver {
  encodeObject_toSubpath_error(root: NSObject, path: NSString | string, error: MOPointer<NSError>): boolean;
  encodeRawData_toSubpath_error(data: NSData, path: NSString | string, error: MOPointer<NSError>): boolean;
  finishEncodingError(error: MOPointer<NSError>): boolean;
}

declare const MSJSONZippedArchiver: {
  alloc(): MSJSONZippedArchiverUninitialized;
  class(): MSJSONZippedArchiver;
  archiverFromCoder(coder: BCJSONEncoder): MSJSONArchiver;
  archiveObject_coder(object: NSObject, coder: BCJSONEncoder): void;
  accessInstanceVariablesDirectly(): boolean;

}

