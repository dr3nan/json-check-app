export interface Inflection {
  singular: string;
  plural: string;
};

export interface Connection {
  inbound: string[];
  outbound: string[];
};

export interface Field {
  type: string;
  required: boolean;
  unique: boolean;
  user: boolean;
  conditional: boolean;
  rules: any[];
  validation: any[];
  _id: string;
  key: string;
  name: string;
  format?: any;
};

export interface ObjectItem {
  inflections: Inflection;
  connections: Connection;
  user: boolean;
  status: string;
  tasks: any[];
  type: string;
  _id: string;
  name: string;
  fields: Field[];
  template: string;
  key: string;
  identifier: string;
};

export interface Column {
  keys: string[];
  width: number;
};

export interface Group {
  columns: Column[];
};

export interface Link {
  name: string;
  type: string;
  scene: string;
};

export interface View {
  columns: any[];
  links: Link[];
  inputs: any[];
  _id: string;
  groups: any[];
  format: string;
  label: string;
  name: string;
  type: string;
  title: string;
  description: string;
  source: any;
  key: string;
};

export interface Scene {
  groups: Group[];
  _id: string;
  name: string;
  slug: string;
  key: string;
  views: View[];
  parent: string;
};

export interface Version {
  _id: string;
  status: string;
  objects: ObjectItem[];
  scenes: Scene[];
};

export interface JSONResponse {
  _id: string;
  users: any;
  ecommerce: any;
  counts: any;
  field_count: number;
  thumb_count: number;
  object_count: number;
  task_count: number;
  view_count: number;
  scene_count: number;
  credential_count: number;
  status: string;
  settings: any;
  tasks: any[];
  payment_processors: any[];
  design: any;
  layout: any;
  copying: boolean;
  feature_flags: boolean[];
  name: string;
  slug: string;
  distributions: any[];
  versions: Version[];
  first_created: string;
  account_id: string;
  user_id: string;
};