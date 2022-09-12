---
title: Insert row
sidebar_position: 6
slug: insert-row
---
# Insert row

Insert rows at any required position and either input values or calculate values based on the existing measures to do better analysis.

The following are the different types of rows that can be inserted into the visual:

- [Calculated Row](visual/insert-row)
- [% Contribution Row](visual/insert-row)
- [Template Row](visual/insert-row)
- [Static Row](visual/insert-row)

This section also covers how to:

- Reorder Rows
- Expand/Collapse Rows

## Related Links

[Insert Column and Insert Measures](visual/insert-column-and-insert-measures)

[Edit Cell ](visual/Editcell)

[Toggle Sign](visual/toggle-sign)

[Smart Analysis](analyze/Smartanalysis)

[Formula Syntax ](visual/formula-list)

## Calculated row

Calculated rows can be used to insert rows using calculations written based on the existing rows and using different functions. Other inserted rows can be used in a new calculated row. 

Lets consider the example of calculating Gross Margin % from Gross Profit and Net Revenue. To insert such a calculated row:

- Select a row in the visual
- Select the **Insert** tab from the toolbar, select **Insert Rows**
- Select **Calculated Row** from the dropdown
    
    ![Untitled](/img/VisualCalculations/InsertRow/row1.png)
    
- Alternatively, click on the gripper near the row to get a menu with **Insert** and select **Add Calculated Row** from the drop down
    
![Use a gripper to insert rows](/img/VisualCalculations/InsertRow/row2.png)

    
    Use a gripper to insert rows
    
- Give an appropriate name and the required formula in the Calculated Row side panel on the right.
    1. The list of available fields and functions is prompted which can be used to write the formula on clicking the formula box.
    2. Start typing into the formula box and the appropriate field or function is auto-completed.
    3. Use the **dot** operator to select the next hierarchy level.
    4. Select the required field directly from the visual to insert into the formula. 
- To include the row in total value, check the **Include in Total** box.
- Add a description for the formula if needed and click on **Create.**
    
    ![Insert Row side panel](/img/VisualCalculations/InsertRow/row3.png)
    
    Insert Row side panel
     
    

- To view the list of inserted rows, select the **Manage** tab in the Row. Tab opens in the right corner.
    
    ![Untitled](/img/VisualCalculations/InsertRow/row4.png)
    
- To edit the inserted row, click on the Edit icon from the Inserted Rows screen on the right. Or an edit icon is also available near the row name.
- To delete the inserted row, click on the Delete icon from the Inserted Rows screen on the right.
- To hide the inserted row, switch off the row from the Inserted Rows screen on the right.
    
    ![Edit, Delete, Hide Inserted Rows](/img/VisualCalculations/InsertRow/row5.png)
    
    Edit, Delete, Hide Inserted Rows
    

## % Contribution row

% Contribution Row gives the contribution of a row to its Parent total. 

Let's consider the example of the contribution of IT Expenses to the Total Expenses of a company. To insert a % Contribution row:

- Select a row in the visual.
- Select the **Insert** tab from the toolbar, and select **Insert Rows**.
- Select **% Contribution Row** from the drop down.
    
    ![Untitled](/img/VisualCalculations/InsertRow/row6.png)
    
- Alternatively, click on the dots near the row to get a menu with **Insert Row** and select **Add % Contribution Row** from the drop down.
    
    ![Use gripper to insert rows](/img/VisualCalculations/InsertRow/row7.png)
    
    Use gripper to insert rows
    
- The % contribution row gets added to the visual.
    
    ![% Contribution row inserted](/img/VisualCalculations/InsertRow/row8.png)
    
    % Contribution row inserted
    
- To delete the inserted row, click on the Delete icon from the Inserted Rows screen on the right.
- To hide the inserted row, switch off the row from the Inserted Rows screen on the right.

## Template row

Template Row is a calculated row which repeats for each group in the hierarchy level.

Let's consider an example of finding the difference between products under each region. To insert a template row:

- Select a row in the visual.
- Select the **Insert** tab from the toolbar, and select **Insert Rows.**
- Select **Template Row** from the drop down
    
    ![Select total/subtotal to enable template row](/img/VisualCalculations/InsertRow/row9.png)
    
    Select total/subtotal to enable template row
    
- Give an appropriate name and the required formula in the Template Row side panel on the right.
- The list of available fields is prompted which can be used to write the formula or select the required field directly from the visual to insert into the formula.
- Select “Apply the same formatting for all rows” so that when you change the formatting for one of the template rows it changes for all template rows.
- To include the row in the total value, check the “Include in Total” box
- Add a description for the formula if needed
    
    ![Template Row Side panel](/img/VisualCalculations/InsertRow/row10.png)
    
    Template Row Side panel
    
    ![Template row inserted](/img/VisualCalculations/InsertRow/row11.png)
    
    Template row inserted
    
- To view the list of inserted rows, select the Manage tab from the Insert Rows
    
    ![Inserted rows management](/img/VisualCalculations/InsertRow/row12.png)
    
    Inserted rows management
    
    ![Edit, Delete, Hide inserted rows](/img/VisualCalculations/InsertRow/row13.png)
    Edit, Delete, Hide inserted rows
    
- To edit the inserted row, click on the Edit icon from the Inserted Rows screen on the right
- To delete the inserted row, click on the Delete icon from the Inserted Rows screen on the right.
- To hide the inserted row, switch off the row from the Inserted Rows screen on the right.

## Static row

Static rows can be used to directly input numbers in the visual.

Let's consider the example of adding a static row to display the Miscellaneous expenses in a financial statement. To insert such a row:

- Select a row in the visual.
- Select the **Insert** tab from the toolbar, and select **Insert Rows.**
- Select **Static Row** from the drop down
    
    ![Untitled](/img/VisualCalculations/InsertRow/row14.png)
    
- Alternatively, click on the gripper near the row to get a menu with **Insert Row** and select **Add Static Row** from the drop down.
    
    ![Untitled](/img/VisualCalculations/InsertRow/row15.png)
    
- Give the required name in the Static Row side panel that appears on the right.
    
    ![Static row side panel](/img/VisualCalculations/InsertRow/row16.jpg)
    
    Static row side panel
    
- To include the new static row in total, choose **Include in Total** and click on **Create** to create the static row.
- In the visual, enter the values for the row by navigating to the cells using the arrow keys
    
    ![Enter values into inserted static row](/img/VisualCalculations/InsertRow/row17.jpg)
    
    Enter values into inserted static row
    
- To view/edit inserted rows, choose **Manage tab** in Insert rows
    
    ![Untitled](/img/VisualCalculations/InsertRow/row18.png)
    
    ![Edit, delete and hide rows](/img/VisualCalculations/InsertRow/row19.png)
    
    Edit, delete and hide rows
    
- To delete the inserted row, click on the Delete icon from the Inserted Rows screen on the right.
- To hide the inserted row, switch off the row from the Inserted Rows screen on the right.

### Reorder Rows

Reorder the rows from data source or the inserted rows easily in the visual. This allows to sort or arrange the rows according to the requirement without the need for any extra sorting key. 

To reorder the rows, drag the gripper on the left side corner of the rows and drop the row where needed. The rows can be rearranged only in the same hierarchy level. 

![Reorder Rows Gripper.jpg](/img/VisualCalculations/InsertRow/row20.jpg)

### Expand and Collapse Rows

When using Hierarchy Navigation type, on clicking the gripper on the left of the row gives a menu with options to expand and collapse.

You can expand/collapse the fields to:

- All - All the nodes are expanded or collapsed in one click
- Level - Expand/Collapse that particular hierarchy level
- Specific level - Choose which level you wish to expand/ collapse
    
    ![Expand Rows](/img/VisualCalculations/InsertRow/row21.png)
    
    Expand Rows
    
    ![Collapse Rows](/img/VisualCalculations/InsertRow/row22.png)
    
    Collapse Rows
 -->
