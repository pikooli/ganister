/// <reference path="./common.d.ts" />

interface AuthContextType {
  user: {
    email: string;
    firstName: string;
    lastName: string;
    name: string;
    pict: string;
    token: string;
    tokenExpiration: string;
  } | null;
  setUser: Function;
}

type Part = {
  properties: {
    description: string;
    externalRef: string;
    name: string;
    tags: string;
    type: string;
    _createdBy: string;
    _createdByName: string;
    _createdOn: number;
    _id: string;
    _labelRef: string;
    _lockState: true;
    _lockable: true;
    _lockedBy: string;
    _lockedByName: string;
    _lockedOn: number;
    _modifiedOn: number;
    _ref: string;
    _serialized: [];
    _state: string;
    _tracked: boolean;
    _version: string;
    _versionedOn: number;
  };
};

type PartBom = {
  _type: string;
  _id: string;
  properties: {
    _isEffective: true;
    _createdByName: string;
    _createdOn: number;
    quantity: number;
    _effectiveOn: number;
    _isLatest: true;
    _createdBy: number;
    _id: string;
  };
  source: {
    _type: string;
    _id: string;
    properties: {
      _createdOn: number;
      _lockedByName: string;
      description: string;
      _createdBy: string;
      type: string;
      externalRef: string;
      _lockState: true;
      tags: string;
      _promotions: [];
      _versionedOn: number;
      _lockedOn: number;
      _createdByName: string;
      _state: string;
      name: string;
      _ref: string;
      _lockedBy: string;
      _serialized: [];
      _history: [
        {
          _modifiedOn: number;
          user: {
            _id: string;
            _labelRef: string;
          };
          properties: {
            _serialized: [];
          };
        }
      ];
      _tracked: false;
      _id: string;
      _lockable: true;
      _version: string;
      _modifiedOn: number;
      _labelRef: string;
    };
  };
  target: {
    _type: string;
    _id: string;
    properties: {
      _thumbnail: null;
      _createdOn: number;
      _createdBy: string;
      _lockState: false;
      _promotions: [];
      _versionedOn: number;
      _createdByName: string;
      _state: string;
      _serialized: [];
      _history: [];
      _tracked: false;
      _id: string;
      _lockable: true;
      _version: string;
      _labelRef: string;
    };
  };
};
