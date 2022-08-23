---
title: Insert row
sidebar_position: 6
slug: insert-row
---



Insert rows at any required position and either input values or calculate values based on the existing measures to do better analysis.

The following are the different types of rows that can be inserted into the visual:

- [Calculated Row](/Setup a Navigation Layout.md)

- [% Contribution Row](/Setup a Navigation Layout.md)

- [Template Row](/Setup a Navigation Layout.md)

- [Static Row](/Setup a Navigation Layout.md)

This section also covers how to:

- Reorder Rows

- Expand/Collapse Rows

## Related Links












## Calculated row


Calculated rows can be used to insert rows using calculations written based on the existing rows and using different functions. Other inserted rows can be used in a new calculated row. 


Lets consider the example of calculating Gross Margin % from Gross Profit and Net Revenue. To insert such a calculated row:

- Select a row in the visual
- Select the **Insert** tab from the toolbar, select **Insert Rows**
- Select **Calculated Row** from the dropdown

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c83324ab-7c20-4e2b-9ab1-58b89210244a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105418Z&X-Amz-Expires=3600&X-Amz-Signature=a57a9eb47ca37bd3bbf9bc854d1dd57b6c9797ac983847b9723f6ad2435d090b&X-Amz-SignedHeaders=host&x-id=GetObject)

- Alternatively, click on the gripper near the row to get a menu with **Insert** and select **Add Calculated Row** from the drop down

	![Use a gripper to insert rows](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8a12d2c1-b705-4716-9a6e-c893f303abb8/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105419Z&X-Amz-Expires=3600&X-Amz-Signature=d81f66b07e19f6d1358d73db35d5c727a587e90b9a5057c8d5cd83bd77a6a967&X-Amz-SignedHeaders=host&x-id=GetObject)

- Give an appropriate name and the required formula in the Calculated Row side panel on the right.
	1. The list of available fields and functions is prompted which can be used to write the formula on clicking the formula box.
	2. Start typing into the formula box and the appropriate field or function is auto-completed.
	3. Use the **dot** operator to select the next hierarchy level.
	4. Select the required field directly from the visual to insert into the formula.
- To include the row in total value, check the **Include in Total** box.
- Add a description for the formula if needed and click on **Create.**

	![Insert Row side panel](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/81093881-8104-4bad-b09d-c52cb07d87ab/Screenshot_2022-06-06_at_2.47.25_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105419Z&X-Amz-Expires=3600&X-Amz-Signature=ecf7dcdb87f238c12d08c0f0e62ea779c7f0cdec8fc48cadd69ce9acd9c41ecd&X-Amz-SignedHeaders=host&x-id=GetObject)


	[image](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d48a7f18-c43c-4a2f-a1ec-641c769266f4/Screen_Recording_2022-06-17_at_5.30.34_PM.mov?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105419Z&X-Amz-Expires=3600&X-Amz-Signature=83808c6a6254e511d19b334faae0efa1ac78e4669ff1703e339717121b16e1db&X-Amz-SignedHeaders=host&x-id=GetObject)

- To view the list of inserted rows, select the **Manage** tab in the Row. Tab opens in the right corner.

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/92f14265-64a0-4650-9b65-44d499ca31aa/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105420Z&X-Amz-Expires=3600&X-Amz-Signature=f016e758c04194850cc24386030677e0f5634f289567dc38a30b0b92aeb74ba6&X-Amz-SignedHeaders=host&x-id=GetObject)

- To edit the inserted row, click on the Edit icon from the Inserted Rows screen on the right. Or an edit icon is also available near the row name.
- To delete the inserted row, click on the Delete icon from the Inserted Rows screen on the right.
- To hide the inserted row, switch off the row from the Inserted Rows screen on the right.

	![Edit, Delete, Hide Inserted Rows](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bc7ed7df-50ab-4013-a1f2-f0e12f676afd/Screenshot_2022-06-06_at_4.35.38_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105420Z&X-Amz-Expires=3600&X-Amz-Signature=e6a83427dda6be32f8c4079a4142d67ff9ea1465f82b3f3018bcedebcb5a83e0&X-Amz-SignedHeaders=host&x-id=GetObject)


## % Contribution row


% Contribution Row gives the contribution of a row to its Parent total. 


Let's consider the example of the contribution of IT Expenses to the Total Expenses of a company. To insert a % Contribution row:

- Select a row in the visual.
- Select the **Insert** tab from the toolbar, and select **Insert Rows**.
- Select **% Contribution Row** from the drop down.

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7c99e00b-958b-479b-a41d-1cf3a1050282/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105421Z&X-Amz-Expires=3600&X-Amz-Signature=28264f5727c39564ff014ab6f125eb5979c72b6e68535a9f9851a62d680c2063&X-Amz-SignedHeaders=host&x-id=GetObject)

- Alternatively, click on the dots near the row to get a menu with **Insert Row** and select **Add % Contribution Row** from the drop down.

	![Use gripper to insert rows](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9210a2ee-a0c3-43a3-ae9d-1aa1c6ac61f5/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105421Z&X-Amz-Expires=3600&X-Amz-Signature=5f4cb6698dd75a49b096e74d5ca5bd842e72c1fe0be3bbb01eb9ef6195911bbb&X-Amz-SignedHeaders=host&x-id=GetObject)

- The % contribution row gets added to the visual.

	![% Contribution row inserted](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/58ec1985-add5-4ad3-835f-c9c966387f46/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105421Z&X-Amz-Expires=3600&X-Amz-Signature=71e6e4757a022e51ff5087fd22fa95ed2ae56aaf23608faaab16108cc906484c&X-Amz-SignedHeaders=host&x-id=GetObject)

- To delete the inserted row, click on the Delete icon from the Inserted Rows screen on the right.
- To hide the inserted row, switch off the row from the Inserted Rows screen on the right.

## Template row


Template Row is a calculated row which repeats for each group in the hierarchy level.


Let's consider an example of finding the difference between products under each region. To insert a template row:

- Select a row in the visual.
- Select the **Insert** tab from the toolbar, and select **Insert Rows.**
- Select **Template Row** from the drop down

	![Select total/subtotal to enable template row](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/18b57c3e-5793-42b0-8249-ab733379ba2a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105422Z&X-Amz-Expires=3600&X-Amz-Signature=ed71d82383f15b0d5d4fdb16607f2a56afde9505b80a95f26a36159bde212a31&X-Amz-SignedHeaders=host&x-id=GetObject)

- Give an appropriate name and the required formula in the Template Row side panel on the right.
- The list of available fields is prompted which can be used to write the formula or select the required field directly from the visual to insert into the formula.
- Select “Apply the same formatting for all rows” so that when you change the formatting for one of the template rows it changes for all template rows.
- To include the row in the total value, check the “Include in Total” box
- Add a description for the formula if needed

	![Template Row Side panel](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a7ab9ab4-b02c-4dd6-a60d-349aae3fe253/Screenshot_2022-06-06_at_5.08.31_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105422Z&X-Amz-Expires=3600&X-Amz-Signature=79fa7195bc534d18dcd724d9edd429df243450e6a3c763f607087e0e3efa9034&X-Amz-SignedHeaders=host&x-id=GetObject)


	![Template row inserted](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c7640487-8215-427f-8791-d9a26abf816f/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105422Z&X-Amz-Expires=3600&X-Amz-Signature=d54c3a155b167585ea4af39f28da0f31a51d85dc112b5a99e1a7388913b6d29c&X-Amz-SignedHeaders=host&x-id=GetObject)

- To view the list of inserted rows, select the Manage tab from the Insert Rows

	![Inserted rows management](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4344966e-3e42-44b0-8c31-d71fee332aee/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105423Z&X-Amz-Expires=3600&X-Amz-Signature=0a7b618c5db06f1e4f4e1554ea428a37a4cdbe7bba6dda3fe34405a3418c0d1a&X-Amz-SignedHeaders=host&x-id=GetObject)


	![Edit, Delete, Hide inserted rows](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/90596b15-2c2a-4be1-8391-4a74a0f0c867/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105423Z&X-Amz-Expires=3600&X-Amz-Signature=05b3e3ffdddc77ec0de101495f6a0a7acdbd5ed332bbf913b73c10be8c6eb8bd&X-Amz-SignedHeaders=host&x-id=GetObject)

- To edit the inserted row, click on the Edit icon from the Inserted Rows screen on the right
- To delete the inserted row, click on the Delete icon from the Inserted Rows screen on the right.
- To hide the inserted row, switch off the row from the Inserted Rows screen on the right.

## Static row


Static rows can be used to directly input numbers in the visual.


Let's consider the example of adding a static row to display the Miscellaneous expenses in a financial statement. To insert such a row:

- Select a row in the visual.
- Select the **Insert** tab from the toolbar, and select **Insert Rows.**
- Select **Static Row** from the drop down

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9fd53b4c-9f1e-401d-84ca-649af2a3febe/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105423Z&X-Amz-Expires=3600&X-Amz-Signature=aee15f1a3426fced8c4bf4cfbd86a53e4eac824595b681d6437b81683f8033f3&X-Amz-SignedHeaders=host&x-id=GetObject)

- Alternatively, click on the gripper near the row to get a menu with **Insert Row** and select **Add Static Row** from the drop down.

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/120d2fd5-cc99-47c3-b8bf-086449a1a771/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105424Z&X-Amz-Expires=3600&X-Amz-Signature=39684011b22b6c119ee3389a05e2ceb78578d28d9b30752dc0850ecac6055602&X-Amz-SignedHeaders=host&x-id=GetObject)

- Give the required name in the Static Row side panel that appears on the right.

	![Static row side panel](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/500afd90-78b0-43f2-9f2b-466ff4f77ae8/Insert_Static_Row_Side_Panel.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105424Z&X-Amz-Expires=3600&X-Amz-Signature=870f6bf852127562c0e3be8d1ef8529af0327b6d80f1329a64a69910c9a190a0&X-Amz-SignedHeaders=host&x-id=GetObject)

- To include the new static row in total, choose **Include in Total** and click on **Create** to create the static row.
- In the visual, enter the values for the row by navigating to the cells using the arrow keys

	![Enter values into inserted static row](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/404fde87-ba02-45c1-b2cb-8651c7ad126b/Insert_Static_Row_values.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105424Z&X-Amz-Expires=3600&X-Amz-Signature=ad84df3f76d7ebdebb2053548f5d5e525ea113105ccebb9360eb1772081a9f35&X-Amz-SignedHeaders=host&x-id=GetObject)

- To view/edit inserted rows, choose **Manage tab** in Insert rows

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f465672d-8739-423f-96e6-3acae6adfe23/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105425Z&X-Amz-Expires=3600&X-Amz-Signature=93abc8030d06075af5458e77d97420a3ab0c607bfef5faf5ba410928e7c0ead4&X-Amz-SignedHeaders=host&x-id=GetObject)


	![Edit, delete and hide rows](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/26a21c70-7b17-4811-8299-5af689642bd6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105425Z&X-Amz-Expires=3600&X-Amz-Signature=ce0bd15dbae80054cb0af5a86a2410854aa6a403285f308b589f06dfa6c69bb4&X-Amz-SignedHeaders=host&x-id=GetObject)

- To delete the inserted row, click on the Delete icon from the Inserted Rows screen on the right.
- To hide the inserted row, switch off the row from the Inserted Rows screen on the right.

### Reorder Rows


Reorder the rows from data source or the inserted rows easily in the visual. This allows to sort or arrange the rows according to the requirement without the need for any extra sorting key. 


To reorder the rows, drag the gripper on the left side corner of the rows and drop the row where needed. The rows can be rearranged only in the same hierarchy level. 


	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/98ed436e-57d0-4eeb-96f2-1d114395b376/Reorder_Rows_Gripper.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105425Z&X-Amz-Expires=3600&X-Amz-Signature=c643abb96fb03d513e8fcbe19d414b9135e5c513d4d2db4e9afdc2b8b7fd449d&X-Amz-SignedHeaders=host&x-id=GetObject)


### Expand and Collapse Rows


When using Hierarchy Navigation type, on clicking the gripper on the left of the row gives a menu with options to expand and collapse.


You can expand/collapse the fields to:

- All - All the nodes are expanded or collapsed in one click
- Level - Expand/Collapse that particular hierarchy level
- Specific level - Choose which level you wish to expand/ collapse

	![Expand Rows](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/14df06bd-a4b9-446d-9424-793e85dd496d/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105426Z&X-Amz-Expires=3600&X-Amz-Signature=326ca33551a16a21988713a609de5ba2d4c4810d6997b7b4fdc10046abca2c53&X-Amz-SignedHeaders=host&x-id=GetObject)


	![Collapse Rows](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f2e315f5-8047-467f-8fab-13f040d0689c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220823T105426Z&X-Amz-Expires=3600&X-Amz-Signature=27dee5209d01aece661a669b3b32ca75c78224d26618e75c489e2a9c27beea9e&X-Amz-SignedHeaders=host&x-id=GetObject)

