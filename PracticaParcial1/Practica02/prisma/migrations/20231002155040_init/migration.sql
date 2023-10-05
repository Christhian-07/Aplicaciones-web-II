/*==============================================================*/
/* Table: CATEGORIES                                            */
/*==============================================================*/
create table CATEGORIES (
   ID_CAT               NUMERIC              not null,
   NAME                 VARCHAR(500)         null,
   DESCRIPTION          VARCHAR(500)         null,
   constraint PK_CATEGORIES primary key (ID_CAT)
);

/*==============================================================*/
/* Index: CATEGORIES_PK                                         */
/*==============================================================*/
create unique index CATEGORIES_PK on CATEGORIES (
ID_CAT
);

/*==============================================================*/
/* Table: PRODUCT                                               */
/*==============================================================*/
create table PRODUCT (
   ID_PRODUCT           NUMERIC              not null,
   ID_CAT               NUMERIC              null,
   NAME                 VARCHAR(500)         null,
   DESCRIPTION          VARCHAR(500)         null,
   PRICE                VARCHAR(500)         null,
   DATE_DESCRIPTION     VARCHAR(500)         null,
   DATE_UPDATE          VARCHAR(500)         null,
   SERVICE              BOOL                 null,
   constraint PK_PRODUCT primary key (ID_PRODUCT)
);

/*==============================================================*/
/* Index: PRODUCT_PK                                            */
/*==============================================================*/
create unique index PRODUCT_PK on PRODUCT (
ID_PRODUCT
);

/*==============================================================*/
/* Index: TIENE_FK                                              */
/*==============================================================*/
create  index TIENE_FK on PRODUCT (
ID_CAT
);

/*==============================================================*/
/* Table: SERVICES                                              */
/*==============================================================*/
create table SERVICES (
   ID_SERVICE           INT4                 not null,
   ID_PRODUCT           NUMERIC              null,
   DATE_START           DATE                 null,
   DATE_END             DATE                 null,
   constraint PK_SERVICES primary key (ID_SERVICE)
);

/*==============================================================*/
/* Index: SERVICES_PK                                           */
/*==============================================================*/
create unique index SERVICES_PK on SERVICES (
ID_SERVICE
);

/*==============================================================*/
/* Index: POSEE_FK                                              */
/*==============================================================*/
create  index POSEE_FK on SERVICES (
ID_PRODUCT
);

alter table PRODUCT
   add constraint FK_PRODUCT_TIENE_CATEGORI foreign key (ID_CAT)
      references CATEGORIES (ID_CAT)
      on delete restrict on update restrict;

alter table SERVICES
   add constraint FK_SERVICES_POSEE_PRODUCT foreign key (ID_PRODUCT)
      references PRODUCT (ID_PRODUCT)
      on delete restrict on update restrict;
