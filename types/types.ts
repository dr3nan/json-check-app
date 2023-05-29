export interface JSONResponse {
  _id: string;
  users: Users;
  ecommerce: Ecommerce;
  counts: Counts;
  field_count: number;
  thumb_count: number;
  object_count: number;
  task_count: number;
  view_count: number;
  scene_count: number;
  credential_count: number;
  status: string;
  settings: Settings;
  tasks: any[];
  payment_processors: any[];
  design: Design;
  layout: Layout;
  copying: boolean;
  feature_flags: boolean[];
  name: string;
  slug: string;
  distributions: any[];
  versions: Version[];
  first_created: Date;
  account_id: string;
  user_id: string;
}

export interface Counts {
  total_entries: number;
  asset_count: number;
  asset_size: number;
}

export interface Design {
  general: General;
  regions: Regions;
  components: Components;
}

export interface Components {
  notifications: Ons;
}

export interface Ons {
  color: string;
  bg_color: string;
}

export interface General {
  theme: string;
  font: string;
  links: Links;
  buttons: Ons;
  tables: Tables;
}

export interface Links {
  color: string;
}

export interface Tables {
  style: string;
  dividers: boolean;
  striped: boolean;
  hover: boolean;
  spacing: string;
}

export interface Regions {
  body: Body;
  header: Header;
}

export interface Body {
  full_width: boolean;
}

export interface Header {
  bg_color: string;
  menu: Menu;
  title: Title;
}

export interface Menu {
  show: boolean;
  user_auth_based: boolean;
  format: string;
  color: string;
  outline_or_fill_color: string;
}

export interface Title {
  color: string;
  show_logo: boolean;
}

export interface Ecommerce {
  enabled: boolean;
}

export interface Layout {
  entry_scene_menu: boolean;
  app_menu_auth: boolean;
  theme: string;
}

export interface Settings {
  geo: boolean;
  timezone: string;
  timezone_offset: string;
  timezone_dst: string;
  cluster: string;
  powered_by_link: boolean;
  new_count: boolean;
  registration_migration_status: string;
  https_redirect: boolean;
  should_purge_record_history: boolean;
  support_access: boolean;
  use_multiple_api_subdomains: boolean;
  scriptProtectionEnabled: boolean;
  embed_login_method: string;
  ignoreBilling: boolean;
  v3_beta: boolean;
  v3_open_beta: boolean;
  mongo: string;
  solr: string;
}

export interface Users {
  enabled: boolean;
  scope: string;
  registration: string;
}

export interface Version {
  _id: string;
  status: string;
  objects: Object[];
  scenes: Scene[];
}

export interface Object {
  inflections: Inflections;
  connections: Connections;
  user: boolean;
  status: string;
  tasks: any[];
  type: string;
  _id: string;
  name: string;
  fields: FieldElement[];
  template?: string;
  key: string;
  identifier: string;
  profile_key?: string;
}

export interface Connections {
  inbound: any[];
  outbound: any[];
}

export interface FieldElement {
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
  format?: Format | null;
  default?: boolean;
  immutable?: boolean;
}

export interface Format {
  source?: string;
  thumbs?: any[];
  format?: string;
  default?: boolean | string;
  input?: string;
  required?: boolean;
  text_format?: string;
  label?: string;
  options?: string[];
  blank?: string;
  sorting?: string;
  type?: string;
  calendar?: boolean;
  date_format?: string;
  default_time?: string;
  default_type?: string;
  time_format?: string;
  time_type?: string;
  enable_autocomplete?: boolean;
}

export interface Inflections {
  singular: string;
  plural: string;
}

export interface Scene {
  groups: SceneGroup[];
  _id: string;
  name: string;
  slug: string;
  key: string;
  views: View[];
  parent?: null | string;
  object?: null | string;
  type?: string;
  limit_profile_access?: boolean;
  allowed_profiles?: any[];
}

export interface SceneGroup {
  columns: PurpleColumn[];
}

export interface PurpleColumn {
  keys: string[];
  width: number;
}

export interface View {
  columns: ViewColumn[];
  links: Link[];
  inputs: any[];
  _id: string;
  groups?: ViewGroup[];
  format?: string;
  label?: string;
  name: string;
  type: string;
  title: string;
  description: Description;
  source?: Source;
  key: string;
  limit_profile_access?: boolean;
  allowed_profiles?: any[];
  registration_type?: string;
  action?: string;
  rules?: Rules;
  no_data_text?: string;
  totals?: any[];
  preset_filters?: any[];
  rows_per_page?: string;
  keyword_search?: boolean;
  allow_exporting?: boolean;
  allow_preset_filters?: boolean;
  filter_type?: string;
  menu_filters?: any[];
  filter_fields?: FilterFields;
  alert?: string;
  layout?: string;
  label_format?: LabelFormat;
}

export interface ViewColumn {
  grouping?: boolean;
  group_sort?: GroupSort;
  ignore_edit?: boolean;
  ignore_summary?: boolean;
  conn_separator?: string;
  conn_link?: string;
  link_type?: LinkType;
  link_text?: FilterFields;
  link_field?: string;
  icon?: Icon;
  img_gallery?: string;
  width: WidthClass | number;
  align?: LabelFormat;
  rules?: any[];
  field?: ColumnField;
  header?: string;
  type?: ColumnType;
  scene?: string;
  sortable?: boolean;
  groups?: ColumnGroup[];
}

export enum LabelFormat {
  Left = "left",
}

export interface ColumnField {
  key: string;
}

export enum GroupSort {
  Asc = "asc",
}

export interface ColumnGroup {
  columns: Array<FluffyColumn[]>;
}

export interface FluffyColumn {
  key: string;
  name: string;
}

export interface Icon {
  icon: string;
  align: LabelFormat;
}

export enum FilterFields {
  Edit = "edit",
  Empty = "",
  View = "view",
}

export enum LinkType {
  Text = "text",
}

export enum ColumnType {
  Field = "field",
  Link = "link",
}

export interface WidthClass {
  type: WidthType;
  units: Units;
  amount: string;
}

export enum WidthType {
  Default = "default",
}

export enum Units {
  Px = "px",
}

export enum Description {
  Empty = "",
  EnterYourEmailAddressAndPasswordToLogin = "Enter your email address and password to login.",
}

export interface ViewGroup {
  columns: TentacledColumn[];
}

export interface TentacledColumn {
  inputs: Input[];
}

export interface Input {
  key?: string;
  type: string;
  label: string;
  field: ColumnField;
  id?: string;
  action_authenticate?: boolean;
  label_authenticate?: string;
  action_update?: boolean;
  label_update?: string;
}

export interface Link {
  name: string;
  type: string;
  scene: string;
}

export interface Rules {
  submits: Submit[];
}

export interface Submit {
  is_default: boolean;
  reload_show: boolean;
  message: string;
  action: string;
  key: string;
}

export interface Source {
  criteria?: Criteria;
  limit?: null | string;
  sort?: Sort[];
  type?: string;
  authenticated_user?: boolean;
  object?: string;
}

export interface Criteria {
  match: string;
  rules: any[];
  groups: any[];
}

export interface Sort {
  field: string;
  order: GroupSort;
}

// export { JSONResponse, Version, Scene, View, Link, Group, Column, ObjectItem, Field, Connection, Inflection };