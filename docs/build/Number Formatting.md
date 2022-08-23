---
title: Number Formatting
sidebar_position: 4
slug: number-formatting
---



Inforiver allows formatting numbers/measures for the entire visual, cell, row or column level. You can do the following as part of the number formatting:

- [Quick Format](/Number Formatting.md)

- [Add Prefix and Suffix](/Number Formatting.md)

- [Increase/Decrease Decimal Points](/Number Formatting.md)

- [Percent Style %](/Number Formatting.md)



:::tip

Refer to the other number settings [here](/Display Settings - Numbers.md).

:::


## Related Links

[link_to_page](/Setup a Navigation Layout.md)

[link_to_page](/Setup a Navigation Layout.md)

[link_to_page](/Setup a Navigation Layout.md)

[link_to_page](/Setup a Navigation Layout.md)

[link_to_page](/Setup a Navigation Layout.md)




## **Quick Format**


Different kinds of formats are –

- [Uniform](1ee72b10702d430b8b6a4ee3b315a302#bd5e9855ff164ad3a343875cd01216ad)
- [Measure Level](1ee72b10702d430b8b6a4ee3b315a302#624b4206e0904c69a374ac2dd656af72)
- [Auto](1ee72b10702d430b8b6a4ee3b315a302#2e231b82381346e19e22d2f4bda2cfd1)
- [Native](1ee72b10702d430b8b6a4ee3b315a302#054841f8e5ea43c2a1db093e541e409d)

### 1. **Uniform**


To apply the universal format to numbers, follow these steps –

- In **Home** tab, under Number, click on the **Quick format** drop-down, select **Uniform**.
- Click the right arrow to select the scale you want to apply.
- By default in auto, the numbers are in Millions

	![Uniform number format with Auto Scale](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/73a4c029-671e-4cdb-a11d-977d11f7074f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105401Z&X-Amz-Expires=3600&X-Amz-Signature=7604da4a53c3f4449692e135e53ae50e2e5dbd82bb3182d18b23b4bb61233ad3&X-Amz-SignedHeaders=host&x-id=GetObject)


	![Scaling appears in Header](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fd6411b5-2638-4146-9d5a-eedbca5bf0f4/Uniform_Million_Final.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105401Z&X-Amz-Expires=3600&X-Amz-Signature=b61a57d34318f9093302a62aae89dca273b21cb7e7e267645956525ed2154fbe&X-Amz-SignedHeaders=host&x-id=GetObject)


### 2. **Measure Level**


To apply format at the measure level, follow these steps –

- In Home tab, under Number, click on **the Quick format** drop-down, and select **Measure level**.
- To apply the desired scale to a measure, select the column, click on the Quick format drop-down, and select the scale of choice.

	Measure level format is generally used in reports where there are measures of varying number scale. For example, in a sales report, you want to show Sales as well as Shipment data. Generally, sales data will have values in millions and Shipments in thousands. So, these numbers are better represented if the formats are different for these data.

- **To apply measure level**
	- Select the Measure level format from the Quick format
	- by default, all the measures are in millions
	- select the column that measures need to change
	- and select a new format by clicking on Quick format

![Measure Level Number Format](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5bf86121-da88-4f68-ae61-8ea0a7a3a670/Measure_Level_Forma.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105402Z&X-Amz-Expires=3600&X-Amz-Signature=a77a05f0d48567a35fc91e17e75dee993496e6c85db2c04b7276b3a7c6e83a3d&X-Amz-SignedHeaders=host&x-id=GetObject)

![Scaling set to Thousands for selected cell](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f8f164fc-3154-4c3e-9181-e5fa080b1cde/Scaling_Options.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105403Z&X-Amz-Expires=3600&X-Amz-Signature=6700cce10e0fc0cabad9496971e769f7b722b5ba1494f20c1bd2e64e6d186f3d&X-Amz-SignedHeaders=host&x-id=GetObject)

![Scaling appears under each column header](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b9eccf61-9f4c-4f33-82ca-d1bc682ca5c5/image21.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105403Z&X-Amz-Expires=3600&X-Amz-Signature=f1f0a79f57b73c9a66f3dd30d2435666ab714bcd312d60ecc6ee0446b55a3ea1&X-Amz-SignedHeaders=host&x-id=GetObject)


### 3. **Auto**


To apply format at **individual level**, follow these steps –

- In **Home** tab, under Number, click on the **Quick format** drop-down, and select **Auto**.
- To apply the desired scale, select the column, click on the Quick format drop-down, and select the scale of choice.On applying Auto format, the scales will appear as labels.
	- **How to apply Auto**
		- Select Auto mode
		- Select unit type for display
		- Select column for changing the format type and click on Quick format
		- Apply required format

![Auto format to change number format in each cell](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/59f43442-5175-4305-b4a8-391860ce1c45/Auto_Format.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105405Z&X-Amz-Expires=3600&X-Amz-Signature=3cf26ec6b700a97de5e628ad9d18c2a0348677aada798baadcea1ef31c53ac47&X-Amz-SignedHeaders=host&x-id=GetObject)

![Scaling set to Thousands for selected cell](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f8f164fc-3154-4c3e-9181-e5fa080b1cde/Scaling_Options.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105405Z&X-Amz-Expires=3600&X-Amz-Signature=b2ee0134e13394634ce5f2805fdd3063add22533c83581e8a53faa6e9b1f6d09&X-Amz-SignedHeaders=host&x-id=GetObject)



![Scaling label appears on each cell value](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1ceff2e5-2976-4b0a-9655-0994ddd81580/image23.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105405Z&X-Amz-Expires=3600&X-Amz-Signature=4f0dbf12f1c492554b33532ad559667e25199994feaf066914d074f510dc4104&X-Amz-SignedHeaders=host&x-id=GetObject)


You can further **customize the labels** in Display –


In the **Home** tab, under Setup, click on **Display**. This will launch a side panel.

- In Display, under **Numbers**, turn on the **unit label**.
- Under Short text, enter the text of your choice.

	![Customize Scaling unit labels (short and full)](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/23071473-d6f2-40e2-aefe-14109c60eb1e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105405Z&X-Amz-Expires=3600&X-Amz-Signature=4fe705ae1edea11501c32548cc8843397cf77884da023d492dd4b44937ceb3d5&X-Amz-SignedHeaders=host&x-id=GetObject)


### 4. **Native**


If you want to retain the format from Power BI. You can simply select the Native option.

- In **Home** tab, under Number, click on **Quick format** drop down, and select **Native**.

	![Native format to retain PowerBI number format](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0afb3c13-9d39-4c21-9759-91a2ff144cfa/Native_Format.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105406Z&X-Amz-Expires=3600&X-Amz-Signature=74df68bf19a9b81d80a260455e977bcd0e29d3f05883b04671767b6082156a18&X-Amz-SignedHeaders=host&x-id=GetObject)


	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fc8505b5-3d22-42cb-bdde-2275ce5bf805/Screenshot_2022-05-23_at_6.32.42_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105406Z&X-Amz-Expires=3600&X-Amz-Signature=e042790a81e195120fdd4df6b268e9a1212da9682ecc39aec60cf78b6c366979&X-Amz-SignedHeaders=host&x-id=GetObject)


## **Prefix/Suffix**


In financial and performance reports we generally see currency and % symbols. Inforiver brings us the options to add prefix as well as suffix. 


To add prefix/ suffix  –

- Select row/column/cell for which you want to apply prefix/suffix.
- In **Home** tab, under Number, click on Insert a **Prefix or Suffix**. A Prefix/Suffix box will pop out.

	![Prefix/Suffix Icon](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b2912be7-f783-4b30-bf79-51f91ddd7524/Prefix_and_Suffix.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105406Z&X-Amz-Expires=3600&X-Amz-Signature=a0bcfa4c282b8d0287d89dbfbcc590b0619624648e4746dae47137d3985ea398&X-Amz-SignedHeaders=host&x-id=GetObject)

- In the box under **Value prefix** enter you desired prefix. For example, enter $.

	Similarly, in **Value suffix** enter the desired sign.


	![Prefix and Suffix Box](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ec1aa757-5a69-46b6-816c-87e728557b9b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105407Z&X-Amz-Expires=3600&X-Amz-Signature=88ebcefe7e420bb3f9f78996fa351f1821ee69e2aa59c5c760ec68b251cc9ec6&X-Amz-SignedHeaders=host&x-id=GetObject)


	![Rows with $ prefix](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ca4cbec6-ae56-416a-a40d-7fe69b092a6f/Prefix_Income_Statement.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105407Z&X-Amz-Expires=3600&X-Amz-Signature=7b36689cbc6354f5eb104db27ae87d8da6fdc6fbab7f1fb4f0a09b1779af5013&X-Amz-SignedHeaders=host&x-id=GetObject)


## **Increase/decrease decimal**


You can format your values by increasing/decreasing the decimal. To do this follow these steps –

- In **Home** tab, under Number, click on **Increase/decrease decimal**. This will increase/decrease the decimal of all the values.
- If you want to edit specific values - first select row/column/cell which contains the values you want to format, and then click on click on Increase/decrease decimal.

	![Increase and Decrease Decimal Icons](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/90d4dee2-56ca-4e25-84ca-ac83dbaba961/Decimal_point.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105407Z&X-Amz-Expires=3600&X-Amz-Signature=6b62aa6a38f58d9963e39dde8fd8deba2051b9341f4f6ccb64dba9962ceb710c&X-Amz-SignedHeaders=host&x-id=GetObject)


## **Percent Style (%)**


Percent style displays values as percentages by multiplying the values by 100 and adding % a suffix to the percentage values.


This is a feature that is commonly used while inserting calculated rows or columns. 


To apply percent style, follow these steps –

- Select the row/column/cell you want to apply the percent style
- In **Home** tab, under Number, click on **Percent style (%)**

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d295ad70-64a6-4c1e-bb7c-1d6834c683bf/Percent.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105408Z&X-Amz-Expires=3600&X-Amz-Signature=51e83b9b94a9c58124b6caa38acbdefd345ac807c41aa2c1434bf870622f7040&X-Amz-SignedHeaders=host&x-id=GetObject)


For example, lets calculate gross margin % in Inforiver.

- Insert a calculated row and enter this formula ([See Insert Row](3834259f8c974cbb9a6f916294afae67))

	Gross Margin % = (Net Revenue - Cost of goods sold)/ Net Revenue.


	![Before applying Percentage](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/73de0d42-89ba-487b-87cf-fca089732e99/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105408Z&X-Amz-Expires=3600&X-Amz-Signature=c034d8ccf1b762b2e129ba2fb4a38a281db64b1efb865278323302a9e817da95&X-Amz-SignedHeaders=host&x-id=GetObject)

- Now select Gross Margin % row in the visual and click on **percent style (%)**.

	![Gross margin% Row converted to Percentage Value](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/6353a06d-cb73-45b9-9a74-6566da7b3999/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105408Z&X-Amz-Expires=3600&X-Amz-Signature=3dedfdd1d52e591da83ac39bede28622d85da22b5c5a33e7708644d954f9ef83&X-Amz-SignedHeaders=host&x-id=GetObject)

