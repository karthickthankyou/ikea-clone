import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _text: any;
  jsonb: any;
  numeric: any;
  smallint: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_text']>;
  _gt?: InputMaybe<Scalars['_text']>;
  _gte?: InputMaybe<Scalars['_text']>;
  _in?: InputMaybe<Array<Scalars['_text']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_text']>;
  _lte?: InputMaybe<Scalars['_text']>;
  _neq?: InputMaybe<Scalars['_text']>;
  _nin?: InputMaybe<Array<Scalars['_text']>>;
};

/** Categories of products */
export type Categories = {
  __typename?: 'categories';
  name: Scalars['String'];
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey'
}

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  Name = 'name'
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "order_logs" */
  delete_order_logs?: Maybe<Order_Logs_Mutation_Response>;
  /** delete single row from the table: "order_logs" */
  delete_order_logs_by_pk?: Maybe<Order_Logs>;
  /** delete data from the table: "order_status_type" */
  delete_order_status_type?: Maybe<Order_Status_Type_Mutation_Response>;
  /** delete single row from the table: "order_status_type" */
  delete_order_status_type_by_pk?: Maybe<Order_Status_Type>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "rooms" */
  delete_rooms?: Maybe<Rooms_Mutation_Response>;
  /** delete single row from the table: "rooms" */
  delete_rooms_by_pk?: Maybe<Rooms>;
  /** delete data from the table: "user_products" */
  delete_user_products?: Maybe<User_Products_Mutation_Response>;
  /** delete single row from the table: "user_products" */
  delete_user_products_by_pk?: Maybe<User_Products>;
  /** delete data from the table: "user_products_type" */
  delete_user_products_type?: Maybe<User_Products_Type_Mutation_Response>;
  /** delete single row from the table: "user_products_type" */
  delete_user_products_type_by_pk?: Maybe<User_Products_Type>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "views" */
  delete_views?: Maybe<Views_Mutation_Response>;
  /** delete single row from the table: "views" */
  delete_views_by_pk?: Maybe<Views>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "order_logs" */
  insert_order_logs?: Maybe<Order_Logs_Mutation_Response>;
  /** insert a single row into the table: "order_logs" */
  insert_order_logs_one?: Maybe<Order_Logs>;
  /** insert data into the table: "order_status_type" */
  insert_order_status_type?: Maybe<Order_Status_Type_Mutation_Response>;
  /** insert a single row into the table: "order_status_type" */
  insert_order_status_type_one?: Maybe<Order_Status_Type>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "rooms" */
  insert_rooms?: Maybe<Rooms_Mutation_Response>;
  /** insert a single row into the table: "rooms" */
  insert_rooms_one?: Maybe<Rooms>;
  /** insert data into the table: "user_products" */
  insert_user_products?: Maybe<User_Products_Mutation_Response>;
  /** insert a single row into the table: "user_products" */
  insert_user_products_one?: Maybe<User_Products>;
  /** insert data into the table: "user_products_type" */
  insert_user_products_type?: Maybe<User_Products_Type_Mutation_Response>;
  /** insert a single row into the table: "user_products_type" */
  insert_user_products_type_one?: Maybe<User_Products_Type>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "views" */
  insert_views?: Maybe<Views_Mutation_Response>;
  /** insert a single row into the table: "views" */
  insert_views_one?: Maybe<Views>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update data of the table: "order_logs" */
  update_order_logs?: Maybe<Order_Logs_Mutation_Response>;
  /** update single row of the table: "order_logs" */
  update_order_logs_by_pk?: Maybe<Order_Logs>;
  /** update data of the table: "order_status_type" */
  update_order_status_type?: Maybe<Order_Status_Type_Mutation_Response>;
  /** update single row of the table: "order_status_type" */
  update_order_status_type_by_pk?: Maybe<Order_Status_Type>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update data of the table: "rooms" */
  update_rooms?: Maybe<Rooms_Mutation_Response>;
  /** update single row of the table: "rooms" */
  update_rooms_by_pk?: Maybe<Rooms>;
  /** update data of the table: "user_products" */
  update_user_products?: Maybe<User_Products_Mutation_Response>;
  /** update single row of the table: "user_products" */
  update_user_products_by_pk?: Maybe<User_Products>;
  /** update data of the table: "user_products_type" */
  update_user_products_type?: Maybe<User_Products_Type_Mutation_Response>;
  /** update single row of the table: "user_products_type" */
  update_user_products_type_by_pk?: Maybe<User_Products_Type>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "views" */
  update_views?: Maybe<Views_Mutation_Response>;
  /** update single row of the table: "views" */
  update_views_by_pk?: Maybe<Views>;
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Order_LogsArgs = {
  where: Order_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Logs_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Order_Status_TypeArgs = {
  where: Order_Status_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Status_Type_By_PkArgs = {
  type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_RoomsArgs = {
  where: Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rooms_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_User_ProductsArgs = {
  where: User_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Products_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_Products_TypeArgs = {
  where: User_Products_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Products_Type_By_PkArgs = {
  type: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  uid: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ViewsArgs = {
  where: Views_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Views_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_LogsArgs = {
  objects: Array<Order_Logs_Insert_Input>;
  on_conflict?: InputMaybe<Order_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Logs_OneArgs = {
  object: Order_Logs_Insert_Input;
  on_conflict?: InputMaybe<Order_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Status_TypeArgs = {
  objects: Array<Order_Status_Type_Insert_Input>;
  on_conflict?: InputMaybe<Order_Status_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Status_Type_OneArgs = {
  object: Order_Status_Type_Insert_Input;
  on_conflict?: InputMaybe<Order_Status_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoomsArgs = {
  objects: Array<Rooms_Insert_Input>;
  on_conflict?: InputMaybe<Rooms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rooms_OneArgs = {
  object: Rooms_Insert_Input;
  on_conflict?: InputMaybe<Rooms_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_ProductsArgs = {
  objects: Array<User_Products_Insert_Input>;
  on_conflict?: InputMaybe<User_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Products_OneArgs = {
  object: User_Products_Insert_Input;
  on_conflict?: InputMaybe<User_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Products_TypeArgs = {
  objects: Array<User_Products_Type_Insert_Input>;
  on_conflict?: InputMaybe<User_Products_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Products_Type_OneArgs = {
  object: User_Products_Type_Insert_Input;
  on_conflict?: InputMaybe<User_Products_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ViewsArgs = {
  objects: Array<Views_Insert_Input>;
  on_conflict?: InputMaybe<Views_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Views_OneArgs = {
  object: Views_Insert_Input;
  on_conflict?: InputMaybe<Views_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_LogsArgs = {
  _inc?: InputMaybe<Order_Logs_Inc_Input>;
  _set?: InputMaybe<Order_Logs_Set_Input>;
  where: Order_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Logs_By_PkArgs = {
  _inc?: InputMaybe<Order_Logs_Inc_Input>;
  _set?: InputMaybe<Order_Logs_Set_Input>;
  pk_columns: Order_Logs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Status_TypeArgs = {
  _set?: InputMaybe<Order_Status_Type_Set_Input>;
  where: Order_Status_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Status_Type_By_PkArgs = {
  _set?: InputMaybe<Order_Status_Type_Set_Input>;
  pk_columns: Order_Status_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _append?: InputMaybe<Products_Append_Input>;
  _delete_at_path?: InputMaybe<Products_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Products_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Products_Delete_Key_Input>;
  _inc?: InputMaybe<Products_Inc_Input>;
  _prepend?: InputMaybe<Products_Prepend_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _append?: InputMaybe<Products_Append_Input>;
  _delete_at_path?: InputMaybe<Products_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Products_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Products_Delete_Key_Input>;
  _inc?: InputMaybe<Products_Inc_Input>;
  _prepend?: InputMaybe<Products_Prepend_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RoomsArgs = {
  _set?: InputMaybe<Rooms_Set_Input>;
  where: Rooms_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rooms_By_PkArgs = {
  _set?: InputMaybe<Rooms_Set_Input>;
  pk_columns: Rooms_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ProductsArgs = {
  _inc?: InputMaybe<User_Products_Inc_Input>;
  _set?: InputMaybe<User_Products_Set_Input>;
  where: User_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Products_By_PkArgs = {
  _inc?: InputMaybe<User_Products_Inc_Input>;
  _set?: InputMaybe<User_Products_Set_Input>;
  pk_columns: User_Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Products_TypeArgs = {
  _set?: InputMaybe<User_Products_Type_Set_Input>;
  where: User_Products_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Products_Type_By_PkArgs = {
  _set?: InputMaybe<User_Products_Type_Set_Input>;
  pk_columns: User_Products_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ViewsArgs = {
  _inc?: InputMaybe<Views_Inc_Input>;
  _set?: InputMaybe<Views_Set_Input>;
  where: Views_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Views_By_PkArgs = {
  _inc?: InputMaybe<Views_Inc_Input>;
  _set?: InputMaybe<Views_Set_Input>;
  pk_columns: Views_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** The logs or the orders placed. */
export type Order_Logs = {
  __typename?: 'order_logs';
  activity: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  order: Orders;
  orderId: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "order_logs" */
export type Order_Logs_Aggregate = {
  __typename?: 'order_logs_aggregate';
  aggregate?: Maybe<Order_Logs_Aggregate_Fields>;
  nodes: Array<Order_Logs>;
};

/** aggregate fields of "order_logs" */
export type Order_Logs_Aggregate_Fields = {
  __typename?: 'order_logs_aggregate_fields';
  avg?: Maybe<Order_Logs_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Order_Logs_Max_Fields>;
  min?: Maybe<Order_Logs_Min_Fields>;
  stddev?: Maybe<Order_Logs_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Logs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Logs_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Logs_Sum_Fields>;
  var_pop?: Maybe<Order_Logs_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Logs_Var_Samp_Fields>;
  variance?: Maybe<Order_Logs_Variance_Fields>;
};


/** aggregate fields of "order_logs" */
export type Order_Logs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order_logs" */
export type Order_Logs_Aggregate_Order_By = {
  avg?: InputMaybe<Order_Logs_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Order_Logs_Max_Order_By>;
  min?: InputMaybe<Order_Logs_Min_Order_By>;
  stddev?: InputMaybe<Order_Logs_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Order_Logs_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Order_Logs_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Order_Logs_Sum_Order_By>;
  var_pop?: InputMaybe<Order_Logs_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Order_Logs_Var_Samp_Order_By>;
  variance?: InputMaybe<Order_Logs_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_logs" */
export type Order_Logs_Arr_Rel_Insert_Input = {
  data: Array<Order_Logs_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Order_Logs_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Logs_Avg_Fields = {
  __typename?: 'order_logs_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order_logs" */
export type Order_Logs_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_logs". All fields are combined with a logical 'AND'. */
export type Order_Logs_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Logs_Bool_Exp>>;
  _not?: InputMaybe<Order_Logs_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Logs_Bool_Exp>>;
  activity?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  orderId?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_logs" */
export enum Order_Logs_Constraint {
  /** unique or primary key constraint */
  OrderLogsPkey = 'order_logs_pkey'
}

/** input type for incrementing numeric columns in table "order_logs" */
export type Order_Logs_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "order_logs" */
export type Order_Logs_Insert_Input = {
  activity?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  orderId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Order_Logs_Max_Fields = {
  __typename?: 'order_logs_max_fields';
  activity?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "order_logs" */
export type Order_Logs_Max_Order_By = {
  activity?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Logs_Min_Fields = {
  __typename?: 'order_logs_min_fields';
  activity?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "order_logs" */
export type Order_Logs_Min_Order_By = {
  activity?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "order_logs" */
export type Order_Logs_Mutation_Response = {
  __typename?: 'order_logs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Logs>;
};

/** on_conflict condition type for table "order_logs" */
export type Order_Logs_On_Conflict = {
  constraint: Order_Logs_Constraint;
  update_columns?: Array<Order_Logs_Update_Column>;
  where?: InputMaybe<Order_Logs_Bool_Exp>;
};

/** Ordering options when selecting data from "order_logs". */
export type Order_Logs_Order_By = {
  activity?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  orderId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_logs */
export type Order_Logs_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "order_logs" */
export enum Order_Logs_Select_Column {
  /** column name */
  Activity = 'activity',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'orderId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "order_logs" */
export type Order_Logs_Set_Input = {
  activity?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  orderId?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Order_Logs_Stddev_Fields = {
  __typename?: 'order_logs_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order_logs" */
export type Order_Logs_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Logs_Stddev_Pop_Fields = {
  __typename?: 'order_logs_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order_logs" */
export type Order_Logs_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Logs_Stddev_Samp_Fields = {
  __typename?: 'order_logs_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order_logs" */
export type Order_Logs_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Order_Logs_Sum_Fields = {
  __typename?: 'order_logs_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "order_logs" */
export type Order_Logs_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "order_logs" */
export enum Order_Logs_Update_Column {
  /** column name */
  Activity = 'activity',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'orderId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Order_Logs_Var_Pop_Fields = {
  __typename?: 'order_logs_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order_logs" */
export type Order_Logs_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Logs_Var_Samp_Fields = {
  __typename?: 'order_logs_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order_logs" */
export type Order_Logs_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Logs_Variance_Fields = {
  __typename?: 'order_logs_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order_logs" */
export type Order_Logs_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Order status type */
export type Order_Status_Type = {
  __typename?: 'order_status_type';
  type: Scalars['String'];
};

/** aggregated selection of "order_status_type" */
export type Order_Status_Type_Aggregate = {
  __typename?: 'order_status_type_aggregate';
  aggregate?: Maybe<Order_Status_Type_Aggregate_Fields>;
  nodes: Array<Order_Status_Type>;
};

/** aggregate fields of "order_status_type" */
export type Order_Status_Type_Aggregate_Fields = {
  __typename?: 'order_status_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Order_Status_Type_Max_Fields>;
  min?: Maybe<Order_Status_Type_Min_Fields>;
};


/** aggregate fields of "order_status_type" */
export type Order_Status_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Status_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "order_status_type". All fields are combined with a logical 'AND'. */
export type Order_Status_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Status_Type_Bool_Exp>>;
  _not?: InputMaybe<Order_Status_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Status_Type_Bool_Exp>>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_status_type" */
export enum Order_Status_Type_Constraint {
  /** unique or primary key constraint */
  OrderStatusTypePkey = 'order_status_type_pkey'
}

/** input type for inserting data into table "order_status_type" */
export type Order_Status_Type_Insert_Input = {
  type?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Order_Status_Type_Max_Fields = {
  __typename?: 'order_status_type_max_fields';
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Order_Status_Type_Min_Fields = {
  __typename?: 'order_status_type_min_fields';
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "order_status_type" */
export type Order_Status_Type_Mutation_Response = {
  __typename?: 'order_status_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Status_Type>;
};

/** on_conflict condition type for table "order_status_type" */
export type Order_Status_Type_On_Conflict = {
  constraint: Order_Status_Type_Constraint;
  update_columns?: Array<Order_Status_Type_Update_Column>;
  where?: InputMaybe<Order_Status_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "order_status_type". */
export type Order_Status_Type_Order_By = {
  type?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_status_type */
export type Order_Status_Type_Pk_Columns_Input = {
  type: Scalars['String'];
};

/** select columns of table "order_status_type" */
export enum Order_Status_Type_Select_Column {
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "order_status_type" */
export type Order_Status_Type_Set_Input = {
  type?: InputMaybe<Scalars['String']>;
};

/** update columns of table "order_status_type" */
export enum Order_Status_Type_Update_Column {
  /** column name */
  Type = 'type'
}

/** Order information */
export type Orders = {
  __typename?: 'orders';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  order_logs: Array<Order_Logs>;
  /** An aggregate relationship */
  order_logs_aggregate: Order_Logs_Aggregate;
  pid: Scalars['Int'];
  /** An object relationship */
  product: Products;
  uid: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** Order information */
export type OrdersOrder_LogsArgs = {
  distinct_on?: InputMaybe<Array<Order_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Logs_Order_By>>;
  where?: InputMaybe<Order_Logs_Bool_Exp>;
};


/** Order information */
export type OrdersOrder_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Logs_Order_By>>;
  where?: InputMaybe<Order_Logs_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  pid?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order_logs?: InputMaybe<Order_Logs_Bool_Exp>;
  pid?: InputMaybe<Int_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint */
  OrdersPkey = 'orders_pkey'
}

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  pid?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  order_logs?: InputMaybe<Order_Logs_Arr_Rel_Insert_Input>;
  pid?: InputMaybe<Scalars['Int']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  uid?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  pid?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  pid?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_logs_aggregate?: InputMaybe<Order_Logs_Aggregate_Order_By>;
  pid?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  uid?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Pid = 'pid',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  pid?: InputMaybe<Scalars['Int']>;
  uid?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  pid?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  pid?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  pid?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  pid?: Maybe<Scalars['Int']>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Pid = 'pid',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  pid?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  pid?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  pid?: Maybe<Scalars['Float']>;
};

/** Products */
export type Products = {
  __typename?: 'products';
  category: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  discount?: Maybe<Scalars['smallint']>;
  id: Scalars['Int'];
  images?: Maybe<Scalars['_text']>;
  name: Scalars['String'];
  oldPrice?: Maybe<Scalars['numeric']>;
  outOfStock?: Maybe<Scalars['Boolean']>;
  price: Scalars['numeric'];
  rating?: Maybe<Scalars['numeric']>;
  reviews?: Maybe<Scalars['smallint']>;
  subCategory: Scalars['String'];
  tags?: Maybe<Scalars['jsonb']>;
  updatedAt: Scalars['timestamptz'];
  url: Scalars['String'];
  /** An array relationship */
  user_products: Array<User_Products>;
  /** An aggregate relationship */
  user_products_aggregate: User_Products_Aggregate;
};


/** Products */
export type ProductsTagsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** Products */
export type ProductsUser_ProductsArgs = {
  distinct_on?: InputMaybe<Array<User_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Products_Order_By>>;
  where?: InputMaybe<User_Products_Bool_Exp>;
};


/** Products */
export type ProductsUser_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Products_Order_By>>;
  where?: InputMaybe<User_Products_Bool_Exp>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Products_Append_Input = {
  tags?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  oldPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  category?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  discount?: InputMaybe<Smallint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  images?: InputMaybe<_Text_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  oldPrice?: InputMaybe<Numeric_Comparison_Exp>;
  outOfStock?: InputMaybe<Boolean_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  rating?: InputMaybe<Numeric_Comparison_Exp>;
  reviews?: InputMaybe<Smallint_Comparison_Exp>;
  subCategory?: InputMaybe<String_Comparison_Exp>;
  tags?: InputMaybe<Jsonb_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  user_products?: InputMaybe<User_Products_Bool_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint */
  ProductsPkey = 'products_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Products_Delete_At_Path_Input = {
  tags?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Products_Delete_Elem_Input = {
  tags?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Products_Delete_Key_Input = {
  tags?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  discount?: InputMaybe<Scalars['smallint']>;
  id?: InputMaybe<Scalars['Int']>;
  oldPrice?: InputMaybe<Scalars['numeric']>;
  price?: InputMaybe<Scalars['numeric']>;
  rating?: InputMaybe<Scalars['numeric']>;
  reviews?: InputMaybe<Scalars['smallint']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  category?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  discount?: InputMaybe<Scalars['smallint']>;
  id?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<Scalars['_text']>;
  name?: InputMaybe<Scalars['String']>;
  oldPrice?: InputMaybe<Scalars['numeric']>;
  outOfStock?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['numeric']>;
  rating?: InputMaybe<Scalars['numeric']>;
  reviews?: InputMaybe<Scalars['smallint']>;
  subCategory?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['jsonb']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
  user_products?: InputMaybe<User_Products_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  oldPrice?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  rating?: Maybe<Scalars['numeric']>;
  reviews?: Maybe<Scalars['smallint']>;
  subCategory?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  discount?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  oldPrice?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  rating?: Maybe<Scalars['numeric']>;
  reviews?: Maybe<Scalars['smallint']>;
  subCategory?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** on_conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  category?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  images?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  oldPrice?: InputMaybe<Order_By>;
  outOfStock?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  reviews?: InputMaybe<Order_By>;
  subCategory?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  user_products_aggregate?: InputMaybe<User_Products_Aggregate_Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Products_Prepend_Input = {
  tags?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Discount = 'discount',
  /** column name */
  Id = 'id',
  /** column name */
  Images = 'images',
  /** column name */
  Name = 'name',
  /** column name */
  OldPrice = 'oldPrice',
  /** column name */
  OutOfStock = 'outOfStock',
  /** column name */
  Price = 'price',
  /** column name */
  Rating = 'rating',
  /** column name */
  Reviews = 'reviews',
  /** column name */
  SubCategory = 'subCategory',
  /** column name */
  Tags = 'tags',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  category?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  discount?: InputMaybe<Scalars['smallint']>;
  id?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<Scalars['_text']>;
  name?: InputMaybe<Scalars['String']>;
  oldPrice?: InputMaybe<Scalars['numeric']>;
  outOfStock?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['numeric']>;
  rating?: InputMaybe<Scalars['numeric']>;
  reviews?: InputMaybe<Scalars['smallint']>;
  subCategory?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Scalars['jsonb']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  oldPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  oldPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  oldPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  discount?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['Int']>;
  oldPrice?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  rating?: Maybe<Scalars['numeric']>;
  reviews?: Maybe<Scalars['smallint']>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Discount = 'discount',
  /** column name */
  Id = 'id',
  /** column name */
  Images = 'images',
  /** column name */
  Name = 'name',
  /** column name */
  OldPrice = 'oldPrice',
  /** column name */
  OutOfStock = 'outOfStock',
  /** column name */
  Price = 'price',
  /** column name */
  Rating = 'rating',
  /** column name */
  Reviews = 'reviews',
  /** column name */
  SubCategory = 'subCategory',
  /** column name */
  Tags = 'tags',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Url = 'url'
}

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  oldPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  oldPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  oldPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  reviews?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  order_logs: Array<Order_Logs>;
  /** An aggregate relationship */
  order_logs_aggregate: Order_Logs_Aggregate;
  /** fetch data from the table: "order_logs" using primary key columns */
  order_logs_by_pk?: Maybe<Order_Logs>;
  /** fetch data from the table: "order_status_type" */
  order_status_type: Array<Order_Status_Type>;
  /** fetch aggregated fields from the table: "order_status_type" */
  order_status_type_aggregate: Order_Status_Type_Aggregate;
  /** fetch data from the table: "order_status_type" using primary key columns */
  order_status_type_by_pk?: Maybe<Order_Status_Type>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "rooms" */
  rooms: Array<Rooms>;
  /** fetch aggregated fields from the table: "rooms" */
  rooms_aggregate: Rooms_Aggregate;
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>;
  /** execute function "search_products" which returns "products" */
  search_products: Array<Products>;
  /** execute function "search_products" and query aggregates on result of table type "products" */
  search_products_aggregate: Products_Aggregate;
  /** An array relationship */
  user_products: Array<User_Products>;
  /** An aggregate relationship */
  user_products_aggregate: User_Products_Aggregate;
  /** fetch data from the table: "user_products" using primary key columns */
  user_products_by_pk?: Maybe<User_Products>;
  /** fetch data from the table: "user_products_type" */
  user_products_type: Array<User_Products_Type>;
  /** fetch aggregated fields from the table: "user_products_type" */
  user_products_type_aggregate: User_Products_Type_Aggregate;
  /** fetch data from the table: "user_products_type" using primary key columns */
  user_products_type_by_pk?: Maybe<User_Products_Type>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "views" */
  views: Array<Views>;
  /** fetch aggregated fields from the table: "views" */
  views_aggregate: Views_Aggregate;
  /** fetch data from the table: "views" using primary key columns */
  views_by_pk?: Maybe<Views>;
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootOrder_LogsArgs = {
  distinct_on?: InputMaybe<Array<Order_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Logs_Order_By>>;
  where?: InputMaybe<Order_Logs_Bool_Exp>;
};


export type Query_RootOrder_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Logs_Order_By>>;
  where?: InputMaybe<Order_Logs_Bool_Exp>;
};


export type Query_RootOrder_Logs_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOrder_Status_TypeArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Status_Type_Order_By>>;
  where?: InputMaybe<Order_Status_Type_Bool_Exp>;
};


export type Query_RootOrder_Status_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Status_Type_Order_By>>;
  where?: InputMaybe<Order_Status_Type_Bool_Exp>;
};


export type Query_RootOrder_Status_Type_By_PkArgs = {
  type: Scalars['String'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRoomsArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Query_RootRooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Query_RootRooms_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootSearch_ProductsArgs = {
  args: Search_Products_Args;
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootSearch_Products_AggregateArgs = {
  args: Search_Products_Args;
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootUser_ProductsArgs = {
  distinct_on?: InputMaybe<Array<User_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Products_Order_By>>;
  where?: InputMaybe<User_Products_Bool_Exp>;
};


export type Query_RootUser_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Products_Order_By>>;
  where?: InputMaybe<User_Products_Bool_Exp>;
};


export type Query_RootUser_Products_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUser_Products_TypeArgs = {
  distinct_on?: InputMaybe<Array<User_Products_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Products_Type_Order_By>>;
  where?: InputMaybe<User_Products_Type_Bool_Exp>;
};


export type Query_RootUser_Products_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Products_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Products_Type_Order_By>>;
  where?: InputMaybe<User_Products_Type_Bool_Exp>;
};


export type Query_RootUser_Products_Type_By_PkArgs = {
  type: Scalars['String'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Query_RootViewsArgs = {
  distinct_on?: InputMaybe<Array<Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Views_Order_By>>;
  where?: InputMaybe<Views_Bool_Exp>;
};


export type Query_RootViews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Views_Order_By>>;
  where?: InputMaybe<Views_Bool_Exp>;
};


export type Query_RootViews_By_PkArgs = {
  id: Scalars['Int'];
};

/** Rooms */
export type Rooms = {
  __typename?: 'rooms';
  name: Scalars['String'];
};

/** aggregated selection of "rooms" */
export type Rooms_Aggregate = {
  __typename?: 'rooms_aggregate';
  aggregate?: Maybe<Rooms_Aggregate_Fields>;
  nodes: Array<Rooms>;
};

/** aggregate fields of "rooms" */
export type Rooms_Aggregate_Fields = {
  __typename?: 'rooms_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Rooms_Max_Fields>;
  min?: Maybe<Rooms_Min_Fields>;
};


/** aggregate fields of "rooms" */
export type Rooms_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rooms_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "rooms". All fields are combined with a logical 'AND'. */
export type Rooms_Bool_Exp = {
  _and?: InputMaybe<Array<Rooms_Bool_Exp>>;
  _not?: InputMaybe<Rooms_Bool_Exp>;
  _or?: InputMaybe<Array<Rooms_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "rooms" */
export enum Rooms_Constraint {
  /** unique or primary key constraint */
  RoomsPkey = 'rooms_pkey'
}

/** input type for inserting data into table "rooms" */
export type Rooms_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Rooms_Max_Fields = {
  __typename?: 'rooms_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Rooms_Min_Fields = {
  __typename?: 'rooms_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "rooms" */
export type Rooms_Mutation_Response = {
  __typename?: 'rooms_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rooms>;
};

/** on_conflict condition type for table "rooms" */
export type Rooms_On_Conflict = {
  constraint: Rooms_Constraint;
  update_columns?: Array<Rooms_Update_Column>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};

/** Ordering options when selecting data from "rooms". */
export type Rooms_Order_By = {
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rooms */
export type Rooms_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "rooms" */
export enum Rooms_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "rooms" */
export type Rooms_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "rooms" */
export enum Rooms_Update_Column {
  /** column name */
  Name = 'name'
}

export type Search_Products_Args = {
  search?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  order_logs: Array<Order_Logs>;
  /** An aggregate relationship */
  order_logs_aggregate: Order_Logs_Aggregate;
  /** fetch data from the table: "order_logs" using primary key columns */
  order_logs_by_pk?: Maybe<Order_Logs>;
  /** fetch data from the table: "order_status_type" */
  order_status_type: Array<Order_Status_Type>;
  /** fetch aggregated fields from the table: "order_status_type" */
  order_status_type_aggregate: Order_Status_Type_Aggregate;
  /** fetch data from the table: "order_status_type" using primary key columns */
  order_status_type_by_pk?: Maybe<Order_Status_Type>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "rooms" */
  rooms: Array<Rooms>;
  /** fetch aggregated fields from the table: "rooms" */
  rooms_aggregate: Rooms_Aggregate;
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>;
  /** execute function "search_products" which returns "products" */
  search_products: Array<Products>;
  /** execute function "search_products" and query aggregates on result of table type "products" */
  search_products_aggregate: Products_Aggregate;
  /** An array relationship */
  user_products: Array<User_Products>;
  /** An aggregate relationship */
  user_products_aggregate: User_Products_Aggregate;
  /** fetch data from the table: "user_products" using primary key columns */
  user_products_by_pk?: Maybe<User_Products>;
  /** fetch data from the table: "user_products_type" */
  user_products_type: Array<User_Products_Type>;
  /** fetch aggregated fields from the table: "user_products_type" */
  user_products_type_aggregate: User_Products_Type_Aggregate;
  /** fetch data from the table: "user_products_type" using primary key columns */
  user_products_type_by_pk?: Maybe<User_Products_Type>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "views" */
  views: Array<Views>;
  /** fetch aggregated fields from the table: "views" */
  views_aggregate: Views_Aggregate;
  /** fetch data from the table: "views" using primary key columns */
  views_by_pk?: Maybe<Views>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootOrder_LogsArgs = {
  distinct_on?: InputMaybe<Array<Order_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Logs_Order_By>>;
  where?: InputMaybe<Order_Logs_Bool_Exp>;
};


export type Subscription_RootOrder_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Logs_Order_By>>;
  where?: InputMaybe<Order_Logs_Bool_Exp>;
};


export type Subscription_RootOrder_Logs_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOrder_Status_TypeArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Status_Type_Order_By>>;
  where?: InputMaybe<Order_Status_Type_Bool_Exp>;
};


export type Subscription_RootOrder_Status_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Status_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Status_Type_Order_By>>;
  where?: InputMaybe<Order_Status_Type_Bool_Exp>;
};


export type Subscription_RootOrder_Status_Type_By_PkArgs = {
  type: Scalars['String'];
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRoomsArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Subscription_RootRooms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rooms_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rooms_Order_By>>;
  where?: InputMaybe<Rooms_Bool_Exp>;
};


export type Subscription_RootRooms_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootSearch_ProductsArgs = {
  args: Search_Products_Args;
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootSearch_Products_AggregateArgs = {
  args: Search_Products_Args;
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootUser_ProductsArgs = {
  distinct_on?: InputMaybe<Array<User_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Products_Order_By>>;
  where?: InputMaybe<User_Products_Bool_Exp>;
};


export type Subscription_RootUser_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Products_Order_By>>;
  where?: InputMaybe<User_Products_Bool_Exp>;
};


export type Subscription_RootUser_Products_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUser_Products_TypeArgs = {
  distinct_on?: InputMaybe<Array<User_Products_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Products_Type_Order_By>>;
  where?: InputMaybe<User_Products_Type_Bool_Exp>;
};


export type Subscription_RootUser_Products_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Products_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Products_Type_Order_By>>;
  where?: InputMaybe<User_Products_Type_Bool_Exp>;
};


export type Subscription_RootUser_Products_Type_By_PkArgs = {
  type: Scalars['String'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  uid: Scalars['uuid'];
};


export type Subscription_RootViewsArgs = {
  distinct_on?: InputMaybe<Array<Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Views_Order_By>>;
  where?: InputMaybe<Views_Bool_Exp>;
};


export type Subscription_RootViews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Views_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Views_Order_By>>;
  where?: InputMaybe<Views_Bool_Exp>;
};


export type Subscription_RootViews_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** user's interaction with the products */
export type User_Products = {
  __typename?: 'user_products';
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  pid: Scalars['Int'];
  /** An object relationship */
  product: Products;
  type: User_Products_Type_Enum;
  uid: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user_products_type: User_Products_Type;
};

/** aggregated selection of "user_products" */
export type User_Products_Aggregate = {
  __typename?: 'user_products_aggregate';
  aggregate?: Maybe<User_Products_Aggregate_Fields>;
  nodes: Array<User_Products>;
};

/** aggregate fields of "user_products" */
export type User_Products_Aggregate_Fields = {
  __typename?: 'user_products_aggregate_fields';
  avg?: Maybe<User_Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Products_Max_Fields>;
  min?: Maybe<User_Products_Min_Fields>;
  stddev?: Maybe<User_Products_Stddev_Fields>;
  stddev_pop?: Maybe<User_Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Products_Stddev_Samp_Fields>;
  sum?: Maybe<User_Products_Sum_Fields>;
  var_pop?: Maybe<User_Products_Var_Pop_Fields>;
  var_samp?: Maybe<User_Products_Var_Samp_Fields>;
  variance?: Maybe<User_Products_Variance_Fields>;
};


/** aggregate fields of "user_products" */
export type User_Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_products" */
export type User_Products_Aggregate_Order_By = {
  avg?: InputMaybe<User_Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Products_Max_Order_By>;
  min?: InputMaybe<User_Products_Min_Order_By>;
  stddev?: InputMaybe<User_Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Products_Sum_Order_By>;
  var_pop?: InputMaybe<User_Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Products_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_products" */
export type User_Products_Arr_Rel_Insert_Input = {
  data: Array<User_Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Products_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Products_Avg_Fields = {
  __typename?: 'user_products_avg_fields';
  id?: Maybe<Scalars['Float']>;
  pid?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_products" */
export type User_Products_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  pid?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_products". All fields are combined with a logical 'AND'. */
export type User_Products_Bool_Exp = {
  _and?: InputMaybe<Array<User_Products_Bool_Exp>>;
  _not?: InputMaybe<User_Products_Bool_Exp>;
  _or?: InputMaybe<Array<User_Products_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  pid?: InputMaybe<Int_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  type?: InputMaybe<User_Products_Type_Enum_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_products_type?: InputMaybe<User_Products_Type_Bool_Exp>;
};

/** unique or primary key constraints on table "user_products" */
export enum User_Products_Constraint {
  /** unique or primary key constraint */
  UserProductsPidUidKey = 'user_products_pid_uid_key',
  /** unique or primary key constraint */
  UserProductsPkey = 'user_products_pkey'
}

/** input type for incrementing numeric columns in table "user_products" */
export type User_Products_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  pid?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_products" */
export type User_Products_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  pid?: InputMaybe<Scalars['Int']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  type?: InputMaybe<User_Products_Type_Enum>;
  uid?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user_products_type?: InputMaybe<User_Products_Type_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Products_Max_Fields = {
  __typename?: 'user_products_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  pid?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "user_products" */
export type User_Products_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pid?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Products_Min_Fields = {
  __typename?: 'user_products_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  pid?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "user_products" */
export type User_Products_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pid?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_products" */
export type User_Products_Mutation_Response = {
  __typename?: 'user_products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Products>;
};

/** on_conflict condition type for table "user_products" */
export type User_Products_On_Conflict = {
  constraint: User_Products_Constraint;
  update_columns?: Array<User_Products_Update_Column>;
  where?: InputMaybe<User_Products_Bool_Exp>;
};

/** Ordering options when selecting data from "user_products". */
export type User_Products_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pid?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  type?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user_products_type?: InputMaybe<User_Products_Type_Order_By>;
};

/** primary key columns input for table: user_products */
export type User_Products_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user_products" */
export enum User_Products_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Pid = 'pid',
  /** column name */
  Type = 'type',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "user_products" */
export type User_Products_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  pid?: InputMaybe<Scalars['Int']>;
  type?: InputMaybe<User_Products_Type_Enum>;
  uid?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type User_Products_Stddev_Fields = {
  __typename?: 'user_products_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  pid?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_products" */
export type User_Products_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  pid?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Products_Stddev_Pop_Fields = {
  __typename?: 'user_products_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  pid?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_products" */
export type User_Products_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  pid?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Products_Stddev_Samp_Fields = {
  __typename?: 'user_products_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  pid?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_products" */
export type User_Products_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  pid?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Products_Sum_Fields = {
  __typename?: 'user_products_sum_fields';
  id?: Maybe<Scalars['Int']>;
  pid?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_products" */
export type User_Products_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  pid?: InputMaybe<Order_By>;
};

/** Types of actions user can do on a product */
export type User_Products_Type = {
  __typename?: 'user_products_type';
  type: Scalars['String'];
  /** An array relationship */
  user_products: Array<User_Products>;
  /** An aggregate relationship */
  user_products_aggregate: User_Products_Aggregate;
};


/** Types of actions user can do on a product */
export type User_Products_TypeUser_ProductsArgs = {
  distinct_on?: InputMaybe<Array<User_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Products_Order_By>>;
  where?: InputMaybe<User_Products_Bool_Exp>;
};


/** Types of actions user can do on a product */
export type User_Products_TypeUser_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Products_Order_By>>;
  where?: InputMaybe<User_Products_Bool_Exp>;
};

/** aggregated selection of "user_products_type" */
export type User_Products_Type_Aggregate = {
  __typename?: 'user_products_type_aggregate';
  aggregate?: Maybe<User_Products_Type_Aggregate_Fields>;
  nodes: Array<User_Products_Type>;
};

/** aggregate fields of "user_products_type" */
export type User_Products_Type_Aggregate_Fields = {
  __typename?: 'user_products_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Products_Type_Max_Fields>;
  min?: Maybe<User_Products_Type_Min_Fields>;
};


/** aggregate fields of "user_products_type" */
export type User_Products_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Products_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_products_type". All fields are combined with a logical 'AND'. */
export type User_Products_Type_Bool_Exp = {
  _and?: InputMaybe<Array<User_Products_Type_Bool_Exp>>;
  _not?: InputMaybe<User_Products_Type_Bool_Exp>;
  _or?: InputMaybe<Array<User_Products_Type_Bool_Exp>>;
  type?: InputMaybe<String_Comparison_Exp>;
  user_products?: InputMaybe<User_Products_Bool_Exp>;
};

/** unique or primary key constraints on table "user_products_type" */
export enum User_Products_Type_Constraint {
  /** unique or primary key constraint */
  UserProductsTypePkey = 'user_products_type_pkey'
}

export enum User_Products_Type_Enum {
  InCart = 'IN_CART',
  Purchased = 'PURCHASED',
  RemovedFromWishlist = 'REMOVED_FROM_WISHLIST',
  SavedForLater = 'SAVED_FOR_LATER',
  Wishlisted = 'WISHLISTED'
}

/** Boolean expression to compare columns of type "user_products_type_enum". All fields are combined with logical 'AND'. */
export type User_Products_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<User_Products_Type_Enum>;
  _in?: InputMaybe<Array<User_Products_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<User_Products_Type_Enum>;
  _nin?: InputMaybe<Array<User_Products_Type_Enum>>;
};

/** input type for inserting data into table "user_products_type" */
export type User_Products_Type_Insert_Input = {
  type?: InputMaybe<Scalars['String']>;
  user_products?: InputMaybe<User_Products_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Products_Type_Max_Fields = {
  __typename?: 'user_products_type_max_fields';
  type?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Products_Type_Min_Fields = {
  __typename?: 'user_products_type_min_fields';
  type?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user_products_type" */
export type User_Products_Type_Mutation_Response = {
  __typename?: 'user_products_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Products_Type>;
};

/** input type for inserting object relation for remote table "user_products_type" */
export type User_Products_Type_Obj_Rel_Insert_Input = {
  data: User_Products_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Products_Type_On_Conflict>;
};

/** on_conflict condition type for table "user_products_type" */
export type User_Products_Type_On_Conflict = {
  constraint: User_Products_Type_Constraint;
  update_columns?: Array<User_Products_Type_Update_Column>;
  where?: InputMaybe<User_Products_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "user_products_type". */
export type User_Products_Type_Order_By = {
  type?: InputMaybe<Order_By>;
  user_products_aggregate?: InputMaybe<User_Products_Aggregate_Order_By>;
};

/** primary key columns input for table: user_products_type */
export type User_Products_Type_Pk_Columns_Input = {
  type: Scalars['String'];
};

/** select columns of table "user_products_type" */
export enum User_Products_Type_Select_Column {
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "user_products_type" */
export type User_Products_Type_Set_Input = {
  type?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user_products_type" */
export enum User_Products_Type_Update_Column {
  /** column name */
  Type = 'type'
}

/** update columns of table "user_products" */
export enum User_Products_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Pid = 'pid',
  /** column name */
  Type = 'type',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type User_Products_Var_Pop_Fields = {
  __typename?: 'user_products_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  pid?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_products" */
export type User_Products_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  pid?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Products_Var_Samp_Fields = {
  __typename?: 'user_products_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  pid?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_products" */
export type User_Products_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  pid?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Products_Variance_Fields = {
  __typename?: 'user_products_variance_fields';
  id?: Maybe<Scalars['Float']>;
  pid?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_products" */
export type User_Products_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  pid?: InputMaybe<Order_By>;
};

/** The information about users */
export type Users = {
  __typename?: 'users';
  about?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  displayName?: Maybe<Scalars['String']>;
  uid: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  about?: InputMaybe<String_Comparison_Exp>;
  address?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  about?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  displayName?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  about?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  about?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  displayName?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  about?: InputMaybe<Order_By>;
  address?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  uid: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  About = 'about',
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  about?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  displayName?: InputMaybe<Scalars['String']>;
  uid?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  About = 'about',
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** We store the products viewed by the user. */
export type Views = {
  __typename?: 'views';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  pid: Scalars['Int'];
  /** An object relationship */
  product: Products;
  uid: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "views" */
export type Views_Aggregate = {
  __typename?: 'views_aggregate';
  aggregate?: Maybe<Views_Aggregate_Fields>;
  nodes: Array<Views>;
};

/** aggregate fields of "views" */
export type Views_Aggregate_Fields = {
  __typename?: 'views_aggregate_fields';
  avg?: Maybe<Views_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Views_Max_Fields>;
  min?: Maybe<Views_Min_Fields>;
  stddev?: Maybe<Views_Stddev_Fields>;
  stddev_pop?: Maybe<Views_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Views_Stddev_Samp_Fields>;
  sum?: Maybe<Views_Sum_Fields>;
  var_pop?: Maybe<Views_Var_Pop_Fields>;
  var_samp?: Maybe<Views_Var_Samp_Fields>;
  variance?: Maybe<Views_Variance_Fields>;
};


/** aggregate fields of "views" */
export type Views_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Views_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Views_Avg_Fields = {
  __typename?: 'views_avg_fields';
  id?: Maybe<Scalars['Float']>;
  pid?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "views". All fields are combined with a logical 'AND'. */
export type Views_Bool_Exp = {
  _and?: InputMaybe<Array<Views_Bool_Exp>>;
  _not?: InputMaybe<Views_Bool_Exp>;
  _or?: InputMaybe<Array<Views_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  pid?: InputMaybe<Int_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "views" */
export enum Views_Constraint {
  /** unique or primary key constraint */
  ViewsPkey = 'views_pkey'
}

/** input type for incrementing numeric columns in table "views" */
export type Views_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  pid?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "views" */
export type Views_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  pid?: InputMaybe<Scalars['Int']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  uid?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Views_Max_Fields = {
  __typename?: 'views_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  pid?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Views_Min_Fields = {
  __typename?: 'views_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  pid?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "views" */
export type Views_Mutation_Response = {
  __typename?: 'views_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Views>;
};

/** on_conflict condition type for table "views" */
export type Views_On_Conflict = {
  constraint: Views_Constraint;
  update_columns?: Array<Views_Update_Column>;
  where?: InputMaybe<Views_Bool_Exp>;
};

/** Ordering options when selecting data from "views". */
export type Views_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pid?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: views */
export type Views_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "views" */
export enum Views_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Pid = 'pid',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "views" */
export type Views_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  pid?: InputMaybe<Scalars['Int']>;
  uid?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Views_Stddev_Fields = {
  __typename?: 'views_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  pid?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Views_Stddev_Pop_Fields = {
  __typename?: 'views_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  pid?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Views_Stddev_Samp_Fields = {
  __typename?: 'views_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  pid?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Views_Sum_Fields = {
  __typename?: 'views_sum_fields';
  id?: Maybe<Scalars['Int']>;
  pid?: Maybe<Scalars['Int']>;
};

/** update columns of table "views" */
export enum Views_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Pid = 'pid',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Views_Var_Pop_Fields = {
  __typename?: 'views_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  pid?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Views_Var_Samp_Fields = {
  __typename?: 'views_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  pid?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Views_Variance_Fields = {
  __typename?: 'views_variance_fields';
  id?: Maybe<Scalars['Float']>;
  pid?: Maybe<Scalars['Float']>;
};

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'query_root', products: Array<{ __typename?: 'products', category: string, createdAt: any, discount?: any | null, id: number, name: string }> };

export type GetProductQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetProductQuery = { __typename?: 'query_root', product?: { __typename?: 'products', category: string, createdAt: any, discount?: any | null, id: number, name: string, oldPrice?: any | null, outOfStock?: boolean | null, price: any, rating?: any | null, reviews?: any | null, subCategory: string, tags?: any | null, updatedAt: any, url: string } | null };

export type SearchProductsQueryVariables = Exact<{
  args: Search_Products_Args;
  distinct_on?: InputMaybe<Array<Products_Select_Column> | Products_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By> | Products_Order_By>;
  where?: InputMaybe<Products_Bool_Exp>;
}>;


export type SearchProductsQuery = { __typename?: 'query_root', products_aggregate: { __typename?: 'products_aggregate', aggregate?: { __typename?: 'products_aggregate_fields', count: number } | null }, products: Array<{ __typename?: 'products', name: string, id: number, category: string, subCategory: string, outOfStock?: boolean | null, price: any, images?: any | null, rating?: any | null, reviews?: any | null, discount?: any | null, oldPrice?: any | null }> };

export type FilterProductsQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Products_Select_Column> | Products_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By> | Products_Order_By>;
  where?: InputMaybe<Products_Bool_Exp>;
}>;


export type FilterProductsQuery = { __typename?: 'query_root', products_aggregate: { __typename?: 'products_aggregate', aggregate?: { __typename?: 'products_aggregate_fields', count: number } | null }, products: Array<{ __typename?: 'products', name: string, id: number, category: string, subCategory: string, outOfStock?: boolean | null, price: any, images?: any | null, rating?: any | null, reviews?: any | null, discount?: any | null, oldPrice?: any | null }> };

export type InsertUserProductsOneMutationVariables = Exact<{
  object: User_Products_Insert_Input;
}>;


export type InsertUserProductsOneMutation = { __typename?: 'mutation_root', insert_user_products_one?: { __typename?: 'user_products', createdAt: any, id: number, pid: number, type: User_Products_Type_Enum, uid: string, updatedAt: any } | null };

export type GetUserProductsQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


export type GetUserProductsQuery = { __typename?: 'query_root', user_products: Array<{ __typename?: 'user_products', createdAt: any, id: number, pid: number, type: User_Products_Type_Enum, uid: string, updatedAt: any, product: { __typename?: 'products', name: string, price: any, oldPrice?: any | null, images?: any | null, outOfStock?: boolean | null, category: string, subCategory: string, rating?: any | null, reviews?: any | null } }> };

export type CompleteOrderMutationVariables = Exact<{
  objects: Array<Orders_Insert_Input> | Orders_Insert_Input;
}>;


export type CompleteOrderMutation = { __typename?: 'mutation_root', insert_orders?: { __typename?: 'orders_mutation_response', affected_rows: number } | null };

export type GetOrderedProductsQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Orders_Select_Column> | Orders_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By> | Orders_Order_By>;
  where?: InputMaybe<Orders_Bool_Exp>;
}>;


export type GetOrderedProductsQuery = { __typename?: 'query_root', orders: Array<{ __typename?: 'orders', id: any, pid: number, updatedAt: any, product: { __typename?: 'products', images?: any | null, name: string } }>, orders_aggregate: { __typename?: 'orders_aggregate', aggregate?: { __typename?: 'orders_aggregate_fields', count: number } | null } };

export type InsertProductViewMutationVariables = Exact<{
  uid: Scalars['String'];
  pid?: InputMaybe<Scalars['Int']>;
}>;


export type InsertProductViewMutation = { __typename?: 'mutation_root', insert_views_one?: { __typename?: 'views', uid: string, pid: number, id: number, created_at: any, updated_at: any } | null };

export type GetViewedProductsQueryVariables = Exact<{
  uid?: InputMaybe<Scalars['String']>;
}>;


export type GetViewedProductsQuery = { __typename?: 'query_root', views: Array<{ __typename?: 'views', id: number, pid: number, product: { __typename?: 'products', images?: any | null, name: string, price: any, oldPrice?: any | null } }> };

export const namedOperations = {
  Query: {
    GetProducts: 'GetProducts',
    GetProduct: 'GetProduct',
    SearchProducts: 'SearchProducts',
    FilterProducts: 'FilterProducts',
    GetUserProducts: 'GetUserProducts',
    GetOrderedProducts: 'GetOrderedProducts',
    GetViewedProducts: 'GetViewedProducts'
  },
  Mutation: {
    InsertUserProductsOne: 'InsertUserProductsOne',
    CompleteOrder: 'CompleteOrder',
    InsertProductView: 'InsertProductView'
  }
}

export const GetProductsDocument = /*#__PURE__*/ gql`
    query GetProducts {
  products(limit: 10, order_by: {discount: desc_nulls_last}) {
    category
    createdAt
    discount
    id
    name
  }
}
    `;

export function useGetProductsQuery(options?: Omit<Urql.UseQueryArgs<GetProductsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProductsQuery>({ query: GetProductsDocument, ...options });
};
export const GetProductDocument = /*#__PURE__*/ gql`
    query GetProduct($id: Int!) {
  product: products_by_pk(id: $id) {
    category
    createdAt
    discount
    id
    name
    oldPrice
    outOfStock
    price
    rating
    reviews
    subCategory
    tags
    updatedAt
    url
  }
}
    `;

export function useGetProductQuery(options: Omit<Urql.UseQueryArgs<GetProductQueryVariables>, 'query'>) {
  return Urql.useQuery<GetProductQuery>({ query: GetProductDocument, ...options });
};
export const SearchProductsDocument = /*#__PURE__*/ gql`
    query SearchProducts($args: search_products_args!, $distinct_on: [products_select_column!], $limit: Int, $offset: Int, $order_by: [products_order_by!], $where: products_bool_exp) {
  products_aggregate: search_products_aggregate(
    args: $args
    distinct_on: $distinct_on
    order_by: $order_by
    where: $where
  ) {
    aggregate {
      count
    }
  }
  products: search_products(
    args: $args
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    name
    id
    category
    subCategory
    outOfStock
    price
    images
    rating
    reviews
    discount
    oldPrice
  }
}
    `;

export function useSearchProductsQuery(options: Omit<Urql.UseQueryArgs<SearchProductsQueryVariables>, 'query'>) {
  return Urql.useQuery<SearchProductsQuery>({ query: SearchProductsDocument, ...options });
};
export const FilterProductsDocument = /*#__PURE__*/ gql`
    query FilterProducts($distinct_on: [products_select_column!], $limit: Int, $offset: Int, $order_by: [products_order_by!], $where: products_bool_exp) {
  products_aggregate(
    distinct_on: $distinct_on
    order_by: $order_by
    where: $where
  ) {
    aggregate {
      count
    }
  }
  products(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    name
    id
    category
    subCategory
    outOfStock
    price
    images
    rating
    reviews
    discount
    oldPrice
  }
}
    `;

export function useFilterProductsQuery(options?: Omit<Urql.UseQueryArgs<FilterProductsQueryVariables>, 'query'>) {
  return Urql.useQuery<FilterProductsQuery>({ query: FilterProductsDocument, ...options });
};
export const InsertUserProductsOneDocument = /*#__PURE__*/ gql`
    mutation InsertUserProductsOne($object: user_products_insert_input!) {
  insert_user_products_one(
    object: $object
    on_conflict: {constraint: user_products_pid_uid_key, update_columns: [pid, type]}
  ) {
    createdAt
    id
    pid
    type
    uid
    updatedAt
  }
}
    `;

export function useInsertUserProductsOneMutation() {
  return Urql.useMutation<InsertUserProductsOneMutation, InsertUserProductsOneMutationVariables>(InsertUserProductsOneDocument);
};
export const GetUserProductsDocument = /*#__PURE__*/ gql`
    query GetUserProducts($uid: String!) {
  user_products(where: {uid: {_eq: $uid}}) {
    createdAt
    id
    pid
    type
    uid
    updatedAt
    product {
      name
      price
      oldPrice
      images
      outOfStock
      category
      subCategory
      rating
      reviews
    }
  }
}
    `;

export function useGetUserProductsQuery(options: Omit<Urql.UseQueryArgs<GetUserProductsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserProductsQuery>({ query: GetUserProductsDocument, ...options });
};
export const CompleteOrderDocument = /*#__PURE__*/ gql`
    mutation CompleteOrder($objects: [orders_insert_input!]!) {
  insert_orders(objects: $objects) {
    affected_rows
  }
}
    `;

export function useCompleteOrderMutation() {
  return Urql.useMutation<CompleteOrderMutation, CompleteOrderMutationVariables>(CompleteOrderDocument);
};
export const GetOrderedProductsDocument = /*#__PURE__*/ gql`
    query GetOrderedProducts($distinct_on: [orders_select_column!], $limit: Int, $offset: Int, $order_by: [orders_order_by!], $where: orders_bool_exp) {
  orders(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    id
    pid
    product {
      images
      name
    }
    updatedAt
  }
  orders_aggregate(distinct_on: $distinct_on, order_by: $order_by, where: $where) {
    aggregate {
      count
    }
  }
}
    `;

export function useGetOrderedProductsQuery(options?: Omit<Urql.UseQueryArgs<GetOrderedProductsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetOrderedProductsQuery>({ query: GetOrderedProductsDocument, ...options });
};
export const InsertProductViewDocument = /*#__PURE__*/ gql`
    mutation InsertProductView($uid: String!, $pid: Int) {
  insert_views_one(object: {uid: $uid, pid: $pid}) {
    uid
    pid
    id
    created_at
    updated_at
  }
}
    `;

export function useInsertProductViewMutation() {
  return Urql.useMutation<InsertProductViewMutation, InsertProductViewMutationVariables>(InsertProductViewDocument);
};
export const GetViewedProductsDocument = /*#__PURE__*/ gql`
    query GetViewedProducts($uid: String) {
  views(distinct_on: pid, limit: 12, where: {uid: {_eq: $uid}}) {
    id
    pid
    product {
      images
      name
      price
      oldPrice
    }
  }
}
    `;

export function useGetViewedProductsQuery(options?: Omit<Urql.UseQueryArgs<GetViewedProductsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetViewedProductsQuery>({ query: GetViewedProductsDocument, ...options });
};