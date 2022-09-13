---
title: Insert Column and Insert Measures
sidebar_position: 7
slug: insert-column-and-insert-measures
---

# Insert Column and Insert Measures

Inforiver is a powerful data manipulation and reporting tool that allows you to quickly and easily insert columns or measures into your data set.

Insert columns outside the hierarchy to perform calculations.

In insert Measure : Add columns that are repeated for every hierarchy level.

![Untitled](/img/VisualCalculations/Column/column1.png)

<aside>
**💡 Note:** To insert a column, you must have a field added to the “Columns” section in the visual.

</aside>

### Quick Formula

Quick Formula lets you create new measures and formulas using calculations and functions which can be based on existing columns or measures.

- Select the **Insert** tab from the toolbar, and select **Quick Formula** from the ribbon.
- Select inputs from the dropdown.
    
    ![Untitled](/img/VisualCalculations/Column/column2.png)

- Select the **Insert** tab from the toolbar, select **Quick formula** from the ribbon.
- Choose one from the following quick calculations available:
    - **Running total** – Creates a running total for any measure (from data source or the inserted measures)
    
    ![Running Total Measure Side Panel](/img/VisualCalculations/Column/column3.png)

    Running Total Measure Side Panel
    

![Running Total Measure Inserted](/img/VisualCalculations/Column/column4.png)

Running Total Measure Inserted

- **% Cont to Parent** – Shows the contribution of the Child Node to the Parent Total for the selected measure with an option to show as Progress Bar
    
    ![% Cont to Parent Side Panel](/img/VisualCalculations/Column/column5.png)
    
    % Cont to Parent Side Panel
    
    ![% Cont to Parent inserted with the bar chart](/img/VisualCalculations/Column/column6.png)

    % Cont to Parent inserted with the bar chart
    
    - **% Cont. to Grand Total** – Shows the Contribution of child to the Grand Total for the selected measure with an option to show as Progress Bar
    
    ![% Cont to Grand Total Side Panel](/img/VisualCalculations/Column/column7.png)

    % Cont to Grand Total Side Panel
    
    ![% Cont GT Measure with Progress Bar](/img/VisualCalculations/Column/column8.png)   

    % Cont GT Measure with Progress Bar
    
    - **Lead/Lag** – Create a measure based on an offset that is given either to lead or lag
    
    ![Lead/Lag  measure Side Panel]((/img/VisualCalculations/Column/column9.png)
    
    Lead/Lag  measure Side Panel
    
    ![Lead Measure inserted](/img/VisualCalculations/Column/column10.png)
    
    Lead Measure inserted
    
    - **Overall Rank Measure**: Choose the **Overall rank measure** from the dropdown on the Quick formula to insert the ranking for the entire matrix.
    
    ![Overall rank measure side panel](/img/VisualCalculations/Column/column11.png)
    
    Overall rank measure side panel
    
    ![Over all Rank Measure inserted](/img/VisualCalculations/Column/column12.png)

    Over all Rank Measure inserted
    
    - **Ranking Within Group**:  Choose Ranking within the group from the dropdown on Quick formula to insert the ranking for the values only inside the group.
    
    ![Rank Measure inserted](/img/VisualCalculations/Column/column13.png)
    
    Rank Measure inserted
    

![Rank measure Side Panel](/img/VisualCalculations/Column/column14.png)

Rank measure Side Panel

## Insert Formula

Formula Measure lets you create new measures using calculations and functions which can be based on existing columns or measures.

Consider the example of adding a Forecast based on Actuals and Growth value:

- Select the **Insert** tab, and select **Insert Formula** from the ribbon bar.
- Enter title name
- Select Visual Measure or Visual Column
    
    ![Untitled](/img/VisualCalculations/Column/column15.png)

    ![Untitled](/img/VisualCalculations/Column/column16.png)
    
- Select **Formula** from the dropdown
- Select row aggression type from the dropdown
- Enter description as required
- Click Create
    
    ![Enter Formula and create Visual Measure](/img/VisualCalculations/Column/column17.png)
    
    Enter Formula and create Visual Measure
    
    ![Enter Formula and create Visual Column](/img/VisualCalculations/Column/column18.png)
    
    Enter Formula and create Visual Column
    

### Blend

It merges or blends the selected measures. 

- Select the **Insert** tab, select **Blend** from the ribbon
- Enter title
- Select measure 1 and measure 2 columns to blend together
- You can select the option to blend vertically or horizontally
    
    ![Blend 2 columns in vertical directions](/img/VisualCalculations/Column/column19.png)
    
    Blend 2 columns in vertical directions
    

### Simulate

- In the **Insert** tab, select **Simulate** from the ribbon
- Enter title name
- Choose whether to insert it as a visual measure or visual column
- You can insert Simulation fields based on measures to perform analysis.
    
    ![Insert simulation ](/img/VisualCalculations/Column/column20.png)
    
    Insert simulation 
    

### Manual Input

- In the **Insert** tab, select **Manual Input** from the ribbon bar, side pan opens.
- Enter title
- Choose whether to insert it as a visual measure or visual column
- Select Input Type from the drop-down
- Select sum aggregation from the drop-down
- Check the box to distribute the parent value to children
    
    ![Untitled](/img/VisualCalculations/Column/column21.png)

- Values can be added manually to the cell.
- Add value to total or subtotal then select for distribution.
- You can find the tab next to the value to distribute value equally to parent and child with options to distribute to rows
- Values can be distributed in all the below ways
    - Distribute to rows: Either Equally or you can also customise the value
    - Distribute to rows by weights of: With reference to the category
        
        ![Distribute value to rows]((/img/VisualCalculations/Column/column22.png)
        
        Distribute value to rows
        
        ![Distribute value to rows by weights of category](/img/VisualCalculations/Column/column23.png)  
        Distribute value to rows by weights of category
        

### Manage

- To view/edit existing measures/columns, choose to **Manage** under the ribbon. You can update the properties such as name, formula etc
- To delete the inserted measure, click on the Delete icon from the Inserted Measures screen on the right.
- Another way to delete the inserted measure is to choose “Delete Column” from the menu near the column.
- To hide the inserted measure, switch off the measure from the Inserted Measures screen on the right.
    
    ![Manage Insert Columns and Measures](/img/VisualCalculations/Column/column24.png)
    
    Manage Insert Columns and Measures