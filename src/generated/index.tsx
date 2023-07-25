import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: any; output: any }
}

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  not?: InputMaybe<Scalars['Boolean']['input']>
}

export type CreateOrderInput = {
  pid: Scalars['Int']['input']
  status: OrderStatus
  uid: Scalars['String']['input']
}

export type CreateOrderLogInput = {
  orderId: Scalars['Int']['input']
  status: OrderStatus
}

export type CreateProductInput = {
  category: Scalars['String']['input']
  description?: InputMaybe<Scalars['String']['input']>
  discount?: InputMaybe<Scalars['Int']['input']>
  images: Array<Scalars['String']['input']>
  measurements?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  oldPrice?: InputMaybe<Scalars['Float']['input']>
  outOfStock?: InputMaybe<Scalars['Boolean']['input']>
  price: Scalars['Float']['input']
  rating?: InputMaybe<Scalars['Float']['input']>
  reviews?: InputMaybe<Scalars['Int']['input']>
  sellerId: Scalars['String']['input']
  subCategory?: InputMaybe<Scalars['String']['input']>
  tags: Array<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

export type CreateSellerInput = {
  uid: Scalars['String']['input']
}

export type CreateSupportInput = {
  category?: InputMaybe<Scalars['String']['input']>
  location?: InputMaybe<Scalars['String']['input']>
  message: Scalars['String']['input']
  title: Scalars['String']['input']
  uid: Scalars['String']['input']
}

export type CreateUserInput = {
  about?: InputMaybe<Scalars['String']['input']>
  address?: InputMaybe<Scalars['String']['input']>
  displayName: Scalars['String']['input']
  uid: Scalars['String']['input']
}

export type CreateUserProductInput = {
  pid: Scalars['Int']['input']
  status: UserProductStatus
  uid: Scalars['String']['input']
}

export type CreateViewInput = {
  pid: Scalars['Int']['input']
  uid: Scalars['String']['input']
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
}

export type EnumOrderStatusFilter = {
  equals?: InputMaybe<OrderStatus>
  in?: InputMaybe<Array<OrderStatus>>
  not?: InputMaybe<EnumOrderStatusFilter>
  notIn?: InputMaybe<Array<OrderStatus>>
}

export type EnumUserProductStatusFilter = {
  equals?: InputMaybe<UserProductStatus>
  in?: InputMaybe<Array<UserProductStatus>>
  not?: InputMaybe<EnumUserProductStatusFilter>
  notIn?: InputMaybe<Array<UserProductStatus>>
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  in?: InputMaybe<Scalars['Int']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
  not?: InputMaybe<Scalars['Int']['input']>
  notIn?: InputMaybe<Scalars['Int']['input']>
}

export type LoginInput = {
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type LoginOutput = {
  __typename?: 'LoginOutput'
  displayName: Scalars['String']['output']
  email: Scalars['String']['output']
  expiresIn: Scalars['String']['output']
  idToken: Scalars['String']['output']
  kind: Scalars['String']['output']
  localId: Scalars['String']['output']
  refreshToken: Scalars['String']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  createOrder: Order
  createOrderLog: OrderLog
  createProduct: Product
  createSeller: Seller
  createSupport: Support
  createUser: User
  createUserProduct: UserProduct
  createView: View
  login: LoginOutput
  refreshToken: RefreshTokenOutput
  register: RegisterOutput
  removeOrder: Order
  removeOrderLog: OrderLog
  removeProduct: Product
  removeSeller: Seller
  removeSupport: Support
  removeUser: User
  removeUserProduct: UserProduct
  removeView: View
  setAdmin: Scalars['Boolean']['output']
  setRole: Scalars['Boolean']['output']
  updateOrder: Order
  updateOrderLog: OrderLog
  updateProduct: Product
  updateSeller: Seller
  updateSupport: Support
  updateUser: User
  updateUserProduct: UserProduct
  updateView: View
}

export type MutationCreateOrderArgs = {
  createOrderInput: CreateOrderInput
}

export type MutationCreateOrderLogArgs = {
  createOrderLogInput: CreateOrderLogInput
}

export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput
}

export type MutationCreateSellerArgs = {
  createSellerInput: CreateSellerInput
}

export type MutationCreateSupportArgs = {
  createSupportInput: CreateSupportInput
}

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput
}

export type MutationCreateUserProductArgs = {
  createUserProductInput: CreateUserProductInput
}

export type MutationCreateViewArgs = {
  createViewInput: CreateViewInput
}

export type MutationLoginArgs = {
  credentials: LoginInput
}

export type MutationRefreshTokenArgs = {
  refreshTokenInput: RefreshTokenInput
}

export type MutationRegisterArgs = {
  credentials: RegisterInput
}

export type MutationRemoveOrderArgs = {
  where?: InputMaybe<OrderWhereUniqueInput>
}

export type MutationRemoveOrderLogArgs = {
  where?: InputMaybe<OrderLogWhereUniqueInput>
}

export type MutationRemoveProductArgs = {
  where?: InputMaybe<ProductWhereUniqueInput>
}

export type MutationRemoveSellerArgs = {
  where?: InputMaybe<SellerWhereUniqueInput>
}

export type MutationRemoveSupportArgs = {
  where?: InputMaybe<SupportWhereUniqueInput>
}

export type MutationRemoveUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>
}

export type MutationRemoveUserProductArgs = {
  where?: InputMaybe<UserProductWhereUniqueInput>
}

export type MutationRemoveViewArgs = {
  where?: InputMaybe<ViewWhereUniqueInput>
}

export type MutationSetAdminArgs = {
  uid: Scalars['String']['input']
}

export type MutationSetRoleArgs = {
  setRoleInput: SetRoleInput
}

export type MutationUpdateOrderArgs = {
  updateOrderInput: UpdateOrderInput
}

export type MutationUpdateOrderLogArgs = {
  updateOrderLogInput: UpdateOrderLogInput
}

export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput
}

export type MutationUpdateSellerArgs = {
  updateSellerInput: UpdateSellerInput
}

export type MutationUpdateSupportArgs = {
  updateSupportInput: UpdateSupportInput
}

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput
}

export type MutationUpdateUserProductArgs = {
  updateUserProductInput: UpdateUserProductInput
}

export type MutationUpdateViewArgs = {
  updateViewInput: UpdateViewInput
}

export type Order = {
  __typename?: 'Order'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  orderLogs: Array<OrderLog>
  pid: Scalars['Int']['output']
  product: Product
  status: OrderStatus
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user: User
}

export type OrderListRelationFilter = {
  every?: InputMaybe<OrderWhereInput>
  none?: InputMaybe<OrderWhereInput>
  some?: InputMaybe<OrderWhereInput>
}

export type OrderLog = {
  __typename?: 'OrderLog'
  createdAt: Scalars['String']['output']
  id: Scalars['Int']['output']
  order: Order
  orderId: Scalars['Int']['output']
  status: OrderStatus
  updatedAt: Scalars['String']['output']
}

export type OrderLogListRelationFilter = {
  every?: InputMaybe<OrderLogWhereInput>
  none?: InputMaybe<OrderLogWhereInput>
  some?: InputMaybe<OrderLogWhereInput>
}

export type OrderLogOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type OrderLogOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  order?: InputMaybe<SortOrder>
  orderId?: InputMaybe<SortOrder>
  status?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum OrderLogScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  OrderId = 'orderId',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export type OrderLogWhereInput = {
  AND?: InputMaybe<Array<OrderLogWhereInput>>
  NOT?: InputMaybe<Array<OrderLogWhereInput>>
  OR?: InputMaybe<Array<OrderLogWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  order?: InputMaybe<OrderRelationFilter>
  orderId?: InputMaybe<IntFilter>
  status?: InputMaybe<EnumOrderStatusFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type OrderLogWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type OrderOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type OrderOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  orderLogs?: InputMaybe<OrderLogOrderByRelationAggregateInput>
  pid?: InputMaybe<SortOrder>
  product?: InputMaybe<ProductOrderByWithRelationInput>
  status?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export type OrderRelationFilter = {
  is?: InputMaybe<OrderWhereInput>
  isNot?: InputMaybe<OrderWhereInput>
}

export enum OrderScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Pid = 'pid',
  Status = 'status',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export enum OrderStatus {
  Delivered = 'DELIVERED',
  Dispatched = 'DISPATCHED',
  OrderReceived = 'ORDER_RECEIVED',
}

export type OrderWhereInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>
  NOT?: InputMaybe<Array<OrderWhereInput>>
  OR?: InputMaybe<Array<OrderWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  orderLogs?: InputMaybe<OrderLogListRelationFilter>
  pid?: InputMaybe<IntFilter>
  product?: InputMaybe<ProductRelationFilter>
  status?: InputMaybe<EnumOrderStatusFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type OrderWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type Product = {
  __typename?: 'Product'
  category: Scalars['String']['output']
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  discount?: Maybe<Scalars['Int']['output']>
  id: Scalars['Int']['output']
  images: Array<Scalars['String']['output']>
  measurements?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  oldPrice?: Maybe<Scalars['Float']['output']>
  orders: Array<Order>
  outOfStock?: Maybe<Scalars['Boolean']['output']>
  price: Scalars['Float']['output']
  rating?: Maybe<Scalars['Float']['output']>
  reviews?: Maybe<Scalars['Int']['output']>
  seller?: Maybe<Seller>
  sellerId: Scalars['String']['output']
  subCategory?: Maybe<Scalars['String']['output']>
  tags: Array<Scalars['String']['output']>
  updatedAt: Scalars['DateTime']['output']
  url?: Maybe<Scalars['String']['output']>
  userProduct?: Maybe<UserProduct>
  userProducts?: Maybe<Array<UserProduct>>
  views: Array<View>
}

export type ProductCountOutput = {
  __typename?: 'ProductCountOutput'
  count: Scalars['Int']['output']
}

export type ProductListRelationFilter = {
  every?: InputMaybe<ProductWhereInput>
  none?: InputMaybe<ProductWhereInput>
  some?: InputMaybe<ProductWhereInput>
}

export type ProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ProductOrderByWithRelationInput = {
  category?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  discount?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  images?: InputMaybe<SortOrder>
  measurements?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  oldPrice?: InputMaybe<SortOrder>
  orders?: InputMaybe<OrderOrderByRelationAggregateInput>
  outOfStock?: InputMaybe<SortOrder>
  price?: InputMaybe<SortOrder>
  rating?: InputMaybe<SortOrder>
  reviews?: InputMaybe<SortOrder>
  seller?: InputMaybe<SellerOrderByWithRelationInput>
  sellerId?: InputMaybe<SortOrder>
  subCategory?: InputMaybe<SortOrder>
  tags?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  url?: InputMaybe<SortOrder>
  userProducts?: InputMaybe<UserProductOrderByRelationAggregateInput>
  views?: InputMaybe<ViewOrderByRelationAggregateInput>
}

export type ProductRelationFilter = {
  is?: InputMaybe<ProductWhereInput>
  isNot?: InputMaybe<ProductWhereInput>
}

export enum ProductScalarFieldEnum {
  Category = 'category',
  CreatedAt = 'createdAt',
  Description = 'description',
  Discount = 'discount',
  Id = 'id',
  Images = 'images',
  Measurements = 'measurements',
  Name = 'name',
  OldPrice = 'oldPrice',
  OutOfStock = 'outOfStock',
  Price = 'price',
  Rating = 'rating',
  Reviews = 'reviews',
  SellerId = 'sellerId',
  SubCategory = 'subCategory',
  Tags = 'tags',
  UpdatedAt = 'updatedAt',
  Url = 'url',
}

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>
  NOT?: InputMaybe<Array<ProductWhereInput>>
  OR?: InputMaybe<Array<ProductWhereInput>>
  category?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  description?: InputMaybe<StringFilter>
  discount?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  images?: InputMaybe<StringFilter>
  measurements?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  oldPrice?: InputMaybe<IntFilter>
  orders?: InputMaybe<OrderListRelationFilter>
  outOfStock?: InputMaybe<BoolFilter>
  price?: InputMaybe<IntFilter>
  rating?: InputMaybe<IntFilter>
  reviews?: InputMaybe<IntFilter>
  seller?: InputMaybe<SellerRelationFilter>
  sellerId?: InputMaybe<StringFilter>
  subCategory?: InputMaybe<StringFilter>
  tags?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  url?: InputMaybe<StringFilter>
  userProducts?: InputMaybe<UserProductListRelationFilter>
  views?: InputMaybe<ViewListRelationFilter>
}

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type Query = {
  __typename?: 'Query'
  myOrders: Array<Order>
  mySupports: Array<Support>
  myUserProducts: Array<UserProduct>
  myViews: Array<View>
  order: Order
  orderAggregate: ProductCountOutput
  orderLog: OrderLog
  orderLogs: Array<OrderLog>
  orders: Array<Order>
  product: Product
  productAggregate: ProductCountOutput
  products: Array<Product>
  seller: Seller
  sellers: Array<Seller>
  support: Support
  supportAggregate: ProductCountOutput
  supports: Array<Support>
  user: User
  userProduct: UserProduct
  userProducts: Array<UserProduct>
  users: Array<User>
  view: View
  views: Array<View>
  whoami: User
}

export type QueryMyOrdersArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<OrderWhereInput>
}

export type QueryMySupportsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<SupportScalarFieldEnum>>
  orderBy?: InputMaybe<Array<SupportOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<SupportWhereInput>
}

export type QueryMyUserProductsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<UserProductScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserProductOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserProductWhereInput>
}

export type QueryMyViewsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<ViewScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ViewOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ViewWhereInput>
}

export type QueryOrderArgs = {
  where?: InputMaybe<OrderWhereUniqueInput>
}

export type QueryOrderAggregateArgs = {
  OrderWhereInput?: InputMaybe<OrderWhereInput>
}

export type QueryOrderLogArgs = {
  where?: InputMaybe<OrderLogWhereUniqueInput>
}

export type QueryOrderLogsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<OrderLogScalarFieldEnum>>
  orderBy?: InputMaybe<Array<OrderLogOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<OrderLogWhereInput>
}

export type QueryOrdersArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<OrderScalarFieldEnum>>
  orderBy?: InputMaybe<Array<OrderOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<OrderWhereInput>
}

export type QueryProductArgs = {
  where?: InputMaybe<ProductWhereUniqueInput>
}

export type QueryProductAggregateArgs = {
  ProductWhereInput?: InputMaybe<ProductWhereInput>
}

export type QueryProductsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ProductWhereInput>
}

export type QuerySellerArgs = {
  where?: InputMaybe<SellerWhereUniqueInput>
}

export type QuerySellersArgs = {
  cursor?: InputMaybe<WhereUniqueInputUid>
  distinct?: InputMaybe<Array<SellerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<SellerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<SellerWhereInput>
}

export type QuerySupportArgs = {
  where?: InputMaybe<SupportWhereUniqueInput>
}

export type QuerySupportAggregateArgs = {
  SupportWhereInput?: InputMaybe<SupportWhereInput>
}

export type QuerySupportsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<SupportScalarFieldEnum>>
  orderBy?: InputMaybe<Array<SupportOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<SupportWhereInput>
}

export type QueryUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>
}

export type QueryUserProductArgs = {
  where?: InputMaybe<UserProductWhereUniqueInput>
}

export type QueryUserProductsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<UserProductScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserProductOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserProductWhereInput>
}

export type QueryUsersArgs = {
  cursor?: InputMaybe<WhereUniqueInputUid>
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserWhereInput>
}

export type QueryViewArgs = {
  where?: InputMaybe<ViewWhereUniqueInput>
}

export type QueryViewsArgs = {
  cursor?: InputMaybe<WhereUniqueInputNumber>
  distinct?: InputMaybe<Array<ViewScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ViewOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ViewWhereInput>
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type RefreshTokenInput = {
  refresh_token: Scalars['String']['input']
}

export type RefreshTokenOutput = {
  __typename?: 'RefreshTokenOutput'
  access_token: Scalars['String']['output']
  expires_in: Scalars['String']['output']
  id_token: Scalars['String']['output']
  project_id: Scalars['String']['output']
  refresh_token: Scalars['String']['output']
  token_type: Scalars['String']['output']
  user_id: Scalars['String']['output']
}

export type RegisterInput = {
  displayName?: InputMaybe<Scalars['String']['input']>
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type RegisterOutput = {
  __typename?: 'RegisterOutput'
  displayName: Scalars['String']['output']
  email: Scalars['String']['output']
  expiresIn: Scalars['String']['output']
  idToken: Scalars['String']['output']
  kind: Scalars['String']['output']
  localId: Scalars['String']['output']
  refreshToken: Scalars['String']['output']
}

/** Enum for roles */
export enum RoleEnum {
  Admin = 'admin',
  Moderator = 'moderator',
}

export type Seller = {
  __typename?: 'Seller'
  createdAt: Scalars['String']['output']
  products: Array<Product>
  uid: Scalars['String']['output']
  updatedAt: Scalars['String']['output']
}

export type SellerOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  product?: InputMaybe<ProductOrderByRelationAggregateInput>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export type SellerRelationFilter = {
  is?: InputMaybe<SellerWhereInput>
  isNot?: InputMaybe<SellerWhereInput>
}

export enum SellerScalarFieldEnum {
  CreatedAt = 'createdAt',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type SellerWhereInput = {
  AND?: InputMaybe<Array<SellerWhereInput>>
  NOT?: InputMaybe<Array<SellerWhereInput>>
  OR?: InputMaybe<Array<SellerWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  product?: InputMaybe<ProductListRelationFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type SellerWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']['input']>
}

export type SetRoleInput = {
  role: RoleEnum
  uid: Scalars['String']['input']
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type Support = {
  __typename?: 'Support'
  category?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  location?: Maybe<Scalars['String']['output']>
  message: Scalars['String']['output']
  title: Scalars['String']['output']
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user: User
}

export type SupportListRelationFilter = {
  every?: InputMaybe<SupportWhereInput>
  none?: InputMaybe<SupportWhereInput>
  some?: InputMaybe<SupportWhereInput>
}

export type SupportOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type SupportOrderByWithRelationInput = {
  category?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  location?: InputMaybe<SortOrder>
  message?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export enum SupportScalarFieldEnum {
  Category = 'category',
  CreatedAt = 'createdAt',
  Id = 'id',
  Location = 'location',
  Message = 'message',
  Title = 'title',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type SupportWhereInput = {
  AND?: InputMaybe<Array<SupportWhereInput>>
  NOT?: InputMaybe<Array<SupportWhereInput>>
  OR?: InputMaybe<Array<SupportWhereInput>>
  category?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  location: StringFilter
  message?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type SupportWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type UpdateOrderInput = {
  id: Scalars['Int']['input']
  pid?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<OrderStatus>
  uid?: InputMaybe<Scalars['String']['input']>
}

export type UpdateOrderLogInput = {
  id: Scalars['Int']['input']
  orderId?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<OrderStatus>
}

export type UpdateProductInput = {
  category?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  discount?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  images?: InputMaybe<Array<Scalars['String']['input']>>
  measurements?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  oldPrice?: InputMaybe<Scalars['Float']['input']>
  outOfStock?: InputMaybe<Scalars['Boolean']['input']>
  price?: InputMaybe<Scalars['Float']['input']>
  rating?: InputMaybe<Scalars['Float']['input']>
  reviews?: InputMaybe<Scalars['Int']['input']>
  sellerId?: InputMaybe<Scalars['String']['input']>
  subCategory?: InputMaybe<Scalars['String']['input']>
  tags?: InputMaybe<Array<Scalars['String']['input']>>
  url?: InputMaybe<Scalars['String']['input']>
}

export type UpdateSellerInput = {
  id: Scalars['String']['input']
  uid?: InputMaybe<Scalars['String']['input']>
}

export type UpdateSupportInput = {
  category?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  location?: InputMaybe<Scalars['String']['input']>
  message?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  uid?: InputMaybe<Scalars['String']['input']>
}

export type UpdateUserInput = {
  about?: InputMaybe<Scalars['String']['input']>
  address?: InputMaybe<Scalars['String']['input']>
  displayName?: InputMaybe<Scalars['String']['input']>
  id: Scalars['String']['input']
  uid?: InputMaybe<Scalars['String']['input']>
}

export type UpdateUserProductInput = {
  id: Scalars['Int']['input']
  pid?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<UserProductStatus>
  uid?: InputMaybe<Scalars['String']['input']>
}

export type UpdateViewInput = {
  id: Scalars['Int']['input']
  pid?: InputMaybe<Scalars['Int']['input']>
  uid?: InputMaybe<Scalars['String']['input']>
}

export type User = {
  __typename?: 'User'
  about?: Maybe<Scalars['String']['output']>
  address?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['DateTime']['output']
  displayName: Scalars['String']['output']
  orders: Array<Order>
  seller?: Maybe<Seller>
  supports: Array<Support>
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  userProducts: Array<UserProduct>
  views: Array<View>
}

export type UserOrderByWithRelationInput = {
  about?: InputMaybe<SortOrder>
  address?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  displayName?: InputMaybe<SortOrder>
  orders?: InputMaybe<OrderOrderByRelationAggregateInput>
  seller?: InputMaybe<SellerOrderByWithRelationInput>
  supports?: InputMaybe<SupportOrderByRelationAggregateInput>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  userProducts?: InputMaybe<UserProductOrderByRelationAggregateInput>
  views?: InputMaybe<ViewOrderByRelationAggregateInput>
}

export type UserProduct = {
  __typename?: 'UserProduct'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  pid: Scalars['Int']['output']
  product: Product
  status: UserProductStatus
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user: User
}

export type UserProductListRelationFilter = {
  every?: InputMaybe<UserProductWhereInput>
  none?: InputMaybe<UserProductWhereInput>
  some?: InputMaybe<UserProductWhereInput>
}

export type UserProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type UserProductOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  pid?: InputMaybe<SortOrder>
  product?: InputMaybe<ProductOrderByWithRelationInput>
  status?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export enum UserProductScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Pid = 'pid',
  Status = 'status',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export enum UserProductStatus {
  InCart = 'IN_CART',
  Purchased = 'PURCHASED',
  RemovedFromWishlist = 'REMOVED_FROM_WISHLIST',
  SavedForLater = 'SAVED_FOR_LATER',
  Wishlisted = 'WISHLISTED',
}

export type UserProductWhereInput = {
  AND?: InputMaybe<Array<UserProductWhereInput>>
  NOT?: InputMaybe<Array<UserProductWhereInput>>
  OR?: InputMaybe<Array<UserProductWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  pid?: InputMaybe<IntFilter>
  product?: InputMaybe<ProductRelationFilter>
  status?: InputMaybe<EnumUserProductStatusFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type UserProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>
  isNot?: InputMaybe<UserWhereInput>
}

export enum UserScalarFieldEnum {
  About = 'about',
  Address = 'address',
  CreatedAt = 'createdAt',
  DisplayName = 'displayName',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>
  NOT?: InputMaybe<Array<UserWhereInput>>
  OR?: InputMaybe<Array<UserWhereInput>>
  about?: InputMaybe<StringFilter>
  address?: InputMaybe<StringFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  displayName?: InputMaybe<StringFilter>
  orders?: InputMaybe<OrderListRelationFilter>
  seller?: InputMaybe<SellerRelationFilter>
  supports?: InputMaybe<SupportListRelationFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  userProducts?: InputMaybe<UserProductListRelationFilter>
  views?: InputMaybe<ViewListRelationFilter>
}

export type UserWhereUniqueInput = {
  uid?: InputMaybe<Scalars['String']['input']>
}

export type View = {
  __typename?: 'View'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  pid: Scalars['Int']['output']
  product: Product
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
  user: User
}

export type ViewListRelationFilter = {
  every?: InputMaybe<ViewWhereInput>
  none?: InputMaybe<ViewWhereInput>
  some?: InputMaybe<ViewWhereInput>
}

export type ViewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ViewOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  pid?: InputMaybe<SortOrder>
  product?: InputMaybe<ProductOrderByWithRelationInput>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export enum ViewScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Pid = 'pid',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type ViewWhereInput = {
  AND?: InputMaybe<Array<ViewWhereInput>>
  NOT?: InputMaybe<Array<ViewWhereInput>>
  OR?: InputMaybe<Array<ViewWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  pid?: InputMaybe<IntFilter>
  product?: InputMaybe<ProductRelationFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type ViewWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type WhereUniqueInputNumber = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type WhereUniqueInputUid = {
  uid?: InputMaybe<Scalars['String']['input']>
}

export type ProductsQueryVariables = Exact<{
  distinct?: InputMaybe<Array<ProductScalarFieldEnum> | ProductScalarFieldEnum>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<
    Array<ProductOrderByWithRelationInput> | ProductOrderByWithRelationInput
  >
  where?: InputMaybe<ProductWhereInput>
}>

export type ProductsQuery = {
  __typename?: 'Query'
  products: Array<{
    __typename?: 'Product'
    category: string
    createdAt: any
    discount?: number | null
    id: number
    name: string
  }>
  productAggregate: { __typename?: 'ProductCountOutput'; count: number }
}

export type ProductQueryVariables = Exact<{
  id: Scalars['Int']['input']
}>

export type ProductQuery = {
  __typename?: 'Query'
  product: {
    __typename?: 'Product'
    category: string
    createdAt: any
    discount?: number | null
    id: number
    name: string
    oldPrice?: number | null
    outOfStock?: boolean | null
    price: number
    rating?: number | null
    reviews?: number | null
    description?: string | null
    measurements?: string | null
    subCategory?: string | null
    tags: Array<string>
    updatedAt: any
    url?: string | null
    images: Array<string>
    userProduct?: {
      __typename?: 'UserProduct'
      id: number
      status: UserProductStatus
    } | null
  }
}

export type SearchProductsQueryVariables = Exact<{
  distinct?: InputMaybe<Array<ProductScalarFieldEnum> | ProductScalarFieldEnum>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  cursor?: InputMaybe<WhereUniqueInputNumber>
  orderBy?: InputMaybe<
    Array<ProductOrderByWithRelationInput> | ProductOrderByWithRelationInput
  >
  where?: InputMaybe<ProductWhereInput>
}>

export type SearchProductsQuery = {
  __typename?: 'Query'
  products: Array<{
    __typename?: 'Product'
    name: string
    id: number
    category: string
    subCategory?: string | null
    outOfStock?: boolean | null
    price: number
    images: Array<string>
    rating?: number | null
    reviews?: number | null
    discount?: number | null
    oldPrice?: number | null
    userProduct?: {
      __typename?: 'UserProduct'
      id: number
      status: UserProductStatus
    } | null
  }>
  productAggregate: { __typename?: 'ProductCountOutput'; count: number }
}

export type FilterProductsQueryVariables = Exact<{
  distinct?: InputMaybe<Array<ProductScalarFieldEnum> | ProductScalarFieldEnum>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  cursor?: InputMaybe<WhereUniqueInputNumber>
  orderBy?: InputMaybe<
    Array<ProductOrderByWithRelationInput> | ProductOrderByWithRelationInput
  >
  where?: InputMaybe<ProductWhereInput>
}>

export type FilterProductsQuery = {
  __typename?: 'Query'
  productAggregate: { __typename?: 'ProductCountOutput'; count: number }
  products: Array<{
    __typename?: 'Product'
    name: string
    id: number
    category: string
    subCategory?: string | null
    outOfStock?: boolean | null
    price: number
    images: Array<string>
    rating?: number | null
    reviews?: number | null
    discount?: number | null
    oldPrice?: number | null
  }>
}

export type MyUserProductsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  distinct?: InputMaybe<
    Array<UserProductScalarFieldEnum> | UserProductScalarFieldEnum
  >
  orderBy?: InputMaybe<
    | Array<UserProductOrderByWithRelationInput>
    | UserProductOrderByWithRelationInput
  >
  where?: InputMaybe<UserProductWhereInput>
}>

export type MyUserProductsQuery = {
  __typename?: 'Query'
  myUserProducts: Array<{
    __typename?: 'UserProduct'
    createdAt: any
    id: number
    pid: number
    uid: string
    updatedAt: any
    status: UserProductStatus
    product: {
      __typename?: 'Product'
      name: string
      price: number
      oldPrice?: number | null
      images: Array<string>
      outOfStock?: boolean | null
      category: string
      subCategory?: string | null
      rating?: number | null
      reviews?: number | null
    }
  }>
}

export type MyOrdersQueryVariables = Exact<{
  distinct?: InputMaybe<Array<OrderScalarFieldEnum> | OrderScalarFieldEnum>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  cursor?: InputMaybe<WhereUniqueInputNumber>
  orderBy?: InputMaybe<
    Array<OrderOrderByWithRelationInput> | OrderOrderByWithRelationInput
  >
  where?: InputMaybe<OrderWhereInput>
}>

export type MyOrdersQuery = {
  __typename?: 'Query'
  myOrders: Array<{
    __typename?: 'Order'
    id: number
    pid: number
    updatedAt: any
    product: { __typename?: 'Product'; images: Array<string>; name: string }
  }>
  orderAggregate: { __typename?: 'ProductCountOutput'; count: number }
}

export type MyViewsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<
    Array<ViewOrderByWithRelationInput> | ViewOrderByWithRelationInput
  >
  distinct?: InputMaybe<Array<ViewScalarFieldEnum> | ViewScalarFieldEnum>
  where?: InputMaybe<ViewWhereInput>
}>

export type MyViewsQuery = {
  __typename?: 'Query'
  myViews: Array<{
    __typename?: 'View'
    id: number
    pid: number
    product: {
      __typename?: 'Product'
      images: Array<string>
      name: string
      price: number
      oldPrice?: number | null
    }
  }>
}

export type SupportsQueryVariables = Exact<{
  distinct?: InputMaybe<Array<SupportScalarFieldEnum> | SupportScalarFieldEnum>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  cursor?: InputMaybe<WhereUniqueInputNumber>
  orderBy?: InputMaybe<
    Array<SupportOrderByWithRelationInput> | SupportOrderByWithRelationInput
  >
  where?: InputMaybe<SupportWhereInput>
}>

export type SupportsQuery = {
  __typename?: 'Query'
  supports: Array<{
    __typename?: 'Support'
    category?: string | null
    message: string
    id: number
    updatedAt: any
  }>
  supportAggregate: { __typename?: 'ProductCountOutput'; count: number }
}

export type MySupportsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<
    Array<SupportOrderByWithRelationInput> | SupportOrderByWithRelationInput
  >
  where?: InputMaybe<SupportWhereInput>
}>

export type MySupportsQuery = {
  __typename?: 'Query'
  mySupports: Array<{
    __typename?: 'Support'
    category?: string | null
    message: string
    id: number
    updatedAt: any
  }>
  supportAggregate: { __typename?: 'ProductCountOutput'; count: number }
}

export type InsertUserProductsOneMutationVariables = Exact<{
  createUserProductInput: CreateUserProductInput
}>

export type InsertUserProductsOneMutation = {
  __typename?: 'Mutation'
  createUserProduct: {
    __typename?: 'UserProduct'
    createdAt: any
    id: number
    pid: number
    status: UserProductStatus
    uid: string
    updatedAt: any
  }
}

export type InsertProductViewMutationVariables = Exact<{
  uid: Scalars['String']['input']
  pid: Scalars['Int']['input']
}>

export type InsertProductViewMutation = {
  __typename?: 'Mutation'
  createView: {
    __typename?: 'View'
    pid: number
    uid: string
    createdAt: any
    updatedAt: any
    id: number
  }
}

export type PostNewProductMutationVariables = Exact<{
  createProductInput: CreateProductInput
}>

export type PostNewProductMutation = {
  __typename?: 'Mutation'
  createProduct: {
    __typename?: 'Product'
    category: string
    createdAt: any
    id: number
    discount?: number | null
    images: Array<string>
    name: string
    price: number
    oldPrice?: number | null
    description?: string | null
  }
}

export type InsertSupportMutationVariables = Exact<{
  createSupportInput: CreateSupportInput
}>

export type InsertSupportMutation = {
  __typename?: 'Mutation'
  createSupport: {
    __typename?: 'Support'
    updatedAt: any
    uid: string
    location?: string | null
    message: string
    id: number
    createdAt: any
    category?: string | null
  }
}

export type WhoamiQueryVariables = Exact<{ [key: string]: never }>

export type WhoamiQuery = {
  __typename?: 'Query'
  whoami: {
    __typename?: 'User'
    uid: string
    seller?: { __typename?: 'Seller'; uid: string } | null
  }
}

export type CreateSellerMutationVariables = Exact<{
  createSellerInput: CreateSellerInput
}>

export type CreateSellerMutation = {
  __typename?: 'Mutation'
  createSeller: { __typename?: 'Seller'; uid: string }
}

export const namedOperations = {
  Query: {
    Products: 'Products',
    product: 'product',
    SearchProducts: 'SearchProducts',
    FilterProducts: 'FilterProducts',
    myUserProducts: 'myUserProducts',
    myOrders: 'myOrders',
    myViews: 'myViews',
    Supports: 'Supports',
    MySupports: 'MySupports',
    whoami: 'whoami',
  },
  Mutation: {
    InsertUserProductsOne: 'InsertUserProductsOne',
    InsertProductView: 'InsertProductView',
    PostNewProduct: 'PostNewProduct',
    InsertSupport: 'InsertSupport',
    createSeller: 'createSeller',
  },
}

export const ProductsDocument = /*#__PURE__*/ gql`
  query Products(
    $distinct: [ProductScalarFieldEnum!]
    $skip: Int
    $take: Int
    $orderBy: [ProductOrderByWithRelationInput!]
    $where: ProductWhereInput
  ) {
    products(
      distinct: $distinct
      skip: $skip
      take: $take
      orderBy: $orderBy
      where: $where
    ) {
      category
      createdAt
      discount
      id
      name
    }
    productAggregate(ProductWhereInput: $where) {
      count
    }
  }
`

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      distinct: // value for 'distinct'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(
    ProductsDocument,
    options
  )
}
export function useProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProductsQuery,
    ProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(
    ProductsDocument,
    options
  )
}
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>
export type ProductsLazyQueryHookResult = ReturnType<
  typeof useProductsLazyQuery
>
export type ProductsQueryResult = Apollo.QueryResult<
  ProductsQuery,
  ProductsQueryVariables
>
export const ProductDocument = /*#__PURE__*/ gql`
  query product($id: Int!) {
    product: product(where: { id: $id }) {
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
      description
      measurements
      subCategory
      tags
      updatedAt
      url
      images
      userProduct {
        id
        status
      }
    }
  }
`

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(
  baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ProductQuery, ProductQueryVariables>(
    ProductDocument,
    options
  )
}
export function useProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(
    ProductDocument,
    options
  )
}
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>
export type ProductQueryResult = Apollo.QueryResult<
  ProductQuery,
  ProductQueryVariables
>
export const SearchProductsDocument = /*#__PURE__*/ gql`
  query SearchProducts(
    $distinct: [ProductScalarFieldEnum!]
    $skip: Int
    $take: Int
    $cursor: WhereUniqueInputNumber
    $orderBy: [ProductOrderByWithRelationInput!]
    $where: ProductWhereInput
  ) {
    products(
      distinct: $distinct
      skip: $skip
      take: $take
      where: $where
      cursor: $cursor
      orderBy: $orderBy
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
      userProduct {
        id
        status
      }
    }
    productAggregate(ProductWhereInput: $where) {
      count
    }
  }
`

/**
 * __useSearchProductsQuery__
 *
 * To run a query within a React component, call `useSearchProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProductsQuery({
 *   variables: {
 *      distinct: // value for 'distinct'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSearchProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SearchProductsQuery,
    SearchProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SearchProductsQuery, SearchProductsQueryVariables>(
    SearchProductsDocument,
    options
  )
}
export function useSearchProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchProductsQuery,
    SearchProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SearchProductsQuery, SearchProductsQueryVariables>(
    SearchProductsDocument,
    options
  )
}
export type SearchProductsQueryHookResult = ReturnType<
  typeof useSearchProductsQuery
>
export type SearchProductsLazyQueryHookResult = ReturnType<
  typeof useSearchProductsLazyQuery
>
export type SearchProductsQueryResult = Apollo.QueryResult<
  SearchProductsQuery,
  SearchProductsQueryVariables
>
export const FilterProductsDocument = /*#__PURE__*/ gql`
  query FilterProducts(
    $distinct: [ProductScalarFieldEnum!]
    $skip: Int
    $take: Int
    $cursor: WhereUniqueInputNumber
    $orderBy: [ProductOrderByWithRelationInput!]
    $where: ProductWhereInput
  ) {
    productAggregate(ProductWhereInput: $where) {
      count
    }
    products(
      distinct: $distinct
      skip: $skip
      take: $take
      where: $where
      cursor: $cursor
      orderBy: $orderBy
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
`

/**
 * __useFilterProductsQuery__
 *
 * To run a query within a React component, call `useFilterProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilterProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilterProductsQuery({
 *   variables: {
 *      distinct: // value for 'distinct'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFilterProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    FilterProductsQuery,
    FilterProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FilterProductsQuery, FilterProductsQueryVariables>(
    FilterProductsDocument,
    options
  )
}
export function useFilterProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FilterProductsQuery,
    FilterProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<FilterProductsQuery, FilterProductsQueryVariables>(
    FilterProductsDocument,
    options
  )
}
export type FilterProductsQueryHookResult = ReturnType<
  typeof useFilterProductsQuery
>
export type FilterProductsLazyQueryHookResult = ReturnType<
  typeof useFilterProductsLazyQuery
>
export type FilterProductsQueryResult = Apollo.QueryResult<
  FilterProductsQuery,
  FilterProductsQueryVariables
>
export const MyUserProductsDocument = /*#__PURE__*/ gql`
  query myUserProducts(
    $skip: Int
    $take: Int
    $distinct: [UserProductScalarFieldEnum!]
    $orderBy: [UserProductOrderByWithRelationInput!]
    $where: UserProductWhereInput
  ) {
    myUserProducts(
      skip: $skip
      take: $take
      distinct: $distinct
      orderBy: $orderBy
      where: $where
    ) {
      createdAt
      id
      pid
      uid
      updatedAt
      status
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
`

/**
 * __useMyUserProductsQuery__
 *
 * To run a query within a React component, call `useMyUserProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyUserProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyUserProductsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      distinct: // value for 'distinct'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMyUserProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MyUserProductsQuery,
    MyUserProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MyUserProductsQuery, MyUserProductsQueryVariables>(
    MyUserProductsDocument,
    options
  )
}
export function useMyUserProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MyUserProductsQuery,
    MyUserProductsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MyUserProductsQuery, MyUserProductsQueryVariables>(
    MyUserProductsDocument,
    options
  )
}
export type MyUserProductsQueryHookResult = ReturnType<
  typeof useMyUserProductsQuery
>
export type MyUserProductsLazyQueryHookResult = ReturnType<
  typeof useMyUserProductsLazyQuery
>
export type MyUserProductsQueryResult = Apollo.QueryResult<
  MyUserProductsQuery,
  MyUserProductsQueryVariables
>
export const MyOrdersDocument = /*#__PURE__*/ gql`
  query myOrders(
    $distinct: [OrderScalarFieldEnum!]
    $skip: Int
    $take: Int
    $cursor: WhereUniqueInputNumber
    $orderBy: [OrderOrderByWithRelationInput!]
    $where: OrderWhereInput
  ) {
    myOrders(
      distinct: $distinct
      skip: $skip
      take: $take
      cursor: $cursor
      orderBy: $orderBy
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
    orderAggregate(OrderWhereInput: $where) {
      count
    }
  }
`

/**
 * __useMyOrdersQuery__
 *
 * To run a query within a React component, call `useMyOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyOrdersQuery({
 *   variables: {
 *      distinct: // value for 'distinct'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMyOrdersQuery(
  baseOptions?: Apollo.QueryHookOptions<MyOrdersQuery, MyOrdersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MyOrdersQuery, MyOrdersQueryVariables>(
    MyOrdersDocument,
    options
  )
}
export function useMyOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MyOrdersQuery,
    MyOrdersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MyOrdersQuery, MyOrdersQueryVariables>(
    MyOrdersDocument,
    options
  )
}
export type MyOrdersQueryHookResult = ReturnType<typeof useMyOrdersQuery>
export type MyOrdersLazyQueryHookResult = ReturnType<
  typeof useMyOrdersLazyQuery
>
export type MyOrdersQueryResult = Apollo.QueryResult<
  MyOrdersQuery,
  MyOrdersQueryVariables
>
export const MyViewsDocument = /*#__PURE__*/ gql`
  query myViews(
    $skip: Int
    $take: Int
    $orderBy: [ViewOrderByWithRelationInput!]
    $distinct: [ViewScalarFieldEnum!]
    $where: ViewWhereInput
  ) {
    myViews(
      skip: $skip
      take: $take
      orderBy: $orderBy
      distinct: $distinct
      where: $where
    ) {
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
`

/**
 * __useMyViewsQuery__
 *
 * To run a query within a React component, call `useMyViewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyViewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyViewsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      orderBy: // value for 'orderBy'
 *      distinct: // value for 'distinct'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMyViewsQuery(
  baseOptions?: Apollo.QueryHookOptions<MyViewsQuery, MyViewsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MyViewsQuery, MyViewsQueryVariables>(
    MyViewsDocument,
    options
  )
}
export function useMyViewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MyViewsQuery, MyViewsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MyViewsQuery, MyViewsQueryVariables>(
    MyViewsDocument,
    options
  )
}
export type MyViewsQueryHookResult = ReturnType<typeof useMyViewsQuery>
export type MyViewsLazyQueryHookResult = ReturnType<typeof useMyViewsLazyQuery>
export type MyViewsQueryResult = Apollo.QueryResult<
  MyViewsQuery,
  MyViewsQueryVariables
>
export const SupportsDocument = /*#__PURE__*/ gql`
  query Supports(
    $distinct: [SupportScalarFieldEnum!]
    $skip: Int
    $take: Int
    $cursor: WhereUniqueInputNumber
    $orderBy: [SupportOrderByWithRelationInput!]
    $where: SupportWhereInput
  ) {
    supports(
      distinct: $distinct
      skip: $skip
      take: $take
      cursor: $cursor
      orderBy: $orderBy
      where: $where
    ) {
      category
      message
      id
      updatedAt
    }
    supportAggregate(SupportWhereInput: $where) {
      count
    }
  }
`

/**
 * __useSupportsQuery__
 *
 * To run a query within a React component, call `useSupportsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSupportsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSupportsQuery({
 *   variables: {
 *      distinct: // value for 'distinct'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      cursor: // value for 'cursor'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSupportsQuery(
  baseOptions?: Apollo.QueryHookOptions<SupportsQuery, SupportsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SupportsQuery, SupportsQueryVariables>(
    SupportsDocument,
    options
  )
}
export function useSupportsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SupportsQuery,
    SupportsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SupportsQuery, SupportsQueryVariables>(
    SupportsDocument,
    options
  )
}
export type SupportsQueryHookResult = ReturnType<typeof useSupportsQuery>
export type SupportsLazyQueryHookResult = ReturnType<
  typeof useSupportsLazyQuery
>
export type SupportsQueryResult = Apollo.QueryResult<
  SupportsQuery,
  SupportsQueryVariables
>
export const MySupportsDocument = /*#__PURE__*/ gql`
  query MySupports(
    $skip: Int
    $take: Int
    $orderBy: [SupportOrderByWithRelationInput!]
    $where: SupportWhereInput
  ) {
    mySupports(skip: $skip, take: $take, orderBy: $orderBy, where: $where) {
      category
      message
      id
      updatedAt
    }
    supportAggregate(SupportWhereInput: $where) {
      count
    }
  }
`

/**
 * __useMySupportsQuery__
 *
 * To run a query within a React component, call `useMySupportsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMySupportsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMySupportsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      orderBy: // value for 'orderBy'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMySupportsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MySupportsQuery,
    MySupportsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MySupportsQuery, MySupportsQueryVariables>(
    MySupportsDocument,
    options
  )
}
export function useMySupportsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MySupportsQuery,
    MySupportsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MySupportsQuery, MySupportsQueryVariables>(
    MySupportsDocument,
    options
  )
}
export type MySupportsQueryHookResult = ReturnType<typeof useMySupportsQuery>
export type MySupportsLazyQueryHookResult = ReturnType<
  typeof useMySupportsLazyQuery
>
export type MySupportsQueryResult = Apollo.QueryResult<
  MySupportsQuery,
  MySupportsQueryVariables
>
export const InsertUserProductsOneDocument = /*#__PURE__*/ gql`
  mutation InsertUserProductsOne(
    $createUserProductInput: CreateUserProductInput!
  ) {
    createUserProduct(createUserProductInput: $createUserProductInput) {
      createdAt
      id
      pid
      status
      uid
      updatedAt
    }
  }
`
export type InsertUserProductsOneMutationFn = Apollo.MutationFunction<
  InsertUserProductsOneMutation,
  InsertUserProductsOneMutationVariables
>

/**
 * __useInsertUserProductsOneMutation__
 *
 * To run a mutation, you first call `useInsertUserProductsOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserProductsOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserProductsOneMutation, { data, loading, error }] = useInsertUserProductsOneMutation({
 *   variables: {
 *      createUserProductInput: // value for 'createUserProductInput'
 *   },
 * });
 */
export function useInsertUserProductsOneMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertUserProductsOneMutation,
    InsertUserProductsOneMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    InsertUserProductsOneMutation,
    InsertUserProductsOneMutationVariables
  >(InsertUserProductsOneDocument, options)
}
export type InsertUserProductsOneMutationHookResult = ReturnType<
  typeof useInsertUserProductsOneMutation
>
export type InsertUserProductsOneMutationResult =
  Apollo.MutationResult<InsertUserProductsOneMutation>
export type InsertUserProductsOneMutationOptions = Apollo.BaseMutationOptions<
  InsertUserProductsOneMutation,
  InsertUserProductsOneMutationVariables
>
export const InsertProductViewDocument = /*#__PURE__*/ gql`
  mutation InsertProductView($uid: String!, $pid: Int!) {
    createView(createViewInput: { pid: $pid, uid: $uid }) {
      pid
      uid
      createdAt
      updatedAt
      id
    }
  }
`
export type InsertProductViewMutationFn = Apollo.MutationFunction<
  InsertProductViewMutation,
  InsertProductViewMutationVariables
>

/**
 * __useInsertProductViewMutation__
 *
 * To run a mutation, you first call `useInsertProductViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertProductViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertProductViewMutation, { data, loading, error }] = useInsertProductViewMutation({
 *   variables: {
 *      uid: // value for 'uid'
 *      pid: // value for 'pid'
 *   },
 * });
 */
export function useInsertProductViewMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertProductViewMutation,
    InsertProductViewMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    InsertProductViewMutation,
    InsertProductViewMutationVariables
  >(InsertProductViewDocument, options)
}
export type InsertProductViewMutationHookResult = ReturnType<
  typeof useInsertProductViewMutation
>
export type InsertProductViewMutationResult =
  Apollo.MutationResult<InsertProductViewMutation>
export type InsertProductViewMutationOptions = Apollo.BaseMutationOptions<
  InsertProductViewMutation,
  InsertProductViewMutationVariables
>
export const PostNewProductDocument = /*#__PURE__*/ gql`
  mutation PostNewProduct($createProductInput: CreateProductInput!) {
    createProduct(createProductInput: $createProductInput) {
      category
      createdAt
      id
      discount
      images
      name
      price
      oldPrice
      description
    }
  }
`
export type PostNewProductMutationFn = Apollo.MutationFunction<
  PostNewProductMutation,
  PostNewProductMutationVariables
>

/**
 * __usePostNewProductMutation__
 *
 * To run a mutation, you first call `usePostNewProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostNewProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postNewProductMutation, { data, loading, error }] = usePostNewProductMutation({
 *   variables: {
 *      createProductInput: // value for 'createProductInput'
 *   },
 * });
 */
export function usePostNewProductMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PostNewProductMutation,
    PostNewProductMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    PostNewProductMutation,
    PostNewProductMutationVariables
  >(PostNewProductDocument, options)
}
export type PostNewProductMutationHookResult = ReturnType<
  typeof usePostNewProductMutation
>
export type PostNewProductMutationResult =
  Apollo.MutationResult<PostNewProductMutation>
export type PostNewProductMutationOptions = Apollo.BaseMutationOptions<
  PostNewProductMutation,
  PostNewProductMutationVariables
>
export const InsertSupportDocument = /*#__PURE__*/ gql`
  mutation InsertSupport($createSupportInput: CreateSupportInput!) {
    createSupport(createSupportInput: $createSupportInput) {
      updatedAt
      uid
      location
      message
      id
      createdAt
      category
    }
  }
`
export type InsertSupportMutationFn = Apollo.MutationFunction<
  InsertSupportMutation,
  InsertSupportMutationVariables
>

/**
 * __useInsertSupportMutation__
 *
 * To run a mutation, you first call `useInsertSupportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertSupportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertSupportMutation, { data, loading, error }] = useInsertSupportMutation({
 *   variables: {
 *      createSupportInput: // value for 'createSupportInput'
 *   },
 * });
 */
export function useInsertSupportMutation(
  baseOptions?: Apollo.MutationHookOptions<
    InsertSupportMutation,
    InsertSupportMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    InsertSupportMutation,
    InsertSupportMutationVariables
  >(InsertSupportDocument, options)
}
export type InsertSupportMutationHookResult = ReturnType<
  typeof useInsertSupportMutation
>
export type InsertSupportMutationResult =
  Apollo.MutationResult<InsertSupportMutation>
export type InsertSupportMutationOptions = Apollo.BaseMutationOptions<
  InsertSupportMutation,
  InsertSupportMutationVariables
>
export const WhoamiDocument = /*#__PURE__*/ gql`
  query whoami {
    whoami {
      uid
      seller {
        uid
      }
    }
  }
`

/**
 * __useWhoamiQuery__
 *
 * To run a query within a React component, call `useWhoamiQuery` and pass it any options that fit your needs.
 * When your component renders, `useWhoamiQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWhoamiQuery({
 *   variables: {
 *   },
 * });
 */
export function useWhoamiQuery(
  baseOptions?: Apollo.QueryHookOptions<WhoamiQuery, WhoamiQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<WhoamiQuery, WhoamiQueryVariables>(
    WhoamiDocument,
    options
  )
}
export function useWhoamiLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<WhoamiQuery, WhoamiQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<WhoamiQuery, WhoamiQueryVariables>(
    WhoamiDocument,
    options
  )
}
export type WhoamiQueryHookResult = ReturnType<typeof useWhoamiQuery>
export type WhoamiLazyQueryHookResult = ReturnType<typeof useWhoamiLazyQuery>
export type WhoamiQueryResult = Apollo.QueryResult<
  WhoamiQuery,
  WhoamiQueryVariables
>
export const CreateSellerDocument = /*#__PURE__*/ gql`
  mutation createSeller($createSellerInput: CreateSellerInput!) {
    createSeller(createSellerInput: $createSellerInput) {
      uid
    }
  }
`
export type CreateSellerMutationFn = Apollo.MutationFunction<
  CreateSellerMutation,
  CreateSellerMutationVariables
>

/**
 * __useCreateSellerMutation__
 *
 * To run a mutation, you first call `useCreateSellerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSellerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSellerMutation, { data, loading, error }] = useCreateSellerMutation({
 *   variables: {
 *      createSellerInput: // value for 'createSellerInput'
 *   },
 * });
 */
export function useCreateSellerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSellerMutation,
    CreateSellerMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateSellerMutation,
    CreateSellerMutationVariables
  >(CreateSellerDocument, options)
}
export type CreateSellerMutationHookResult = ReturnType<
  typeof useCreateSellerMutation
>
export type CreateSellerMutationResult =
  Apollo.MutationResult<CreateSellerMutation>
export type CreateSellerMutationOptions = Apollo.BaseMutationOptions<
  CreateSellerMutation,
  CreateSellerMutationVariables
>
