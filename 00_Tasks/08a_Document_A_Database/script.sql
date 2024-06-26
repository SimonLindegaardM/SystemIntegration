USE [OrderServiceDB]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[OrderItems](
    [OrderItemID] [int] IDENTITY(1,1) NOT NULL,
    [Quantity] [int] NULL,
    [Price] [decimal](10, 2) NULL,
    [OrderID] [int] NULL,
    [ProductID] [int] NULL,
    [DeletedAt] [datetime] NULL,
    PRIMARY KEY CLUSTERED 
    (
        [OrderItemID] ASC
    )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[OrderTables](
    [OrderID] [int] IDENTITY(1,1) NOT NULL,
    [OrderDate] [datetime] NULL,
    [TotalAmount] [decimal](10, 2) NULL,
    [CustomerID] [int] NULL,
    [DeliveryAddressID] [int] NULL,
    [DeletedAt] [datetime] NULL,
    PRIMARY KEY CLUSTERED 
    (
        [OrderID] ASC
    )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[OrderItems]  WITH CHECK ADD FOREIGN KEY([OrderID])
REFERENCES [dbo].[OrderTables] ([OrderID])
GO
